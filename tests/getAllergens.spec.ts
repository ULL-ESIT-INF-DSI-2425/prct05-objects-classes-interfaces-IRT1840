import { describe, expect, test } from "vitest"
import {getAllergerns} from "../src/getAllergens"

describe("Pruebas función media y concatenacion", () => {
    test("Prueba con valores válidos", () => {
        type paciente = [number, string];
        const pacientes : paciente[]= [[18, "Pepe"]]
        expect(getAllergerns(pacientes)).toStrictEqual([["Pepe",["Tomate","Cacahuete"]]])
    })
    test("Prueba con valores válidos", () => {
        type paciente = [number, string];
        const pacientes : paciente[]= [[18, "Pepe"], [25, "Juan"]]
        expect(getAllergerns(pacientes)).toStrictEqual([["Pepe",["Tomate","Cacahuete"]],["Juan",["Tomate","Fresa", "Huevo"]]])

    })


})