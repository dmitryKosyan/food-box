!function(){"use strict";var e={445:function(e,t,c){c.d(t,{h:function(){return n}});var r=c(606);function n(){document.querySelectorAll(".product__counter").forEach((e=>{const t=e.querySelector(".product__count-minus"),c=e.querySelector(".product__count-plus");let r=e.querySelector(".product__counter-number"),n=r.textContent;c.addEventListener("click",(()=>{r.textContent=++n,o()})),t.addEventListener("click",(()=>{n>1&&(r.textContent=--n,o())}))}))}function o(){document.querySelectorAll(".product__single-variation").forEach((e=>{let t=e.querySelector(".product__price-price");t=+t.textContent;let c=e.nextElementSibling.querySelector(".product__counter-number");"1"==c.innerText&&(e.querySelector(".product__price").textContent=t);let r=parseFloat(c.innerText)*t;r=`${r.toFixed(2)}`,e.querySelector(".product__price").textContent=r}))}document.querySelectorAll(".product__discription-wrap").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.closest(".product__discription-wrap").querySelector(".product__discription");t.style.display="block",e.stopPropagation(),window.addEventListener("click",(()=>{".product__discription"!==e.target.closeet&&(t.style.display="none")}))}))})),function(){function e(e){const t=e.target,c=t.closest(".product__add-ingridient").querySelector(".modal__inner");c.style.display="block",e.stopPropagation(),window.addEventListener("click",(()=>{".product__add-ingridient"!==t.closeet&&(c.style.display="none")}))}document.querySelectorAll(".product__add-ingridient").forEach((t=>{t.addEventListener("click",e)}))}(),document.querySelectorAll(".product__ingridient-container").forEach((e=>{e.innerHTML+='<div class="modal__inner">\n                <ul class="modal-ingridient">\n                <li class="product-add-somathing" data-price-25sm="1.2" data-price-33sm="2.5" data-price-40sm="3.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Соус бешамель\n                    </label>\n                    <div class="product-add-current-price">1.2 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="3">\n                    <label class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Ветчина\n                    </label>\n                    <div class="product-add-current-price">2.5 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="3">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Курица\n                    </label>\n                    <div class="product-add-current-price">1 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Маслины\n                    </label>\n                    <div class="product-add-current-price">0.5 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">\n                    <label class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Томты\n                    </label>\n                    <div class="product-add-current-price">0.5 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Халапеньо\n                    </label>\n                    <div class="product-add-current-price">0.5 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="2.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Шампиньены\n                    </label>\n                    <div class="product-add-current-price">1 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="1.5" data-price-33sm="2" data-price-40sm="2.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox">\n                        <span class="check-style"></span>\n                        Сыр\n                    </label>\n                    <div class="product-add-current-price">1.5 руб</div>\n                </li>\n            </ul > \n              </div> '})),function(){function e(e){const t=e.target.closest(".product__card");let c=t.querySelector(".product__price-price"),r=t.querySelector(".product__price");c&&(c=+c.textContent,e.target.closest(".modal-ingridient").querySelectorAll(".product-add-somathing").forEach((e=>{if(!e.querySelector(".product-add-checkbox").checked)return;let t=parseFloat(e.querySelector(".product-add-current-price").textContent);c+=+t})),c=`${c.toFixed(2)}`,r.textContent=c,t.querySelector(".product__price-price").textContent=c)}document.querySelectorAll(".modal-ingridient").forEach((t=>{t.querySelectorAll(".product-add-checkbox").forEach((t=>{t.addEventListener("change",e)}))}))}(),function(){document.querySelectorAll(".product__item-wrapper").forEach((e=>{e.addEventListener("click",t)}));const e=document.querySelectorAll(".product__variable-indicator");for(const t of e){const e=t.parentNode;t.style.width=`calc(100% / ${[...e.children].length-1})`;const c=e.querySelector(".selected");let r=0;if(c){const t=[...e.children].findIndex((e=>e.classList.contains("selected")));r=c.getBoundingClientRect().width*t}t.style.left=`${r}px`}function t(e){const t=e.target.parentNode;[...t.children].forEach((e=>{e.classList.remove("selected")})),e.target.classList.add("selected");let c=t.querySelector(".product__variable-indicator");const r=[...t.children].findIndex((t=>t==e.target));c.style.left=e.target.getBoundingClientRect().width*r+"px";const n=e.target.dataset.value,o=e.target.dataset.weigth;e.target.closest(".product__card").querySelectorAll(".product__single-variation").forEach((e=>{const t=n,c=o,r=e.querySelector(".product__price"),d=e.querySelector(".product__price-price"),a=e.querySelector(".product__weigth");r.textContent=`${t} `,d.textContent=`${t} `,a.textContent=`/${c}`}));const d=e.target.dataset.price;document.querySelectorAll(".product-add-somathing").forEach((e=>{const t=e.dataset[`price-${d}`];e.querySelector(".product-add-current-price").textContent=`${t} руб.`}))}}(),n(),o(),document.querySelectorAll(".product__counter").forEach((e=>{const t=e.querySelector(".product__add-tocart");t.addEventListener("click",(e=>{t.innerHTML='Добавлено \n           <svg width="14" height="14" viewBox="0 0 14 14" fill="none">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2071 6.29289C12.5976 6.68342 12.5976 7.31658 12.2071 7.70711L6.70711 13.2071C6.31658 13.5976 5.68342 13.5976 5.29289 13.2071L2.29289 10.2071C1.90237 9.81658 1.90237 9.18342 2.29289 8.79289C2.68342 8.40237 3.31658 8.40237 3.70711 8.79289L6 11.0858L10.7929 6.29289C11.1834 5.90237 11.8166 5.90237 12.2071 6.29289Z" fill="black"/>\n           </svg>',(0,r.T)(e),function(){const e=document.querySelectorAll(".product-add-somathing");e&&[...e].forEach((e=>{e.querySelector(".product-add-checkbox").checked=!1}))}()}))}))},606:function(e,t,c){c.d(t,{T:function(){return d}});var r=c(445);const n=(e,t)=>localStorage.setItem(e,JSON.stringify(t)),o=("card",JSON.parse(localStorage.getItem("card"))||[]);function d(e){const t=e.target.closest(".product__card"),c=t.querySelector(".product__img").getAttribute("src"),r=t.querySelector(".product__title").textContent,d=t.querySelector(".product__variable-item.selected ").innerText,a=t.querySelector(".product__price").textContent,l=t.querySelector(".product__counter-number").textContent;let i=[];const s=t.querySelectorAll(".product-add-somathing");if(s){[...s].forEach((e=>{if(!e.querySelector(".product-add-checkbox:checked"))return;const t=e.querySelector(".product-add-current-price").textContent,c={productName:e.querySelector(".input-lable").innerText,productPrice:t};i.push(c)}));const e={imgProduct:c,prodName:r,productSize:d,prodPrice:a,prodCountEl:l,close:close,additional:i};o.push(e),n("card",o),document.querySelector(".header__basket-count").textContent=o.length}}console.log(o),function(){const e=document.querySelector(".cart-modal"),t=document.querySelector(".cart-wrapper"),c=document.querySelector(".header__basket-wrap"),n=document.querySelector(".order-button");c.addEventListener("click",(c=>{(function(){const e=document.querySelector(".total-price-el"),t=document.querySelector(".cart-wrapper-item");if(0===o.length)return t.innerHTML='<h4 class="cart-wrapper-h4">КОРЗИНА ПУСТА</h4>',void(e.textContent="0 руб");let c=0,n="";o.forEach(((r,o)=>{let d=[],a=parseFloat(r.prodPrice);c+=a,e.innerText=`${c.toFixed(2)}руб.`,d!=[]&&(r.additional.forEach((e=>{d.push(e.productName)})),n+=`\n        <div class="cart-wrapper-content" data-index=${o}>\n                    <div class="cart-product-img">\n                        <img class="img-product-cart" src=${r.imgProduct} />\n                    </div>\n                    <div class="product-name">\n                        <h3 class="cart-product-name">${r.prodName}\n                        </h3>\n                        <div class="addition">${d.join(",")}</div>\n                            <div class="counter-cart-wrapper">\n                            <div class="total-price">${a.toFixed(2)} руб.</div>\n                        </div>\n                    </div>    \n                    <div class="close-button">\n                     <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43"\n                        viewBox="0 0 43 43" fill="none">\n                        <line x1="10.5176" y1="31.9363" x2="30.7566" y2="9.52154"\n                         stroke="#ec710c" stroke-width="2" />\n                         <line x1="31.6061" y1="32.2923" x2="11.0406" y2="10.1767"\n                        stroke="#ec710c" stroke-width="2" />\n                     </svg>\n                    </div>\n                </div> \n        `,t.innerHTML=n)}));let d=document.querySelectorAll(".product__counter");d&&(d=[...d],d.forEach((e=>{e.addEventListener("click",r.h)}))),document.querySelectorAll(".close-button").forEach((e=>{e.addEventListener("click",(function(e){const t=e.target.closest(".cart-wrapper-content"),c=t.dataset.index;console.log(c),o.splice(c,1),localStorage.setItem("card",JSON.stringify(o)),t.textContent="",document.querySelector(".header__basket-count").textContent=o.length}))}))})(),document.querySelectorAll(".product__add-tocart").forEach((e=>{e.textContent="В корзину"})),e.style.display="block",t.style.display="block"})),e.addEventListener("click",(t=>{t.stopPropagation(),t.target==e&&(e.style.display="none",n.innerHTML="оформить заказ",n.style.backgroundColor="#8eaf2b7d")}))}()}},t={};function c(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,c),o.exports}c.d=function(e,t){for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c(445)}();