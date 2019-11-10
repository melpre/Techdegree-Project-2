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
         list[i].style.display = 'block';
      } else { 
         list[i].style.display = 'none';
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

// ELEMENTS OF THE SEARCH BAR
const h2 = document.querySelector('h2');
const studentSearchDiv = document.createElement('div');
const searchBar = document.createElement('input');
const searchButton = document.createElement('button');
studentSearchDiv.classList.add("student-search");
searchBar.placeholder = "Search for students...";
searchButton.textContent = "Search";
h2.insertAdjacentElement('afterend', studentSearchDiv);
studentSearchDiv.appendChild(searchBar);
studentSearchDiv.appendChild(searchButton);

// SEARCH BAR FUNCTION
const nameSearch = (searchInput, names) => {
   for (let i = 0; i < names.length; i += 1) {
      names[i].classList.remove("student-search");
      if (0 != searchInput.value.length && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
         names[i].classList.add("student-search");
         let searchResults = document.querySelectorAll('.student-search'); //NOT WORKING
         showPage(searchResults, searchResults.length); //NOT WORKING
         
         //Code for pagination results go below here:
         let currentPaginationLinks = document.querySelector('.pagination');
         if (currentPaginationLinks.style.display === 'block') {
            currentPaginationLinks.style.display = 'none';
            //Call appendPageLinks(array) function here
         };
      };
    };
};

// SEARCH FUNCTION EVENT LISTENERS:
   /* SEARCH BUTTON LISTENER */
      searchButton.addEventListener('click', (event) => {
         nameSearch(searchBar, studentList);
         //console.log('Submit button is functional');
      });

   /* SEARCH INPUT LISTENER */
      searchBar.addEventListener('keyup', (event) => {
         nameSearch(searchBar, studentList);
         //console.log('Keyup event on the search input is functional');
      });

/*** IN PROGRESS Paginate search results 
Display pagination links based on how many search results are returned. For example: if 10 or fewer 
results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination 
links are displayed.

Pro Tip: To paginate the search results, try storing the search results in an array that can act as 
a list, on which you can call your functions to show a page and append pagination links.


/*** NOT STARTED Handle no results returned
If no matches are found by the search, include a message in the HTML to tell the user there are no matches.

Note Don't use the built in alert() method here. The "No results" message must be printed to the page. ***/















