import {createElements} from "./app/elements.js";
import {fillDetails} from "./app/details.js";
import {clearButtons, highlightButton} from "./app/buttons.js";

//After DOM loads...
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //Invoke these functions.
    createElements();
    fillDetails("birthplaceColor", "birthplace");
    highlightButton("birthplace");

    //Get the nav.
    const nav = document.querySelector("nav");

    //Monitor for clicks.
    nav.addEventListener("click", function (event) {

        if (event.target.tagName === "BUTTON") {

            //Get target, create arguments from it.
            const etid = event.target.id;
            const color = `${etid}Color`;
            const text = `${etid}`;

            //Invoke next functions.
            fillDetails(color, text);
            clearButtons();
            highlightButton(etid);
        }
    });
});