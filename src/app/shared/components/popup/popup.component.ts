import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  @Input() data: string = '';
  constructor() { }

}
