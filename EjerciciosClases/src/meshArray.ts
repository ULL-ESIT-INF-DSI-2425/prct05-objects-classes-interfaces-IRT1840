/**
 * 
 * @param arrayPalabras un array con las palabras a comprobar
 * @returns una tupla con la cadena y si están encadenadas o no
 */

export function meshArray(arrayPalabras : string[]) : [string, boolean | undefined] {
    console.log("Inicio de programa")
    let stringSolucion = ""
    let it1 : number = 0
    let it2 : number = 1
    arrayPalabras.forEach((palabra, index) => {
        const arrayPalabraActual : string[] = palabra.split("")
        if (index +1 >= arrayPalabras.length) {
            return [stringSolucion, true]
        }
        const arrayPalabraSiguiente : string[] = arrayPalabras[index +1].split("")
        for (let i : number = arrayPalabraSiguiente.length - 1; i >= 0; i--) {
            if (arrayPalabraActual[arrayPalabraActual.length] == arrayPalabraSiguiente[i]) {
                let igualdad : number = i
                for (let j : number = i; j >= 0; j-- ) {
                    if (arrayPalabraActual[arrayPalabraActual.length - j] !== arrayPalabraSiguiente[j]) {
                        return ["false", undefined]
                    }
                    if (j === 0) {
                        stringSolucion += arrayPalabraSiguiente.slice(0, igualdad)
                    }
                }
            }
        }

    })
    return [stringSolucion, true]



}