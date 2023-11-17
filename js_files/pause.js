let pauseFlag = false;

// Example modification for the animation function
async function updateBars() {
    // Assume you have a loop updating the bars
    for (let i = 0; i < bars.length; i++) {
        // Check the pauseFlag before each iteration
        if (pauseFlag) {
            // Pause if the flag is true
            await waitforme(500);
            pauseFlag = false; // Reset the flag
        }

        // Your logic to update the bars goes here

        // Update the bars (you may need to call your existing update function here)
        updateBarsFunction();
    }
}

// Use querySelector to get the first element with the class "pause"
let btn = document.querySelector(".pause");

if (btn) {
    btn.addEventListener("click",async function() {
        updateBars();
        pauseFlag = !pauseFlag;
        console.log("haah");
    });
}
