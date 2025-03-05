import { describe,vi, it, expect } from 'vitest';

// Importamos las clases (ajusta la ruta según tu proyecto)
import { Persona, Estudiante, Profesor, Asignatura } from "../src/Ejercicio3/Ejercicio3.ts";

describe('Persona', () => {
    it('Debe crear una Persona con los atributos correctos', () => {
        const paco = new Estudiante("Paco", "García", 25, "2", "MP");
        
        expect(paco.getnombre()).toBe('Paco');
        expect(paco.getapellido()).toBe('García');
        expect(paco.getedad()).toBe(25);
    });
});

describe('Estudiante', () => {
    it('Debe crear una persona con los atributos correctos', () => {
        const pepe = new Estudiante("Pepe", "García", 25, "2", "MP");

        expect(pepe.getcurso()).toBe('2');
        expect(pepe.getescuela()).toBe('MP');

    });
    
    it('Debe mostrar adecuadamente su resumen', () => {
        const pepe = new Estudiante("Pepe", "García", 25, "2", "MP");

        const consoleSpy = vi.spyOn(console, 'log');
        pepe.recitarDatos();
        expect(consoleSpy).toHaveBeenCalledWith("Mi nombre es Pepe y soy estudiante, estoy en 2 curso y estudio en MP");
    });
});

describe('Profesor', () => {
    it('Debe crear un profesor con los atributos correctos', () => {
        const pepe = new Profesor("Pepe", "García", 25, "2", 2);

        expect(pepe.getcorreo()).toBe('2');
        expect(pepe.gethorario_tutorias()).toBe(2);

    });
    
    it('Debe mostrar adecuadamente su resumen', () => {
        const pepe = new Profesor("Pepe", "García", 25, "2", 2);

        const consoleSpy = vi.spyOn(console, 'log');
        pepe.recitarDatos();
        expect(consoleSpy).toHaveBeenCalledWith("Mi nombre es Pepe y soy profesor, mis tutorías son a las 2 y mi correo es 2");
    });
});


describe('Asignatura', () => {
    it('Debe crear una asignatura con los atributos correctos', () => {
        const pepe = new Profesor("Pepe", "García", 25, "2", 2);
        const carlitos = new Estudiante("Carlitos", "García", 25, "2", "MP");
        const mates = new Asignatura("Matemáticas", [pepe], [carlitos])
        expect(mates.getnombre()).toBe('Matemáticas');
        expect(mates.getprofesorado()).toStrictEqual([pepe]);
        expect(mates.getestudiantado()).toStrictEqual([carlitos]);

    });
    
    it('Debe mostrar adecuadamente su resumen', () => {
        const pepe = new Profesor("Pepe", "García", 25, "2", 2);

        const consoleSpy = vi.spyOn(console, 'log');
        pepe.recitarDatos();
        expect(consoleSpy).toHaveBeenCalledWith("Mi nombre es Pepe y soy profesor, mis tutorías son a las 2 y mi correo es 2");
    });
});



