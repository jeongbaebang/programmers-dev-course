const API_KEY = ``;

import { asyncWave } from 'async-wave';
import axios from 'axios';

const getMovies = (title) => {
  const fetchMovie = (movieTitle) => {
    return axios.get(`${API_KEY}&s=${movieTitle}`);
  };

  const createMovieList = (response) => {
    return response.data.Search.map((payload) => {
      const div = document.createElement('div');
      const $h1 = document.createElement('h1');
      $h1.textContent = payload.Title;
      const $img = document.createElement('img');
      $img.src = payload.Poster;
      $img.alt = payload.Poster;

      div.appendChild($h1);
      div.appendChild($img);

      return div;
    });
  };

  const startRendering = ($movieList) => {
    const $body = document.querySelector('body');
    $body.removeChild(document.querySelector('h1'));
    $body.append(...$movieList);

    return true;
  };

  asyncWave([title, fetchMovie, createMovieList, startRendering], {
    onSuccess: (response) => {
      console.log(response);
    },
  });
};

getMovies('PARASITE');
