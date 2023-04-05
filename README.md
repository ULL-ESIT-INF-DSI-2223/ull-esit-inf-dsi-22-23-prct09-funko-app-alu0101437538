# ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101437538

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101437538/actions/workflows/tests.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101437538/actions/workflows/tests.yml)
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101437538/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101437538?branch=main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101437538&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101437538)


# Práctica 9 - Aplicación de registro de Funko Pops
#### Aday Chocho Aisa

## Índice

1. Introducción
2. Ejercicios
    - Aplicación de FunkoPops
    - Ejercicio PE-1
3. Conclusiones
4. Referencias bibliográficas

## 1. Introducción
Esta práctica consiste en realizar un programa que permita la gestión de un registro de funkos a traves de consola. Para ello, se utilizaran los paquetes yargs (permite parsear diferentes argumentos pasados al programa desde la línea de comandos) y chalk (permite imprimir mensajes en distintos colores), además de emplear la API síncrona que proporciona por Node.js para la gestión de ficheros. Además, también se recoge en el informe el ejercicio realizado durante la sesión de clase.

En la práctica se emplea una metodología TDD, se documenta automáticamente con TypeDoc e incluye flujos de trabajo de GitHub Actions para llevar a cabo las pruebas, para manejar los datos de cubrimiento (Coveralls) y para el análisis de la calidad y seguridad del código (Sonar Cloud).

## 2. Ejercicios
### 2.1. Aplicación de registro de Funko Pops
Primero que todo, hay que recalcar que la aplicación está pensada para ser ejecutada desde la raíz del proyecto. El proceso empieza por compilar el código y seguidamente ejecutar el comando `node dist/funkoPop/funko-app.js *comando* *opciones*`, donde el `comando` y las `opciones` se sustituyen por las deseadas. 

Todos los ficheros de datos que genere la aplicación, así como las carpetas de usuarios se almacenarán en el directorio `dataBase` del proyecto. El programa se divide en 5 ficheros:

#### Géneros y Tipos
Ambos ficheros contienen los enumerados que tratan los tipos y géneros de funko pops respectivamente:
```typescript
export enum Generos {
    Animacion = "Animacion",
    PeliculasTV = "Peliculas y TV",
    Videojuegos = "Videojuegos",
    Deportes = "Deportes",
    Musica = "Música",
    Anime = "Anime"
}
```
```typescript
export enum Tipos {
    Pop = "Pop!",
    PopRides = "Pop! Rides",
    VinylSoda = "Vynil Soda",
    VynilGold = "Vynil Gold",
}
```

#### Clase Funko
La clase funko permite almacenar los datos de un funko, así como manejarlos. Su código es el siguiente:

