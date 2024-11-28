
export const httpSearch = (name) => {
    const apiKey = "47345226-0bb2374200c7482689dd59086";
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${name}`)
        .then((response) => {
            if (!response.ok) {
            throw new Error(response.status)
            }
            return response.json();
        })
    .then((res) => console.log(res))
    .catch((er) => console.log(er))
}
