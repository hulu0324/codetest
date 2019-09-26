window.onload = function() {
  document.getElementById("button").addEventListener("click", addStep);

  function addStep() {
    var Robot1StartPosition1 = document.getElementById("robotStartPosition")
      .value;
    var Robot1MoveStep = document.getElementById("robotMoveStep").value;
    var landsize = document.getElementById("landingsize").value;
    var Stoppositon = {};

    var Robot1StartPosition1Array = Robot1StartPosition1.split(" ");
    var Robot1MoveStepArray = Robot1MoveStep.split("");
    var landsizeArray = landsize.split(" ");

    function setposition() {
      value = Robot1StartPosition1Array[2];

      if (Robot1StartPosition1Array[2] == "N") {
        return (Robot1StartPosition1Array[2] = 0);
      } else if (Robot1StartPosition1Array[2] == "E") {
        return (Robot1StartPosition1Array[2] = 1);
      } else if (Robot1StartPosition1Array[2] == "S") {
        return (Robot1StartPosition1Array[2] = 2);
      } else {
        return (Robot1StartPosition1Array[2] = 3);
      }
    }
    setposition();

    var x = Number(Robot1StartPosition1Array[0]);
    var y = Number(Robot1StartPosition1Array[1]);
    var s = Robot1StartPosition1Array[2];

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

      console.log(x);
      console.log(y);
      console.log(s);
      console.log("--");
    }

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

    Stoppositon[0] = x;
    Stoppositon[1] = y;

    document.getElementById("robotStopPosition").innerHTML =
      "<P>" +
      Stoppositon[0] +
      " " +
      Stoppositon[1] +
      " " +
      Stoppositon[2] +
      "</P>";
  }
};
