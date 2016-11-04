$(document).ready(function() {
  function clickBill() {
    $(this).css("height", "40px");
  }
  function billWasMousedOver() {
    $(this).fadeOut("slow");
  }
  $("img").on("click", clickBill);
  $("img").on("mouseover", billWasMousedOver);
  $(".tac1").css({
    height: "60px",
    background: "red",
    width: "50px",
    display: "inline-block"
  });
  $(".tac2").css({
    height: "60px",
    background: "red",
    width: "50px",
    display: "inline-block"
  });
  $(".tac3").css({
    height: "60px",
    background: "red",
    width: "50px",
    display: "inline-block"
  });
  var board = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  var player1 = true;
  function circle() {
    $(this).html("O").css({"font-size":"50px"});
    player1 = false;
    console.log(player1);
  }
  function cross() {
    $(this).html("X").css({fontSize:"50px"});
    player1 = false;
  }
  function winning() {
    if (player1 === true) {
    $("p.count").append("Player 2 WINS");
    }
    else {
      $("p.count").append("Player 1 WINS");
    }
  }
  var myArr = [];
  function winner() {
    if ((board["1"] == board["5"] && board["5"] == board["9"]))  {
      $(".1").fadeOut().fadeIn();
      $(".5").fadeOut().fadeIn();
      $(".9").fadeOut().fadeIn();
      winning();
    }
    if ((board["3"] == board["5"] && board["5"] == board["7"]))  {
      $(".3").fadeOut().fadeIn();
      $(".5").fadeOut().fadeIn();
      $(".7").fadeOut().fadeIn();
      winning();
    }
    if ((board["1"] == board["2"] && board["2"] == board["3"]))  {
      $(".1").fadeOut().fadeIn();
      $(".2").fadeOut().fadeIn();
      $(".3").fadeOut().fadeIn();
      winning();
    }
    if ((board["4"] == board["5"] && board["5"] == board["6"]))  {
      $(".4").fadeOut().fadeIn();
      $(".5").fadeOut().fadeIn();
      $(".6").fadeOut().fadeIn();
      winning();
    }
    if ((board["7"] == board["8"] && board["8"] == board["9"]))  {
      $(".7").fadeOut().fadeIn();
      $(".8").fadeOut().fadeIn();
      $(".9").fadeOut().fadeIn();
      winning();
    }
    if ((board["1"] == board["4"] && board["4"] == board["7"]))  {
      $(".1").fadeOut().fadeIn();
      $(".4").fadeOut().fadeIn();
      $(".7").fadeOut().fadeIn();
      winning();
    }
    if ((board["2"] == board["5"] && board["5"] == board["8"]))  {
      $(".2").fadeOut().fadeIn();
      $(".5").fadeOut().fadeIn();
      $(".8").fadeOut().fadeIn();
      winning();
    }
    if ((board["3"] == board["6"] && board["6"] == board["9"]))  {
      $(".3").fadeOut().fadeIn();
      $(".6").fadeOut().fadeIn();
      $(".9").fadeOut().fadeIn();
      winning();
    }
    else if (myArr.length === 81) {
      $("td").css("color", "green");
      $("p.count").append("DRAW");
    }

  }
  $(".tic").on("click", function() {
    if (player1 === true && $(this).html() === "" && $("p.count").html() === "") {
      $(this).html("O").css({"font-size":"50px"});
      player1 = false;
      myArr.push("1");
      board[$(this).attr("id")] = "O";
      winner();
      console.log(board);
    }
    else if (player1 === false && $(this).html() === "" && $("p.count").html() === ""){
      $(this).html("X").css({"font-size":"50px"});
      player1 = true;
      myArr.push("1");
      board[$(this).attr("id")] = "X";
        winner();
        console.log(board);
    }
  });



});
