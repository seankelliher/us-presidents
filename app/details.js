import {allPresidents} from "./presidents.js";

function fillDetails(color, text) {
    "use strict";

    allPresidents.forEach(function (index) {

        //Get each section by its id.
        const potus = `potus${index.order}`;
        const sect = document.getElementById(potus);

        //Get "p" within it.
        const detail = sect.getElementsByClassName("detail")[0];

        //Add bg color and text.
        detail.style.backgroundColor = `${index[color]}`;
        detail.textContent = `${index[text]}`;
    });
}

export {fillDetails};