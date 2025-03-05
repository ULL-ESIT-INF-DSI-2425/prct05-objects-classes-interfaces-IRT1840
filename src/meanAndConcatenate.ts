type Resultado = [number, string];

/**
 * Calcula la media de los números y concatena las cadenas en un array mixto.
 * 
 * @param array - Un array que puede contener elementos de tipo `string` o `number`.
 * @returns Una tupla donde el primer elemento es la media de los números y el segundo es la concatenación de las cadenas.
 */
export function meanAndConcatenate(array: (string | number)[]): Resultado {
    let suma: number = 0;
    let n_elementos: number = 0;
    let concatenacion: string = "";

    array.forEach((elemento) => {
        if (typeof elemento === "number") {
            suma += elemento;
            n_elementos++;
        }
        if (typeof elemento === "string") {
            concatenacion += elemento;
        }
    });

    let media: number = n_elementos > 0 ? suma / n_elementos : 0;
    return [media, concatenacion];
}
