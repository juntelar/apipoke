const pokimon = {
    render: () => {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon/rayquaza";
        const container = document.querySelector('#hola');
        let htmlcontent = "";

        fetch(apiUrl)
            .then(response => response.json())
            .then((pokemonData) => {
                const ray = pokemonData;

                htmlcontent += `<div class="col-md-4">
                    <h4 class="title">${ray.name}</h4>
                    <p class="title">Types: ${ray.types.map(type => type.type.name).join(', ')}</p>
                    <p class="title">Moves: ${ray.moves.map(move => move.move.name).join(', ')}</p>
                    <a href="${ray.sprites.front_shiny}" target="_blank">
                        <img src="${ray.sprites.front_shiny}" alt="${ray.name} - ${ray.moves.map(move => move.move.name).join(', ')} - ${ray.types.map(type => type.type.name).join(', ')}">
                    </a>
                </div>`;

                container.innerHTML = htmlcontent;
            })
            .catch(error => console.error('Error fetching Pokemon data:', error));
    }
};

pokimon.render();
