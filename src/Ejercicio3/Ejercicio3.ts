
export abstract class Persona {
    private nombre: string;
    private apellido: string;
    private edad: number


    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

    }
    getnombre() : string {
        return this.nombre
    }
    getapellido() : string {
    return this.apellido
    }
    getedad() {
        return this.edad
    }

    setnombre(nuevo: string) : void {
        this.nombre = nuevo
    }
    setapellido(nuevo: string) : void {
        this.apellido = nuevo
    }
    setedad(nuevo: number) : void {
        this.edad   = nuevo
    }

    abstract recitarDatos() : void;
}

export class Estudiante extends Persona{
    private curso : string;
    private escuela :  string

    constructor(nombre: string, apellido: string, edad: number, curso: string, escuela: string) {
        super(nombre, apellido,edad)
        this.curso = curso
        this.escuela = escuela

    }
    getcurso() {
        return this.curso
    }
    getescuela() {
        return this.escuela
    }
    recitarDatos() : void {
        console.log(`Mi nombre es ${this.getnombre()} y soy estudiante, estoy en ${this.curso} curso y estudio en ${this.escuela}`)
    }
}

export class Profesor extends Persona{
   private _correo: string;

  /** @private Almacena la edad de la entidad */
  private _horario_tutorias: number;

  /**
   * Crea una nueva instancia de MiClase.
   * @param nombre - El nombre de la entidad.
   * @param apellido - El apellido de la entidad.
   * @param edad - La edad de la entidad.
   * @param correo - El correo de la entidad.
   * @param horario_tutorias - El horario de tutorías de la entidad.
   */
    constructor(nombre: string, apellido: string, edad: number, correo: string, horario_tutrías: number) {
        super(nombre, apellido,edad)
        this._correo = correo
        this._horario_tutorias = horario_tutrías
    }
  /**
   * Obtiene el correo
   * @returns El nombre de la entidad.
   */
    getcorreo(): string {
        return this._correo
    }

    gethorario_tutorias(): number {
        return this._horario_tutorias
    }

    setcorreo(nuevo: string) : void {
        this._correo = nuevo
    }
    sethorario_tutorias(nuevo: number) : void {
        this._horario_tutorias = nuevo
    }
  
  
    recitarDatos() : void {
        console.log("Mi nombre es " + this.getnombre()  + " y soy profesor, mis tutorías son a las " +  this._horario_tutorias+ " y mi correo es " + this._correo)
    }
}

type notas = [string, number]

export class Asignatura {
    private _nombre : string;
    private _profesorado : Profesor[];
    private _estudiantado : Estudiante[];
    private _notas : notas[]

    /**
     * 
     */

    constructor(nombre : string, profesorado : Profesor[], estudiantado : Estudiante[]) {
        this._nombre = nombre
        this._profesorado = profesorado
        this._estudiantado = estudiantado
        this._notas  = []
        this._estudiantado.forEach((estudiante, index) => {
            this._notas.push([estudiante.getnombre(), 0])
        })
    }

    getnombre() : string {
        return this._nombre
    }
    getprofesorado() : Profesor[] {
        return this._profesorado
    }
    getestudiantado() : Estudiante[] {
        return this._estudiantado
    }
    getnotas() : notas[] {
        return this._notas
    }   

    /**
     * 
     * 
     */
    muestraProfesorado() : void {
        console.log("El profesorado de la asignatura ${this._nombre} es: \n")
        this._profesorado.forEach(profesor => {
            console.log(profesor.recitarDatos())
        })
    }
    /**
     * Muestra los datos de los estudiantes de la asignatura
     * @returns void 
     */
    muestraEstudiantado() : void {
        console.log(`El estudiantado de la asignatura ${this._nombre} es: \n`)
        this._estudiantado.forEach(estudiante => {
            console.log(estudiante.recitarDatos())
        })
    }
    /**
     * 
     */
    buscarEstudiante(nombre: string) : void {
        let encontrado = false
        this._estudiantado.forEach(estudiante => {
            if(estudiante.getnombre() === nombre) {
                console.log(estudiante.recitarDatos())
                encontrado = true
            }
        })
    }
    /**
     * 
     */
    buscarNota(nombre: string) : number {
        let nota1 : number = 0
        this._notas.forEach(nota => {
            if(nota[0] === nombre) {
                let nota_estudiante : number = nota[1]
                nota1 = nota_estudiante
            }
        })
        return nota1
    }
    /**
     * 
     */
    buscarProfesor(nombre: string) : void {
        let encontrado = false
        this._profesorado.forEach(profesor => {
            if(profesor.getnombre() === nombre) {
                console.log(profesor.recitarDatos())
                encontrado = true
            }
        })
    }

    buscarExcelencia() : void {
        let excelentes : Estudiante[] = []
        this._estudiantado.forEach(estudiante => {
            if (this.buscarNota(estudiante.getnombre()) > 8) {
                excelentes.push(estudiante)
            }

        })
        console.log("Los estudiantes excelentes son: ")
        excelentes.forEach(estudiante => {
            console.log(estudiante.getnombre())
        })
    }

}
//if (pepe instanceof Profesor)

// this.vehiculos.splice(this.vehiculos.findIndex((vehiculo) => {
// vehiculo.getMatricula() === matricula
// }), 1)
