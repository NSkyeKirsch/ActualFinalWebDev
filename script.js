let newImageName;
let rightSideElement;
let chatDisplayElement; // A div just for the chat messages
let buttonOverlayElement;
let overlayElement;
let animate;
let mainContentElement;
let alBox;
let alNumMessages = 0;
let inputElement;
let sendButtonElement;
let correctAns;
let name;

let currentMessageID = 0;


document.addEventListener("DOMContentLoaded", function() {

  mainContentElement = document.querySelector(".mainContent");
  rightSideElement = document.querySelector("#right-side");
  chatDisplayElement = document.querySelector("#chatDisplay");
  inputElement = document.querySelector("#message-input");
  sendButtonElement = document.querySelector('#send-button');

  alTime(alMessagesOne, chatMessagesOne);


  sendButtonElement.addEventListener("click", function() {

    let userInput = inputElement.value;
    let userMessage = {
      "Sender": "Visitor",
      "Message": userInput,
      "Delay": "0",
      "Event": "none",
    }

    createElementProper(userMessage);


    processResponse(1);
  })

})


let chatMessagesOne = [{
    "Sender": "George",
    "Message": "Hi, It's George. Are you guys ready to start the group meeting?",
    "Delay": "1",
    "Event": "none",
    "id": 1
  },
  {
    "Sender": "Mary",
    "Message": "HIIIII!!!! I'm here!!!!!",
    "Delay": "2",
    "Event": "none",
    "id": 2
  },
  {
    "Sender": "Robin",
    "Message": "Hey",
    "Delay": "3",
    "Event": "none",
    "id": 3

  },
  {
    "Sender": "George",
    "Message": "Hey new person, what's your name again?",
    "Delay": "4",
    "Event": ["input", "Yes"],
    "id": 4
  }
];


let alMessagesOne = [{
    "Sender": "Al",
    "Message": "Hello, I'm Al, your personal Algorithm.",
    "Event": ["none"],
  },
  {
    "Sender": "Al",
    "Message": "I woke you up so that you can work with your friends on the project due tomorrow. Aren't I helpful?",
    "Event": ["none"],
  }
];

let alMessagesTwo = [{
    "Sender": "Al",
    "Message": "Hey, congrats on answering your first question!",
    "Event": ["none"],
  },
  {
    "Sender": name,
    "Message": "Thanks",
    "Event": ["none"],
  },
  {
    "Sender": "Al",
    "Message": "If you want, you can purchase a new upgrade for my systems, and ",
    "Event": ["none"],
  }
];

function alTime(database, nextDatabase) {

  createAlementProper(database[alNumMessages]);

  document.querySelector("#closing-button").addEventListener("click", function() {

    off(database, nextDatabase);

  })
}

function off(database, nextDatabase) {
  alBox = document.querySelector("#contentAlBox");
  alBox.remove();
  alNumMessages = alNumMessages + 1;
  if (alNumMessages < database.length) {
    alTime(database, nextDatabase);
  } else {
    alNumMessages = 0;
    for (var i = 0; i < nextDatabase.length; i++) {
      createElementProper(nextDatabase[i]);
      currentMessageID = nextDatabase[i]["id"];
    }
  }
}

