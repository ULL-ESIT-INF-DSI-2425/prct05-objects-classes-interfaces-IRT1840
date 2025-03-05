import { describe, expect, test } from "vitest"
import {mediaFilter} from "../src/mediaFilter.ts"

describe("Pruebas función mediafilter", () => {
    test("Prueba con valores válidos", () => {
        expect(mediaFilter(3, 3, [[125, 150, 200], [145, 50, 90], [85, 13, 100]])).toStrictEqual([ [ 116, 145, 157 ], [ 93, 115, 118 ], [ 72, 91, 85 ] ])
    })


    test("Prueba con valores distintos", () => {
        expect(mediaFilter(3, 3, [[125, 150, 100], [145, 50, 90], [85, 13, 100]])).toStrictEqual([ [ 116, 128, 128 ], [ 93, 104, 100 ], [ 72, 91, 85 ] ])
    })


})