var timeLeft = 60;
	var start = false;
	var score = 0;
	var num = 35;

	function updateTimer(){
		if(timeLeft%60>=10)
			document.getElementById("timeShower").innerHTML = Math.floor(timeLeft/60) + ":" + timeLeft%60;
		else
			document.getElementById("timeShower").innerHTML = Math.floor(timeLeft/60) + ":0" + timeLeft%60;
	}

	updateTimer();

	function gameOver(win){
		if(win) {
			document.getElementById("input").disabled = "false";
			clearInterval(timer);
			var timeToWin = 60-timeLeft;
			alert("You win! Congrats! You took " + timeToWin + " seconds to complete the game.");
		}
		else{
			document.getElementById("input").disabled = "false";
			clearInterval(timer);
			alert("Game over! Score: " + score + "/" + num);
		}

	}

	function decreaseSeconds() {
		updateTimer();
		if(timeLeft > 0)
			timeLeft --;
		else{
			gameOver(false);
		}

	}

	function startTimer(){
		if(!start){
			timer = setInterval(decreaseSeconds,1000);
			start = true;
			document.getElementById("but").innerHTML = "Pause";
			document.getElementById("input").disabled = false;
			console.log(document.getElementById("input").disabled);
		}
		else{
			clearInterval(timer);
			start = false;
			document.getElementById("but").innerHTML = "Resume";
			document.getElementById("input").disabled = true;
		}
	}
