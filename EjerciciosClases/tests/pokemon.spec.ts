import { describe,vi, it, expect } from 'vitest';

// Importamos las clases (ajusta la ruta según tu proyecto)
import { Pokemon, Pokedex, Combate } from "../src/Ejercicio1/pokemon.ts";

describe('Pokemon', () => {
    it('Debe crear un Pokémon con las propiedades correctas', () => {
        const pikachu = new Pokemon('Pikachu', 'ELECTRICO', 6, 0.4, 55, 40, 100);
        
        expect(pikachu.getNombre()).toBe('Pikachu');
        expect(pikachu.getTipo()).toBe('ELECTRICO');
        expect(pikachu.getPeso()).toBe(6);
        expect(pikachu.getAltura()).toBe(0.4);
        expect(pikachu.getAtaque()).toBe(55);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        expect(pikachu.getDefensa()).toBe(40);
        expect(pikachu.getVida()).toBe(100);
    });
});

describe('Pokedex', () => {
    it('Debe añadir un Pokémon a la Pokedex', () => {
        const charmander = new Pokemon('Charmander', 'FUEGO', 8, 0.6, 52, 43, 100);
        const pokedex = new Pokedex([]);

        pokedex.añadirPokemon(charmander);
        expect(pokedex.listaPokemon.length).toBe(1);
        expect(pokedex.listaPokemon[0].getNombre()).toBe('Charmander');
    });
    
    it('Debe encontrar un Pokémon por nombre', () => {
        const bulbasaur = new Pokemon('Bulbasaur', 'PLANTA', 7, 0.7, 49, 49, 100);
        const pokedex = new Pokedex([bulbasaur]);

        const consoleSpy = vi.spyOn(console, 'log');
        pokedex.buscarPokemon('Bulbasaur');
        expect(consoleSpy).toHaveBeenCalledWith(bulbasaur);
    });

    it('Debe mostrar mensaje si no encuentra un Pokémon', () => {
        const pokedex = new Pokedex([]);

        const consoleSpy = vi.spyOn(console, 'log');
        pokedex.buscarPokemon('Pikachu');
        expect(consoleSpy).toHaveBeenCalledWith("No se ha encontrado el pokemon");
    });
});

describe('Combate', () => {
    it('Debe determinar un ganador en combate', () => {
        const squirtle = new Pokemon('Squirtle', 'AGUA', 9, 0.5, 48, 65, 100);
        const charmander = new Pokemon('Charmander', 'FUEGO', 8, 0.6, 52, 43, 100);
        const combate = new Combate(squirtle, charmander);

        const consoleSpy = vi.spyOn(console, 'log');
        combate.start();
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('El ganador es:'));
    });
});
