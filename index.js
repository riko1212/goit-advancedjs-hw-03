import{i,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const c=(e,t,o="beforeend")=>{e.insertAdjacentHTML(o,t)},l=e=>{e.innerHTML=""},u=(e,t)=>{const o=t.map(n=>`
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
  `).join("");c(e,o)},f=(e,t)=>{l(e),t&&t.length&&u(e,t)},m=e=>{l(e),c(e,`
    <div class="loading">Loading images, please wait...</div>
    <span class="loader"></span>
  `)},h="45273601-269fa7243c6da01438f09c62a",y=e=>{const t=`key=${h}&q=${e}&image_type=photo&orientation=horizontal`;return fetch(`https://pixabay.com/api?${t}`,{referrerPolicy:"unsafe-url"}).then(o=>{if(o.ok)return o.json();throw new Error(o.statusText)}).then(o=>o.hits).catch(()=>{i.error("Error while fetching images. Please try again!")})};i.settings({position:"topRight",timeout:3e3});const g=(e,t,o,n)=>{e.preventDefault();const r=t.elements.search.value.trim();r?(m(o),y(r).then(s=>{f(o,s),n.refresh(),s.length||i.error({title:"❌ Error",message:"Sorry, there are no images matching your search query. Please try again!"})})):i.warning({title:"⚠️ Warning",message:"Please enter a search query!"}),t.reset()};document.addEventListener("DOMContentLoaded",()=>{document.getElementById("root");const e=document.querySelector("#search-form"),t=document.querySelector("#gallery"),o=new d("#gallery a",{captionDelay:250,captionsData:"alt"});e.addEventListener("submit",n=>{g(n,e,t,o)})});
//# sourceMappingURL=index.js.map
