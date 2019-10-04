var countDownEnd = 1500000;
		var countDownStart = 0;

		// Update the count down every 1 second
		var x = setInterval(function() {
		  countDownStart += 1000;

		  // Find the distance
		  var distance = countDownEnd - countDownStart;
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  // Display the result in the element with id="timerLabel"
		  document.getElementById("timerLabel").innerHTML = minutes + "m " + seconds + "s ";

		  if (distance < 60001 && distance > 59999) {
		  	document.getElementById("alertTab").style.display = "block";
		  }

		  if (distance < 0) {
		    clearInterval(x);
		    document.getElementById("timerLabel").innerHTML = "Hết giờ!";
		    //document.getElementById("testForm").sub
		    //document.getElementById("btnSubmit").click();
		    window.open("https://www.facebook.com/sangmaitennguoiou/", "_self");
		  }
		}, 1000);
