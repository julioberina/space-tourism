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

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.data = this.appService.getData().default;
    this.destinations = this.data.destinations;
    this.photoSrc = '../.' + this.destinations[0].images.png;
  }

}
