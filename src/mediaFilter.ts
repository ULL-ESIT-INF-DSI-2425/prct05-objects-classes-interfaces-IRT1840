/**
 * 
 * @param filas - las filas de la matriz
 * @param columans - las columnas de la matriz
 * @param pantalla - Una matriz de numeros con los piceles originales
 * 
 * 
 * 
 * @returns Retorna la pantalla con el filtro de suavizado
 */

export function mediaFilter(filas: number, columnas: number, pantalla : number[][]) : number[][] | undefined {
    if (filas !== columnas) {return undefined}
    let nueva_pantalla : number[][] = []

    pantalla.forEach((array, fila) => {
        let media : number = 0
        nueva_pantalla.push([])
        array.forEach((pixel, columna) => {
            if (pixel < 0 || pixel > 255) {return undefined}
            let contador_vecinos : number = 0
            for (let i : number = -1; i <= 1; i++) {
                for (let j : number = -1; j <= 1; j++) {
                    let fila_lectura : number = fila + i
                    let columna_lectura : number = columna + j
                    if (columna_lectura >= 0 && fila_lectura >= 0 && columna_lectura < columnas && fila_lectura < filas) {
                        contador_vecinos++
                        media += pantalla[fila + i][columna +j]
                    }
                }
            }
            
            media = Math.trunc(media/ contador_vecinos -1) 
            
            
            nueva_pantalla[fila].push(media)
        })
        
         
    })

    return nueva_pantalla
}