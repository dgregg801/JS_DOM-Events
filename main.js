console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1").textContent = "I used the getElementById('node1') method to access this";


// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");

node2[0].textContent = "I used the getElementsByClassName('node2') method to access this";


// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3tags = document.getElementsByTagName("h3")

for (let i = 0; i < h3tags.length; i++) {
     h3tags[i].textContent = "I used the getElementByTagName('h3') method to access all of these";
}


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let paragraph = document.createElement("p");
paragraph.textContent = "This node was created using the createElement() method";


// TODO: Append the created node to the parent node using the element.appendChild() method
let pDiv = document.getElementById("parent");
pDiv.appendChild(paragraph);


// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let aTag = document.createElement("a");
aTag.textContent = "I am a <a> tag";



// BONUS: Add a link href to the <a>
aTag.href = "https://truecoders.io";
aTag.target = "_blank";


// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

pDiv.insertBefore(aTag, paragraph);



/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let container3 = document.querySelector("#exercise-container3");
let oldChildNode = document.querySelector("#N1");

let newChildNode = document.createElement("p");
newChildNode.textContent = "New Child Node";

container3.replaceChild(newChildNode, oldChildNode);

// TODO: Remove the "New Child Node"
setTimeout(() => {
     newChildNode.remove();
}, 3000);

//newChildNode.remove();


/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement ("ul");

// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
     let li = document.createElement("li");
     li.textContent = item;
     // TODO: Append the new list items to the unordered list element
     ul.appendChild(li);
});

 // TODO: Append the unordered list to the `div#container` under exercise 4 
document.getElementById("container").appendChild(ul);



/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
function show() {
     //creation of element
     let modalDiv = document.createElement("div");
     let modalCard = document.createElement("div");
     let modalPara = document.createElement("p");
     let modalCloseBtn = document.createElement("button");
     
     
     //modifications
     modalPara.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
     modalDiv.id = "modal";
     modalCard.classList.add("modal-card");
     modalCloseBtn.textContent = "X";
     modalCloseBtn.addEventListener("click", () => {
          modalDiv.remove();
     });
     //attach to page
     document.getElementsByClassName("exercise5")[0].append(modalDiv);
     modalDiv.append(modalCard);
     modalCard.append(modalCloseBtn, modalPara);

}

//Select the button
//give it an event listener
//and have that listener invoke the show function

let modalButton = document.querySelector("#btn");
modalButton.addEventListener("click", show);

//

// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
