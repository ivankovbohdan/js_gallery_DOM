"use strict";
const nav = document.querySelector(".gallery__list");
const mainImage = document.querySelector(".gallery__large-img");
nav.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest(".list-item__link");
    mainImage.setAttribute("src", link.getAttribute("href"));
});

//# sourceMappingURL=index.f75de5e1.js.map
