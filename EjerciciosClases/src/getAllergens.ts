/**
 * Representa un paciente como una tupla con el total de alérgenos en formato numérico y su nombre.
 */
type paciente = [number, string];

/**
 * Representa el resultado procesado de un paciente con su nombre y una lista de alérgenos detectados.
 */
type resultado_paciente = [string, string[]];

/**
 * Convierte una lista de pacientes con un código numérico de alérgenos en una lista de nombres con sus respectivos alérgenos.
 * 
 * @param tuplas_pacientes - Lista de pacientes en forma de tupla `[total_alergenos, nombre]`.
 * @returns Un array de tuplas `[nombre, alergenos]`, donde `alergenos` es una lista de los alérgenos detectados.
 */
export function getAllergerns(tuplas_pacientes: paciente[]): resultado_paciente[] {
    let resultado: resultado_paciente[] = [];
    tuplas_pacientes.forEach((paciente) => {
        let numero_alergenos: number = paciente[0];
        let nombre: string = paciente[1];
        let alergenos: string[] = [];
        while (numero_alergenos > 0) {
            if (numero_alergenos < 0 || numero_alergenos > 255) {
                return undefined;
            }
            if (numero_alergenos >= 128) {
                alergenos.push("Gato");
                numero_alergenos -= 128;
            }
            if (numero_alergenos >= 64) {
                alergenos.push("Polen");
                numero_alergenos -= 64;
            }
            if (numero_alergenos >= 32) {
                alergenos.push("Chocolate");
                numero_alergenos -= 32;
            }
            if (numero_alergenos >= 16) {
                alergenos.push("Tomate");
                numero_alergenos -= 16;
            }
            if (numero_alergenos >= 8) {
                alergenos.push("Fresa");
                numero_alergenos -= 8;
            }
            if (numero_alergenos >= 4) {
                alergenos.push("Marisco");
                numero_alergenos -= 4;
            }
            if (numero_alergenos >= 2) {
                alergenos.push("Cacahuete");
                numero_alergenos -= 2;
            }
            if (numero_alergenos >= 1) {
                alergenos.push("Huevo");
                numero_alergenos -= 1;
            }
        }
        let resultado_individual: resultado_paciente = [nombre, alergenos];
        resultado.push(resultado_individual);
    });
    return resultado;
}

/**

type paciente = [number, string];


type resultado_paciente = [string, string[]];


export function getAllergerns(tuplas_pacientes: paciente[]): resultado_paciente[] {
    // Tupla con los valores binarios y los alérgenos correspondientes
    const alergenos: [number, string][] = [
        [128, "Gato"],
        [64, "Polen"],
        [32, "Chocolate"],
        [16, "Tomate"],
        [8, "Fresa"],
        [4, "Marisco"],
        [2, "Cacahuete"],
        [1, "Huevo"]
    ];

    return tuplas_pacientes
        .filter(([num]) => num >= 0 && num <= 255) // Filtrar valores inválidos
        .map(([numero_alergenos, nombre]) => {
            let alergenosDetectados: string[] = [];

            // Iterar sobre la tupla de alérgenos
            for (const [valor, alergeno] of alergenos) {
                if (numero_alergenos >= valor) {
                    alergenosDetectados.push(alergeno);
                    numero_alergenos -= valor;
                }
            }

            return [nombre, alergenosDetectados] as resultado_paciente;
        });
}
   */
