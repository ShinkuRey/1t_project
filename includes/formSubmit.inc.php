<?php
include_once('db.php');

$game__questions = $_POST['game__questions'];
$game__answers = $_POST['game__answers'];

// $question_text = $_POST['question_text'];
// $answer_text = $_POST['answer_text'];
// $user_id = $_POST['user_id'];

$submitQuestions = "INSERT INTO `chgk_game` (`question_text`, `answer_text`) VALUES ('$game__questions', '$game__answers');";

mysqli_query($connection, $submitQuestions);

// $sql = "select * from Sasa;";
// $result = mysqli_query($connection, $sql);
// $resultCheck = mysqli_num_rows($result);

// if (mysqli_connect_errno()) {
//     echo "Failed to connect to MySQL: " . mysqli_connect_error();
// }

// if ($resultCheck > 0) {
//     while ($row = mysqli_fetch_assoc($result)) {
//         echo $row['123'] . '<br>';
//     }
// }
// $submitQuestions = "insert into chgk_game (question_text, answer_text) values ('$question_text', '$answer_text';";
// mysqli_query($connection, $submitQuestions);