function createElementProper(incomingJSON) {


  //create card for the whole item
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItemBox');
  newContentElement.style.visibilty = "visible";
  newContentElement.style.padding = "20px";
  newContentElement.style.display = "flex";
  newContentElement.style.marginLeft = "-100vh";
  newContentElement.style.transition = "transform 1s ease-out";

  //create box for left inside
  let newContentLeftSide = document.createElement("DIV");
  newContentLeftSide.classList.add('contentLeftSide');
  //newContentLeftSide.style.padding = "5px";
  //add to item box
  newContentElement.appendChild(newContentLeftSide);

  //create box for right side
  let newContentRightSide = document.createElement("DIV");
  newContentRightSide.classList.add('contentMessageBox');
  newContentRightSide.style.display = "flex";
  newContentRightSide.style.flexDirection = "column";
  //newContentRightSide.style.alignItems = "center";
  //add to item box
  newContentElement.appendChild(newContentRightSide);

  //create Headline
  let newContentHeading = document.createElement("DIV");
  newContentHeading.classList.add('contentSender');
  newContentHeading.style.display = "flex";
  newContentHeading.style.width = "300px";
  newContentHeading.style.fontSize = "xx-large";
  newContentHeading.style.textDecoration = "underline";
  //newContentHeading.style.justifyContent = "center";
  newContentHeading.style.padding = "5px";
  newContentHeading.innerText = incomingJSON['Sender'];
  //add headline to the right side
  newContentRightSide.appendChild(newContentHeading);

  //create description box for the right side
  let newContentDesc = document.createElement("DIV");
  newContentDesc.classList.add('contentMessage');
  newContentDesc.style.display = "flex";
  newContentDesc.style.width = "400px";
  //newContentDesc.style.height = "56px";
  newContentDesc.style.marginTop = "5px";
  newContentDesc.style.paddingLeft = "5px";
  //newContentDesc.style.justifyContent = "center";

  newContentDesc.innerText = incomingJSON['Message'];
  //add to right side
  newContentRightSide.appendChild(newContentDesc);

  //create img for left side
  let newImage = document.createElement("IMG");
  newImage.classList.add("leftIMG");
  newImageName = incomingJSON['Sender'];

  if (newImageName == "George") {
    newImage.src = "GeorgePFP2.png";
  } else if (newImageName == "Mary"){
    newImage.src = "MaryPFP.png";
  } else if (newImageName == "Thomas"){
    newImage.src = "ThomasPFP.png";
  } else if (newImageName == "Robin"){
    newImage.src = "RobinPFP2.png";
  }
  newImage.style.width = "80px";
  //add image to left side
  newContentLeftSide.appendChild(newImage);

  //add whole item box the page
  chatDisplayElement.appendChild(newContentElement);

  window.setInterval(addTransform, ((incomingJSON['Delay'] * 1000)));

  if (incomingJSON.Event[0] == "input") {
    correctAns = incomingJSON.Event[1];
  }

  function addTransform() {
    if(incomingJSON['Sender'] == "Visitor"){
      newContentElement.style.transform = "translate(150vh)";
    } else {
      newContentElement.style.transform = "translate(100vh)";
    }
  }

  chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to bottom of chat display

}

function createAlementProper(incomingJSON) {

  //create whole cube
  let newContentWhole = document.createElement("DIV");
  newContentWhole.setAttribute('id', 'contentAlBox');
  newContentWhole.style.display = "flex";
  newContentWhole.style.position = "absolute";
  newContentWhole.style.marginTop = "55vh";
  newContentWhole.style.height = "40vh";
  newContentWhole.style.width = "99.8%";
  newContentWhole.style.zIndex = "2";
  newContentWhole.style.flexDirection = "row-reverse";
  newContentWhole.style.backgroundColor = "white";

  //create closing
  let newClosingElement = document.createElement("BUTTON");
  newClosingElement.setAttribute('id', 'closing-button');
  newClosingElement.innerText = "X";
  newClosingElement.style.height = "50px";
  newClosingElement.style.width = "50px";
  //add closing to cube
  newContentWhole.appendChild(newClosingElement);

  //create Anim
  newImageName = incomingJSON['Sender'];
  if (newImageName == "Al") {
    let newImageAl = document.createElement("IMG");
    newImageAl.src = "ALGIF_v002.gif";
    newImageAl.classList.add("AlIMG");
    newImageAl.style.width = "400px";
    newImageAl.style.height = "300px";

    //add Anim to cube
    newContentWhole.appendChild(newImageAl);
  }

  //create Message
  newContentMessage = document.createElement("DIV");
  newContentMessage.classList.add("contentMessageAl");
  newContentMessage.style.display = "flex";
  newContentMessage.style.width = "60%";
  newContentMessage.style.height = "40%";
  newContentMessage.style.marginTop = "5%";
  newContentMessage.style.justifyContent = "center";
  newContentMessage.innerText = incomingJSON['Message'];

  //add message to cube
  newContentWhole.appendChild(newContentMessage);



  //add cube to page
  mainContentElement.appendChild(newContentWhole);

}

