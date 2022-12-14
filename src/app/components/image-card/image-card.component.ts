import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input() url: String = '';
  @Input() name: String = '';
  @Input() price: any;
  @Input() active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
