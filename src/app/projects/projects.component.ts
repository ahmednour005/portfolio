import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  
  
  }
  box1Click(){
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })
     
    swalWithBootstrapButtons.fire({
        html:`

   <div style="width:40%; height:260px; float:left; margin-right:15px;
   background-image:url(assets/8.png); background-size: cover;   -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
   filter: grayscale(100%);">
    </div>
          <h4>Angular Project</h4>
          <p style="text-align:left;margin-left:10px">
         <span style="display:block; font-weight: 600; color:#6d14ce;"> Angular 8 : </span>
              1- responsive web application with angular.<br>
              2- validations using angular forms(reactive , template driven forms and
              Custom form validators).<br>
              3- Using Rxjs Observable library.<br>
              4- Using FireBase authentication and database.<br>
              5- Routing , data binding (one way ,two way binding) , pipe<br>
              6- Access local storage to return to the same page again.<br>
              7- using Filter and all Filtering Connected together.
          </p>
        `,
        background: 'rgb(254, 245, 255)',
        backdrop: `
        rgba(0,0,0,0.8)`,
      showCancelButton: true,
      confirmButtonText: 'Website',
      cancelButtonText: 'cancel',
      reverseButtons: true
      }).then((result) => {
      if (result.value) {
        window.location.href = 'https://ahmednour005.github.io/onlineShop/';
        EventTarget
        '<a target="_blank"></a>'
      } else if ( result.dismiss === Swal.DismissReason.cancel) { }
    })
   
  }

  box2Click(){
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })
     
    swalWithBootstrapButtons.fire({
        html:`

   <div style="width:40%; height:260px; float:left; margin-right:15px; -webkit-filter: grayscale(100%); 
   filter: grayscale(100%);
   background-image:url(assets/10.png); background-size: cover;">
    </div>
          <h4>Angular Project</h4>
          <p style="text-align:left;margin-left:10px">
         <span style=" display:block;   font-weight: 600;color: #6d14ce;   "> Angular 8 : </span>
              1- responsive web application with angular.<br>
              2- Using Rxjs Observable library.<br>
              3- Routing , data binding (one way ,two way binding) , pipe<br>
              4- Access local storage to return to the same page again.<br>
              5- using sweetalert2 
          </p>
        `,
        background: 'rgb(251, 238, 253)',
        backdrop: `
        rgba(0,0,0,0.8)`,
      showCancelButton: true,
      confirmButtonText: 'Website',
      cancelButtonText: 'cancel',
      reverseButtons: true
      }).then((result) => {
      if (result.value) {
        window.location.href = 'https://ahmednour005.github.io/portfolio/';
        EventTarget
        '<a target="_blank"></a>'
      } else if ( result.dismiss === Swal.DismissReason.cancel) { }
    })
  }

  box3Click(){
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })
     
    swalWithBootstrapButtons.fire({
        html:`

   <div style="width:40%; height:260px; float:left; margin-right:15px;
   background-image:url(assets/9.png); background-size: cover; -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
   filter: grayscale(100%);">
    </div>
          <h4>React Js Project</h4>
          <p style="text-align:left;margin-left:10px">
         <span style=" display:block;   font-weight: 600;color: #6d14ce;   "> React Js : </span>
              1- responsive web application with Bootstrap.<br>
              2- React Redux To State and Store Data,Asynchronous Redux.<br>
              3- Validation.<br>
              5- React Router<br>
              6- using Filter and all Filtering Connected together.
          </p>
        `,
        background: 'rgb(251, 238, 253)',
        backdrop: `
        rgba(0,0,0,0.8)`,
      showCancelButton: true,
      confirmButtonText: 'Website',
      cancelButtonText: 'cancel',
      reverseButtons: true
      }).then((result) => {
      if (result.value) {
        window.location.href = 'https://ahmednour005.github.io/ReactEcommerce/';
      } else if ( result.dismiss === Swal.DismissReason.cancel) { }
    })
  }


  box4Click(){
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })
     
    swalWithBootstrapButtons.fire({
        html:`

   <div style="width:40%; height:260px; float:left; margin-right:15px;
   background-image:url(assets/5.png); background-size: cover; -webkit-filter: grayscale(100%); 
   filter: grayscale(100%);">
    </div>
          <h4>Design Project</h4>
          <p style="text-align:left;margin-left:10px">
         <span style=" display:block;   font-weight: 600;color: #6d14ce;   "> FrontEnd : </span>
              1- responsive web application with Bootstrap and media Query.<br>
              2- Using Html5 ,Css3.<br>
              3- Using Jquery.<br>
              4- Typing Library.<br>
              5- isotope libarary.<br>
              6- swiper libarary.<br>
          </p>
        `,
        background: 'rgb(251, 238, 253)',
        backdrop: `
        rgba(0,0,0,0.8)`,
      showCancelButton: true,
      confirmButtonText: 'Website',
      cancelButtonText: 'cancel',
      reverseButtons: true
      }).then((result) => {
      if (result.value) {
        window.location.href = 'https://ahmednour005.github.io/shootingWall/';
      } else if ( result.dismiss === Swal.DismissReason.cancel) { }
    })
  }


  box5Click(){
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })
     
    swalWithBootstrapButtons.fire({
        html:`

   <div style="width:40%; height:260px; float:left; margin-right:15px;-webkit-filter: grayscale(100%); 
   filter: grayscale(100%);
   background-image:url(assets/6.png); background-size: cover;">
    </div>
          <h4>Design Project</h4>
          <p style="text-align:left;margin-left:10px">
         <span style=" display:block;   font-weight: 600;color: #6d14ce;"> FrontEnd : </span>
            1- responsive web application with Bootstrap and media Query.<br>
            2- Using Html5 ,Css3.<br>
            3- Using Jquery.<br>
            4- Wow Library.<br>
          </p>
        `,
        background: 'rgb(251, 238, 253)',
        backdrop: `
        rgba(0,0,0,0.8)
       `,
      showCancelButton: true,
      confirmButtonText: 'Website',
      cancelButtonText: 'cancel',
      reverseButtons: true
      }).then((result) => {
      if (result.value) {
        window.location.href = 'https://ahmednour005.github.io/eBusiness/';
      } else if ( result.dismiss === Swal.DismissReason.cancel) { }
    })
   
  }

  box6Click(){
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })
     
    swalWithBootstrapButtons.fire({
        html:`

   <div style="width:40%; height:260px; float:left; margin-right:15px;-webkit-filter: grayscale(100%); 
   filter: grayscale(100%);
   background-image:url(assets/7.png); background-size: cover;">
    </div>
          <h4>Design Project</h4>
          <p style="text-align:left;margin-left:10px">
         <span style=" display:block;   font-weight: 600;color: #6d14ce;   ">FrontEnd : </span>
         1- responsive web application with Bootstrap and media Query.<br>
         2- Using Html5 ,Css3.<br>
         3- Using Jquery.<br>
         4- Using JavScript.<br>
         </p>
        `,
        background: 'rgb(251, 238, 253)',
        backdrop: `
        rgba(0,0,0,0.8)`,
      showCancelButton: true,
      confirmButtonText: 'Website',
      cancelButtonText: 'cancel',
      reverseButtons: true
      }).then((result) => {
      if (result.value) {
        window.location.href = 'https://ahmednour005.github.io/eliteCorp/';
      } else if ( result.dismiss === Swal.DismissReason.cancel) { }
    })
   
  }
}
