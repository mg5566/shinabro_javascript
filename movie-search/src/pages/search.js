export const getInitialHTML = ({ movies } = {}) => {
  if (movies) {
    return `
      <ul>
        ${movies
          .map((movie) => {
            return `<li>${movie.title}</li>`;
          })
          .join("")}
      </ul>
    `;
  } else {
    return `<h1>Movie Info</h1>`;
  }
};

export const renderSearch = async ({ searchParams }) => {
  document.querySelector("#app").innerHTML = getInitialHTML();

  if (searchParams.query) {
    document.querySelector(
      "#app"
    ).innerHTML += `<p>Keyword: ${searchParams.query}</p>`;
  }

  const response = await fetch(
    import.meta.env.DEV
      ? "http://localhost:3000"
      : "" + `/api/search?query=${searchParams.query}`
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
