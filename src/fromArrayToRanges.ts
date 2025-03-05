/**
 * Convierte un array de números en un array de rangos representados como strings.
 * 
 * @param array_numeros - Un array de números ordenados ascendentemente.
 * @returns Un array de strings, donde los números consecutivos se agrupan en un rango "inicio_fin"
 *          y los números individuales se mantienen como un string único.
 */
export function fromArrayToRanges(array_numeros: number[]): string[] {
    let primer: number = array_numeros[0];
    let resultado: string[] = [];

    array_numeros.forEach((elemento, indice) => {
        let anterior: number = array_numeros[indice - 1];

        if (elemento !== anterior + 1) {
            if (primer !== elemento) {
                resultado.push(primer + "_" + anterior);
                primer = elemento;
            } else {
                resultado.push("" + primer);
            }
        }
    });

    return resultado;
}
