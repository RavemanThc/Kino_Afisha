import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const ENDPOINT = '/trending/movie/week';


// const container = document.querySelector('.js-movie-list');
// const loadMore = document.querySelector('.js-load-more');
//
// loadMore.addEventListener('click', onLoadMore);
//
// let page = 1;
//
// async function serviceMovie(page=1){
//   const response = await axios(`${BASE_URL}${ENDPOINT}`, {
//     params: {
//       api_key: import.meta.env.VITE_API_KEY,
//       page
//     }
//   });
//   return response.data;
//
// }
//
// serviceMovie(page)
//   .then(data => {
//     console.log(data);
//     container.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     if(data.page < data.total_pages){
//     loadMore.classList.replace("load-more-hidden", "load-more");}
//   })
// .catch(error => {
// });
//
//
// function createMarkup(arr){
//   return arr.map(({original_title, vote_average, poster_path, release_date}) => `
// <li class="movie-card">
//   <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"/>
//   <div class="movie-info">
//   <h2>${original_title}</h2>
//   <p>Дата релиза: ${release_date}</p>
//   <p>Рейтинг: ${vote_average}</p>
// </div>
// </li>
//   `).join("");
// };
//
// async function onLoadMore(){
//   page++;
//   loadMore.disabled = true;
//   loadMore.textContent = "Loading...";
//   try{
//     const data = await serviceMovie(page);
//     container.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     if(data.page >= data.total_pages){
//       loadMore.classList.replace("load-more", "load-more-hidden", );
//           }
//     const card = document.querySelector(".movie-card");
//     console.log(card);
//     const cardHeight = card.getBoundingClientRect().height;
//     window.scrollBy({
//       left: 0,
//       top: cardHeight,
//       behavior: "smooth"
//     })
//   }
//   catch(error){
//     console.log(error.message);
//   }
//   finally{
//     loadMore.disabled = false;
//     loadMore.textContent = "Load More";
//   }
// };


const container = document.querySelector('.js-movie-list');
const guard = document.querySelector('.js-guard');
const options = {
  root: null,
  rootMargin: "1500px",
  threshold: 0,
};

const observer = new IntersectionObserver(handlePagination, options);
let page = 1

async function serviceMovie(page=1){
  const response = await axios(`${BASE_URL}${ENDPOINT}`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      page
    }
  });
  return response.data;

}
function createMarkup(arr){
  return arr.map(({original_title, vote_average, poster_path, release_date}) => `
<li class="movie-card">
  <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}"/>
  <div class="movie-info">
  <h2>${original_title}</h2>
  <p>Дата релиза: ${release_date}</p>
  <p>Рейтинг: ${vote_average}</p>
</div>
</li>
  `).join("");
};

serviceMovie(page)
.then(data => {
  container.insertAdjacentHTML('beforeend', createMarkup(data.results));
  observer.observe(guard);
})
.catch(error => {
  console.log(error.message);
})
function handlePagination(entries, observer){
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      page++;
      try{
        const data = await serviceMovie(page);
        container.insertAdjacentHTML('beforeend', createMarkup(data.results));
      }
      catch(error){
        console.log(error.message);
      }
    }
  })
}