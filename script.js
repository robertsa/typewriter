function typeUserInput() {
  var userInput = document.getElementById("userInput").value;
  if (userInput) {
    var pos = 0;
    var timeout = 0;
    document.getElementById("text").innerHTML = "";
    disableButtons();
    var intervalId = setInterval(function() {
      document.getElementById("text").innerHTML += userInput[pos++];
      if (++timeout === userInput.length) {
        clearInterval(intervalId);
        document.getElementById("typeBtn").disabled = false;
        document.getElementById("delBtn").disabled = false;
        document.getElementById("clearBtn").disabled = false;
      }
    }, 100);
  }
}

function deleteTypedText() {
  var text = document.getElementById("text");
  if (text.innerHTML) {
    disableButtons();
    var intervalId = setInterval(function() {
      text.innerHTML = text.innerHTML.slice(0, text.innerHTML.length - 1);
      if (text.innerHTML.length === 0) {
        clearInterval(intervalId);
        document.getElementById("typeBtn").disabled = false;
      }
    }, 50);
  }
}

function fadeAndClearText() {
  var text = document.getElementById("text");
  if (text.innerHTML) {
    disableButtons();
    var cv = parseInt(getComputedStyle(text).color.slice(4));
    var intervalId = setInterval(function() {
      text.style.color = "rgb(" + (cv += 5) + "," + cv + "," + cv + ")";
      if (cv === 255) {
        text.innerHTML = "";
        text.style.color = "black";
        clearInterval(intervalId);
        document.getElementById("typeBtn").disabled = false;
      }
    }, 30);
  }
}

function disableButtons() {
  document.getElementById("typeBtn").disabled = true;
  document.getElementById("delBtn").disabled = true;
  document.getElementById("clearBtn").disabled = true;
}

document.getElementById("typeBtn").addEventListener("click", function() {
  typeUserInput();
}, false);

document.getElementById("delBtn").addEventListener("click", function() {
  deleteTypedText();
}, false);

document.getElementById("clearBtn").addEventListener("click", function() {
  fadeAndClearText();
}, false);