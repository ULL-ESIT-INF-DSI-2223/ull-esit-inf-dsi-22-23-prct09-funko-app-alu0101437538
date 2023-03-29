/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * Clase que implementa un algoritmo que realiza las funciones filter, ma y reduce
 */
export abstract class FilterMap {
  /**
   * Constructor de la clase
   * @param _numberCollection Lista de números
   * @param _filterCallback Callback usado en filter
   * @param _mapCallback Callback usado en map
   */
  constructor(
    protected _numberCollection: number[],
    protected _filterCallback: (i: number) => boolean,
    protected _mapCallback: (i: number) => number
  ) {}

  /**
   * Getter de la colección de numeros
   */
  get numberCollection() {
    return this._numberCollection;
  }

  /**
   * Setter de la colección de numeros
   */
  set numberCollection(numberCollection) {
    this._numberCollection = numberCollection;
  }

  /**
   * Getter del filterCallback
   */
  get filterCallback() {
    return this._filterCallback;
  }

  /**
   * Setter del filterCallback
   */
  set filterCallback(filterCallback) {
    this._filterCallback = filterCallback;
  }

  /**
   * Getter del mapCallback
   */
  get mapCallback() {
    return this._mapCallback;
  }

  /**
   * Setter del mapCallback
   */
  set mapCallback(mapCallback) {
    this._mapCallback = mapCallback;
  }

  /**
   * Método que realiza el filtrado del algoritmo
   * @returns Lista de números filtrada
   */
  public filter(): number[] {
    const newList: number[] = [];
    let i = 0;
    let j = 0;
    while (this._numberCollection[i] !== undefined) {
      if (this._filterCallback(this._numberCollection[i])) {
        newList[j] = this._numberCollection[i];
        j++;
      }
      ++i;
    }
    return newList;
  }

  /**
   * Método que realiza el map del algoritmo
   * @param array Array de números
   * @returns Lista de números mapeada
   */
  public map(array: number[]): number[] {
    const newList: number[] = [];
    let i = 0;
    while (array[i] !== undefined) {
      newList[i] = this._mapCallback(array[i]);
      ++i;
    }
    return newList;
  }

  /**
   * Método abstrcto que se encarga de la operación reduce
   */
  protected abstract reduce(array: number[]): number;

  /**
   * Método hook situado despues del filter
   */
  protected postFilter() {}

  /**
   * Método hook situado despues del map
   */
  protected postMap() {}
  /**
   * Método hook situado despues del reduce
   */
  protected postReduce() {}

  /**
   * Método que ejecuta el algoritmo
   */
  public run() {
    let array: number[] = this.filter();
    this.postFilter();
    array = this.map(array);
    this.postMap();
    const value = this.reduce(array);
    this.postReduce();
    return value;
  }
}
