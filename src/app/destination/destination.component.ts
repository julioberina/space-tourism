import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  private data: any;
  public destinations: any;
  public photoSrc: any;

  public name = '';
  public description = '';
  public distance = '';
  public travel = '';
  public navItemClass = ['nav-item selected', 'nav-item', 'nav-item', 'nav-item'];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.data = this.appService.getData().default;
    this.destinations = this.data.destinations;
  }

  ngAfterViewInit(): void {
    this.select(0);
  }

  select(index: number) {
    this.photoSrc = '../.' + this.destinations[index].images.png;

    for (let i = 0; i < 4; ++i) {
      const div = (document.getElementById(`nav${i}`) as HTMLDivElement);

      console.log(`nav${i} classList: ${div?.classList}`);

      if (i === index)  this.navItemClass[i] = 'nav-item selected';
      else  this.navItemClass[i] = 'nav-item';
    }

    this.name = this.destinations[index].name;
    this.description = this.destinations[index].description;
    this.distance = this.destinations[index].distance;
    this.travel = this.destinations[index].travel;
  }
}
