const api_key = "67Rc8MaxsN5sO1xJUU4Knl1NkGm1oJnb";
let limit = 20;
const urlGifs = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}`
const containerGifs = document.getElementById("container-gifs");

const getApi = async(URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.data;
};

const createCard = (gif) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imgGif = document.createElement("img");
    imgGif.src = gif.images.original.url;
    imgGif.alt = gif.title;

    card.appendChild(imgGif);

    containerGifs.appendChild(card);
};

const getGif = async () => {
    const arroz = await getApi(urlGifs);
    arroz.forEach(gif => createCard(gif));
};

window.addEventListener("DOMContentLoaded", getGif);
//