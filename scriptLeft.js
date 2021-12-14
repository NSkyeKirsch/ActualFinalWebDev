let leftHeaderElement;
let leftInfoElement;
let beginningElement;
let myspaceElement;
let facebookElement;
let metaElement;

document.addEventListener("DOMContentLoaded", function(){

  leftHeaderElement = document.querySelector(".leftHeader");
  leftInfoElement = document.querySelector(".leftInfo");
  beginningElement = document.querySelector("#Beginning-button");
  myspaceElement = document.querySelector("#MySpace-button");
  facebookElement = document.querySelector("#Facebook-button");
  metaElement = document.querySelector("#Meta-button");

  beginningElement.addEventListener("click", function(){

      createContentProper(contentLeftSide[0]);

  })

  myspaceElement.addEventListener("click", function(){

      createContentProper(contentLeftSide[1]);

  })
})





let contentLeftSide = [{
    "Header": "The First Social Media Website",
    "Content": "Until the 1990's, social media as we know it today did not exist. However, there was a saying that \"There are no more than 6 relationships between every person on the planet.\" This saying is what led Andrew Weinreich and his team to name their networking website SixDegrees.com in 1997. This website is now credited as the first online social media platform. The purpose of the website was to connect people who know each other (the first degree) with the people they know (the second degree). What made SixDegrees.com different from chats of the past was that each user could create their own profiles. Although it had potential to become a bigger platforms, one of the major flaws was that there were no pictures of people, mostly due to camera limitations of the time. Source: https://www.bbc.co.uk/programmes/w3csywv4"
  },
  {
    "Header": "Myspace",
    "Content": "Hello World 2"
  },
  {
    "Header": "Facebook introduces Algorithm",
    "Content": "Hello World 3"
  },
  {
    "Header": "Facebook becomes Meta",
    "Content": "Hello World 4"
  }
];

function createContentProper(incomingJSON){
  leftHeaderElement.innerText = incomingJSON['Header'];
  leftInfoElement.innerText = incomingJSON['Content'];
}
