import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {FileUploaderService} from '../service/file-uploader.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../model/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  public newProduct: FormGroup;
  public categories: Array<string> = [
    'SIEGES(GAMME_MEDICALE)',
    'SIEGES(GAMME_24/7)',
    'SIEGES(GAMME_DESIGN)',
    'ACCESSOIRES_ERGONOMIQUES(SOURIS)',
    'ACCESSOIRES_ERGONOMIQUES(REPOSE_POIGNET)',
    'ACCESSOIRES_ERGONOMIQUES(SOURIS_CENTRALE)',
    'ACCESSOIRES_ERGONOMIQUES(SUPPORT_PC_PORTABLE)',
    'ACCESSOIRES_ERGONOMIQUES(BRAS_SUPPORT_ECRAN)',
    'ACCESSOIRES_ERGONOMIQUES(PORTE_DOCUMENT)',
    'ACCESSOIRES_ERGONOMIQUES(REPOSE_PIEDS)',
    'BUREAU_REGLABLES_EN_HAUTEUR',
    'MOBILIER_DE_BUREAU'];

  selectedFiles: FileList;
  uploadedFiles: Array<string> = [];
  progress: { percentage: number } = {percentage: 0};

  constructor(private uploadService: FileUploaderService, private fb: FormBuilder, private http: HttpClient) {
    this.createForm();
  }

  createForm() {
    this.newProduct = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      category: ['', Validators.required ],
      brand: '',
      price: ['', Validators.required ],
      principalImage: ['', Validators.required ],
      images: [this.fb.array([]), Validators.required]
    });
  }

  ngOnInit() {
  }

  selectPrincipalImage(filename: string) {
    console.log('in select')
    this.newProduct.setControl('principalImage', this.fb.control(filename));
  }


  selectFile(event) {

    if (event.target.files.length !== 0) {
      for (let i = 0; i < event.target.files.length ; i ++) {
        this.uploadService.upload(event.target.files.item(i)).subscribe((event) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
          } else if (event.type === HttpEventType.Response) {
            this.uploadedFiles.push(event.body);
            this.newProduct.setControl('images', this.fb.array(this.uploadedFiles));
          }
        });
      }
    }

  }

  onSubmit() {

    const product: Product = this.newProduct.getRawValue();

    this.http.post('/api/private/product', product).subscribe(result => {
      console.log(result);
    });

    console.log(product);


  }


}
