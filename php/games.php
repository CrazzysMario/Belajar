<?php
  class Games {
    public $team;
    public $score;
    public $date;

    function __construct($team, $score, $date) {
      $this->team = $team;
      $this->score = $score;
      $this->date = $date;
    }
  }

  $game_list = [];
  for($i = 0; $i < 8; $i++) {
    $game_list[] = new Games(["Team 1", "Team 2"], "Score", "Date");
  }

  echo json_encode($game_list, JSON_PRETTY_PRINT);
?>
