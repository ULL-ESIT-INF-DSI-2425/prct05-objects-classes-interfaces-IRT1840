import { describe, expect, test } from "vitest"
import {meanAndConcatenate} from "../src/meanAndConcatenate"

describe("Pruebas función media y concatenacion", () => {
    test("Prueba con valores válidos", () => {
        expect(meanAndConcatenate([1, 2, 3, "hola", 4, 5, "adios", 6, 7, 8, 9, 10])).toStrictEqual([5.5, "holaadios"])
    })

    test("Prueba con solo numeros", () => {
        expect(meanAndConcatenate([5,5,5,5,5,5,5,5,5,5,5,5])[0]).toBe(5)
    })
    test("Prueba con solo strings", () => {
        expect(meanAndConcatenate(["papfrita","papafrita"])).toStrictEqual([0, "papfritapapafrita"])
    })


})