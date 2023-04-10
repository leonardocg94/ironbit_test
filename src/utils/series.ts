import { TPrimeArrData, TSeriesResponse } from "../types";

export class Series {
  private _nth: number; //posición n-ésima
  private _MAX_SIZE: number; //limite del rango de números primos
  private _isPrimeArray: TPrimeArrData[]; //arreglo de números naturales consecutivos
  private _primeArr: TPrimeArrData[]; //arreglo de números primos

  constructor(nth?: number) {
    this._nth = nth ? nth : 0;
    this._MAX_SIZE = 1000;
    this._isPrimeArray = [];
    this._primeArr = [];
    this._fillPrimeArrays();
  }
  //método que rellena un arreglo con base en un tamaño máximo y después rellena otro arreglo con los números primos encontrados en el primer arreglo
  private _fillPrimeArrays() {
    this._isPrimeArray = Array.from(Array(this._MAX_SIZE).keys(), (index) => ({
      value: index,
      isPrime: index < 2 ? false : true,
    }));
    this._filterPrimeArray();
    this._primeArr = this._isPrimeArray.filter((num) => num.isPrime === true);
  }
  //método que filtra los números primos de un arreglo de número naturales consecutivos, inicia con múltiplos de dos y después con con múltiplos de números marcados como posiblemente primos
  private _filterPrimeArray() {
    for (let i = 2; i * i < this._MAX_SIZE; i++)
      if (this._isPrimeArray[i].isPrime)
        for (let j = i * i; j < this._MAX_SIZE; j += i)
          this._isPrimeArray[j].isPrime = false;
  }
  //método que regresa el número de la posición n-ésima de la serie de números múltiplos de 3
  _getNthTermOf3MultipleSeries() {
    if (!this._nth)
      return "No se ha proporcionado posición del número a buscar";
    return this._nth * 3;
  }
  //método que regresa el número de la posición n-ésima de la serie de números primos
  _getNthTermOfPrimeSeries() {
    if (!this._nth)
      return "No se ha proporcionado posición del número a buscar";
    return this._primeArr[this._nth - 1].value;
  }
  //método que regresa el resultado de las series
  // getNthTermOfSeries(): TSeriesResponse {
  //   if (!this._nth)
  //     return {
  //       error: "No se ha proporcionado posición del número a buscar",
  //       multiple3: 0,
  //       prime: 0,
  //     };

  //   return {
  //     multiple3: this._getNthTermOf3MultipleSeries(),
  //     prime: this._getNthTermOfPrimeSeries(),
  //   };
  // }
  //método setter de la posición n-ésima a búscar
  setNth(nth: number) {
    this._nth = nth;
  }
}
