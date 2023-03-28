import "mocha";
import { expect } from "chai";
import { WaterPokemon } from "../../src/ejercicio-pe1/WaterPokemon";

describe("Test de WaterPokemon", () => {
  it("Existe la clase WaterPokemon", () => {
    const squirtle = new WaterPokemon(
      "squirtle",
      "Absorber Agua",
      [30, 30, 30, 30, 30, 30]
    );
    expect(squirtle).to.be.instanceOf(WaterPokemon);
  });
  it("Las instancias WaterPokemon tienen nombre, que se puede acceder y modificar", () => {
    const squirtle = new WaterPokemon(
      "squirtle",
      "Absorber Agua",
      [30, 30, 30, 30, 30, 30]
    );
    squirtle.setName("Oshawott");
    expect(squirtle.getName()).to.be.eql("Oshawott");
  });
  it("Las instancias WaterPokemon tienen una habilidad, que se puede acceder y modificar", () => {
    const squirtle = new WaterPokemon(
      "squirtle",
      "Absorber Agua",
      [30, 30, 30, 30, 30, 30]
    );
    squirtle.setAbility("Nado Rápido");
    expect(squirtle.getAbility()).to.be.eql("Nado Rápido");
  });
  it("Las instancias WaterPokemon tienen estadísticas, que se puede acceder y modificar", () => {
    const squirtle = new WaterPokemon(
      "squirtle",
      "Absorber Agua",
      [30, 30, 30, 30, 30, 30]
    );
    squirtle.setStats([50, 50, 50, 50, 50, 50]);
    expect(squirtle.getStats()).to.be.eql([50, 50, 50, 50, 50, 50]);
  });
  it("Las instancias WaterPokemon tienen tipo, al cual se puede acceder", () => {
    const squirtle = new WaterPokemon(
      "squirtle",
      "Absorber Agua",
      [30, 30, 30, 30, 30, 30]
    );
    expect(squirtle.getType()).to.be.eql("Agua");
  });
  it("Las instancias WaterPokemon tienen una cantidad total de stats, al cual se puede acceder", () => {
    const squirtle = new WaterPokemon(
      "squirtle",
      "Absorber Agua",
      [30, 30, 30, 30, 30, 30]
    );
    expect(squirtle.getTotalStats()).to.be.eql(180);
  });
});
