async function getPokemon(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();
    console.log(data);
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

getPokemon('bulbasaur')
