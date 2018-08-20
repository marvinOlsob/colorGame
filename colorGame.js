	var numSquares = 6;
	var colors = generateRandomColors(numSquares);
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.getElementById("message");
	var h1 = document.querySelector("h1");
	var resetButton = document.getElementById("reset");
	var modeButton = document.querySelectorAll(".mode");

	
	init();

	function init(){
		setUpMode();
		setUpSquares();
		reset();
	}
	

	function reset(){
		colors = generateRandomColors(numSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";
		//change colors of squares
		for(var i=0; i<squares.length; i++){
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}
		h1.style.backgroundColor = "steelblue";
	}

	function setUpMode(){
		//modeButton listener
		for(var i = 0; i < modeButton.length; i++){
			modeButton[i].addEventListener("click", function(){
				modeButton[0].classList.remove("selected");
				modeButton[1].classList.remove("selected");
				this.classList.add("selected");
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
				reset();
			});
		}
	}

	function setUpSquares(){
		for(var i=0; i<squares.length; i++){
			squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			//compare clicked color with picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "You're right!";
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = clickedColor;
				} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
					}
			});
		};
	}

	resetButton.addEventListener("click", function(){	
		reset();
	});

	colorDisplay.textContent = pickedColor;

	function changeColors(color){
		//loop through all squares
		for (var i = 0; i < squares.length; i++) {
			//change colors
			squares[i].style.backgroundColor = color;
		}
	}

	function pickColor(){
		var random = Math.floor(Math.random()*colors.length)
		return colors[random];
	}

	function generateRandomColors(num){
		//make an array
		var arr = [];
		//repeat num times
		for(var i = 0; i < num; i++){
			//get random color and push  into array
			arr.push(randomColor());
		}
		//return the array
		return arr;
	}

	function randomColor(){
		//pick a red from 0 - 255
		var r = Math.floor(Math.random()*256);
		//pick a green from 0 - 255
		var g = Math.floor(Math.random()*256);
		//pick a blue from 0 - 255
		var b = Math.floor(Math.random()*256);
		return "rgb("+ r + ", " + g + ", " + b + ")";
	}