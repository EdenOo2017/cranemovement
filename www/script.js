function Slider1() {
  var e = io.connect(),
    n = document.getElementById("myRange1"),
    t = document.getElementById("value1");
  n.addEventListener(
    "change",
    function () {
      e.emit("xmovement2", n.value);
    },
    !1
  ),
    n.addEventListener(
      "input",
      function () {
        var a = n.value;
        (t.innerHTML = "X-axis : " + a),
          e.emit("xmovement", n.value);
      },
      !1
    );
}

function Slider2() {
    var e = io.connect(),
      n = document.getElementById("myRange2"),
      t = document.getElementById("value2");
    n.addEventListener(
      "change",
      function () {
        e.emit("ymovement2", n.value);
      },
      !1
    ),
      n.addEventListener(
        "input",
        function () {
          var a = n.value;
          (t.innerHTML = "Y-axis : " + a),
            e.emit("ymovement", n.value);
        },
        !1
      );
  }

  function Slider3() {
    var e = io.connect(),
      n = document.getElementById("myRange3"),
      t = document.getElementById("value3");
    n.addEventListener(
      "change",
      function () {
        e.emit("rmovement2", n.value);
      },
      !1
    ),
      n.addEventListener(
        "input",
        function () {
          var a = n.value;
          (t.innerHTML = "Rotate : " + a),
            e.emit("rmovement", n.value);
        },
        !1
      );
  }

  function Slider4() {
    var e = io.connect(),
      n = document.getElementById("myRange4"),
      t = document.getElementById("value4");
    n.addEventListener(
      "change",
      function () {
        e.emit("bamovement2", n.value);
      },
      !1
    ),
      n.addEventListener(
        "input",
        function () {
          var a = n.value;
          (t.innerHTML = "Boom Angle : " + a),
            e.emit("bamovement", n.value);
        },
        !1
      );
  }

  function Slider5() {
    var e = io.connect(),
      n = document.getElementById("myRange5"),
      t = document.getElementById("value5");
    n.addEventListener(
      "change",
      function () {
        e.emit("swmovement2", n.value);
      },
      !1
    ),
      n.addEventListener(
        "input",
        function () {
          var a = n.value;
          (t.innerHTML = "Swing Angle : " + a),
            e.emit("swmovement", n.value);
        },
        !1
      );
  }

  function Light1() {
    var checkBox = document.getElementById("light1");
    if (checkBox.checked == true) {      
      socket.emit("light1", "on");
    } else {
      socket.emit("light1", "off");
    }
  }

  function Light2() {
    var checkBox = document.getElementById("light2");
    if (checkBox.checked == true) {      
      socket.emit("light2", "on");
    } else {
      socket.emit("light2", "off");
    }
  }

var socket = io.connect();
socket.on("xmovement2", function (e) {
    (document.getElementById("myRange1").value = e),
    (document.getElementById("value1").innerHTML = "X-axis : " + e);
}),

socket.on("ymovement2", function (e) {
    (document.getElementById("myRange2").value = e),
    (document.getElementById("value2").innerHTML = "Y-axis : " + e);
}),

socket.on("rmovement2", function (e) {
    (document.getElementById("myRange3").value = e),
    (document.getElementById("value3").innerHTML = "Rotate : " + e);
}),

socket.on("bamovement2", function (e) {
    (document.getElementById("myRange4").value = e),
    (document.getElementById("value4").innerHTML = "Boom Angle : " + e);
}),

socket.on("swmovement2", function (e) {
    (document.getElementById("myRange5").value = e),
    (document.getElementById("value5").innerHTML = "Swing Angle : " + e);
}),

socket.on("ujmovement2", function(data) {
    if (data == "on") {
      document.getElementById("light1").checked = true;
    } else {
      document.getElementById("light1").checked = false;
    }
});  

socket.on("wdmovement2", function(data) {
    if (data == "on") {
      document.getElementById("light2").checked = true;
    } else {
      document.getElementById("light2").checked = false;
    }
});  
 
document.addEventListener("DOMContentLoaded", function () {
    Slider1(),    
    Slider2(), 
    Slider3(),
    Slider4(),
    Slider5(),   
    io.connect();
});