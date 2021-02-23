function clearButtons() {
    "use strict";

    //Gather buttons, make "real" array.
    const buttons = document.querySelectorAll("button");
    const buttonsArray = Array.from(buttons);

    //If button has "highlight" class, remove it.
    buttonsArray.forEach(function (btn) {
        const check = btn.classList.contains("highlight");
        if (check === true) {
            btn.classList.remove("highlight");
        }
    });
}

function highlightButton(etid) {
    "use strict";

    //Get clicked button.
    const clicked = document.getElementById(etid);

    //Add "highlight" class.
    clicked.classList.add("highlight");
}

export {clearButtons, highlightButton};
