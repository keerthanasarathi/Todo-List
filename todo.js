// Create a new list item when clicking on the "Add" button

function AddElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue); 
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write your Todo's...!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("myInput").value = "";

// Click on a close button to remove the item from the todo list

var del = document.getElementsByClassName("close");
var close = document.createElement("span");
var txt = document.createTextNode("\u00D7");
close.className = "close";
close.appendChild(txt);
li.appendChild(close);
for (var i = 0; i < del.length; i++) {
  del[i].onclick = function() {
    document.getElementById("ul").removeChild(this.parentElement);
  }
}

// Click on a edit button to update the item in the todo list

var edit = document.createElement("span");
var eText = document.createTextNode("\u270D");
edit.className = "edit";
edit.appendChild(eText);
li.appendChild(edit);
edit.onclick = function () {
  document.getElementsByTagName('li')[i], i, this.parentElement, document.querySelectorAll('li')
  document.getElementById("myInput").value = inputValue
  document.getElementById("ul").removeChild(this.parentElement);
    }  
} 

//Create a search box to filter the todo list

document.getElementById("search").addEventListener('keyup',keyfunc)
function keyfunc(){
  var a=document.querySelectorAll('li');
  for(var i=0;i<a.length;i++){
    var val=document.getElementById("search").value.toLowerCase();
    if(a[i].innerHTML.toLowerCase().indexOf(val)!=-1){
      a[i].style.display='block';
    }else{
      a[i].style.display='none';
    }
  }
}