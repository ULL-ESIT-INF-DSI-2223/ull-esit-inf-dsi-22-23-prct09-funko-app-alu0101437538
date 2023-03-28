import "mocha";
import { expect } from "chai";
import { GrassPokemon } from "../../src/ejercicio-pe1/GrassPokemon";

describe("Test de GrassPokemon", () => {
  it("Existe la clase GrassPokemon", () => {
    const bulbasaur = new GrassPokemon(
      "bulbasaur",
      "Clorofila",
      [30, 30, 30, 30, 30, 30]
    );
    expect(bulbasaur).to.be.instanceOf(GrassPokemon);
  });
  it("Las instancias GrassPokemon tienen nombre, que se puede acceder y modificar", () => {
    const bulbasaur = new GrassPokemon(
      "bulbasaur",
      "Clorofila",
      [30, 30, 30, 30, 30, 30]
    );
    bulbasaur.setName("Snivy");
    expect(bulbasaur.getName()).to.be.eql("Snivy");
  });
  it("Las instancias GrassPokemon tienen una habilidad, que se puede acceder y modificar", () => {
    const bulbasaur = new GrassPokemon(
      "bulbasaur",
      "Clorofila",
      [30, 30, 30, 30, 30, 30]
    );
    bulbasaur.setAbility("Aclimatación");
    expect(bulbasaur.getAbility()).to.be.eql("Aclimatación");
  });
  it("Las instancias GrassPokemon tienen estadísticas, que se puede acceder y modificar", () => {
    const bulbasaur = new GrassPokemon(
      "bulbasaur",
      "Clorofila",
      [30, 30, 30, 30, 30, 30]
    );
    bulbasaur.setStats([50, 50, 50, 50, 50, 50]);
    expect(bulbasaur.getStats()).to.be.eql([50, 50, 50, 50, 50, 50]);
  });
  it("Las instancias GrassPokemon tienen tipo, al cual se puede acceder", () => {
    const bulbasaur = new GrassPokemon(
      "bulbasaur",
      "Clorofila",
      [30, 30, 30, 30, 30, 30]
    );
    expect(bulbasaur.getType()).to.be.eql("Planta");
  });
  it("Las instancias GrassPokemon tienen una cantidad total de stats, al cual se puede acceder", () => {
    const bulbasaur = new GrassPokemon(
      "bulbasaur",
      "Clorofila",
      [30, 30, 30, 30, 30, 30]
    );
    expect(bulbasaur.getTotalStats()).to.be.eql(180);
  });
});
