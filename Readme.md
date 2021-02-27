[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/us-presidents-1.0?style=flat-square)](/LICENSE.txt)
## US Presidents - 1.0

Interactive component about demographics of the 45 US Presidents.

## Project Screen Shots

![screen shot of project](/screenshots/us-presidents-1.0-screenshot1.jpg)

![screen shot of project](/screenshots/us-presidents-1.0-screenshot2.jpg)

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

My goal was to build a component that lets users see an overview of all US Presidents by specific demographics such as birthplace or political party. I also wanted to color-code results to help users see trends. To see, for example, all Presidents elected in their fifties, or who are members of the Whig political party, or who were born in the Northeast.

Prior to coding, a challenge was gathering information on Presidents and fact checking it. This took a lot of time. A design challenge was finding enough colors that worked well together and had some semantic sense to them. For example, using pink for widowers, or a stark red for a category with many members would not make sense.

While coding I also wanted to keep the code as concise as possible and balance columns on screens large enough to accommodate multiple columns. For brevity, I utilized template literals to reuse ids, classes, and properties with the same name or part of the same name, and passed them as argument to avoid having to use if/else statements. For balance, I used CSS properties like "column-count" and "column-fill" to balance columns.

## Acknowledgments

* Data about presidents from [US House of Representatives](https://history.house.gov/Institution/Presidents-Coinciding/Presidents-Coinciding/) and [Wikipedia](https://www.wikipedia.org).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [JSLint](http://jslint.com) and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
* Design guidance from Google's [Material Design](https://material.io/design) and [IBM Design Language](https://www.ibm.com/design/language/color/#gradients).
* Fonts from [Google Fonts](https://fonts.google.com).
* Shields from [Shields](https://shields.io).