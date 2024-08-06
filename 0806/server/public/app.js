const API_KEY = ``;

const getMovies = () => {
  const fetchMovie = (movieTitle) => {
    return axios.get(`${API_KEY}&s=${movieTitle}`);
  };

  const createMovieList = (payload) => {
    return payload.map((payload) => {
      const $itemBox = document.createElement('div');
      const $h1 = document.createElement('h1');
      const $img = document.createElement('img');
      const $p1 = document.createElement('p');
      const $p2 = document.createElement('p');

      $itemBox.classList.add('movie-item');
      $h1.textContent = payload.Title;
      $img.src = payload.Poster;
      $img.alt = payload.Poster;
      $p1.textContent = payload.Year;
      $p2.textContent = payload.Type;

      $itemBox.appendChild($h1);
      $itemBox.appendChild($img);
      $itemBox.appendChild($p1);
      $itemBox.appendChild($p2);

      return $itemBox;
    });
  };

  const startRendering = ($movieList) => {
    const $body = document.querySelector('body');
    const $container = document.createElement('div');

    $container.classList.add('movie-container');
    $container.append(...$movieList);
    $body.appendChild($container);

    return true;
  };

  const getSearchedMovie = () => {
    // 'PARASITE'
    const result = document.getElementById('searchInput');

    return result.value;
  };

  const validateMovie = (response) => {
    console.log(response);

    return response.data?.Search || [];
  };

  asyncWave(
    [
      getSearchedMovie,
      fetchMovie,
      validateMovie,
      createMovieList,
      startRendering,
    ],
    {
      onSuccess: (response) => {
        console.log(response);
      },
    }
  );
};

document.getElementById('searchButton').addEventListener('click', getMovies);
