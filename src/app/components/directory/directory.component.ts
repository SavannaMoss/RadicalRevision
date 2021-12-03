import { Component, OnInit } from '@angular/core';
import { NgbModal }          from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent }  from "../details/details.component";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open() {
    const modalRef                  = this.modalService.open(DetailsComponent);
    modalRef.componentInstance.name = 'World';
  }

}
