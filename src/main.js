
import { httpSearch } from "./js/pixabay-api"

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handleSearch);

function handleSearch(event) {
    event.preventDefault();
    const inputSearch = event.target.elements.name.value;
    if (!inputSearch) {
        iziToast.show({
                        title: '',
                        backgroundColor: 'red',
                        messageColor: 'white',
                        message: `Add data for search`,
                        position: 'topRight',
                    }
        )
        return;
    }
    httpSearch(inputSearch)
    //     .then((res) => console.log(res))
    // .catch((er) => console.log(er))
    
}