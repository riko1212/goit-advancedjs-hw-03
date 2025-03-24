import{i,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const a=(e,t,n="beforeend")=>{e.insertAdjacentHTML(n,t)},l=e=>{e.innerHTML=""},m=e=>{a(e,`
    <form class="search-form" id="search-form">
      <input
        type="text"
        name="search"
        autocomplete="off"
        placeholder="Search images..."
      />
      <button type="submit">Search</button>
    </form>
  `)},u=e=>{a(e,'<div class="gallery" id="gallery"></div>')},f=(e,t)=>{const n=t.map(o=>`
    <div class="gallery-item">
      <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
      </a>
      <div class="gallery-item-info">
        <div>
          <b>Likes</b>
          ${o.likes}
        </div>
        <div>
          <b>Views</b>
          ${o.views}
        </div>
        <div>
          <b>Comments</b>
          ${o.comments}
        </div>
        <div>
          <b>Downloads</b>
          ${o.downloads}
        </div>
      </div>
    </div>
  `).join("");a(e,n)},h=(e,t)=>{l(e),t&&t.length&&f(e,t)},y=e=>{l(e),a(e,`
    <div class="loading">Loading images, please wait...</div>
    <span class="loader"></span>
  `)},g="45273601-269fa7243c6da01438f09c62a",p=e=>{const t=`key=${g}&q=${e}&image_type=photo&orientation=horizontal`;return fetch(`https://pixabay.com/api?${t}`,{referrerPolicy:"unsafe-url"}).then(n=>{if(n.ok)return n.json();throw new Error(n.statusText)}).then(n=>n.hits).catch(()=>{i.error("Error while fetching images. Please try again!")})};i.settings({position:"topRight",timeout:3e3});const v=(e,t,n,o)=>{e.preventDefault();const r=t.elements.search.value.trim();r?(y(n),p(r).then(s=>{h(n,s),o.refresh(),s.length||i.error({title:"❌ Error",message:"Sorry, there are no images matching your search query. Please try again!"})})):i.warning({title:"⚠️ Warning",message:"Please enter a search query!"}),t.reset()};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("root");m(e),u(e);const t=document.querySelector("#search-form"),n=document.querySelector("#gallery"),o=new d("#gallery a",{captionDelay:250,captionsData:"alt"});t.addEventListener("submit",r=>{v(r,t,n,o)})});
//# sourceMappingURL=index.js.map
