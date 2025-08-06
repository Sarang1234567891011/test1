document.addEventListener('DOMContentLoaded', () => {
    console.log("Website is ready!");

    // Get all buttons by their class
    const buttons = document.querySelectorAll('button');

    // Loop through each button and add a click event listener
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Log a message to the console when any button is clicked
            const buttonText = event.target.textContent;
            console.log(`The "${buttonText}" button has been clicked!`);
        });
    });
});
