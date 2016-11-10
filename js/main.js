$(document).ready(function() {

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

  $("button.btn").on("click", function() {
    $('.tic,.count').html("");
    $(".tic").css("background", "rgb(93, 197, 191)");
    board = {
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
  });

  $(".tic").on("mouseover", function() {
    $(this).css("background", "rgb(30,123,122)");
  });
  $(".tic").on("mouseout", function() {
    $(this).css("background", "rgb(93, 197, 191)");
  });

  var player1 = true;
  function circle() {
    $(this).html("<i class='fa fa-circle-o' aria-hidden='true'></i>").css({"font-size":"50px"});
    player1 = false;
    console.log(player1);
  }
  function cross() {
    $(this).html("<i class='fa fa-times' aria-hidden='true'></i>").css({fontSize:"50px"});
    player1 = false;
  }
  var p1Score = 0;
  var p2Score = 0;
  function winning() {
    if (player1 === true) {
    $("p.count").append("Player 2 WINS");
    p1Score += 1;
    $("p.p1").html("Player 1: " + p1Score).append();
    }
    else {
      $("p.count").append("Player 1 WINS");
      p2Score += 1;
      $("p.p2").html("Player 2: " + p2Score).append();
    }
  }
  var myArr = [];
  function winner() {
    if ((board["1"] == board["5"] && board["5"] == board["9"]))  {
      $(".1").css("background", "rgb(126,216,139)").fadeIn();
      $(".5").css("background", "rgb(126,216,139)").fadeIn();
      $(".9").css("background", "rgb(126,216,139)").fadeIn();
      winning();
    }
    if ((board["3"] == board["5"] && board["5"] == board["7"]))  {
      $(".3").css("background", "rgb(126,216,139)").fadeIn();
      $(".5").css("background", "rgb(126,216,139)").fadeIn();
      $(".7").css("background", "rgb(126,216,139)").fadeIn();
      winning();
    }
    if ((board["1"] == board["2"] && board["2"] == board["3"]))  {
      $(".1").css("background", "rgb(126,216,139)").fadeIn();
      $(".2").css("background", "rgb(126,216,139)").fadeIn();
      $(".3").css("background", "rgb(126,216,139)").fadeIn();
      winning();
    }
    if ((board["4"] == board["5"] && board["5"] == board["6"]))  {
      $(".4").css("background", "rgb(126,216,139)").fadeIn();
      $(".5").css("background", "rgb(126,216,139)").fadeIn();
      $(".6").css("background", "rgb(126,216,139)").fadeIn();
      winning();
    }
    if ((board["7"] == board["8"] && board["8"] == board["9"]))  {
      $(".7").css("background", "rgb(126,216,139)").fadeIn();
      $(".8").css("background", "rgb(126,216,139)").fadeIn();
      $(".9").css("background", "rgb(126,216,139)").fadeIn();
      winning();
    }
    if ((board["1"] == board["4"] && board["4"] == board["7"]))  {
      $(".1").css("background", "rgb(126,216,139)").fadeIn();
      $(".4").css("background", "rgb(126,216,139)").fadeIn();
      $(".7").css("background", "rgb(126,216,139)").fadeIn();
      winning();
    }
    if ((board["2"] == board["5"] && board["5"] == board["8"]))  {
      $(".2").css("background", "rgb(126,216,139)").fadeIn();
      $(".5").css("background", "rgb(126,216,139)").fadeIn();
      $(".8").css("background", "rgb(126,216,139)").fadeIn();
      winning();
    }
    if ((board["3"] == board["6"] && board["6"] == board["9"]))  {
      $(".3").css("background", "rgb(126,216,139)").fadeIn();
      $(".6").css("background", "rgb(126,216,139)").fadeIn();
      $(".9").css("background", "rgb(126,216,139)").fadeIn();
      winning();
    }
    else if (myArr.length === 81) {
      $("td").css("color", "rgb(126,216,139)");
      $("p.count").append("DRAW");
    }

  }
  $(".tic").on("click", function() {
    if (player1 === true && $(this).html() === "" && $("p.count").html() === "") {
      $(this).html("<i class='fa fa-circle-o' aria-hidden='true'></i>").css({"font-size":"50px"});
      player1 = false;
      myArr.push("1");
      board[$(this).attr("id")] = "O";
      winner();
      console.log(board);
    }
    else if (player1 === false && $(this).html() === "" && $("p.count").html() === ""){
      $(this).html("<i class='fa fa-times' aria-hidden='true'></i>").css({"font-size":"50px"});
      player1 = true;
      myArr.push("1");
      board[$(this).attr("id")] = "X";
      winner();
        console.log(board);
    }
  });
});
