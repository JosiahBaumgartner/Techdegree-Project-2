/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Global variables that store the DOM elements you will need to reference
const pageDiv = document.querySelector(".page");
const header = document.querySelector(".page-header");
const studentLi = document.querySelectorAll(".student-item");
const studentsPerPage = 10;
let searchLi = [];

// showPage function hides all items not on current page.
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

// appendPageLinks function to generate, append, and add functionality to the pagination buttons.

function appendPageLinks(list) {
  //remove any exsisting pagination links
  if (document.querySelector(".pagination") != null) {
    document.querySelector(".pagination").remove()}

  // Creates elements and sets class
  const div = pageDiv.appendChild(document.createElement("div"));
  div.className = "pagination";
  const ul = div.appendChild(document.createElement("ul"));

// For loop to figure how many pages are needed and create links accordingly. pages = list.length/studentsPerPage.
  for (let i = 0; i < list.length/studentsPerPage; i+=1){

  ul.appendChild(document.createElement("li"));
  const li = ul.getElementsByTagName("li");
  li[i].appendChild(document.createElement("a"));
  li[i].firstElementChild.textContent = i+1;
  li[i].firstElementChild.setAttribute("href", "#");

  // Defaults page 1 button to class "active"
  ul.children[0].firstElementChild.className = "active";
// Event handler wipes classes from all links and set clicked tag as class "active".
}
// Single document event listener that bubbles event up and checks if click was on an <a> tag and which list to use to give link buttons functionality and set proper classes.
  document.addEventListener("click", () => {
    if (event.target.tagName === "A"){
        if ( searchLi.length > 0){
        showPage(searchLi, event.target.textContent);
      } else {
        showPage(studentLi, event.target.textContent);
      }
    for (i = 0; i < list.length/studentsPerPage; i+=1){
    ul.children[i].firstElementChild.classList.remove("active");
    }
      event.target.className = "active";
    }
  });
}

// Function to add search bar
function appendSearchBar(list) {
  // Creates HTML elements, set attributes and creates variables as reference points to work from
  header.appendChild(document.createElement("div"));
  header.querySelector("div").className = "student-search";
  const searchDiv = document.querySelector(".student-search");
  searchDiv.appendChild(document.createElement("input"));
  searchDiv.appendChild(document.createElement("button"));
  searchDiv.querySelector("input").setAttribute("placeholder", "Search for students...");
  searchDiv.querySelector("button").textContent = "Search";

  // Functionality for search bar. Hides full list, generates new array of students that include search input and displays new list.
  searchDiv.addEventListener("keyup", () => {
    searchLi = [];
    for (let i = 0; i < list.length; i+=1) {
      list[i].style.display = "none"
      if(list[i].textContent.includes(searchDiv.querySelector("input").value)){
        searchLi.push(list[i]);
      }
    }
    //Creates a no results found message if first spot of search array is empty, deletes message if search finds something again.
    if (searchLi.length === 0 && pageDiv.querySelectorAll("p").length === 0) {

      const noResults = pageDiv.appendChild(document.createElement("p"));
      noResults.textContent = "No results found.";
    } else if (searchLi.length !== 0 && pageDiv.querySelectorAll("p").length !== 0) {
        pageDiv.querySelector("p").remove();
    }

    // Shows search results or lack thereof and page links
    showPage(searchLi, 1);
    appendPageLinks(searchLi);
    console.log(searchLi);
  });

}
// Runs functions to display default full list and links. Trigering search bar keyup or click event listeners overwrites these.
showPage(studentLi, 1);
appendPageLinks(studentLi);
appendSearchBar(studentLi);
