import { Component, Input, OnInit } from '@angular/core';
import { Picture } from 'src/app/models/picture.model';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {
  picture!: Picture
  @Input('tday') tday: string = '20'; // Here I should do something in order to get this value from another component
  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.Dday = this.tday;
    this.getPicture();
  }
  getPicture() {
    this.nasaService.getPicture().subscribe((data: Picture) => {
      /* console.log('subscribe apod', data); */
      this.picture = data;
    });
  }

}
