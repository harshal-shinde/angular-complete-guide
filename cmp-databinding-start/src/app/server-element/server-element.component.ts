import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() element : {type:String, name: String, content:String};
  constructor() {
    console.info("Constructor called");
   }

  ngOnInit(): void {
    console.log("Called ngOnInit()");
  }

  ngOnChanges() {
    console.log("Called ngOnChanges()")
  }

  ngDoCheck() {
    console.log("Called ngDoCheck()")
  }

}
