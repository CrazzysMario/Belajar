<?php 
  class News {
    public $judul;
    public $isi;

    function __construct($judul, $isi) {
      $this->judul = $judul;
      $this->isi = $isi;
    }
  }

  $newsList = [];
  
  for($i = 1; $i <= 5; $i++) {
    $myvar = new News('This is the title of news-' . $i,"Its really a testament to the Lakers preposterous level of success that anyone born in the past 50 years or so can only imagine the time before the franchise was one of the NBA's foremost superpowers. If anyone out there still cant picture such an era, come Sunday, theyll be able to see it themselves on television. HBO's Winning Time: The Rise of the Lakers Dynasty is a proper origin story, not of the Lakers (who were founded in Minneapolis in 1947), but of the Los Angeles Lakers—a distinct entity in spirit and in practice, functionally beginning with the team's whirlwind 1979-80 season.");
    $newsList[] = $myvar;
  }

  echo json_encode($newsList, JSON_PRETTY_PRINT);
?>