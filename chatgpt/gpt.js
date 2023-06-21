const containers = document.querySelectorAll('.container');
    const pokemonCards = document.querySelectorAll('.pokemon-card');

    pokemonCards.forEach((card) => {
      card.addEventListener('dragstart', dragStart);
    });

    containers.forEach((container) => {
      container.addEventListener('dragover', dragOver);
      container.addEventListener('drop', drop);
    });

    function dragStart(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragOver(e) {
      e.preventDefault();
    }

    function drop(e) {
      e.preventDefault();
      const pokemonId = e.dataTransfer.getData('text/plain');
      const containerId = e.target.id;
      const container = document.getElementById(containerId);
      const pokemonCard = document.getElementById(pokemonId);

      if (container.dataset.pokemon === pokemonId.substr(-1)) {
        container.classList.add('correct');
        container.innerText = `#${container.dataset.pokemon}`;
        pokemonCard.draggable = false;
        pokemonCard.style.backgroundColor = 'lightgreen';
        pokemonCard.style.cursor = 'default';

        checkAllPokemonsPlaced();
      } else {
        alert('¡Inténtalo de nuevo!');
      }
    }

    function checkAllPokemonsPlaced() {
      const placedPokemons = document.querySelectorAll('.correct');
      if (placedPokemons.length === containers.length) {
        alert('¡Felicitaciones! Has clasificado todos los Pokémones correctamente.');
      }
    }