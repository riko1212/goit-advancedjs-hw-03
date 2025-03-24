import{i as a,S as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const l=(r,t,o="beforeend")=>{r.insertAdjacentHTML(o,t)},d=r=>{r.innerHTML=""},u=(r,t)=>{const o=t.map(n=>`
    <li class="gallery-item">
      <a href="${n.largeImageURL}">
        <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
      </a>
      <div class="gallery-item-info">
        <div>
          <b>Likes</b>
          ${n.likes}
        </div>
        <div>
          <b>Views</b>
          ${n.views}
        </div>
        <div>
          <b>Comments</b>
          ${n.comments}
        </div>
        <div>
          <b>Downloads</b>
          ${n.downloads}
        </div>
      </div>
    </li>
  `).join("");l(r,o)},f=(r,t)=>{d(r),t&&t.length&&u(r,t)},m="45273601-269fa7243c6da01438f09c62a",y=r=>{const t=`key=${m}&q=${r}&image_type=photo&orientation=horizontal`;return fetch(`https://pixabay.com/api?${t}`,{referrerPolicy:"unsafe-url"}).then(o=>{if(o.ok)return o.json();throw new Error(o.statusText)}).then(o=>o.hits).catch(()=>{a.error("Error while fetching images. Please try again!")})};a.settings({position:"topRight",timeout:3e3});const h=(r,t,o,n,e)=>{r.preventDefault();const s=t.elements.search.value.trim();s?(e.classList.add("active"),y(s).then(i=>{f(o,i),n.refresh(),i.length||a.error({title:"❌ Error",message:"Sorry, there are no images matching your search query. Please try again!"}),e.classList.remove("active")}).catch(i=>{a.error({title:"❌ Error",message:"An error occurred while fetching images. Please try again later."}),e.classList.remove("active")})):a.warning({title:"⚠️ Warning",message:"Please enter a search query!"}),t.reset()};document.addEventListener("DOMContentLoaded",()=>{document.getElementById("root");const r=document.querySelector(".form"),t=document.querySelector("#gallery"),o=document.querySelector(".loader"),n=new c("#gallery a",{captionDelay:250,captionsData:"alt"});r.addEventListener("submit",e=>{h(e,r,t,n,o)})});
//# sourceMappingURL=index.js.map
