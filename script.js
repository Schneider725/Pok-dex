async function getPokemon(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();
    console.log(data);
    pokename.innerText = data.name
    display.innerText = "";
    for (let i = 0; i < data.types.length; i++) {
      display.innerText += `${data.types[i].type.name} \n`;
    }
    sprite.src = data.sprites.front_default
  } catch {
     display.innerText = 'Not a valid pokemon'
    // throw new Error("this is not a valid pokemon");
  }
}

async function getRandom(pokemon) {
  const num = Math.floor(Math.random() * 151);
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${num}`
    );
    const data = await response.json();
    console.log(data);
    pokename.innerText = data.name;
    display.innerText = "";
    for (let i = 0; i < data.types.length; i++) {
      display.innerText += `${data.types[i].type.name} \n`;
    }
    sprite.src = data.sprites.front_default
  } catch {
     display.innerText = 'Not a valid pokemon'
    // throw new Error("this is not a valid pokemon");
  }
}

const search = document.getElementById("search");
const input = document.getElementById("input");
const display = document.getElementById("display");
const sprite = document.getElementById('sprite')
const random = document.getElementById('random')
const pokename = document.getElementById('pokename')

search.addEventListener("click", () => {
  const pokemon = input.value;

  getPokemon(pokemon);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const pokemon = input.value;

    getPokemon(pokemon);
  }
});

random.addEventListener('click', getRandom)

getPokemon('bulbasaur')
