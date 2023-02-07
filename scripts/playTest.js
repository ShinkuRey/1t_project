function addRound(e) {
  e.preventDefault();

  // defines div of a round
  const game__round = document.createElement("div");
  game__round.classList = "game__container, container, game__round";
  document.querySelector(".game__container").appendChild(game__round);

  // creates .game__round Title
  const game__round__title = document.createElement("h3");
  game__round__title.className = "game__round__title";
  // game__round__title.innerHTML = `${game__round.lenght + 1}`;
  game__round.appendChild(game__round__title);

  // creates 12 div of a row
  for (let i = 0; i < 12; i++) {
    // creates a div of a row
    const game__row = document.createElement("div");
    game__row.classList = "game__row uid";
    game__round.appendChild(game__row);

    const game__row__number = document.createElement("div");
    game__row__number.classList = "game__row__number";
    game__row__number.innerHTML = `${i + 1}`;
    game__row.appendChild(game__row__number);

    const game__question__container = document.createElement("div");
    game__question__container.classList = "game__question__container";
    game__row.appendChild(game__question__container);
    game__question__input = document.createElement("input");
    game__question__input.classList = "game__question__input, game__input";
    game__question__input.name = "question_text";
    game__question__input.type = "text";
    game__question__container.appendChild(game__question__input);

    const game__answer__container = document.createElement("div");
    game__answer__container.classList = "game__answer__container";
    game__row.appendChild(game__answer__container);
    game__answer__input = document.createElement("input");
    game__answer__input.classList = "game__answer__input, game__input";
    game__answer__input.name = "answer_text";
    game__answer__input.type = "text";
    game__answer__container.appendChild(game__answer__input);
  }
}

document.querySelector(".game__addRound").addEventListener("click", addRound);
