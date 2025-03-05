//Creamos una plantilla para crear clases con comentarios de la clase y de funciones de la clase

/**
 * Representa una entidad genérica con atributos, getters y setters.
 */
class MiClase {
  /** @private Almacena el nombre de la entidad */
  private _nombre: string;

  /** @private Almacena la edad de la entidad */
  private _edad: number;

  /**
   * Crea una nueva instancia de MiClase.
   * @param nombre - El nombre de la entidad.
   * @param edad - La edad de la entidad.
   */
  constructor(nombre: string, edad: number) {
    this._nombre = nombre;
    this._edad = edad;
  }

  /**
   * Obtiene el nombre de la entidad.
   * @returns El nombre de la entidad.
   */
  public get nombre(): string {
    return this._nombre;
  }

  /**
   * Establece un nuevo nombre para la entidad.
   * @param nuevoNombre - El nuevo nombre de la entidad.
   */
  public set nombre(nuevoNombre: string) {
    if (nuevoNombre.length === 0) {
      throw new Error("El nombre no puede estar vacío.");
    }
    this._nombre = nuevoNombre;
  }

  /**
   * Obtiene la edad de la entidad.
   * @returns La edad de la entidad.
   */
  public get edad(): number {
    return this._edad;
  }

  /**
   * Establece una nueva edad para la entidad.
   * @param nuevaEdad - La nueva edad de la entidad.
   */
  public set edad(nuevaEdad: number) {
    if (nuevaEdad < 0) {
      throw new Error("La edad no puede ser negativa.");
    }
    this._edad = nuevaEdad;
  }

  /**
   * Muestra una presentación de la entidad.
   * @returns Una cadena con la información de la entidad.
   */
  public presentarse(): string {
    return `Hola, mi nombre es ${this._nombre} y tengo ${this._edad} años.`;
  }
}

// Ejemplo de uso
const persona = new MiClase("Juan", 25);
console.log(persona.presentarse()); // Hola, mi nombre es Juan y tengo 25 años.

persona.nombre = "María";
persona.edad = 30;
console.log(persona.presentarse()); // Hola, mi nombre es María y tengo 30 años.
