//Global variable (actually let).
let material;

//Monitor page, after it loads invoke function.
//Stylesheet needed so window/load" over document/DOMContentLoaded is safer.
window.addEventListener("load", function () {
    "use strict";

    //On page load...birthplace-btn is highlighted through css.

    //Invoke showBirthplace function.
    material.showBirthplace();

    //Set event listener on nav. User click invokes dependent functions.
    document.querySelector("nav").addEventListener("click", function (event) {

        if (event.target.id === "btn-birthplace") {
            material.showBirthplace();
            material.resetNav();
            material.highlightNav(event.target);
        } else if (event.target.id === "btn-party") {
            material.showParty();
            material.resetNav();
            material.highlightNav(event.target);
        } else if (event.target.id === "btn-age") {
            material.showAge();
            material.resetNav();
            material.highlightNav(event.target);
        } else if (event.target.id === "btn-marriage") {
            material.showMarriage();
            material.resetNav();
            material.highlightNav(event.target);
        } else if (event.target.id === "btn-experience") {
            material.showExperience();
            material.resetNav();
            material.highlightNav(event.target);
        } else if (event.target.id === "btn-term") {
            material.showTerm();
            material.resetNav();
            material.highlightNav(event.target);
        } else if (event.target.id === "btn-departure") {
            material.showDeparture();
            material.resetNav();
            material.highlightNav(event.target);
        }

    }); //Close event listener.

}); //Close "load" function.

