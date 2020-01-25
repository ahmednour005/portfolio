import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = {
    ht: 90,
    jq: 80,
    js:85,
    ts: 85,
    bt: 80,
    gt: 75,
    an: 87,
    rc: 80,
    cm:92,
    pr:90,
    tm:90,
    tw:95,
    ar:100,
    en:85
  };
  constructor() { }

  ngOnInit() {
  
    
    $.each(this.skills, function(key, value) {
      var skillbar = $("." + key);
      skillbar.animate(
        {
          width: value + "%"
        },
        2000,
        function() {
          $(".speech-bubble").fadeIn();
        }
      );
    }); 
  }

}
