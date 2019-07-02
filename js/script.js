/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

const studentLi = document.querySelector(".student-list").children;
const studentsPerPage = 10;

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
function showPage(list, page) {
  const startIndex = (page * studentsPerPage) - studentsPerPage;
  const endIndex = page * studentsPerPage;

  for (let i=0; i < list.length; i+=1) {
    if (studentLi.length >= startIndex && list.length < endIndex) {
      target.style.display = "";
    } else {
      target.style.display = "none";
    }
  }
}

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
function appendPageLinks(list) {
//  const div; // Use these variables to clean up code below later IF YOU CAN!!! WTF
//  const ul;
//  const li;

  document.querySelector(".page").appendChild(document.createElement("div"));
  document.querySelector(".student-list").nextElementSibling.className = "pagination";
  document.querySelector(".student-list").nextElementSibling.appendChild(document.createElement("ul"));

// create for loop here to figure how many pages are needed and create links. pages = list.length/studentsPerPage. list argument for function is full list from index?
  for (let i =0; i < list.length/studentsPerPage; i+=1){

  document.querySelector(".student-list").nextElementSibling.firstElementChild.appendChild(document.createElement("li"));
  document.querySelector(".student-list").nextElementSibling.firstElementChild.firstElementChild.appendChild(document.createElement("a"));
  document.querySelector(".student-list").nextElementSibling.firstElementChild.firstElementChild.firstElementChild.textContent = "1"; // replace 1 with dynamic number
}

}




// Remember to delete the comments that came with this file, and replace them with your own code comments.
