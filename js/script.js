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

// DECLARED GLOBAL VARIABLES
const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 44 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function
***/ 

//SHOW PAGE FUNCTION
const showPage = (list, page) => {
   let startIndex = (page * studentsPerPage) - studentsPerPage;
   let endIndex = page * studentsPerPage;

   for (let i = 0; i < list.length; i += 1) {
      if (startIndex <= i && i < endIndex) {
         studentList[i].style.display = 'block';
      } else { 
         studentList[i].style.display = 'none';
      };
   };
};


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

//APPEND PAGE LINKS FUNCTION
const appendPageLinks = (list) => {
   // Determines number of page links needed and creates the div and ul
   let pageLinks = (list.length / studentsPerPage) + 1;
   const divPage = document.querySelector('.page');
   const div = document.createElement('div');
   const ul = document.createElement('ul');
   div.className = 'pagination';
   divPage.appendChild(div);
   div.appendChild(ul);

   //Creates li and a elements nested in ul
   for (let i = 0; i < pageLinks; i += 1) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = i + 1;
      a.setAttribute = ('href', '#');
      ul.appendChild(li)[i];
      li.appendChild(a)[i];
   };

   //Event handler for page links
   const aPageLinks = document.querySelectorAll('a');
   aPageLinks[0].className = 'active';

   //ERROR AT THIS POINT. EVENT HANDLER NOT RECOGNIZED AS A FUNCTION.
   aPageLinks.addEventListener('click', (event) => {
      for (let i = 0; i < aPageLinks.length; i += 1) {
         aPageLinks[i].classList.remove("active");
         let pageClick = event.target;
         pageClick.className = 'active';
         showPage(studentList, pageClick.textContent);
      };
   });
}

appendPageLinks(studentList);






