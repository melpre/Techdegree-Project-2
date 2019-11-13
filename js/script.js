/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/



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
   ul.addEventListener ('click', (event) => {
      for (let i = 0; i < aPageLinks.length; i += 1) {
         aPageLinks[i].classList.remove("active");
         let pageClick = event.target;
         pageClick.classList.add("active");
         showPage(studentList, pageClick.textContent);
      };
     });
};

showPage(studentList, 1);
appendPageLinks(studentList);








