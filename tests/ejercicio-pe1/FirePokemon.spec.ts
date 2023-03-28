import "mocha";
import { expect } from "chai";
import { FirePokemon } from "../../src/ejercicio-pe1/FirePokemon";

describe("Test de FirePokemon", () => {
  it("Existe la clase FirePokemon", () => {
    const charmander = new FirePokemon(
      "Charmander",
      "Mar Llamas",
      [30, 30, 30, 30, 30, 30]
    );
    expect(charmander).to.be.instanceOf(FirePokemon);
  });
  it("Las instancias FirePokemon tienen nombre, que se puede acceder y modificar", () => {
    const charmander = new FirePokemon(
      "Charmander",
      "Mar Llamas",
      [30, 30, 30, 30, 30, 30]
    );
    charmander.setName("Arcanine");
    expect(charmander.getName()).to.be.eql("Arcanine");
  });
  it("Las instancias FirePokemon tienen una habilidad, que se puede acceder y modificar", () => {
    const charmander = new FirePokemon(
      "Charmander",
      "Mar Llamas",
      [30, 30, 30, 30, 30, 30]
    );
    charmander.setAbility("Cuerpo Llama");
    expect(charmander.getAbility()).to.be.eql("Cuerpo Llama");
  });
  it("Las instancias FirePokemon tienen estadísticas, que se puede acceder y modificar", () => {
    const charmander = new FirePokemon(
      "Charmander",
      "Mar Llamas",
      [30, 30, 30, 30, 30, 30]
    );
    charmander.setStats([50, 50, 50, 50, 50, 50]);
    expect(charmander.getStats()).to.be.eql([50, 50, 50, 50, 50, 50]);
  });
  it("Las instancias FirePokemon tienen tipo, al cual se puede acceder", () => {
    const charmander = new FirePokemon(
      "Charmander",
      "Mar Llamas",
      [30, 30, 30, 30, 30, 30]
    );
    expect(charmander.getType()).to.be.eql("Fuego");
  });
  it("Las instancias FirePokemon tienen una cantidad total de stats, al cual se puede acceder", () => {
    const charmander = new FirePokemon(
      "Charmander",
      "Mar Llamas",
      [30, 30, 30, 30, 30, 30]
    );
    expect(charmander.getTotalStats()).to.be.eql(180);
  });
});
