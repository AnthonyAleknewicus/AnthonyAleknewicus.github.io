// Creating the close button
var myList = document.getElementsByTagName("li");
var index;
for (index = 0; index < myList.length; index++) {
    var aSpanTag = document.createElement("SPAN");
    var someTxt = document.createTextNode("\u00D7");
    aSpanTag.className = "close";
    aSpanTag.appendChild(someTxt);
    myList[index].appendChild(aSpanTag);
}

// close button
var closeButton = document.getElementsByClassName("close");

for (var i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
        var theDiv = this.parentElement;
        theDiv.style.display = "none";
    }
}




var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event){
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('checked');
    }
});

/* createNewElement adds a new list item by recieving the value 
of the input in our html doc, we create a text node out of the 
input value, then we attatch the text node to the To-Do list.
If the value is not empty it is added to the list.*/

function createNewElement() {

    // variable li creates the list item
    var li = document.createElement('li');

    // theInput gets the value of the input in our html doc
    var theInputValue = document.getElementById("the-input").value;

    // a node is a single point in the node tree
    var textNode = document.createTextNode(theInputValue);

    // attatches text node to list if not an empty value
    li.appendChild(textNode);
    
    if (theInputValue === '') {
        alert("This value cannot be empty.");
    } else {
        document.getElementById("the-ul").appendChild(li);
    }

    // Setting the input value to 'none'
    document.getElementById("the-input").value = "";

    var theSpanTag = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    // adding the class 'close' to theSpanTag
    theSpanTag.className = "close";
    // adding the text node to theSpanTag
    theSpanTag.appendChild(txt);
    li.appendChild(theSpanTag);

    // removing items when clicked on SPAN close button
    for (var i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
            var theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }

    /* var itemList = JSON.parse(localStorage.getItem("itemList")) || [];
        itemList.push(theInputValue);
        localStorage.setItem("itemList", JSON.stringify(itemList)); */
}


/* window.onload = function() {
    // retrieve the array from Local Storage
    var itemList = JSON.parse(localStorage.getItem("itemList")) || [];
    // loop through the array and add the items to the to-do list
    for (var i = 0; i < itemList.length; i++) {
      var li = document.createElement('li');
      var textNode = document.createTextNode(itemList[i]);
      li.appendChild(textNode);
      
      var theSpanTag = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      theSpanTag.className = "close";
      theSpanTag.appendChild(txt);
      li.appendChild(theSpanTag);
      
      ulList.appendChild(li);
    }
  } */



