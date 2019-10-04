/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



// DECLARED GLOBAL VARIABLES
const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;


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


//APPEND PAGE LINKS FUNCTION
const appendPageLinks = (list) => {
   // Determines number of page links needed and creates the div and ul
   let pageLinks = (list.length / studentsPerPage);
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

   //Click event handler for pagination links
   for (let i = 0; i < aPageLinks.length; i += 1) {
      aPageLinks[i].addEventListener ('click', (event) => {
         aPageLinks[i].classList.remove("active");
         let pageClick = event.target;
         pageClick.classList.add("active");
         showPage(studentList, pageClick.textContent);
      });
   };
}

showPage(studentList, 1);
appendPageLinks(studentList);

// EXTRA CREDIT

/*** Add functionality to the search component
When the "Search" button is clicked, the list is filtered by student name for those that include 
the search value. For example, if the name Phillip is typed into the box, list all items with a name 
that includes Phillip. If the letter S is typed in, all items with an S in the name will show.

Pro Tip: To improve the functionality and add to the user experience, consider adding a keyup event 
listener to the search input so that the list filters in real time as the user types. This would be 
in addition to making the search button clickable since pasting text into the search bar might not 
trigger the keyup event.

Project Warm Up: Configuring a search feature can seem complex at first, but it's really just a few 
fundamental steps. For some helpful practice, check out the project Warm Up Simple Search.

Paginate search results
Display pagination links based on how many search results are returned. For example: if 10 or fewer 
results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.

Pro Tip: To paginate the search results, try storing the search results in an array that can act as 
a list, on which you can call your functions to show a page and append pagination links.

Handle no results returned
If no matches are found by the search, include a message in the HTML to tell the user there are no matches.

Note Don't use the built in alert() method here. The "No results" message must be printed to the page. ***/



// Creates elements of the Search Bar
const h2 = document.querySelector('h2');
const studentSearchDiv = document.createElement('div');
studentSearchDiv.classList.add("student-search");
const studentSearchInput = document.createElement('input');
studentSearchInput.placeholder = "Search for students...";
const studentSearchButton = document.createElement('button');
studentSearchButton.textContent = "Search";
h2.insertAdjacentElement('afterend', studentSearchDiv);
studentSearchDiv.appendChild(studentSearchInput);
studentSearchDiv.appendChild(studentSearchButton);


// Search Bar function
const studentSearch = (searchInput, names) => {
   for (let i = 0; i < names.length; i += 1) {
      names[i].classList.remove("match");
      if (0 !== studentSearchInput.value.toLowerCase() && studentSearchInput.value.toLowerCase() <= names[i].textContent.toLowerCase()) {
         names[i].classList.add("match");
      };
   };
};


// Search Bar function invoked
studentSearchInput.addEventListener('keyup', (event) => {
   studentSearch(studentSearchInput, studentList);
});
studentSearchButton.addEventListener('click', (event) => {
   event.preventDefault();
   studentSearch(studentSearchInput, studentList);
});









