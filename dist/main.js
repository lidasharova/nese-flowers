(()=>{"use strict";const t=function(){let t=document.querySelector(".popup__bg"),e=document.querySelector(".popup"),s=document.querySelectorAll(".open-popup"),c=document.querySelector(".close-popup");s.forEach((s=>{s.addEventListener("click",(s=>{s.preventDefault(),t.classList.add("active"),e.classList.add("active")}))})),c.addEventListener("click",(()=>{t.classList.remove("active"),e.classList.remove("active")})),document.addEventListener("click",(s=>{s.target===t&&(t.classList.remove("active"),e.classList.remove("active"))}))};let e=document.querySelectorAll(".slider__item");const s=function(t){t.classList.contains("slider-active")||t!=e[0]||(t.classList.add("slider-active"),e[1].classList.remove("slider-active"),e[2].classList.remove("slider-active")),t.classList.contains("slider-active")||t!=e[1]||(t.classList.add("slider-active"),e[0].classList.remove("slider-active"),e[2].classList.remove("slider-active")),t.classList.contains("slider-active")||t!=e[2]||(t.classList.add("slider-active"),e[0].classList.remove("slider-active"),e[1].classList.remove("slider-active"))},c=async t=>{const e=await fetch(t);return await e.json()},a=function(t,e){let s=`\n  \t\t\t\t\t<div class="flowers__card">\n  \t\t\t\t\t\t    <img class="flowers__card__img" src="${t.img}" alt="photo-flowers">\n  \t\t\t\t\t\t<div class="flowers__card__content">\n  \t\t\t\t\t\t\t  <h3 class="flowers__card__name title-mini">${t.type}</h3>\n  \t\t\t\t\t\t\t  <h1 class="flowers__card__title title-main">${t.name}</h1>\n  \t\t\t\t\t\t\t  <p class="flowers__card__description text-style">${t.description}</p>\n  \t\t\t\t\t\t\t<div class="flowers__card__price-wrapper">\n  \t\t\t\t\t\t\t\t    <div class="flowers__card__price">${t.price}</div>\n  \t\t\t\t\t\t\t\t    <button class="flowers__card__button button button_unactive open-popup"><a\n  \t\t\t\t\t\t\t\t\t\tclass="button__link" href="#">заказать</a></button>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n      `;e.insertAdjacentHTML("beforeend",s)};let i,l=document.getElementById("containerFloristic");console.log(l);let o,n=document.getElementById("containerBride");console.log(n);t(),function(){const t=document.querySelectorAll(".slider__item"),e=document.querySelector(".about__img");let c="",a=new Image;for(let i=0;i<t.length;i++)t[i].addEventListener("click",(t=>{let l=t.target;s(l),c=`url('/assets/img/about/${i+1}.png')`,a.src=`/assets/img/about/${i+1}.png`,a.onload=()=>{e.style.backgroundImage=c}}))}(),(async()=>{try{i=await c("dist/data/cardsFloristic_data.json")}catch(t){console.log(message)}i.forEach((t=>{a(t,l)})),t()})(),(async()=>{try{o=await c("dist/data/cardsBride_data.json"),console.log(o)}catch(t){console.log(message)}o.forEach((t=>{a(t,n)})),t()})()})();