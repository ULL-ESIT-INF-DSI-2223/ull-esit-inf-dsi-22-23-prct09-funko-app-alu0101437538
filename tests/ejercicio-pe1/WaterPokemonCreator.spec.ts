import "mocha";
import { expect } from "chai";
import { WaterPokemonCreator } from "../../src/ejercicio-pe1/WaterPokemonCreator";
import { WaterPokemon } from "../../src/ejercicio-pe1/WaterPokemon";

describe("Test de WaterPokemonCreator", () => {
  const squirtle = new WaterPokemonCreator(
    "squirtle",
    "Absorber Agua",
    [30, 30, 30, 30, 30, 30]
  );
  it("Existe la clase WaterPokemonCreator", () => {
    expect(squirtle).to.be.instanceOf(WaterPokemonCreator);
  });
  it("Se pueden generar pokemon de fuego", () => {
    expect(squirtle.factoryMethod()).to.be.eql(
      new WaterPokemon("squirtle", "Absorber Agua", [30, 30, 30, 30, 30, 30])
    );
  });
  it("Se pueden imprimir la lógica de la generación", () => {
    expect(squirtle.logic()).to.be.eql(
      `Este pokemon es un squirtle, de tipo Agua, con la habilidad Absorber Agua y un total de estadísticas de 180`
    );
  });
});
