import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title: string;
  @Output() btnClick = new EventEmitter();

  constructor(){
    this.title = "button";
  }
  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();

  }

}
