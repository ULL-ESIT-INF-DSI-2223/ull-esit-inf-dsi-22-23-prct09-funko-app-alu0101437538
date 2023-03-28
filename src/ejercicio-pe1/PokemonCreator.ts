import { Pokemon } from "./Pokemon";

/**
 * Clase abstracta creadora de pokemon
 */
export abstract class PokemonCreator {
  /**
   *  Método abstracto que crea a cada pokemon
   */
  public abstract factoryMethod(): Pokemon;

  /**
   * Método que imprime la lógica común de pokemon
   * @returns Descripción del pokemon
   */
  public logic(): string {
    const pokemon = this.factoryMethod();
    return (
      `Este pokemon es un ${pokemon.getName()}, ` +
      `de tipo ${pokemon.getType()}, ` +
      `con la habilidad ${pokemon.getAbility()} ` +
      `y un total de estadísticas de ${pokemon.getTotalStats()}`
    );
  }
}
