import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postitem',
  templateUrl: './postitem.component.html',
  styleUrls: ['./postitem.component.scss']
})

export class PostitemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: string;

  nbLoveIt = 0;

  constructor() { }

  onLoveIt() {
    this.nbLoveIt++;
    console.log('nbLoveIt = ' + this.nbLoveIt);
  }

  onNotLoveIt() {
    this.nbLoveIt--;
    console.log('nbLoveIt = ' + this.nbLoveIt);
  }

  ngOnInit() {
  }
}
