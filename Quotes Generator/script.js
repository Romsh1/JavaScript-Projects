// Romika Chaudhary
// Feb 28, 2024
// Day 25, 26, 29


// const url = "https://api.quotable.io/random";
// const button = document.querySelector(".btn");
// const myQuotes = document.querySelector(".quotes");

// let quotes = [
//     "The only way to do great work is to love what you do. - Steve Jobs",
//     "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
//     "Life is what happens when you're busy making other plans. - John Lennon",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
//     "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
// ];

// button.addEventListener('click', () => {
//     let ranNum = Math.floor(Math.random() * quotes.length);
//     myQuotes.value = quotes[ranNum];
// });


const url = "https://api.quotable.io/random";
const button = document.querySelector(".btn");
const myQuotes = document.querySelector(".quotes");
const authorName = document.querySelector(".authorName");


button.addEventListener('click', () => {
    getQuotes();
});

function getQuotes() {
    fetch(url)
    .then((response) => 
        response.json())
    .then(data => {
        myQuotes.innerHTML = data.content;
        authorName.innerHTML = "-- " + data.author;
    })
    .catch((error) => {
        console.error("Error: ", error);
    });
}
