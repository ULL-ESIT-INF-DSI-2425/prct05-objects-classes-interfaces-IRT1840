
type tipo_pokemon = string
enum tipos {AGUA, FUEGO, PLANTA}

export class Pokemon {
    private nombre: string;
    private tipo: tipo_pokemon;
    private peso: number;
    private altura: number;
    private ataque: number;
    private defensa: number;
    private vida: number;

    constructor(nombre: string, tipo: tipo_pokemon, peso: number, altura: number, ataque: number, defensa: number, vida: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.peso = peso;
        this.altura = altura;
        this.ataque = ataque;
        this.defensa = defensa;
        this.vida = vida;
    }

    // Métodos de acceso (getters)
    getNombre(): string {
        return this.nombre;
    }

    getTipo(): tipo_pokemon {
        return this.tipo;
    }

    getPeso(): number {
        return this.peso;
    }
    
    getAltura(): number {
        return this.altura;
    }

    getAtaque(): number {
        return this.ataque;
    }

    getDefensa(): number {
        return this.defensa;
    }

    getVida(): number {
        return this.vida;
    }

    imprimirPokemon() {
        console.log("Nombre: " + this.nombre + "\nTipo: " + this.tipo + "\nPeso: " + this.peso + "\nAltura: " + this.altura + "\nAtaque: " + this.ataque + "\nDefensa: " + this.defensa + "\nVida: " + this.vida);
    }
}


export class Pokedex {
    listaPokemon: Pokemon[] = [];

    constructor(listaPokemon: Pokemon[]) {
        this.listaPokemon = listaPokemon;
    }

    añadirPokemon(pokemon: Pokemon) {
        this.listaPokemon.push(pokemon);
    }
    buscarPokemon(nombre: string) {
        let encontrado = false;
        this.listaPokemon.forEach(pokemon => {
            if (pokemon.getNombre() === nombre) {
                console.log(pokemon);
                encontrado = true;
            }
        });
        if (!encontrado) {
            console.log("No se ha encontrado el pokemon");
        }
    }
    buscarPokemonTipo(tipo: string) {
        tipo =tipo.toUpperCase();
        let encontrado = false;
        this.listaPokemon.forEach(pokemon => {
            if (pokemon.getTipo() === tipo) {
                console.log(pokemon);
                encontrado = true;
                console.log("${pokemon.getNombre} es de tipo ${tipo} \n");
            }
        });
        if (!encontrado) {
            console.log("No se han encontrado pokemon con este elemento");
        }
    }
    buscarPokemonAtaque(ataque: number) {
        let encontrado = false;
        this.listaPokemon.forEach(pokemon => {
            if (pokemon.getAtaque() === ataque) {
                console.log(pokemon);
                encontrado = true;
                console.log("${pokemon.getNombre} tiene un ataque de ${ataque} \n");
            }
        });
        if (!encontrado) {
            console.log("No se han encontrado pokemon con este ataque");
        }
    }
    buscarPokemonDefensa(defensa: number) {
        let encontrado = false;
        this.listaPokemon.forEach(pokemon => {
            if (pokemon.getDefensa() === defensa) {
                console.log(pokemon);
                encontrado = true;
                console.log("${pokemon.getNombre} tiene una defensa de ${defensa} \n");
            }
        });
        if (!encontrado) {
            console.log("No se han encontrado pokemon con esta defensa");
        }
    }
    buscarPokemonVida(vida: number) {
        let encontrado = false;
        this.listaPokemon.forEach(pokemon => {
            if (pokemon.getVida() === vida) {
                console.log(pokemon);
                encontrado = true;
                console.log("${pokemon.getNombre} tiene una vida de ${vida} \n");
            }
        });
        if (!encontrado) {
            console.log("No se han encontrado pokemon con esta vida");
        }
    }

    mostrarPokemon() {
        this.listaPokemon.forEach(pokemon => {
            pokemon.imprimirPokemon();
        });
    }

}

export class Combate {
    pokemon1: Pokemon;
    pokemon2: Pokemon;

    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    start() {
        let vidaPokemon1 = this.pokemon1.getVida();
        let vidaPokemon2 = this.pokemon2.getVida();
        while (vidaPokemon1 > 0 && vidaPokemon2 > 0) {
            vidaPokemon2 -= this.ataque(this.pokemon1.getTipo(), this.pokemon2.getTipo(), this.pokemon1.getAtaque(), this.pokemon2.getDefensa());
            console.log("${this.pokemon1.getNombre} ataca a ${this.pokemon2.getNombre} y hace ${this.ataque(this.pokemon1.getTipo(), this.pokemon2.getTipo(), this.pokemon1.getAtaque(), this.pokemon2.getDefensa())} de daño");
            console.log("${this.pokemon2.getNombre} tiene ${vidaPokemon2} de vida");
            if (vidaPokemon2 >= 0) {
                vidaPokemon1 -= this.ataque(this.pokemon2.getTipo(), this.pokemon1.getTipo(), this.pokemon2.getAtaque(), this.pokemon1.getDefensa());
                console.log("${this.pokemon2.getNombre} ataca a ${this.pokemon1.getNombre} y hace ${this.ataque(this.pokemon2.getTipo(), this.pokemon1.getTipo(), this.pokemon2.getAtaque(), this.pokemon1.getDefensa())} de daño");
                console.log("${this.pokemon1.getNombre} tiene ${vidaPokemon1} de vida");
            }
            console
        }
        if (vidaPokemon1 <= 0) {
            console.log("El ganador es: " + this.pokemon2.getNombre());
        } else {
            console.log("El ganador es: " + this.pokemon1.getNombre());
        }
    }

    ataque(tipo1 : string, tipo2 : string, ataque : number, defensa : number) {
        let efectividad = 1;
        if (tipo1 === "AGUA" && tipo2 === "FUEGO") {
            efectividad = 2;
        }
        if (tipo1 === "FUEGO" && tipo2 === "PLANTA") {
            efectividad = 2;
        }
        if (tipo1 === "PLANTA" && tipo2 === "AGUA") {
            efectividad = 2;
        }
        if (tipo1 === "FUEGO" && tipo2 === "AGUA") {
            efectividad = 0.5;
        }
        if (tipo1 === "PLANTA" && tipo2 === "FUEGO") {
            efectividad = 0.5;
        }
        if (tipo1 === "AGUA" && tipo2 === "PLANTA") {
            efectividad = 0.5;
        }
        return (ataque - defensa) * efectividad;

    }

}