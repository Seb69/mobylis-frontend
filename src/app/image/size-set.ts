export class SizeSet {
  private _xsmall: string;
  private _small: string;
  private _medium: string;
  private _large: string;
  private _xlarge: string;


  get xsmall(): string {
    return this._xsmall;
  }

  set xsmall(value: string) {
    this._xsmall = value;
  }

  get small(): string {
    return this._small;
  }

  set small(value: string) {
    this._small = value;
  }

  get medium(): string {
    return this._medium;
  }

  set medium(value: string) {
    this._medium = value;
  }

  get large(): string {
    return this._large;
  }

  set large(value: string) {
    this._large = value;
  }

  get xlarge(): string {
    return this._xlarge;
  }

  set xlarge(value: string) {
    this._xlarge = value;
  }
}
