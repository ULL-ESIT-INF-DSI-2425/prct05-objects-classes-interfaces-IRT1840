/**
 * Métodos de búsqueda en Arrays y Strings:
 * 
 * 1. **`includes()` en Arrays:**
 *    - Verifica si un array contiene un elemento.
 *    - Devuelve `true` si lo encuentra, `false` si no.
 *    - Puede aceptar un índice de inicio.
 * 
 *    Ejemplo:
 *    ```typescript
 *    [1, 2, 3].includes(2); // true
 *    [1, 2, 3].includes(4); // false
 *    ```
 *    
 * 2. **`includes()` en Strings:**
 *    - Verifica si una subcadena existe en una cadena.
 *    - Sensible a mayúsculas y minúsculas.
 * 
 *    Ejemplo:
 *    ```typescript
 *    "Hola Mundo".includes("Hola"); // true
 *    "Hola Mundo".includes("mundo"); // false
 *    ```
 *    
 * 3. **Diferencias con otros métodos:**
 *    - **`indexOf()`**: Devuelve el índice o `-1` si no se encuentra.
 *    - **`find()`**: Devuelve el primer elemento que cumple una condición.
 * 
 * **Resumen**: `includes()` es directo y útil para comprobar si un valor está presente sin preocuparse por su índice o detalles adicionales.
 */



/**
 * Enum que representa los colores de las bandas de una resistencia y su correspondiente valor numérico.
 */
enum RESISTENCIAS {
    NEGRO, // 0
    MARRÓN, // 1
    ROJO, // 2
    NARANJA, // 3
    AMARILLO, // 4
    VERDE, // 5
    AZUL, // 6
    VIOLETA, // 7
    GRIS, // 8
    BLANCO // 9
  }
  
  /**
   * Calcula el valor numérico de una resistencia basado en los dos primeros colores de sus bandas.
   *
   * @param lista_resistencias - Lista de nombres de los colores de las bandas de la resistencia.
   * @returns El valor numérico de la resistencia si los colores son válidos, `undefined` en caso contrario.
   */
  export function resistencias(...lista_resistencias: string[]): number | undefined {
    lista_resistencias = lista_resistencias.map(element => element.toUpperCase());
    let resultado: string = "";
  
    for (let i: number = 0; i < 2; i++) {
      switch (lista_resistencias[i]) {
        case "NEGRO":
          resultado += RESISTENCIAS.NEGRO;
          break;
        case "MARRÓN":
          resultado += RESISTENCIAS.MARRÓN;
          break;
        case "ROJO":
          resultado += RESISTENCIAS.ROJO;
          break;
        case "NARANJA":
          resultado += RESISTENCIAS.NARANJA;
          break;
        case "AMARILLO":
          resultado += RESISTENCIAS.AMARILLO;
          break;
        case "VERDE":
          resultado += RESISTENCIAS.VERDE;
          break;
        case "AZUL":
          resultado += RESISTENCIAS.AZUL;
          break;
        case "VIOLETA":
          resultado += RESISTENCIAS.VIOLETA;
          break;
        case "GRIS":
          resultado += RESISTENCIAS.GRIS;
          break;
        case "BLANCO":
          resultado += RESISTENCIAS.BLANCO;
          break;
        default:
          return undefined;
      }
    }
    return Number(resultado);
  }