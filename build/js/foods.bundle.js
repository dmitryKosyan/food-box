!function(){"use strict";const e=e=>JSON.parse(localStorage.getItem(e))||[];function t(){document.querySelectorAll(".product__counter").forEach((e=>{const t=e.querySelector(".product__count-minus"),n=e.querySelector(".product__count-plus");let r=e.querySelector(".product__counter-number"),o=r.textContent;n.addEventListener("click",(()=>{r.textContent=++o,console.log(o),c()})),t.addEventListener("click",(()=>{o>1&&(r.textContent=--o,c())}))}))}function c(){document.querySelectorAll(".product__single-variation").forEach((e=>{let t=e.querySelector(".product__price-price");t=+t.textContent;let c=e.nextElementSibling.querySelector(".product__counter-number");"1"==c.innerText&&(e.querySelector(".product__price").textContent=t);let n=parseFloat(c.innerText)*t;n=`${n.toFixed(2)}`,e.querySelector(".product__price").textContent=n}))}function n(){const n=document.querySelector(".total-price-el"),o=document.querySelector(".cart-wrapper-item");let d=e("card");if(!d||!d.length)return o.innerHTML='<h4 class="cart-wrapper-h4">КОРЗИНА ПУСТА</h4>',void(n.textContent="0 руб");let a=0,l="";d.forEach(((e,t)=>{let c=[],r=parseFloat(e.prodPrice);a+=r,n.innerText=`${a.toFixed(2)}руб.`,c==[]&&e.additional.forEach((e=>{c.push(e.productName)})),l+=`\n        <div class="cart-wrapper-content" data-index=${t}>\n                    <div class="cart-product-img">\n                        <img class="img-product-cart" src=${e.imgProduct} />\n                    </div>\n                    <div class="product-name">\n                        <h3 class="cart-product-name">${e.prodName}\n                        </h3>\n                        <div class="addition">${c.join(",")}</div>\n                            <div class="counter-cart-wrapper">\n                            <div class="total-price">${r.toFixed(2)} руб.</div>\n                        </div>\n                    </div>    \n                    <div class="close-button">\n                     <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43"\n                        viewBox="0 0 43 43" fill="none">\n                        <line x1="10.5176" y1="31.9363" x2="30.7566" y2="9.52154"\n                         stroke="#ec710c" stroke-width="2" />\n                         <line x1="31.6061" y1="32.2923" x2="11.0406" y2="10.1767"\n                        stroke="#ec710c" stroke-width="2" />\n                     </svg>\n                    </div>\n                </div> \n        `})),o.innerHTML=l;let i=document.querySelectorAll(".product__counter");i&&(i=[...i],i.forEach((e=>{e.addEventListener("click",t)}))),c(),document.querySelectorAll(".close-button").forEach((e=>{e.addEventListener("click",r)}))}function r(t){const c=t.target.closest(".cart-wrapper-content"),r=c.dataset.index,o=e("card");o.splice(r,1),localStorage.setItem("card",JSON.stringify(o)),c.textContent="",n(),function(){const t=e("card");document.querySelector(".header__basket-count").textContent=t.length}()}document.querySelectorAll(".product__ingridient-container").forEach((e=>{e.innerHTML+='<div class="modal__inner">\n                <ul class="modal-ingridient">\n                <li class="product-add-somathing" data-price-25sm="1.2" data-price-33sm="2.5" data-price-40sm="3.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Соус бешамель\n                    </label>\n                    <div class="product-add-current-price">1.2 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="3">\n                    <label class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Ветчина\n                    </label>\n                    <div class="product-add-current-price">2.5 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="3">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Курица\n                    </label>\n                    <div class="product-add-current-price">1 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Маслины\n                    </label>\n                    <div class="product-add-current-price">0.5 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">\n                    <label class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Томты\n                    </label>\n                    <div class="product-add-current-price">0.5 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="0.5" data-price-33sm="0.5" data-price-40sm="0.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Халапеньо\n                    </label>\n                    <div class="product-add-current-price">0.5 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="1" data-price-33sm="2" data-price-40sm="2.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox" >\n                        <span class="check-style"></span>\n                        Шампиньены\n                    </label>\n                    <div class="product-add-current-price">1 руб</div>\n                </li>\n                <li class="product-add-somathing" data-price-25sm="1.5" data-price-33sm="2" data-price-40sm="2.5">\n                    <label  class="input-lable">\n                        <input type="checkbox" class="product-add-checkbox">\n                        <span class="check-style"></span>\n                        Сыр\n                    </label>\n                    <div class="product-add-current-price">1.5 руб</div>\n                </li>\n            </ul > \n              </div> '})),function(){function e(e){const t=e.target.closest(".product__card");let c=t.querySelector(".product__price-price"),n=t.querySelector(".product__price");c&&(c=+c.textContent,e.target.closest(".modal-ingridient").querySelectorAll(".product-add-somathing").forEach((e=>{if(!e.querySelector(".product-add-checkbox").checked)return;let t=parseFloat(e.querySelector(".product-add-current-price").textContent);c+=+t})),c=`${c.toFixed(2)}`,n.textContent=c,t.querySelector(".product__price-price").textContent=c)}document.querySelectorAll(".modal-ingridient").forEach((t=>{t.querySelectorAll(".product-add-checkbox").forEach((t=>{t.addEventListener("change",e)}))}))}(),t(),document.querySelectorAll(".product__discription-wrap").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.closest(".product__discription-wrap").querySelector(".product__discription");t.style.display="block",e.stopPropagation(),window.addEventListener("click",(()=>{".product__discription"!==e.target.closeet&&(t.style.display="none")}))}))})),function(){function e(e){const t=e.target,c=t.closest(".product__add-ingridient").querySelector(".modal__inner");c.style.display="block",e.stopPropagation(),window.addEventListener("click",(()=>{".product__add-ingridient"!==t.closeet&&(c.style.display="none")}))}document.querySelectorAll(".product__add-ingridient").forEach((t=>{t.addEventListener("click",e)}))}(),document.querySelectorAll(".product__counter").forEach((t=>{const c=t.querySelector(".product__add-tocart");c.addEventListener("click",(t=>{c.innerHTML='Добавлено \n           <svg width="14" height="14" viewBox="0 0 14 14" fill="none">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2071 6.29289C12.5976 6.68342 12.5976 7.31658 12.2071 7.70711L6.70711 13.2071C6.31658 13.5976 5.68342 13.5976 5.29289 13.2071L2.29289 10.2071C1.90237 9.81658 1.90237 9.18342 2.29289 8.79289C2.68342 8.40237 3.31658 8.40237 3.70711 8.79289L6 11.0858L10.7929 6.29289C11.1834 5.90237 11.8166 5.90237 12.2071 6.29289Z" fill="black"/>\n           </svg>',function(t){const c=t.target.closest(".product__card"),n=c.querySelector(".product__img").getAttribute("src"),r=c.querySelector(".product__title").textContent,o=c.querySelector(".product__price").textContent,d=c.querySelector(".product__counter-number").textContent;let a=[];const l=c.querySelectorAll(".product-add-somathing");if(l){[...l].forEach((e=>{if(!e.querySelector(".product-add-checkbox:checked"))return;const t=e.querySelector(".product-add-current-price").textContent,c={productName:e.querySelector(".input-lable").innerText,productPrice:t};a.push(c)}));const t={imgProduct:n,prodName:r,prodPrice:o,prodCountEl:d,additional:a},c=e("card");c.push(t),i="card",s=c,localStorage.setItem(i,JSON.stringify(s)),document.querySelector(".header__basket-count").textContent=c.length}var i,s}(t),n(),function(){const e=document.querySelectorAll(".product-add-somathing");e&&[...e].forEach((e=>{e.querySelector(".product-add-checkbox").checked=!1}))}()}))})),function(){const e=document.querySelector(".cart-modal"),t=document.querySelector(".cart-wrapper"),c=document.querySelector(".header__basket-wrap"),r=document.querySelector(".order-button");c.addEventListener("click",(c=>{n(),e.style.display="block",t.style.display="block",document.querySelectorAll(".product__add-tocart").forEach((e=>{e.textContent="В корзину"}))})),e.addEventListener("click",(t=>{t.stopPropagation(),t.target==e&&(e.style.display="none",r.innerHTML="оформить заказ",r.style.backgroundColor="#8eaf2b7d")}))}();const o=document.getElementById("form");o.addEventListener("submit",(function(e){e.preventDefault(e);const t=[];o.querySelector('[name="name"]'),o.querySelector('[name="phone"]'),o.querySelector('[name="adress"]'),document.querySelector(".total-price-el").textContent,o.querySelector('[name="payment"]:checked').value,t.forEach((e=>{const c={name:e.prodName,count:e.prodCountEl,size:e.productSize};t.push(c);let n="";e.additional.length&&(n=e.additional),t.push(n)})),function(){const e=document.querySelector(".lds-roller"),t=document.querySelector(".order-button");setTimeout((()=>{e.style.display="inline-block",setTimeout((()=>{e.style.display="none",t.innerHTML="заказ оформлен",t.style.backgroundColor="#fd9c00"}),4e3)}),500)}()}))}();