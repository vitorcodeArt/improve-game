export class Temas {

  name!: string;
  url!: string;
}


let temasSelecionados = [];
let heros: Temas[] = [];

let hero1: Temas = { name: "Batman", url: "url" }
let hero2: Temas = { name: "Flash", url: "url" }
let hero3: Temas = { name: "Ciclópe", url: "url" }
let hero4: Temas = { name: "Xavier", url: "url" }
let hero5: Temas = { name: "Miranha", url: "url" }
let hero6: Temas = { name: "Mutano", url: "url" }
let hero7: Temas = { name: "Coringa", url: "url" }
let hero8: Temas = { name: "Lanterna Verde", url: "url" }

heros.push(hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8);
temasSelecionados.push(heros)

console.log(temasSelecionados);

console.log(heros[0]);


