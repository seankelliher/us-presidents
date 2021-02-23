import {allPresidents} from "./presidents.js";

function createElements() {
    "use strict";

    allPresidents.forEach(function (index) {

        //Get "main" element.
        const main = document.querySelector("main");

        //Create needed elements.
        const section = document.createElement("section");
        const ptag1 = document.createElement("p");
        const ptag2 = document.createElement("p");

        //Add id and class names.
        section.id = `potus${index.order}`;
        ptag1.className = "president";
        ptag2.className = "detail";

        //Assign President's name.
        ptag1.textContent = `${index.order}. ${index.name}`;

        //Append elements.
        section.appendChild(ptag1);
        section.appendChild(ptag2);
        main.appendChild(section);
    });

}

export {createElements};