```typescript
export class Funko {

  constructor(
    private _id: number,
    private _nombre: string,
    private _descripcion: string,
    private _tipo: Tipos,
    private _genero: Generos,
    private _franquicia: string,
    private _numero: number,
    private _exclusivo: boolean,
    private _caracteristicasEsp: string | undefined,
    private _valor: number
  ) {
    if (/\.|-/.test(_id.toString()) === true || _id === undefined || _id === 0) {
      throw new Error("El ID del funko debe ser un número entero positivo");
    }
    if (/\.|-/.test(_numero.toString()) === true || _numero === undefined) {
      throw new Error("El número de serie debe ser un número entero positivo");
    }
    if (_valor <= 0 || _valor === undefined) {
      throw new Error("El valor del funko rdebe ser un número positivo");
    }
    if (_nombre === undefined || _nombre === "") {
      throw new Error("El funko debe de tener nombre");
    }
    if (_descripcion === undefined || _descripcion === "") {
      throw new Error("El funko debe de tener descripcion");
    }
    if (_tipo === undefined) {
      throw new Error("El funko debe de tener tipo");
    }
    if (_genero === undefined) {
      throw new Error("El funko debe de tener genero");
    }
    if (_franquicia === undefined || _franquicia === "") {
      throw new Error("El funko debe de tener franquicia");
    }
    if (_exclusivo === undefined) {
      throw new Error(
        "El funko debe de dejar clara su condición de exclusividad"
      );
    }
  }

  get id() {
    return this._id;
  }

  set id(id) {
    if (/\.|-/.test(id.toString()) === true || id === undefined) {
      throw new Error("El ID debe ser un número entero positivo");
    }
    this._id = id;
  }

  ...

  print(): string {
    let str = "";
    str += `ID = ${this._id}`;
    console.log(chalk.blue(`ID =`) + ` ${this._id}`);
    str += `\nNombre = ${this._nombre}`;
    console.log(chalk.blue(`Nombre =`) + ` ${this._nombre}`);
    str += `\nDescripción = ${this._descripcion}`;
    console.log(chalk.blue(`Descripción =`) + ` ${this._descripcion}`);
    str += `\nTipo = ${this._tipo}`;
    console.log(chalk.blue(`Tipo =`) + ` ${this._tipo}`);
    str += `\nGénero = ${this._genero}`;
    console.log(chalk.blue(`Género =`) + ` ${this._genero}`);
    str += `\nFranquicia = ${this._franquicia}`;
    console.log(chalk.blue(`Franquicia =`) + ` ${this._franquicia}`);
    str += `\nNúmero de colección = ${this._numero}`;
    console.log(chalk.blue(`Número de colección =`) + ` ${this._numero}`);
    str += `\n¿Exlusivo? = ${this._exclusivo}`;
    console.log(chalk.blue(`¿Exlusivo? =`) + ` ${this._exclusivo}`);
    if (this._caracteristicasEsp !== undefined && this._caracteristicasEsp !== "") {
      str += `\nCaracterísticas Especiales = ${this._caracteristicasEsp}`;
      console.log(
        chalk.blue(`Características Especiales =`) +
          ` ${this._caracteristicasEsp}`
      );
    }
    str += `\nValor = ${this._valor}`;
    if (this._valor < 15) {
      console.log(chalk.blue(`Valor = `) + chalk.red(`${this._valor}`));
    } else if (this._valor < 30) {
      console.log(chalk.blue(`Valor = `) + chalk.magenta(`${this._valor}`));
    } else if (this._valor < 50) {
      console.log(chalk.blue(`Valor = `) + chalk.yellow(`${this._valor}`));
    } else {
      console.log(chalk.blue(`Valor = `) + chalk.green(`${this._valor}`));
    }
    return str;
  }
}
```
Como podemos observar, dentro de la clase observamos un constructor donde se establecen los valores de las propiedades de la clase, así como realiza la comprobación de los parámetros en busca de errores. Estas comprobaciones se basan en las siguientes reglas:

- Tanto el `ID` como el `número` deben de ser números enteros positivos, por lo que se comprueban que no sean negativos o decimales mediante una expresión regular.
- El `valor` no puede ser negativo, por lo que se comprueba que sea mayor o igual a cero.
- Todas las propiedades no pueden adquirir el valor undefined, así como las string no pueden estar vacias Y el ID no puede ser 0. La única propiedad que no tiene restricciones es la `característica especial` (en mi opinión, no todos los funkos tienen una, por lo que el programa le permite el valor undefined).

Además del constructor, existe un getter/setter para cada propiedad donde se aplican las comprobaciones de errores del constructor, y un método que permite imprimir el funko. Empleando chalk, imprime el nombre de la propiedad en azul y los valores en blanco, menos el `valor` que lo imprime en 4 colores: rojo (0-14,99), magenta (15-29,99), amarillo (30-49.99) y verde (+50). Cabe destacar que la propiedad de la `caracterísitca especial` solo se imprime si no es undefined o vacia.

#### Clase Gestor
La clase gestor permite gestionar y manejar los ficheros y carpetas. Su código es el siguiente:

