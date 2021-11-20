// create "close" button & append it to each list item
var nodeList = document.getElementsByTagName("LI");
var i;
for(i=0; i<nodeList.length; ++i){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt); // appendChild : 
    nodeList[i].appendChild(span);
}

// click close button to hide current list item
var close = document.getElementsByClassName("close");
for(i=0; i<close.length; ++i){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// add "checked" symbol when clicking list item


// create new list when clicking on "Add" button
function newElement(){  // back at html <span onclick="newElement()" ...>
    var li = document.createElement("li"); // = create new list
    var inputValue = document.getElementById("myInput");
    var node = document.createTextNode(inputValue);

    li.appendChild(node);
    if(inputValue='') // if user didn't type anything
        alert("You must write something!");
    else
        document.getElementById("myList").appendChild(li);

    document.getElementById("myInput").value="";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0; i<close.length; ++i){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}