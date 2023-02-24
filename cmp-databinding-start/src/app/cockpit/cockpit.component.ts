import { Component, ElementRef, EventEmitter, OnInit, Output,
   ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
@ViewChild("serverContentInput") serverContentInput: ElementRef;

  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(input:HTMLInputElement) {
   this.serverCreated.emit({
    serverName : input.value,
    serverContent: this.serverContentInput.nativeElement.value
  });
  }

  onAddBlueprint(input:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName : input.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