```typescript
export class Gestor {

  public static checkUserCreated(nombre: string): boolean {
    return fs.existsSync("./dataBase/" + nombre);
  }

  public static addUser(nombre: string): void {
    if (this.checkUserCreated(nombre)) {
      throw new Error("Existe un usuario con el mismo nombre");
    } else {
      fs.mkdirSync("./dataBase/" + nombre);
    }
  }

  public static deleteUser(nombre: string): void {
    if (this.checkUserCreated(nombre)) {
      fs.rmdirSync("./dataBase/" + nombre);
    } else {
      throw new Error("No existe usuario con ese nombre");
    }
  }

  public static userList(): string[] {
    return fs.readdirSync("./dataBase");
  }

  public static checkFunkoCreated(nombre: string, id: number): boolean {
    return fs.existsSync("./dataBase/" + nombre + "/" + id + ".json");
  }

  public static addFunko(nombre: string, funko: Funko): void {
    if (!this.checkUserCreated(nombre)) {
      throw new Error(
        "No existe un usuario con ese nombre. Por favor, creerlo con --addUser."
      );
    }
    if (this.checkFunkoCreated(nombre, funko.id)) {
      throw new Error("Ya existe un funko con ese ID.");
    }
    const json = JSON.stringify(funko, null, 2);
    fs.writeFileSync("./dataBase/" + nombre + "/" + funko.id + ".json", json);
  }

  public static modFunko(nombre: string, funko: Funko): void {
    if (!this.checkUserCreated(nombre)) {
      throw new Error(
        "No existe un usuario con ese nombre. Por favor, creerlo con --addUser."
      );
    }
    if (!this.checkFunkoCreated(nombre, funko.id)) {
      throw new Error("No existe un funko con ese ID.");
    }
    const json = JSON.stringify(funko, null, 2);
    fs.writeFileSync("./dataBase/" + nombre + "/" + funko.id + ".json", json);
  }

  public static deleteFunko(nombre: string, id: number): void {
    if (this.checkFunkoCreated(nombre, id)) {
      fs.unlinkSync("./dataBase/" + nombre + "/" + id + ".json");
    } else {
      throw new Error("No existe funko con ese id.");
    }
  }

  public static readFunko(nombre: string, id: number): Funko {
    if (this.checkFunkoCreated(nombre, id)) {
      const json = JSON.parse(
        fs.readFileSync("./dataBase/" + nombre + "/" + id + ".json").toString()
      );
      const funko = new Funko(
        json._id,
        json._nombre,
        json._descripcion,
        json._tipo,
        json._genero,
        json._franquicia,
        json._numero,
        json._exclusivo,
        json._caracteristicasEsp,
        json._valor
      );
      funko.print();
      return funko;
    } else {
      throw new Error("No existe funko con ese id.");
    }
  }

  public static funkoList(nombre: string): string[] {
    return fs.readdirSync("./dataBase/" + nombre);
  }
}
```
Como observamos, es una clase que no tiene propiedades, solo métodos estáticos. Estos son los siguientes:

-`checkUserCreated()`: Permite comprobar que existe un usuario, comprobando la existencia de su directorio.
-`addUser()`: Permite añadir un usuario, creando su carpeta. Si el usuario ya existe, lanza un error.
-`deleteUser()`: Permite eliminar un usuario, borrando su carpeta. Si el usuario no existe, lanza un error.
-`userList()`: Imprime la lista de usuarios, leyendo lo que hay en el directorio `dataBase`.
-`checkFunkoCreated()`: Permite comprobar si existe un funko dentro de la carpeta de un usuario a partir del `ID`.
-`addFunko()`: Permite añadir un funko a la colección de un usuario, creando su respectivo fichero con nombre `id.json`. Si existe un funko en la colección con su id o no existe el usuario, lanza un error.
-`modFunko()`: Permite modificar un funko de la colección de un usuario. Si no existe un funko en la colección con el mismo id o no existe el usuario, lanza un error.
-`deleteFunko()`: Permite eliminar un funko de la colección de un usuario a partir de su id (elimina el fichero). Si no existe un funko en la colección con el mismo id o no existe el usuario, lanza un error.
-`readFunko()`: Permite leer un funko, devolviendo un objeto de clase funko. Lanza un error si no existe.
-`listFunko()`: Devuelve la lista de ficheros de funkos (tipo `id.json`) de un usuario. Esto se hace leyendo el directorio del usuario.

