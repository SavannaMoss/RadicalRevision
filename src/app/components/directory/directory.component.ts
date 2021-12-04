import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NgbModal }                                       from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent }                               from "../details/details.component";
import { DataService }                                    from "../../services/data.service";
import { Character }                                      from "../../models/character";
import { Subscription }                                   from "rxjs";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit, OnChanges, OnDestroy {
  imgRoot: string = "assets/images/";

  characters: Character[] = [];
  subscription!: Subscription;

  @Input() filter!: string;

  constructor(private dataService: DataService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  ngOnChanges(): void {
    this.filterCharacters();
    console.log(this.filter);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  open(character: Character) {
    const modalRef = this.modalService.open(DetailsComponent, {centered: true, size: 'lg'});

    modalRef.componentInstance.character = character;
  }

  getCharacters() {
    this.subscription = this.dataService.getCharacters()
      .subscribe(results => this.characters = results);
  }

  filterCharacters() {
    this.subscription = this.dataService.filterCharacters(this.filter)
      .subscribe(results => this.characters = results);
  }
}