//The material variable (let).
material = {

    //Reset all buttons to default color.
    resetNav: function () {
        "use strict";

        const buttons = document.querySelectorAll("button");
        const buttonsArray = Array.from(buttons);

        buttonsArray.forEach(function (btn) {
            btn.style.background = "transparent";
        }); //close "forEach" function.
    },

    //Highlight clicked button.
    highlightNav: function (et) {
        "use strict";

        et.style.background = "#e3f2fd"; //blue 50.
    },

    //Show birthplaces.
    showBirthplace: function () {
        "use strict";

        const northeastGroup = {
            potus02: "Massachusetts",
            potus06: "Massachusetts",
            potus08: "New York",
            potus13: "New York",
            potus14: "New Hampshire",
            potus15: "Pennsylvania",
            potus21: "Vermont",
            potus22: "New Jersey",
            potus24: "New Jersey",
            potus26: "New York",
            potus30: "Vermont",
            potus32: "New York",
            potus35: "Massachusetts",
            potus41: "Massachusetts",
            potus43: "Connecticut",
            potus45: "New York"
        };

        const northeast = (Object.keys(northeastGroup));
        const northeastDetail = (Object.values(northeastGroup));

        northeast.forEach(function (noeast, index) {
            const gatherI = document.getElementById(noeast);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#f5f5f5"; //grey 100.
            gatherC.textContent = northeastDetail[index];
        });

        const southeastGroup = {
            potus01: "Virginia",
            potus03: "Virginia",
            potus04: "Virginia",
            potus05: "Virginia",
            potus07: "Carolinas",
            potus09: "Virginia",
            potus10: "Virginia",
            potus11: "North Carolina",
            potus12: "Virginia",
            potus16: "Kentucky",
            potus17: "North Carolina",
            potus28: "Virginia",
            potus39: "Georgia",
            potus42: "Arkansas"
        };

        const southeast = (Object.keys(southeastGroup));
        const southeastDetail = (Object.values(southeastGroup));

        southeast.forEach(function (soeast, index) {
            const gatherI = document.getElementById(soeast);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#bbdefb"; //blue 100.
            gatherC.textContent = southeastDetail[index];
        });

        const midwestGroup = {
            potus18: "Ohio",
            potus19: "Ohio",
            potus20: "Ohio",
            potus23: "Ohio",
            potus25: "Ohio",
            potus27: "Ohio",
            potus29: "Ohio",
            potus31: "Iowa",
            potus33: "Missouri",
            potus38: "Nebraska",
            potus40: "Illinois"
        };

        const midwest = (Object.keys(midwestGroup));
        const midwestDetail = (Object.values(midwestGroup));

        midwest.forEach(function (mwest, index) {
            const gatherI = document.getElementById(mwest);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#cfd8dc"; //blue grey 100.
            gatherC.textContent = midwestDetail[index];
        });

        const southwestGroup = {
            potus34: "Texas",
            potus36: "Texas"
        };

        const southwest = (Object.keys(southwestGroup));
        const southwestDetail = (Object.values(southwestGroup));

        southwest.forEach(function (sowest, index) {
            const gatherI = document.getElementById(sowest);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ffecb3"; //amber 100.
            gatherC.textContent = southwestDetail[index];
        });

        const westGroup = {
            potus37: "California",
            potus44: "Hawaii"
        };

        const west = (Object.keys(westGroup));
        const westDetail = (Object.values(westGroup));

        west.forEach(function (wst, index) {
            const gatherI = document.getElementById(wst);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#c8e6c9"; //green 100.
            gatherC.textContent = westDetail[index];
        });
    },

    //Show political party.
    showParty: function () {
        "use strict";

        const whig = [
            "potus09",
            "potus10",
            "potus12",
            "potus13"
        ];

        whig.forEach(function (whg) {
            const gatherI = document.getElementById(whg);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#f5f5f5"; //grey 100.
            gatherC.textContent = "Whig";
        });

        const democratic = [
            "potus07",
            "potus08",
            "potus11",
            "potus14",
            "potus15",
            "potus17",
            "potus22",
            "potus24",
            "potus28",
            "potus32",
            "potus33",
            "potus35",
            "potus36",
            "potus39",
            "potus42",
            "potus44"
        ];

        democratic.forEach(function (dem) {
            const gatherI = document.getElementById(dem);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#bbdefb"; //blue 100.
            gatherC.textContent = "Democratic";
        });

        const republican = [
            "potus16",
            "potus18",
            "potus19",
            "potus20",
            "potus21",
            "potus23",
            "potus25",
            "potus26",
            "potus27",
            "potus29",
            "potus30",
            "potus31",
            "potus34",
            "potus37",
            "potus38",
            "potus40",
            "potus41",
            "potus43",
            "potus45"
        ];

        republican.forEach(function (rep) {
            const gatherI = document.getElementById(rep);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ffecb3"; //amber 100.
            gatherC.textContent = "Republican";
        });

        const democraticRepublican = [
            "potus03",
            "potus04",
            "potus05",
            "potus06"
        ];

        democraticRepublican.forEach(function (demrep) {
            const gatherI = document.getElementById(demrep);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#cfd8dc"; //blue grey 100.
            gatherC.textContent = "Democratic-Republican";
        });

        const federalist = ["potus02"];

        federalist.forEach(function (fed) {
            const gatherI = document.getElementById(fed);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#c8e6c9"; //green 100.
            gatherC.textContent = "Federalist";
        });

        const unaffiliated = ["potus01"];

        unaffiliated.forEach(function (unaf) {
            const gatherI = document.getElementById(unaf);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ef5350"; //red 400.
            gatherC.textContent = "Unaffiliated";
        });
    },

    //Show age when taking office.
    showAge: function () {
        "use strict";

        const fortyGroup = {
            potus11: 49,
            potus14: 48,
            potus18: 46,
            potus20: 49,
            potus22: 47,
            potus26: 42,
            potus35: 43,
            potus42: 46,
            potus44: 47
        };

        const forty = (Object.keys(fortyGroup));
        const fortyDetail = (Object.values(fortyGroup));

        forty.forEach(function (foty, index) {
            const gatherI = document.getElementById(foty);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#f5f5f5"; //grey 100.
            gatherC.textContent = fortyDetail[index];
        });

        const fiftyGroup = {
            potus01: 57,
            potus03: 57,
            potus04: 57,
            potus05: 58,
            potus06: 57,
            potus08: 55,
            potus10: 51,
            potus13: 50,
            potus16: 52,
            potus17: 56,
            potus19: 54,
            potus21: 51,
            potus23: 55,
            potus24: 55,
            potus25: 54,
            potus27: 51,
            potus28: 56,
            potus29: 55,
            potus30: 51,
            potus31: 54,
            potus32: 51,
            potus36: 55,
            potus37: 56,
            potus39: 52,
            potus43: 54
        };

        const fifty = (Object.keys(fiftyGroup));
        const fiftyDetail = (Object.values(fiftyGroup));

        fifty.forEach(function (fity, index) {
            const gatherI = document.getElementById(fity);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#bbdefb"; //blue 100.
            gatherC.textContent = fiftyDetail[index];
        });

        const sixtyGroup = {
            potus02: 61,
            potus07: 61,
            potus09: 68,
            potus12: 64,
            potus15: 65,
            potus34: 62,
            potus33: 60,
            potus38: 61,
            potus40: 69,
            potus41: 64
        };

        const sixty = (Object.keys(sixtyGroup));
        const sixtyDetail = (Object.values(sixtyGroup));

        sixty.forEach(function (sity, index) {
            const gatherI = document.getElementById(sity);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ffecb3"; //amber 100.
            gatherC.textContent = sixtyDetail[index];
        });

        const seventyGroup = {potus45: 70};
        const seventy = (Object.keys(seventyGroup));
        const seventyDetail = (Object.values(seventyGroup));

        seventy.forEach(function (sety, index) {
            const gatherI = document.getElementById(sety);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ef5350"; //red 400.
            gatherC.textContent = seventyDetail[index];
        });
    },

    //Show marital status when taking office.
    showMarriage: function () {
        "use strict";

        const neverMarried = ["potus15"];

        neverMarried.forEach(function (nmar) {
            const gatherI = document.getElementById(nmar);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ef5350"; //red 400.
            gatherC.textContent = "Never married";
        });

        const widower = [
            "potus07",
            "potus08",
            "potus21",
            "potus28"
        ];

        widower.forEach(function (widr) {
            const gatherI = document.getElementById(widr);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#f5f5f5"; //grey 100.
            gatherC.textContent = "Widower";
        });

        const married = [
            "potus01",
            "potus02",
            "potus03",
            "potus04",
            "potus05",
            "potus06",
            "potus09",
            "potus10",
            "potus11",
            "potus12",
            "potus13",
            "potus14",
            "potus16",
            "potus17",
            "potus18",
            "potus19",
            "potus20",
            "potus22",
            "potus23",
            "potus24",
            "potus25",
            "potus26",
            "potus27",
            "potus29",
            "potus30",
            "potus31",
            "potus32",
            "potus33",
            "potus34",
            "potus35",
            "potus36",
            "potus37",
            "potus38",
            "potus39",
            "potus40",
            "potus41",
            "potus42",
            "potus43",
            "potus44",
            "potus45"
        ];

        married.forEach(function (marr) {
            const gatherI = document.getElementById(marr);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#bbdefb"; //blue 100.
            gatherC.textContent = "Married";
        });
    },

    //Show experience (previous job) when taking office.
    showExperience: function () {
        "use strict";

        const businessGroup = {potus45: "Chair, Trump Organization"};
        const business = (Object.keys(businessGroup));
        const businessDetail = (Object.values(businessGroup));

        business.forEach(function (bsn, index) {
            const gatherI = document.getElementById(bsn);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ef5350"; //red 400.
            gatherC.textContent = businessDetail[index];
        });

        const cabinetGroup = {
            potus04: "Secretary of State",
            potus05: "Secretary of State",
            potus06: "Secretary of State",
            potus27: "Secretary of War",
            potus31: "Secretary of Commerce"
        };

        const cabinet = (Object.keys(cabinetGroup));
        const cabinetDetail = (Object.values(cabinetGroup));

        cabinet.forEach(function (cabn, index) {
            const gatherI = document.getElementById(cabn);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#f5f5f5"; //grey 100.
            gatherC.textContent = cabinetDetail[index];
        });

        const congressGroup = {
            potus07: "Senator, Tennessee",
            potus16: "Congressman, Illinois",
            potus20: "Congressman, Ohio",
            potus23: "Senator, Indiana",
            potus29: "Senator, Ohio",
            potus35: "Senator, Massachusetts",
            potus44: "Senator, Illinois"
        };

        const congress = (Object.keys(congressGroup));
        const congressDetail = (Object.values(congressGroup));

        congress.forEach(function (cngr, index) {
            const gatherI = document.getElementById(cngr);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#bbdefb"; //blue 100.
            gatherC.textContent = congressDetail[index];
        });

        const diplomaticGroup = {
            potus09: "Minister, Colombia",
            potus15: "Minister, UK"
        };

        const diplomatic = (Object.keys(diplomaticGroup));
        const diplomaticDetail = (Object.values(diplomaticGroup));

        diplomatic.forEach(function (dplo, index) {
            const gatherI = document.getElementById(dplo);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#cfd8dc"; //blue grey 100.
            gatherC.textContent = diplomaticDetail[index];
        });

        const govenorGroup = {
            potus11: "Governor, Tennessee",
            potus19: "Governor, Ohio",
            potus22: "Governor, New York",
            potus25: "Governor, Ohio",
            potus28: "Governor, New Jersey",
            potus32: "Governor, New York",
            potus39: "Governor, Georgia",
            potus40: "Governor, California",
            potus42: "Governor, Arkansas",
            potus43: "Governor, Texas"
        };

        const govenor = (Object.keys(govenorGroup));
        const govenorDetail = (Object.values(govenorGroup));

        govenor.forEach(function (gvnr, index) {
            const gatherI = document.getElementById(gvnr);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ffecb3"; //amber 100.
            gatherC.textContent = govenorDetail[index];
        });

        const militaryGroup = {
            potus01: "Commander, Army",
            potus12: "General, Army",
            potus14: "General, Army",
            potus18: "General, Army",
            potus34: "Commander, Allies"
        };

        const military = (Object.keys(militaryGroup));
        const militaryDetail = (Object.values(militaryGroup));

        military.forEach(function (mlty, index) {
            const gatherI = document.getElementById(mlty);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#c8e6c9"; //green 100.
            gatherC.textContent = militaryDetail[index];
        });

        const presidencyGroup = {
            potus02: "Vice President",
            potus03: "Vice President",
            potus08: "Vice President",
            potus10: "Vice President",
            potus13: "Vice President",
            potus17: "Vice President",
            potus21: "Vice President",
            potus24: "President",
            potus26: "Vice President",
            potus30: "Vice President",
            potus33: "Vice President",
            potus36: "Vice President",
            potus37: "Vice President",
            potus38: "Vice President",
            potus41: "Vice President"
        };

        const presidency = (Object.keys(presidencyGroup));
        const presidencyDetail = (Object.values(presidencyGroup));

        presidency.forEach(function (psdn, index) {
            const gatherI = document.getElementById(psdn);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#8aacc8"; //blue 100 dark.
            gatherC.textContent = presidencyDetail[index];
        });
    },

    //Show length of time in office.
    showTerm: function () {
        "use strict";

        const lessThanOneGroup = {
            potus09: "1 month",
            potus20: "6 months"
        };

        const lessThanOne = (Object.keys(lessThanOneGroup));
        const lessThanOneDetail = (Object.values(lessThanOneGroup));

        lessThanOne.forEach(function (ltone, index) {
            const gatherI = document.getElementById(ltone);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#f5f5f5"; //grey 100.
            gatherC.textContent = lessThanOneDetail[index];
        });

        const oneToThreeGroup = {
            potus10: "3 year, 11 months",
            potus12: "1 year, 4 months",
            potus13: "2 years, 7 months",
            potus17: "3 years 10 months",
            potus21: "3 years 5 months",
            potus29: "2 years 4 months",
            potus35: "2 years 10 months",
            potus38: "2 years 5 months"
        };

        const oneToThree = (Object.keys(oneToThreeGroup));
        const oneToThreeDetail = (Object.values(oneToThreeGroup));

        oneToThree.forEach(function (ott, index) {
            const gatherI = document.getElementById(ott);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#bbdefb"; //blue 100.
            gatherC.textContent = oneToThreeDetail[index];
        });

        const fourGroup = {
            potus02: "4 years",
            potus06: "4 years",
            potus08: "4 years",
            potus11: "4 years",
            potus14: "4 years",
            potus15: "4 years",
            potus16: "4 years, 1 month",
            potus19: "4 years",
            potus22: "4 years",
            potus23: "4 years",
            potus24: "4 years",
            potus25: "4 years 6 months",
            potus27: "4 years",
            potus31: "4 years",
            potus39: "4 years",
            potus41: "4 years"
        };

        const four = (Object.keys(fourGroup));
        const fourDetail = (Object.values(fourGroup));

        four.forEach(function (fr, index) {
            const gatherI = document.getElementById(fr);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#cfd8dc"; //blue grey 100.
            gatherC.textContent = fourDetail[index];
        });

        const fiveToSevenGroup = {
            potus26: "7 years 5 months",
            potus30: "5 years 7 months",
            potus33: "7 years 9 months",
            potus36: "5 years 1 month",
            potus37: "5 years 6 months"
        };

        const fiveToSeven = (Object.keys(fiveToSevenGroup));
        const fiveToSevenDetail = (Object.values(fiveToSevenGroup));

        fiveToSeven.forEach(function (fts, index) {
            const gatherI = document.getElementById(fts);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ffecb3"; //amber 100.
            gatherC.textContent = fiveToSevenDetail[index];
        });

        const eightGroup = {
            potus01: "8 years",
            potus03: "8 years",
            potus04: "8 years",
            potus05: "8 years",
            potus07: "8 years",
            potus18: "8 years",
            potus28: "8 years",
            potus34: "8 years",
            potus40: "8 years",
            potus42: "8 years",
            potus43: "8 years",
            potus44: "8 years"
        };

        const eight = (Object.keys(eightGroup));
        const eightDetail = (Object.values(eightGroup));

        eight.forEach(function (eig, index) {
            const gatherI = document.getElementById(eig);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#c8e6c9"; //green 100.
            gatherC.textContent = eightDetail[index];
        });

        const moreThanEightGroup = {potus32: "12 years 1 months"};

        const moreThanEight = (Object.keys(moreThanEightGroup));
        const moreThanEightDetail = (Object.values(moreThanEightGroup));

        moreThanEight.forEach(function (mte, index) {
            const gatherI = document.getElementById(mte);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ef5350"; //red 400.
            gatherC.textContent = moreThanEightDetail[index];
        });

        const present = ["potus45"];

        present.forEach(function (prtn) {
            const gatherI = document.getElementById(prtn);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "none"; //no background.
            gatherC.textContent = "present";
        });
    },

    //Show reason for leaving office.
    showDeparture: function () {
        "use strict";

        const retired = [
            "potus01",
            "potus03",
            "potus04",
            "potus05",
            "potus07",
            "potus11",
            "potus15",
            "potus18",
            "potus24",
            "potus26",
            "potus28",
            "potus30",
            "potus33",
            "potus36"
        ];

        retired.forEach(function (rtr) {
            const gatherI = document.getElementById(rtr);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#cfd8dc"; //blue grey 100.
            gatherC.textContent = "Retired";
        });

        const lost = [
            "potus02",
            "potus06",
            "potus08",
            "potus19",
            "potus22",
            "potus23",
            "potus27",
            "potus31",
            "potus38",
            "potus39",
            "potus41"
        ];

        lost.forEach(function (lst) {
            const gatherI = document.getElementById(lst);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#c8e6c9"; //green 100.
            gatherC.textContent = "Lost election";
        });

        const diedGroup = {
            potus09: "Died (pneumonia)",
            potus12: "Died (cholera morbus)",
            potus16: "Died (assassination)",
            potus20: "Died (assassination)",
            potus25: "Died (assassination)",
            potus29: "Died (heart attack)",
            potus32: "Died (cerebral bleed)",
            potus35: "Died (assassination)"
        };

        const died = (Object.keys(diedGroup));
        const diedDetail = (Object.values(diedGroup));

        died.forEach(function (did, index) {
            const gatherI = document.getElementById(did);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#f5f5f5"; //grey 100.
            gatherC.textContent = diedDetail[index];
        });

        const notNominated = [
            "potus10",
            "potus13",
            "potus14",
            "potus17",
            "potus21"
        ];

        notNominated.forEach(function (nonom) {
            const gatherI = document.getElementById(nonom);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ffecb3"; //amber 100.
            gatherC.textContent = "Lost nomination";
        });

        const termLimit = [
            "potus34",
            "potus40",
            "potus42",
            "potus43",
            "potus44"
        ];

        termLimit.forEach(function (tlim) {
            const gatherI = document.getElementById(tlim);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#bbdefb"; //blue 100.
            gatherC.textContent = "Term limited";
        });

        const resigned = ["potus37"];

        resigned.forEach(function (rsgn) {
            const gatherI = document.getElementById(rsgn);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "#ef5350"; //red 400.
            gatherC.textContent = "Resigned";
        });

        const notApplicable = ["potus45"];

        notApplicable.forEach(function (ntap) {
            const gatherI = document.getElementById(ntap);
            const gatherC = gatherI.getElementsByClassName("detail")[0];
            gatherC.style.background = "none"; //no background.
            gatherC.textContent = "n/a";
        });
    }

}; //Close material.