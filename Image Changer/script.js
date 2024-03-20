function displayRandomImage() {
    const image = document.getElementById("random");

    function fetchNextImage() {
        fetch("https://source.unsplash.com/random")
            .then((response) => {
                image.src = response.url;
            })
            .catch((error) => {
                console.error("ERROR", error);
            });
    }

    fetchNextImage();

    setInterval(fetchNextImage, 10000);
}
displayRandomImage();