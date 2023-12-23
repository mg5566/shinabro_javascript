export const renderSearch = (params) => {
  document.querySelector("#app").innerHTML = `<h1>SEARCH PAGE</h1>`;
  if (params.searchParams.query) {
    document.querySelector(
      "#app"
    ).innerHTML += `<p>Keyword: ${params.searchParams.query}</p>`;
  }
};
