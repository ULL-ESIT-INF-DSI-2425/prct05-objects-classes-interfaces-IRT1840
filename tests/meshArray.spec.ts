import { describe, expect, test } from "vitest"
import {meshArray} from "../src/meshArray.ts"

describe("Pruebas función mediafilter", () => {
    test("Prueba con valores válidos", () => {
        expect(meshArray(["allow", "lowering", "ringmaster", "terror"]) )
    })


    test("Prueba con valores distintos", () => {
        expect(meshArray(["allow", "lowering", "gongt", "terror"]) )
    })


})