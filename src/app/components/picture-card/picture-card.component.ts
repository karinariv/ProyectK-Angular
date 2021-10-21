import { Component, Input, OnInit } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { Picture } from '../../models/picture.model';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent implements OnInit {
  picture!: Picture;
  @Input('tday') tday: string = '';
constructor(private nasaService: NasaService) { 
  
}
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