function processResponse(delay) {

  /* NOTE: By keeping track of an "id" of the question, we can write a bunch of
          conditionals here to decide exactly how we respond to each one. */

  var ansInput = inputElement.value;
  if(currentMessageID != 4){
      ansInput = ansInput.toLowerCase();
  }
  let responseData

  if (currentMessageID == 4){
    responseData = {
      "Sender": "Mary",
      "Message": "Oh, hey " + ansInput + "- do you think cats are the best? yes or no?",
      "Delay": delay,
      "Event": "none",
      "id": 5
    }
    name = ansInput;
  }
  else if (currentMessageID == 5){
    if (ansInput == "yes" || ansInput == "yeah" || ansInput == "yep" || ansInput == "the best"){
      responseData = {
        "Sender": "Mary",
        "Message": "ME TOO! I think I would gain so many subscribers if I got a cat!",
        "Delay": delay,
        "Event": "none",
        "id": 6
      }

      goToNext(chatMessagesTwo);

    }
    else if (ansInput == "no" || ansInput == "nope" || ansInput == "no way" || ansInput == "nah"){
      responseData = {
        "Sender": "Mary",
        "Message": "I don't either, but I would totally get more subscribers if I got one!",
        "Delay": delay,
        "Event": "none",
        "id": 6
      }

      goToNext(chatMessagesTwo);

    }
    else {
      responseData = {
        "Sender": "Mary",
        "Message": "huh? i don't understand...",
        "Delay": delay,
        "Event": "none",
        "id": 7
      }
      goBack(4, 2, responseData);
    }
  }
  else if (currentMessageID == 10){
    if (ansInput == "profiles" || ansInput == "profile"){
      responseData = {
        "Sender": "Robin",
        "Message": "yes" + " " + ansInput + ", " + "Thanks!",
        "Delay": delay,
        "Event": "none",
        "id": 11
      }

      alTime(alMessagesTwo, chatMessagesThree);
    } else {
        responseData = {
          "Sender": "Robin",
          "Message": "huh? i don't understand...",
          "Delay": delay,
          "Event": "none",
          "id": 12
        }
        goBack(10, 1, chatMessagesTwo);
      }
    }


function goToNext(database){
  window.setTimeout(function(){
    for (var i = 0; i < database.length; i++) {
      createElementProper(database[i]);
      currentMessageID = database[i]["id"];
    }
  }, ((responseData['Delay'] * 2000)));
}

  function goBack(id, type, database){
    currentMessageID = id;
    if(type == 1){
      window.setTimeout(function(){
        for (var i = id; i < database.length; i++) {
          createElementProper(database[i]);
          currentMessageID = database[i]["id"];
        }
      }, ((database['Delay'] * 2000)));
    } else {
      processResponse(2);
    }

  }

  window.setTimeout(function(){
    currentMessageID = responseData["id"];
    createElementProper(responseData);
  }, ((responseData['Delay'] * 1000)));

}

let chatMessagesTwo = [{
    "Sender": "Robin",
    "Message": "Do you know how to take care of one?",
    "Delay": 1,
    "Event": "none",
    "id": 7
  },
  {
    "Sender": "Mary",
    "Message": "haha NOPE. I just need to take a few cute videos and then get rid of it :)",
    "Delay": 2,
    "Event": "none",
    "id": 8
  },
  {
    "Sender": "George",
    "Message": "Thomas isn't here yet, but we should get started on our project.",
    "Delay": 3,
    "Event": "none",
    "id": 9

  },
  {
    "Sender": "Robin",
    "Message": "Right. What made the first social media plaform different from chats before it? I'm looking for one word.",
    "Delay": 4,
    "Event": ["input", "Yes"],
    "id": 10
  }
];

let chatMessagesThree = [
  {
    "Sender": "Thomas",
    "Message": "Whoops, I'm late.",
    "Delay": 1,
    "Event": ["input", "Yes"],
    "id": 12
  }
]





  // if (ansName == correctAns) {
  //   //next part
  //   console.log("Correct!" + " " + ansName + " " + correctAns);
  // } else {
  //   //do a shake
  //   console.log("No!" + " " + ansName + " " + correctAns);
  // }
//}

/*
function createInput(){

  let newInputElement = document.createElement("INPUT");
  newInputElement.setAttribute("id", "addText");
  newInputElement.setAttribute("type", "text");

  //add to right side of the page
  rightSideElement.appendChild(newInputElement);

}
*/
