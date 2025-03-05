
export abstract class Vehiculo {
    private matricula: string;
    private marca: string;
    private altura: number;

    private cilindrada: number;

    constructor(matricula: string, marca : string, altura : number, cilindrada : number) {
        this.matricula = matricula
        this.marca = marca
        this.altura = altura
        this.cilindrada = cilindrada
    }

    /**
     * 
     * @returns la matricula del vehiculo
     */
    getMatricula() : string {
        return this.matricula
    }

    /**
     * 
     * @returns La marca del vehiculo en una string
     */
    getMarca() : string {
        return this.marca
    }
    /**
     * 
     * @returns La altura del vehiculo en un Number
     */
    getAltura() : number {
        return this.altura
    }

    /**
     * 
     * @returns La cilindrada del vehiculo en un Number
     */

    getcilindrada() : number {
        return this.cilindrada
    }

    /**
     * Función abstracta a implementar en clases hijas
     * @return Muestra toda la información del vehiculo. 
     */
    abstract datos() : string;
}

export class Coche extends Vehiculo{
    private n_puertas : number
    private espacioMaletero : number

    /**
     * Constructor de la clase coche
     * @param matricula Matricula del vehiculo
     * @param marca Marca del coche
     * @param altura Altura del coche
     * @param cilindrada Cilindrada del coche
     * @param n_puertas Numero de puertas que tiene
     * @param espacioMaletero litros de espacio de maletero
     */
    constructor(matricula: string, marca : string, altura : number, cilindrada : number, n_puertas : number, espacioMaletero : number) {
        super(matricula, marca, altura, cilindrada)
        this.n_puertas = n_puertas
        this.espacioMaletero = espacioMaletero
    }
    
    /**
     * 
     * @returns el numero de puertas que tiene el coche
     */
    getNPuertas() {
        return this.n_puertas
    }

    /**
     * 
     * @returns El numero de litros de espacio de maletero
     */
    getEspacioMaletero() : number {
        return this.espacioMaletero
    }

    /**
     * 
     * @returns retorna un string con todos los datos del vehiculo
     */
    datos() : string {
        return "El coche con matricula " + this.getMatricula() + " de la marca " + this.getMarca() + " tiene una altura de " + this.getAltura() + " una cilindrada de " + this.getcilindrada() + " tiene " + this.n_puertas + " puertas y un maletero de " + this.espacioMaletero + " litros"

    }
 
}

export class Moto extends Vehiculo{
    private pataCabra : boolean
    private colorChaqueta : string

    /**
     * Constructor de la clase moto
     * @param matricula matricula del vehiculo
     * @param marca Marca de la moto
     * @param altura altura de la moto
     * @param cilindrada Cilindrada de la moto
     * @param pataCabra Si tiene o no pata de cabra
     * @param colorChaqueta Si viene o no con  chaqueta de cuero
     */
    constructor(matricula: string, marca : string, altura : number, cilindrada : number, pataCabra : boolean, colorChaqueta : string) {
        super(matricula, marca, altura, cilindrada)
        this.pataCabra = pataCabra
        this.colorChaqueta = colorChaqueta
    }

        /**
         * 
         * @returns retorna true o false dependiendo si tiene pata de cabra
         */
        getPata() {
            return this.pataCabra
        }

        /**
         * 
         * @returns retorna del color de la chaqueta de cuero
         */
        getChaqueta() {
            return this.colorChaqueta
        }

    /**
     * 
     * @returns Retorna un string con un resumen de los datos de la moto
     */
    datos() : string {
        return "La moto con matricula " + this.getMatricula() + " de la marca " + this.getMarca() + " tiene una altura de " + this.getAltura() + " una cilindrada de " + this.getcilindrada() + " y una chaqueta de cuero de color " + this.colorChaqueta

    }
 
}



export class Parking {


}
//if (pepe instanceof Profesor)

// this.vehiculos.splice(this.vehiculos.findIndex((vehiculo) => {
// vehiculo.getMatricula() === matricula
// }), 1)
