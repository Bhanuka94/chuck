const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-RapidAPI-Key": "d41e5f2abfmsh5734a9714469c35p18abcbjsnf22240364250",
    "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
  },
};

fetch(
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=animal",
  options
)
  .then((response) => {
    return response.json();
  })
  .then((jokes) => {
    // console.log(jokes.result);
    const comedy = jokes.result
      .map((jokeline) => {
        return `
                <p class="joke">${jokeline.value}</p>
            `;
      })
      .join("");
    document.querySelector("#cnjokes").insertAdjacentHTML("afterbegin", comedy);
  });

let d = new Date();
document.querySelector("#dates").insertAdjacentHTML("afterbegin", d);
