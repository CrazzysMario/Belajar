<?php
  class Standings {
    public $team;
    public $win;
    public $lose;
    public $pct;
    public $gb;
    public $conf;
    public $home;
    public $away;
    public $l10;
    public $strk;

    function setTeam($team) {
      $this->team = $team;
    }
    function setWin($win) {
      $this->win = $win;
    }
    function setLose($lose) {
      $this->lose = $lose;
    }
    function setPct($pct) {
      $this->pct = $pct;
    }
    function setGb($gb) {
      $this->gb = $gb;
    }
    function setConf($conf) {
      $this->conf = $conf;
    }
    function setHome($home) {
      $this->home = $home;
    }
    function setAway($away) {
      $this->away = $away;
    }
    function setL10($l10) {
      $this->l10 = $l10;
    }
    function setStrk($strk) {
      $this->strk = $strk;
    }
  }

  $standingList = [];
  for($i = 0; $i < 2; $i++) {
    $myStanding = new Standings();
    $myStanding->setTeam("Heat");
    $myStanding->setWin("45");
    $myStanding->setLose("23");
    $myStanding->setPct(".622");
    $myStanding->setGb("-");
    $myStanding->setConf("29-13");
    $myStanding->setHome("24-8");
    $myStanding->setAway("21-15");
    $myStanding->setL10("8-2");
    $myStanding->setStrk("W1");
    $standingList[] = $myStanding;
  }

  echo json_encode($standingList, JSON_PRETTY_PRINT)
?>