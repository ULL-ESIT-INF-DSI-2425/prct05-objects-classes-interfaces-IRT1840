
class cancion {
    nombre: string;
    duracion: number;
    genero: string;
    single: boolean;
    reproducciones: number;
    constructor(nombre: string, duracion: number, genero: string, single: boolean, reproducciones: number) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.genero = genero;
        this.single = single;
        this.reproducciones = reproducciones;
    }

}


class Disco {
    nombre: string;
    año: number;
    canciones: cancion[];
    constructor(nombre: string, año: number, canciones: cancion[]) {
        this.nombre = nombre;
        this.año = año;
        this.canciones = canciones;
    }
}



class Artista {
    nombre: string;
    discografia: Disco[];
    constructor(nombre: string, discos: Disco[]) {
        this.nombre = nombre;
        this.discografia = discos;
    }
}


class bibliotecaMusical {
    artistas: Artista[];
    canciones: cancion[];
    discos: Disco[];
    constructor(artistas: Artista[], canciones: cancion[], discos: Disco[]) {
        this.artistas = artistas;
        this.canciones = canciones;
        this.discos = discos;
    }
    buscarDisco(nombre: string) {
        let encontrado = false;
        this.discos.forEach(disco => {
            if (disco.nombre === nombre) {
                return disco;
                encontrado = true;
            }
        });
        if (!encontrado) {
            console.log("No se ha encontrado el disco");
        }
    }
    duracionTotalDisco(nombre: string) {
        let duracionTotal = 0;
        let encontrado = false;
        this.discos.forEach(disco => {
            if (disco.nombre === nombre) {
                disco.canciones.forEach(cancion => {
                    duracionTotal += cancion.duracion;
                });
                encontrado = true;
            }
        });
        if (!encontrado) {
            console.log("No se ha encontrado el disco");
        }
        return duracionTotal;
    }

    reproducionesDisco(nombre: string) {
        let reproducciones = 0;
        let encontrado = false;
        this.discos.forEach(disco => {
            if (disco.nombre === nombre) {
                disco.canciones.forEach(cancion => {
                    reproducciones += cancion.reproducciones;
                });
                encontrado = true;
            }
        });
        if (!encontrado) {
            console.log("No se ha encontrado el disco");
        }
        return reproducciones;
    }


}