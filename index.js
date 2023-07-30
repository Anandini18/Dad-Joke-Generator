// Get the button element from the DOM with the id "btn"
const btnEl = document.getElementById("btn");

// Get the joke element from the DOM with the id "joke"
const jokeEl = document.getElementById("joke");

// Get the loader element from the DOM with the id "loader"
const loaderEl = document.getElementById("loader");

// Hide the loader element by setting its display property to "none"
loaderEl.style.display = "none";

// Set the API key
const apiKey = "IZVk/eWG5qLQ28OIBBxV6A==C7cNPPo82nxDkAtV";

// Create an options object with the method and headers for the API request
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

// Set the API URL for fetching jokes
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// Define an async function named "getJoke" to retrieve a joke
async function getJoke() {
  try {
    // Hide the loader, joke, and button elements
    loaderEl.style.display = "none";
    jokeEl.style.display = "none";
    btnEl.style.display = "none";

    // Show the loader element
    loaderEl.style.display = "block";

    // Fetch the joke from the API using the defined URL and options
    const response = await fetch(apiURL, options);

    // Convert the response data to JSON
    const data = await response.json();

    // Show the joke element and set its text content to the retrieved joke
    jokeEl.style.display = "block";
    jokeEl.innerText = data[0].joke;

    // Hide the loader, enable the button, and set its text to "Get a DAD Joke"
    loaderEl.style.display = "none";
    btnEl.style.display = "inline-block";
    btnEl.disabled = false;
    btnEl.innerText = "Get a DAD Joke".toUpperCase();
  } catch (error) {
    // Hide the loader, show the joke element, enable the button, and display an error message
    loaderEl.style.display = "none";
    jokeEl.style.display = "block";
    btnEl.style.display = "inline-block";
    jokeEl.innerText = "Oops! \nSomething went wrong.\nTry again later!";
    btnEl.disabled = false;
    btnEl.innerText = "Try Again".toUpperCase();

    // Log the error to the console
    console.log(error);
  }
}

// Add a click event listener to the button, calling the getJoke function when clicked
btnEl.addEventListener("click", getJoke);
