function submit() {
    const email = document.querySelector(".email");
    var emailText = email.innerHTML;
    const subject = document.querySelector(".subject");
    var subjectText = subject.innerHTML;
    const message = document.querySelector(".message");
    var messageText = message.innerHTML;

    animateSend();
}

function resetFields() {
    const inputFields = document.querySelectorAll(".input");
    inputFields.forEach(field => {
        field.innerHTML = "";
    });
}

function animateSend() {
    var send = document.querySelector(".email-container");
    var currentPosition = 0;
    var intervalId = setInterval(frame, 5);
  
    function frame() {
      if (currentPosition >= 200) {
        clearInterval(intervalId);
        resetFields();
        fadeBackIn(send);
      } else {
        currentPosition += 2;
        send.style.left = currentPosition + "2px";
      }
    }
  
    function fadeBackIn(element) {
      element.style.display = "block";
      element.style.opacity = 0;
      var opacity = 0;
      element.style.left = "0px";
      var intervalId = setInterval(frame, 5);
  
      function frame() {
        if (opacity >= 1) {
          clearInterval(intervalId);
          element.style.opacity = 1;
        } else {
          opacity += 0.01;
          element.style.opacity = opacity;
        }
      }
    }
}