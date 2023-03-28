/**
 * Tipo de pokemon existentes
 */
export type PokemonType =
  | "Fuego"
  | "Agua"
  | "Planta"
  | "Roca"
  | "Tierra"
  | "Electrico"
  | "Acero"
  | "Volador"
  | "Bicho"
  | "Veneno"
  | "Dragon"
  | "Hielo"
  | "Siniestro"
  | "Hada"
  | "Psiquico"
  | "Fantasma"
  | "Normal"
  | "Lucha";

/**
 * Interfaz que declara los métodos necesarios para cada pokemon
 */
export interface Pokemon {
  getName(): string;
  getType(): PokemonType;
  getAbility(): string;
  getTotalStats(): number;
}
