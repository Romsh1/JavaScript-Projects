const url = "https://api.chucknorris.io/jokes/random";
const joke = document.querySelector(".jokesHere");
const btn = document.querySelector(".jokeBtn");

btn.addEventListener('click', () =>{
    getJokes();
});

function getJokes(){
    fetch(url)
    .then((response) => 
        response.json())
    .then(data => {
        const fetchJoke = data.value;
        joke.textContent = fetchJoke;
    })
    .catch((error) => {
        console.error("Error: ", error);
    });    
}
