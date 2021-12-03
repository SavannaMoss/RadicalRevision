import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal }           from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // @Input() character!: Character;
  @Input() name: string = '';

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
