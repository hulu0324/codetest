window.onload = function() {
  document.getElementById("button").addEventListener("click", addStep);

  function addStep() {
    //get the input date from form
    var landsize = document.getElementById("landingsize").value;
    var Robot1StartPosition = document.getElementById("robotStartPosition")
      .value;
    var Robot1MoveStep = document.getElementById("robotMoveStep").value;

    var Robot2StartPosition = document.getElementById("robotStartPosition2")
      .value;
    var Robot2MoveStep = document.getElementById("robotMoveStep2").value;

    var Stoppositon = {};
    var Stoppositonrobot2 = {};

    //change the input data to Array
    var landsizeArray = landsize.split(" ");
    var Robot1StartPositionArray = Robot1StartPosition.split(" ");
    var Robot1MoveStepArray = Robot1MoveStep.split("");

    var Robot2StartPositionArray = Robot2StartPosition.split(" ");
    var Robot2MoveStepArray = Robot2MoveStep.split("");

    //set the facing side to a value for calculate
    function setposition() {
      value = Robot1StartPositionArray[2];

      if (Robot1StartPositionArray[2] == "N") {
        return (Robot1StartPositionArray[2] = 0);
      } else if (Robot1StartPositionArray[2] == "E") {
        return (Robot1StartPositionArray[2] = 1);
      } else if (Robot1StartPositionArray[2] == "S") {
        return (Robot1StartPositionArray[2] = 2);
      } else {
        return (Robot1StartPositionArray[2] = 3);
      }
    }
    setposition();

    function setpositionforrobot2() {
      value = Robot2StartPositionArray[2];

      if (Robot2StartPositionArray[2] == "N") {
        return (Robot2StartPositionArray[2] = 0);
      } else if (Robot2StartPositionArray[2] == "E") {
        return (Robot2StartPositionArray[2] = 1);
      } else if (Robot2StartPositionArray[2] == "S") {
        return (Robot2StartPositionArray[2] = 2);
      } else {
        return (Robot2StartPositionArray[2] = 3);
      }
    }
    setpositionforrobot2();

    //set the input position string data to number
    var x = Number(Robot1StartPositionArray[0]);
    var y = Number(Robot1StartPositionArray[1]);
    var s = Robot1StartPositionArray[2];

    var x2 = Number(Robot2StartPositionArray[0]);
    var y2 = Number(Robot2StartPositionArray[1]);
    var s2 = Robot2StartPositionArray[2];

    //robot moving step
    for (i = 0; i < Robot1MoveStepArray.length; i++) {
      var NewFaceSide = Number(s % 4);

      if (Robot1MoveStepArray[i] === "L") {
        s = s - 1;
      } else if (Robot1MoveStepArray[i] === "R") {
        s = s + 1;
      } else {
        if (NewFaceSide === 0) {
          if (y >= landsizeArray[1]) {
            y = y;
          } else {
            y = y + 1;
          }
        } else if (NewFaceSide === 1) {
          if (x >= landsizeArray[0]) {
            x = x;
          } else {
            x = x + 1;
          }
        } else if (NewFaceSide === 2) {
          if (y <= 0) {
            y = y;
          } else {
            y = y - 1;
          }
        } else if (NewFaceSide === 3) {
          if (x <= 0) {
            x = x;
          } else {
            x = x - 1;
          }
        } else if (NewFaceSide === -3) {
          if (x >= landsizeArray[0]) {
            x = x;
          } else {
            x = x + 1;
          }
        } else if (NewFaceSide === -2) {
          if (y <= 0) {
            y = y;
          } else {
            y = y - 1;
          }
        } else if (NewFaceSide === -1) {
          if (x <= 0) {
            x = x;
          } else {
            x = x - 1;
          }
        } else {
          if (y >= landsizeArray[1]) {
            y = y;
          } else {
            y = y + 1;
          }
        }
      }
      //check each step result
      console.log(x);
      console.log(y);
      console.log(s);
      console.log("--");
    }

    for (j = 0; j < Robot2MoveStepArray.length; j++) {
      var NewFaceSide2 = Number(s2 % 4);

      if (Robot1MoveStepArray[j] === "L") {
        s2 = s2 - 1;
      } else if (Robot1MoveStepArray[j] === "R") {
        s2 = s2 + 1;
      } else {
        if (NewFaceSide2 === 0) {
          if (y2 >= landsizeArray[1]) {
            y2 = y2;
          } else {
            y2 = y2 + 1;
          }
        } else if (NewFaceSide2 === 1) {
          if (x2 >= landsizeArray[0]) {
            x2 = x2;
          } else {
            x2 = x2 + 1;
          }
        } else if (NewFaceSide2 === 2) {
          if (y2 <= 0) {
            y2 = y2;
          } else {
            y2 = y2 - 1;
          }
        } else if (NewFaceSide2 === 3) {
          if (x2 <= 0) {
            x2 = x2;
          } else {
            x2 = x2 - 1;
          }
        } else if (NewFaceSide2 === -3) {
          if (x2 >= landsizeArray[0]) {
            x2 = x2;
          } else {
            x2 = x2 + 1;
          }
        } else if (NewFaceSide2 === -2) {
          if (y2 <= 0) {
            y2 = y2;
          } else {
            y2 = y2 - 1;
          }
        } else if (NewFaceSide2 === -1) {
          if (x2 <= 0) {
            x2 = x2;
          } else {
            x2 = x2 - 1;
          }
        } else {
          if (y2 >= landsizeArray2[1]) {
            y2 = y2;
          } else {
            y2 = y2 + 1;
          }
        }
      }
      //check each step result
      console.log(x2);
      console.log(y2);
      console.log(s2);
      console.log("--");
    }

    //change to faceting value to string
    function StopPosition() {
      if (NewFaceSide == "3") {
        return (Stoppositon[2] = "W");
      } else if (NewFaceSide == "-1") {
        return (Stoppositon[2] = "W");
      } else if (NewFaceSide == "2") {
        return (Stoppositon[2] = "S");
      } else if (NewFaceSide == "-2") {
        return (Stoppositon[2] = "S");
      } else if (NewFaceSide == "1") {
        return (Stoppositon[2] = "E");
      } else if (NewFaceSide == "-3") {
        return (Stoppositon[2] = "E");
      } else {
        return (Stoppositon[2] = "N");
      }
    }
    StopPosition();

    function StopPosition2() {
      if (NewFaceSide2 == "3") {
        return (Stoppositonrobot2[2] = "W");
      } else if (NewFaceSide2 == "-1") {
        return (Stoppositonrobot2[2] = "W");
      } else if (NewFaceSide2 == "2") {
        return (Stoppositonrobot2[2] = "S");
      } else if (NewFaceSide2 == "-2") {
        return (Stoppositonrobot2[2] = "S");
      } else if (NewFaceSide2 == "1") {
        return (Stoppositonrobot2[2] = "E");
      } else if (NewFaceSide2 == "-3") {
        return (Stoppositonrobot2[2] = "E");
      } else {
        return (Stoppositonrobot2[2] = "N");
      }
    }
    StopPosition2();

    //set stop position
    Stoppositon[0] = x;
    Stoppositon[1] = y;

    Stoppositonrobot2[0] = x2;
    Stoppositonrobot2[1] = y2;

    //show output
    document.getElementById("robotStopPosition").innerHTML =
      "<P>" +
      "<strong>" +
      Stoppositon[0] +
      " " +
      Stoppositon[1] +
      " " +
      Stoppositon[2] +
      "</strong>" +
      "</P>";
    document.getElementById("robotStopPosition2").innerHTML =
      "<P>" +
      "<strong>" +
      Stoppositonrobot2[0] +
      " " +
      Stoppositonrobot2[1] +
      " " +
      Stoppositonrobot2[2] +
      "</strong>" +
      "</P>";
  }
};
