import"./assets/main-ZiNoEGMh.js";/* empty css                      */import{a as p}from"./assets/vendor-BJ9gahTP.js";const d="https://api.themoviedb.org/3",m="/trending/movie/week",n=document.querySelector(".js-movie-list"),l=document.querySelector(".js-guard"),g={root:null,rootMargin:"1500px",threshold:0},u=new IntersectionObserver(v,g);let s=1;async function a(e=1){return(await p(`${d}${m}`,{params:{api_key:"e4a0965059e007f76bde4a755dff63eb",page:e}})).data}function i(e){return e.map(({original_title:t,vote_average:r,poster_path:o,release_date:c})=>`
<li class="movie-card">
  <img src="https://image.tmdb.org/t/p/w500${o}" alt="${t}"/>
  <div class="movie-info">
  <h2>${t}</h2>
  <p>Дата релиза: ${c}</p>
  <p>Рейтинг: ${r}</p>
</div>
</li>
  `).join("")}a(s).then(e=>{n.insertAdjacentHTML("beforeend",i(e.results)),u.observe(l)}).catch(e=>{console.log(e.message)});function v(e,t){e.forEach(async r=>{if(r.isIntersecting){s++;try{const o=await a(s);n.insertAdjacentHTML("beforeend",i(o.results))}catch(o){console.log(o.message)}}})}
//# sourceMappingURL=page-2.js.map
