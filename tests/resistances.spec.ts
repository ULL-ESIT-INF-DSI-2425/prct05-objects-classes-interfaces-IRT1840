import { describe, expect, test } from "vitest"
import { resistencias } from "../src/resistances"

describe("Pruebas función resistencias", () => {
    test("Prueba con dos colores válidos retorna el numero correcto", () => {
        expect(resistencias("Rojo", "Verde")).toBe(25)
    })

    test("Prueba con colores válidos pero más de dos retorna el numero correcto", () => {
        expect(resistencias("Rojo", "Verde", "Amarillo", "Blanco")).toBe(25)
    })


})