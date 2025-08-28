
export function getImage() {
    const url = "https://api.thecatapi.com/v1/images/search"
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {return resolve(data)});
                } else {
                    return reject("Image generation failed!")
                }
            })
    })
}