#### funko-app
Este es el fichero que contiene los comandos que se pueden ejecutar del programa. Su contenido es el siguiente:
```typescript
yargs(hideBin(process.argv))
  .command(
    "addUser",
    "Permite añadir un usuario",
    {
      user: {
        description: "Nombre del usuario",
        type: "string",
        demandOption: true,
      },
    },
    (argv) => {
      try {
        Gestor.addUser(argv.user);
        log(
          chalk.green(
            `En usuario ${argv.user} ha sido añadido correctamente a la base.\n`
          )
        );
      } catch (error) {
        log(chalk.red(error + "\n"));
      }
    }
  )
  .command(
    "deleteUser",
    "Elimina un usuario",
    {
      user: {
        description: "Nombre del usuario",
        type: "string",
        demandOption: true,
      },
    },
    (argv) => {
      try {
        Gestor.deleteUser(argv.user);
        log(
          chalk.green(
            `En usuario ${argv.user} ha sido eliminado correctamente a la base.\n`
          )
        );
      } catch (error) {
        log(chalk.red(error + "\n"));
      }
    }
  )
  .command("listUser", "Lista los usuario", {}, () => {
    log(chalk.blue(Gestor.userList().join("\n") + "\n"));
  })
  .command(
    "addFunko",
    "Añade un funko",
    {
      user: {
        description: "Usuario del Funko",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID del Funko",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Nombre del Funko",
        type: "string",
        demandOption: true,
      },
      desc: {
        description: "Descripción del Funko",
        type: "string",
        demandOption: true,
      },
      type: {
        description: "Tipo del Funko",
        type: "string",
        demandOption: true,
      },
      genre: {
        description: "Género del Funko",
        type: "string",
        demandOption: true,
      },
      franchise: {
        description: "Franquicia del Funko",
        type: "string",
        demandOption: true,
      },
      number: {
        description: "Número del Funko",
        type: "number",
        demandOption: true,
      },
      exclusive: {
        description: "Exclusividad del Funko",
        type: "boolean",
        demandOption: true,
      },
      special: {
        description: "Características Especiales del Funko",
        type: "string",
        demandOption: false,
      },
      value: {
        description: "Valor del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      try {
        const funko = new Funko(
          argv.id,
          argv.name,
          argv.desc,
          argv.type as Tipos,
          argv.genre as Generos,
          argv.franchise,
          argv.number,
          argv.exclusive,
          argv.special,
          argv.value
        );
        Gestor.addFunko(argv.user, funko);
        log(
          chalk.green(
            "El funko ha sido correctamente a la coleccicón del usuario " +
              argv.user +
              ".\n"
          )
        );
      } catch (error) {
        log(chalk.red(error + "\n"));
      }
    }
  )
  .command(
    "modFunko",
    "Modifica un funko",
    {
      user: {
        description: "Usuario del Funko",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID del Funko",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Nombre del Funko",
        type: "string",
        demandOption: true,
      },
      desc: {
        description: "Descripción del Funko",
        type: "string",
        demandOption: true,
      },
      type: {
        description: "Tipo del Funko",
        type: "string",
        demandOption: true,
      },
      genre: {
        description: "Género del Funko",
        type: "string",
        demandOption: true,
      },
      franchise: {
        description: "Franquicia del Funko",
        type: "string",
        demandOption: true,
      },
      number: {
        description: "Número del Funko",
        type: "number",
        demandOption: true,
      },
      exclusive: {
        description: "Exclusividad del Funko",
        type: "boolean",
        demandOption: true,
      },
      special: {
        description: "Características Especiales del Funko",
        type: "string",
        demandOption: false,
      },
      value: {
        description: "Valor del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      try {
        const funko = new Funko(
          argv.id,
          argv.name,
          argv.desc,
          argv.type as Tipos,
          argv.genre as Generos,
          argv.franchise,
          argv.number,
          argv.exclusive,
          argv.special,
          argv.value
        );
        Gestor.modFunko(argv.user, funko);
        log(
          chalk.green(
            "El funko del usuario " + argv.user + " ha sido modificado.\n"
          )
        );
      } catch (error) {
        log(chalk.red(error + "\n"));
      }
    }
  )
  .command(
    "deleteFunko",
    "Elimina un funko",
    {
      user: {
        description: "Usuario del Funko",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      try {
        Gestor.deleteFunko(argv.user, argv.id);
        log(
          chalk.green(
            "El funko de id " +
              argv.id +
              " del usuario " +
              argv.user +
              " ha sido eliminado.\n"
          )
        );
      } catch (error) {
        log(chalk.red(error + "\n"));
      }
    }
  )
  .command(
    "readFunko",
    "Lee un funko",
    {
      user: {
        description: "Usuario del Funko",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "ID del Funko",
        type: "number",
        demandOption: true,
      },
    },
    (argv) => {
      try {
        Gestor.readFunko(argv.user, argv.id);
        log();
      } catch (error) {
        log(chalk.red(error + "\n"));
      }
    }
  )
  .command(
    "listFunko",
    "Lista todos los funkos de un usuario",
    {
      user: {
        description: "Usuario del Funko",
        type: "string",
        demandOption: true,
      },
    },
    (argv) => {
      try {
        const list = Gestor.funkoList(argv.user);
        log(chalk.blue("#====================#"));
        for (let i = 0; i < list.length; ++i) {
          Gestor.readFunko(argv.user, parseInt(list[i].replace(".json", "")));
          log(chalk.blue("#====================#"));
        }
        log();
      } catch (error) {
        log(chalk.red(error + "\n"));
      }
    }
  )
  .help().argv;

```

