export const renderSearch = async ({ searchParams }) => {
  document.querySelector("#app").innerHTML = `<h1>SEARCH PAGE</h1>`;
  if (searchParams.query) {
    document.querySelector(
      "#app"
    ).innerHTML += `<p>Keyword: ${searchParams.query}</p>`;
  }

  const response = await fetch(
    `http://localhost:3000/search?query=${searchParams.query}`
  );
  const movies = await response.json();

  document.querySelector("#app").innerHTML += `
    <ul>
      ${movies
        .map((movie) => {
          return `<li>${movie.title}</li>`;
        })
        .join("")}
    </ul>
  `;
};
