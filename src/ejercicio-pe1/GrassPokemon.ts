import { Pokemon, PokemonType } from "./Pokemon";

export class GrassPokemon implements Pokemon {
  private readonly _type: PokemonType = "Planta";

  /**
   * Constructor del pokemon
   * @param _name Nombre del pokemon
   * @param _ability Habilidad principal del pokemon
   * @param _stats EStadísticas actuales del pokemon
   */
  constructor(
    private _name: string,
    private _ability: string,
    private _stats: number[]
  ) {}

  /**
   * Getter del nombre
   */
  getName() {
    return this._name;
  }

  /**
   * Getter del tipo
   */
  getType() {
    return this._type;
  }

  /**
   * Getter de la habilidad
   */
  getAbility() {
    return this._ability;
  }

  /**
   * Getter de las stats
   */
  getStats() {
    return this._stats;
  }

  /**
   * Getter de la suma total de stats
   */
  getTotalStats() {
    const total = this._stats.reduce(function (a, b) {
      return a + b;
    });
    return total;
  }

  /**
   * Setter del nombre
   */
  setName(name: string) {
    this._name = name;
  }

  /**
   * Setter de la habilidad
   */
  setAbility(ability: string) {
    this._ability = ability;
  }

  /**
   * Setter de las stats
   */
  setStats(stats: number[]) {
    this._stats = stats;
  }
}
