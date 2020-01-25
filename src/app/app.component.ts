import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  
  subscribe:Subscription;
  constructor(private router:Router){
  }

ngOnInit(){

  this.subscribe = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(()=>{window.scrollTo(0,0)} )
}

ngOnDestroy(){
this.subscribe.unsubscribe();
}
}
