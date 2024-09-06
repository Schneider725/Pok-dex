async function getPokemon(pokemon) {
  const poke = pokemon.toLowerCase();
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${poke}`
    );
    const data = await response.json();
    console.log(data);
    pokename.innerText = `Pokedex Number : ${data.id} \n ${data.name}`;
    display.innerText = "";
    for (let i = 0; i < data.types.length; i++) {
      display.innerText += `${data.types[i].type.name} \n`;
    }
    sprite.src = data.sprites.front_default;

    const color = data.types[0].type.name;

    changeColor(color)
  } catch {
    pokename.innerText = `???`;
    display.innerText = "Not a valid pokemon";
    // throw new Error("this is not a valid pokemon");
  }
}

async function getRandom() {
  const num = Math.floor(Math.random() * 1025);
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    console.log(data);
    pokename.innerText = `Pokedex Number : ${data.id} \n ${data.name}`;
    display.innerText = "";
    for (let i = 0; i < data.types.length; i++) {
      display.innerText += `${data.types[i].type.name} \n`;
    }
    sprite.src = data.sprites.front_default;

    const color = data.types[0].type.name;
    changeColor(color)
  } catch {
    display.innerText = "Not a valid pokemon";
    // throw new Error("this is not a valid pokemon");
  }
}

function changeColor(color) {
  if(color == 'fire') {
    document.body.style.backgroundImage = `linear-gradient(#e7242f,white)`
    theme.setAttribute('content', '#e7242f')
  } else if(color == 'water') {
    document.body.style.backgroundImage = `linear-gradient(#287fed,white)`
    theme.setAttribute('content', '#287fed')
  } else if(color == 'grass') {
    document.body.style.backgroundImage = `linear-gradient(#429f2a,white)`
    theme.setAttribute('content', '#429f2a')
  } else if(color == 'flying') {
     document.body.style.backgroundImage = `linear-gradient(#7fb9ef,white)`
     theme.setAttribute('content', '#7fb9ef')
  }else if (color == 'poison') {
    document.body.style.backgroundImage = `linear-gradient(#9241c9,white)`
    theme.setAttribute('content', '#9241c9')
  }else if (color == 'electric') {
    document.body.style.backgroundImage = `linear-gradient(#f9bf00,white)`
    theme.setAttribute('content', '#f9bf00')
  }else if (color == 'fairy') {
    document.body.style.backgroundImage = `linear-gradient(#ec72ec,white)`
    theme.setAttribute('content', '#ec72ec')
  }else if (color == 'bug') {
    document.body.style.backgroundImage = `linear-gradient(#91a025,white)`
    theme.setAttribute('content', '#91a025')
  }else if (color == 'fighting') {
    document.body.style.backgroundImage = `linear-gradient(#ff8000,white)`
    theme.setAttribute('content', '#ff8000')
  }else if (color == 'ground') {
    document.body.style.backgroundImage = `linear-gradient(#8f5020,white)`
    theme.setAttribute('content', '#8f5020')
  }else if (color == 'rock') {
    document.body.style.backgroundImage = `linear-gradient(#adab7a,white)`
    theme.setAttribute('content', '#adab7a')
  }else if (color == 'psychic') {
    document.body.style.backgroundImage = `linear-gradient(#f23f79,white)`
    theme.setAttribute('content', '#f23f79')
  }else if (color == 'ice') {
    document.body.style.backgroundImage = `linear-gradient(#60c7ee,white)`
    theme.setAttribute('content', '#60c7ee')
  }else if (color == 'dragon') {
    document.body.style.backgroundImage = `linear-gradient(#5260dc,white)`
    theme.setAttribute('content', '#5260dc')
  }else if (color == 'ghost') {
    document.body.style.backgroundImage = `linear-gradient(#714171,white)`
    theme.setAttribute('content', '#714171')
  }else if (color == 'steel') {
    document.body.style.backgroundImage = `linear-gradient(#62a1b4,white)`
    theme.setAttribute('content', '#62a1b4')
  }else if (color == 'dark') {
    document.body.style.backgroundImage = `linear-gradient(#634c4f,white)`
    theme.setAttribute('content', '#634c4f')
  }else if (color == 'normal') {
    document.body.style.backgroundImage = `linear-gradient(#a0a09e,white)`
    theme.setAttribute('content', '#a0a09e')
  }

}
const search = document.getElementById("search");
const input = document.getElementById("input");
const display = document.getElementById("display");
const sprite = document.getElementById("sprite");
const random = document.getElementById("random");
const pokename = document.getElementById("pokename");
const theme = document.getElementById('theme')

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

random.addEventListener("click", getRandom);

getPokemon("bulbasaur");