Como observamos, en el se encuentran todos los comandos que se han desarrollando utilizando `yargs`. Cada comando maneja sus propios errores. Entre los comandos, encontramos los siguientes:

-`addUser`: Permite añadir usuarios, utilizando la propia función del gestor. 
    - Ej: `node dist/funkoPop/funko-app.js addUser --user Aday`
-`deleteUser`: Permite eliminar un usuario, utilizando la propia función del gestor. 
    - Ej: `node dist/funkoPop/funko-app.js deleteUser --user Aday`
-`userList`: Permite listar los usuarios, utilizando la propia función del gestor. 
    - Ej: `node dist/funkoPop/funko-app.js userList`
-`addFunko`: Permite añadir funkos. Este construye el funko y lo añade utilizando la propia función del gestor. 
    - Ej: `node dist/funkoPop/funko-app.js addFunko --user Aday --id 2 --name "Androide 16" --desc "Androide del Doctor Gero" --type "Pop!" --genre Anime --franchise "Dragon Ball" --number 12 --exclusive no --special "Mueve la cabeza" --value 17.99`
-`modFunko`: Permite modificar funkos. Este construye el nuevo funko y lo modifica utilizando la propia función del gestor. 
    - Ej: `node dist/funkoPop/funko-app.js modFunko --user Aday --id 2 --name "Androide 16" --desc "Androide del Doctor Gero" --type "Pop!" --genre Anime --franchise "Dragon Ball" --number 12 --exclusive yes --special "Mueve la cabeza" --value 20.99`
-`deleteFunko`: Permite eliminar funkos. Este se elimina con la función del gestor a partir del usuario e ID. 
    - Ej: `node dist/funkoPop/funko-app.js deleteFunko --user Aday --id 29`
-`readFunko`: Permite leer funkos. Este se lee e imprime con la propia función del gestor a partir del usuario e ID. 
    - Ej: `node dist/funkoPop/funko-app.js readFunko --user Aday --id 2`
-`funkoList`: Permite imprimir la lista funkos. Esto se hace obteniendo la lista de funkos e imprimiendo cada uno de ellos en un bucle. 
    - Ej: `node dist/funkoPop/funko-app.js funkoList --user Aday`

### 2.2. Ejercicio de la clase práctica
Este ejercicio consistía en crear una clase abstracta que siguiera el Template Method, la cual tiene instanciados los métodos comunes de filter y map sobre una lista. A partir de esta, se crean clases hijas que especifican el método Reduce según lo que se requiera.

#### Clase FilterMap
La clase abstracta filter map es la siguiente:

