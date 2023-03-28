import { PokemonCreator } from "./PokemonCreator";
import { WaterPokemon } from "./WaterPokemon";
import { Pokemon } from "./Pokemon";

/**
 * Clase que representa la fábrica de pokemon tipo agua
 */
export class WaterPokemonCreator extends PokemonCreator {
  /**
   * Constructor de la fabrica
   * @param _name NOmbre del pokemon
   * @param _ability Habilidad del pokemon
   * @param _stats Stats del pokemon
   */
  constructor(
    private _name: string,
    private _ability: string,
    private _stats: number[]
  ) {
    super();
  }

  /**
   * Método que devuelve una instancia de la fábrica
   * @returns Devuelve el pokemon definido
   */
  factoryMethod(): Pokemon {
    return new WaterPokemon(this._name, this._ability, this._stats);
  }
}
