
// selects all "tile" elements and stores them in the board variable
let board = document.querySelectorAll('.tile');

// loop that goes through over each element repeatedly
board.forEach(tile => {
  tile.addEventListener('click', e => {   // for each tile click event listener execute callback function
  
    e.preventDefault();   // prevents the default behavior of the click event
	
    let firstPos = parseInt(e.target.dataset.pos);   // storing in the variable value of the clicked attribute
    let blank = document.querySelectorAll('.blank')[0];   // assigns first "blank" element to the variable
    let secondPos = parseInt(blank.dataset.pos);   // storing the integer value of the “blank” variable
    
	// calculate possible adjacent positions from the “blank” tile
    let top = secondPos-3;
    let bottom = secondPos+3;
    let left = secondPos-1;
    let right = secondPos+1;
    
	// Check if adjacent positions are valid or outside the current row
    if (secondPos%3-left%3 < 1) {
      left = -1;
    }
    if (right%3-secondPos%3 < 1) {
      right = -1;
    }
    let posibilities = [left, right, top, bottom];   // array of possible positions
    
    if (posibilities.includes(firstPos)) {   // swap positions of the "tile" and "blank" if firstPos is valid
      blank.dataset.pos = firstPos;
      e.target.dataset.pos = secondPos;
    }
  })
});

// first part of the timer
let counter = 1;
function counting() {
    document.getElementById('timer').textContent = 'Timer: ' + counter + ' seconds';
    counter++;
}

        let sec = 0;
        let myInterval; // variable to hold the interval ID
        let isTimerRunning = false; // flag to track timer state

        function pad(val) {
            return val > 9 ? val : "0" + val;
        }

        function counting() {
            document.getElementById('timer').textContent = 'Timer: ' + pad(sec) + ' seconds';
            sec++;
        }

        function toggleTimer() {
            if (isTimerRunning) {
                clearInterval(myInterval); // Stop the timer
                document.querySelector('button').textContent = 'Start Timer';
            } else {
                myInterval = setInterval(counting, 1000); // Start the timer
                document.querySelector('button').textContent = 'Stop Timer';
            }
            isTimerRunning = !isTimerRunning; // Toggle the flag
        }