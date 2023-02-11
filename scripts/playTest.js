function addRound() {
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
    game__question__input.name = "question_text" + `_${i + 1}`;
    game__question__input.type = "text";
    game__question__container.appendChild(game__question__input);

    const game__answer__container = document.createElement("div");
    game__answer__container.classList = "game__answer__container";
    game__row.appendChild(game__answer__container);
    game__answer__input = document.createElement("input");
    game__answer__input.classList = "game__answer__input, game__input";
    game__answer__input.name = "answer_text" + `_${i + 1}`;
    game__answer__input.type = "text";
    game__answer__container.appendChild(game__answer__input);
  }
}

// function formPost() {
//   let game__form__questions = document.querySelectorAll(
//     ".game__question__input"
//   ).value;
//   let game__questions = [];
//   game__questions.push(game__form__questions);

//   for (let i = 0; i < game__questions.length; i++) {
//     $.post("/includes/formSubmit.inc.php", [game__form__questions]);
//   }

//   let game__form__answers = document.querySelectorAll(
//     ".game__answer__input"
//   ).value;
//   let game__answers = [];
//   game__answers.push(game__form__answers);

//   for (let i = 0; i < game__answers.length; i++) {
//     $.post("/includes/formSubmit.inc.php", [game__form__answers]);
//   }

//   console.log(game__questions);
// }
let game__answers = [];
function formPost() {
  let game__questions = [];
  for (let u = 0; u < 12; u++) {
    let value = document.querySelector(
      `input[name="question_text_${u + 1}"]`
    ).value;
    game__questions.push(value);
  }
  console.log(game__questions);

  for (let i = 0; i < game__questions.length; i++) {
    $.post("../includes/formSubmit.inc.php", {
      game__questions: game__questions[i],
    });
  }

  let game__answers = [];
  for (let u = 0; u < 12; u++) {
    let value = document.querySelector(
      `input[name="answer_text_${u + 1}"]`
    ).value;
    game__answers.push(value);
  }
  console.log(game__answers);

  for (let i = 0; i < game__answers.length; i++) {
    $.post("../includes/formSubmit.inc.php", {
      game__answers: game__answers[i],
    });
    console.log(game__answers[i]);
  }
}

document.querySelector(".game__addRound").addEventListener("click", addRound);

document.querySelector(".game__button").addEventListener("click", formPost);
