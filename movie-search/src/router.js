let routes;

export const goto = (url, { push } = {}) => {
  const pathName = url.split("?")[0]; // '/' '/search' ...
  const params = Object.fromEntries(new URLSearchParams(url.split("?")[1]));

  if (routes[pathName]) {
    if (push) {
      history.pushState({}, "", url);
    }
    routes[pathName]({
      searchParams: params,
    });
    return;
  }
  location.href = url;
};

export const start = (params) => {
  routes = params.routes;

  window.addEventListener("popstate", (event) => {
    if (routes[location.pathname]) {
      routes[location.pathname]();
      return;
    }
  });

  goto(location.pathname + location.search);
};
