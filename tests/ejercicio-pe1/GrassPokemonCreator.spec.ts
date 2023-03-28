import "mocha";
import { expect } from "chai";
import { GrassPokemonCreator } from "../../src/ejercicio-pe1/GrassPokemonCreator";
import { GrassPokemon } from "../../src/ejercicio-pe1/GrassPokemon";

describe("Test de GrassPokemonCreator", () => {
  const bulbasaur = new GrassPokemonCreator(
    "Bulbasaur",
    "Clorofila",
    [30, 30, 30, 30, 30, 30]
  );
  it("Existe la clase GrassPokemonCreator", () => {
    expect(bulbasaur).to.be.instanceOf(GrassPokemonCreator);
  });
  it("Se pueden generar pokemon de fuego", () => {
    expect(bulbasaur.factoryMethod()).to.be.eql(
      new GrassPokemon("Bulbasaur", "Clorofila", [30, 30, 30, 30, 30, 30])
    );
  });
  it("Se pueden imprimir la lógica de la generación", () => {
    expect(bulbasaur.logic()).to.be.eql(
      `Este pokemon es un Bulbasaur, de tipo Planta, con la habilidad Clorofila y un total de estadísticas de 180`
    );
  });
});
