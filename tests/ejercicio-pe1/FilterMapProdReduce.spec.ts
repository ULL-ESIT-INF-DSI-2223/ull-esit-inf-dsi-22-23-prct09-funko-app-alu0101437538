import "mocha";
import { expect } from "chai";
import { FilterMapProdReduce } from "../../src/ejercicio-pe1/FilterMapProdReduce";


describe("Test de FilterMapProdReduce", () => {
    it("Se instancia la clase correctamente", () => {
        expect(new FilterMapProdReduce([1, 3, 4, 6], (i) => i < 5, (i) => i*2)).to.be.instanceOf(FilterMapProdReduce);
    });
    it("Existen getters y setters para el atributo de la colección de números", () => {
        const algoritmo = new FilterMapProdReduce([1, 3, 4, 6], (i) => i < 5, (i) => i*2)
        algoritmo.numberCollection = [1,2,3]
        expect(algoritmo.numberCollection).to.be.eql([1,2,3]);
    });
    /*it("Existen getters y setters para el atributo del callback del filter", () => {
        const algoritmo = new FilterMapDivReduce([1, 3, 4, 6], (i) => i < 5, (i) => i*2)
        algoritmo.filterCallback = ((i: number) => i < 3)
        expect(algoritmo.filterCallback).to.be.eql((i: number) => i < 3);
    });
    it("Existen getters y setters para el atributo del callback del map", () => {
        const algoritmo = new FilterMapDivReduce([1, 3, 4, 6], (i) => i < 5, (i) => i*2)
        algoritmo.mapCallback = ((i: number) => i*5)
        expect(algoritmo.mapCallback).to.be.eql((i: number) => i*5);
    });*/
    it("Existe un método que pone a funcionar el algoritmo", () => {
        const algoritmo = new FilterMapProdReduce([1, 3, 4, 6], (i) => i < 5, (i) => i*2)
        expect(algoritmo.run()).to.be.eql(96);
    });
});