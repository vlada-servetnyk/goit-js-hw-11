

export const imagesSearch = (name) => {
    const apiKey = "47345226-0bb2374200c7482689dd59086";
    const serchParams = new URLSearchParams({
        key: apiKey,
        q: name,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

   return fetch(`https://pixabay.com/api/?${serchParams}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();
        })
        .then((data) =>  data.hits)   
}


