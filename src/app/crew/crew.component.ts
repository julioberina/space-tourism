import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  private data: any;
  public crew: any;
  public photoSrc: any;

  public name = '';
  public role = '';
  public bio = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.data = this.appService.getData().default;
    this.crew = this.data.crew;
  }

  ngAfterViewInit(): void {
    this.select(0);
  }

  select(index: number) {
    this.photoSrc = '../.' + this.crew[index].images.png;
    this.name = this.crew[index].name;
    this.role = this.crew[index].role;
    this.bio = this.crew[index].bio;
  }
}
