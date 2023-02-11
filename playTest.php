<?php
include('header.php');
?>

<body>
  <form action="includes/formSubmit.inc.php" method="POST" class="game__from" onclick="event.preventDefault()">
    <div class=" game__container container">
    </div>
    <div class="container">
      <img src="images/plus_icon.png" alt="add more rounds" class="game__addRound" />
    </div>

    <button type="submit" class="game__button">Нажми</button>
  </form>
</body>

</html>