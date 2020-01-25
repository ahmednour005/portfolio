import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  smallMode=false;

  ngOnInit() {

    $('.home .menu .navbar2').css('display','none');
    $('.home .menu .btnColapse2').css('display','none');

  }

  SmallNav(){
    this.smallMode=true;
    $('.home .menu').animate({width:'6%'},1000);
    $('.home .body').animate({width:'94%'},1000);
    $('.home .menu .navbar1').fadeOut(1000);
    $('.home .menu .navbar2').delay(1100).fadeIn(900);
    $('.home .menu .btnColapse1').fadeOut(1000);
    $('.home .menu .btnColapse2').delay(1100).fadeIn(900);
  }

  LargeNav(){
    this.smallMode=false;
    $('.home .menu').animate({width:'20%'},1000);
    $('.home .body').animate({width:'80%'},1000);
    $('.home .menu .navbar1').delay(1100).fadeIn(900);
    $('.home .menu .navbar2').fadeOut(900);
    $('.home .menu .btnColapse1').delay(1100).fadeIn(900);
    $('.home .menu .btnColapse2').fadeOut(900);
  }
}
