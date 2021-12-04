import { Component, Input } from '@angular/core';
import { NgbActiveModal }   from "@ng-bootstrap/ng-bootstrap";
import { Character }        from "../../models/character";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  imgRoot: string = "assets/images/";

  @Input() character!: Character;

  constructor(public activeModal: NgbActiveModal) {
  }
}
