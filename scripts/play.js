function addRound() {
  // defines div for our table
  const gameRound = document.querySelector(".gameRound");
  // creates .gameRound Title
  const gameRound__title = document.createElement("h3");
  gameRound__title.className = "gameRound__title";
  gameRound__title.innerHTML = "1";
  // creates .gameRound table
  const gameRound__table = document.createElement("table");
  gameRound__table.className = "gameRound__table";
  // creates body for our table
  const gameRound__table__body = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 12; i++) {
    // creates a table row
    const gameRound__table__row = document.createElement("tr");
    gameRound__table__row.className = "gameRound__table__row";
    for (let j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const gameRound__table__cell = document.createElement("td");

      gameRound__table__row.appendChild(gameRound__table__cell);
      gameRound__table__input = document.createElement("input");

      gameRound__table__cell.appendChild(gameRound__table__input);
    }

    // add the row to the end of the table body
    gameRound__table__body.appendChild(gameRound__table__row);
    const gameRound__table__row__0 = gameRound__table__row.childNodes[0];
    gameRound__table__row__0.innerHTML = `${i + 1}`;
    gameRound__table__row__0.className =
      "gameRound__table__collumn__number gameRound__table__collumn";
    const gameRound__table__row__1 = gameRound__table__row.childNodes[1];
    gameRound__table__row__1.className =
      "gameRound__table__collumn__question gameRound__table__collumn";
    const gameRound__table__row__2 = gameRound__table__row.childNodes[2];
    gameRound__table__row__2.className =
      "gameRound__table__collumn__answer gameRound__table__collumn";
  }

  // put the <tbody> in the <table>
  gameRound__table.appendChild(gameRound__table__body);
  // appends <table> and <h3> into <div.gameRound>

  gameRound.appendChild(gameRound__title);

  gameRound.appendChild(gameRound__table);
}

document.querySelector(".game__addRound").addEventListener("click", addRound);