```typescript
abstract class FilterMap {

  constructor(
    protected _numberCollection: number[],
    protected _filterCallback: (i: number) => boolean,
    protected _mapCallback: (i: number) => number
  ) {}

  get numberCollection() {
    return this._numberCollection;
  }

  set numberCollection(numberCollection) {
    this._numberCollection = numberCollection;
  }

  get filterCallback() {
    return this._filterCallback;
  }

  set filterCallback(filterCallback) {
    this._filterCallback = filterCallback;
  }

  get mapCallback() {
    return this._mapCallback;
  }

  set mapCallback(mapCallback) {
    this._mapCallback = mapCallback;
  }

  public filter(): number[] {
    const newList: number[] = [];
    let i = 0;
    let j = 0;
    while (this._numberCollection[i] !== undefined) {
      if (this._filterCallback(this._numberCollection[i])) {
        newList[j] = this._numberCollection[i];
        j++;
      }
      ++i;
    }
    return newList;
  }

  public map(array: number[]): number[] {
    const newList: number[] = [];
    let i = 0;
    while (array[i] !== undefined) {
      newList[i] = this._mapCallback(array[i]);
      ++i;
    }
    return newList;
  }

  protected abstract reduce(array: number[]): number;

  protected postFilter() {}

  protected postMap() {}

  protected postReduce() {}

  public run() {
    let array: number[] = this.filter();
    this.postFilter();
    array = this.map(array);
    this.postMap();
    const value = this.reduce(array);
    this.postReduce();
    return value;
  }
}
```

Observamos los siguientes elementos:
- El constructor, al que se le pasa la lista de números, así como los callback que se emplean tanto en el filter como en el map.
- Getters y Setters de tanto la lista como los callbacks.
- Método `filter` que a traves de la lista interna devuelve la lista filtrada según su callback.
- Método `map` que a partir de una lista pasada por parámetros devuelve la lista mapeada según su callback.
- Método abstracto `reduce` que se definirá en la clase hija.
- Métodos hook `postFilter`,`postMap` y `postReduce` que están vacios pero se pueden redefinir en la clase hija.
- Métodos `run` que ejecuta la secuencia la secuencia de acciones de la clase.

#### Clases hijas (FilterMapAddReduce)
En el ejercicio se desarrollaron 4 subclases similares, pero analizaremos una de ellas: FilterMapAddReduce.

```typescript
export class FilterMapAddReduce extends FilterMap {

  constructor(
    numberCollection: number[],
    callback1: (i: number) => boolean,
    callback2: (i: number) => number
  ) {
    super(numberCollection, callback1, callback2);
  }

  protected reduce(array: number[]): number {
    let i = 0;
    let accumulator = 0;
    while (array[i] !== undefined) {
      accumulator += array[i];
      ++i;
    }
    return accumulator;
  }
}

```

En las clases observamos simplemente un constructor que llama a `super()` y la especificación del reduce, que en este caso está hecha para que se añadan valores a un contador, el cual se devuelve.

## 3. Conclusiones
Lo más destacable de estos ejercicios es que a la hora de trabajar con la API síncrona de node, me costó empezar debido a que la cantidad de métodos distintos que tenía era bastante extensa y eso me perdió un poco, pero después de encontrar los métodos necesarios y leyendo un poco sobre yargs (chalk es bastante sencillo), se puede avanzar de manera sencilla. Destacar que tanto los paquetes como la API síncrona ofrece métodos muy utiles a la hora de diseñar programas, por lo que se pueden crear programas más completos gracias a ellos.

## 4. Referencias bibliográficas
- [Guión de la práctica](https://ull-esit-inf-dsi-2223.github.io/prct09-filesystem-funko-app/)
- [Apuntes sobre la API síncrona proporcionada por Node.js](https://nodejs.org/docs/latest-v19.x/api/fs.html)
- [Principios Solid](https://ull-esit-inf-dsi-2223.github.io/typescript-theory/typescript-solid.html)


```typescript
```
node dist/funkoPop/funko-app.js addFunko --user Aday --id 2 --name "Androide 16" --desc "Androide del Doctor Gero" --type "Pop!" --genre Anime --franchise "Dragon Ball" --number 12 --exclusive no --special "Mueve la cabeza" --value 17.99