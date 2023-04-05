import { FilterMap } from "./FilterMap.js";

/**
 * Clase que hereda de FilterMap e implmeneta un reduce con Sub
 */
export class FilterMapSubReduce extends FilterMap {
  /**
   * Constructo de la clase
   * @param numberCollection Colección de números
   */
  constructor(
    numberCollection: number[],
    callback1: (i: number) => boolean,
    callback2: (i: number) => number
  ) {
    super(numberCollection, callback1, callback2);
  }

  /**
   * Implementación del método reduce de la superclase
   * @returns número generado por el reduce
   */
  protected reduce(array: number[]): number {
    let i = 0;
    let accumulator = 0;
    while (array[i] !== undefined) {
      accumulator -= array[i];
      ++i;
    }
    return accumulator;
  }
}
