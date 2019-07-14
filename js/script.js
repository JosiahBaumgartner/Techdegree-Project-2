/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

***/

const studentLi = document.querySelectorAll(".student-item");
const studentsPerPage = 10;

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.
***/
function showPage(list, page) {
  const startIndex = (page * studentsPerPage) - studentsPerPage;
  const endIndex = page * studentsPerPage;

  for (let i=0; i < list.length; i+=1) {
    if ( i >= startIndex && i < endIndex) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}

// Create the `appendPageLinks function` to generate, append, and add functionality to the pagination buttons.

function appendPageLinks(list) {

  document.querySelector(".page").appendChild(document.createElement("div"));
  document.querySelector(".student-list").nextElementSibling.className = "pagination";
  const div = document.querySelector(".pagination");

  div.appendChild(document.createElement("ul"));
  const ul = document.querySelector(".student-list").nextElementSibling.firstElementChild;

// Create for loop here to figure how many pages are needed and create links. pages = list.length/studentsPerPage.
  for (let i = 0; i < list.length/studentsPerPage; i+=1){

  ul.appendChild(document.createElement("li"));
  const li = ul.getElementsByTagName("li");
  li[i].appendChild(document.createElement("a"));
  li[i].firstElementChild.textContent = i+1;
  li[i].firstElementChild.setAttribute("href", "#");

  // Defaults page 1 button to class "active"
  ul.children[0].firstElementChild.className = "active";
// Event handler wipes classes from all links and set clicked tag as class "active".
// event handler should run showpage(studentLi, a.textContent);
}
// Document event listener that bubbles event up and checks if click was on an <a> tag.
  document.addEventListener("click", () => {
  if(event.target.tagName === "A" ){
    showPage(studentLi, event.target.textContent)
    for (i = 0; i < list.length/studentsPerPage; i+=1){
    ul.children[i].firstElementChild.classList.remove("active");
    }
    event.target.className = "active";
  }
  });
}
showPage(studentLi, 1);
appendPageLinks(studentLi);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
