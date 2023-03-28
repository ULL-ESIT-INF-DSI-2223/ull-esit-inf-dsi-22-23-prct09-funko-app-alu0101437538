import "mocha";
import { expect } from "chai";
import { FirePokemonCreator } from "../../src/ejercicio-pe1/FirePokemonCreator";
import { FirePokemon } from "../../src/ejercicio-pe1/FirePokemon";

describe("Test de FirePokemonCreator", () => {
  const charmander = new FirePokemonCreator(
    "Charmander",
    "Mar Llamas",
    [30, 30, 30, 30, 30, 30]
  );
  it("Existe la clase FirePokemonCreator", () => {
    expect(charmander).to.be.instanceOf(FirePokemonCreator);
  });
  it("Se pueden generar pokemon de fuego", () => {
    expect(charmander.factoryMethod()).to.be.eql(
      new FirePokemon("Charmander", "Mar Llamas", [30, 30, 30, 30, 30, 30])
    );
  });
  it("Se pueden imprimir la lógica de la generación", () => {
    expect(charmander.logic()).to.be.eql(
      `Este pokemon es un Charmander, de tipo Fuego, con la habilidad Mar Llamas y un total de estadísticas de 180`
    );
  });
});
