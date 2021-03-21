// console.log("Your Project 2");
reloadshow();
function reloadshow() {
   let lstorage = localStorage.getItem('objs');
   if (lstorage == null) {
      var objarr = [];
   }
   else {
      objarr = JSON.parse(lstorage);
   }
   let html="";
   Array.from(objarr).forEach(function (element) {

     html+= `<tr>
               <td>${element.aname}</td>
               <td>${element.bname}</td>
               <td>${element.type}</td>
              <td><button id="${element.aname}"onclick="de(this.id)" class="btn btn-danger">Delete Note</button></td>
               </tr>`;
              

               
   } );

   let tbody=document.getElementById('tbody');
   tbody.innerHTML=html;

}
function de(id) {
   let objarr = localStorage.getItem('objs');
   objarr = JSON.parse(objarr);
   let ele=objarr.indexOf(id);
   objarr.splice(ele, 1);
   localStorage.setItem('objs', JSON.stringify(objarr));
   reloadshow();

}

class book {

   constructor(aname, bname, type) {
      this.aname = aname;
      this.bname = bname;
      this.type = type;

   }

}
function display(book) {
   let lstorage = localStorage.getItem('objs');
   if (lstorage == null) {
      var objarr = [];
   }
   else {
      objarr = JSON.parse(lstorage);
   }

   if (validate(book)) {
      objarr.push(book);
      let tbody = document.getElementById('tbody');
      localStorage.setItem('objs', JSON.stringify(objarr));
      tbody.innerHTML += `<tr>
                  <td>${book.aname}</td>
                  <td>${book.bname}</td>
                  <td>${book.type}</td>
                   <td><button id="${book.aname}"onclick="de(this.id)" class="btn btn-danger">Delete Note</button></td>
                  </tr>`;





   }

   //function for give alert for user arguments come from validate books

   function msge(msg, etype) {
      let ediv = document.getElementById('errordv');
      ediv.innerHTML = `<div class="alert alert-${etype} alert-dismissible fade show" role="alert">
       ${msg}
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      myFunction();
      function myFunction() {
         myVar = setTimeout(alertFunc, 5000);
      }

      function alertFunc() {
         let ediv = document.getElementById('errordv');
         ediv.innerHTML = "";

      }
   }




   function validate(book) {
      let etype;
      let msg;
      if (book.aname.length > 2 && book.bname.length > 2) {

         etype = "success";
         msg = "Successfully Added Book";
         msge(msg, etype);

         return true;

      }
      else {

         etype = "danger";
         msg = "Atlease two characters are required for all field";
         msge(msg, etype);
         return false;
      }



   }

}
let btnsub = document.getElementById('btnsubmit');
btnsub.addEventListener('click', function (e) {
   e.preventDefault();
   let aname = document.getElementById('aname').value;
   let bname = document.getElementById('bname').value;
   let pradio = document.getElementById('rpro');
   let cradio = document.getElementById('rcook');

   let type;
   if (pradio.checked) {
      type = pradio.value;

   } else if (cradio.checked) {
      type = cradio.value;
   }
   let b1 = new book(aname, bname, type);



   //   console.log(b1);
   let formid = document.getElementById('form');
   formid.reset();
   display(b1);
});