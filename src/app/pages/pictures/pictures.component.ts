import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/models/picture.model';
import { NasaService } from 'src/app/services/nasa.service';
import { PictureCardComponent } from 'src/app/components/picture-card/picture-card.component';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  /* pictures: Picture[] = []; */
  /* tday: string =''; */

  constructor() { }
  /* public nasaService: NasaService */
  ngOnInit(): void {
    /* this.tday = this.nasaService.getDate(); */

    }
    /* this.nasaService
        .getPicture()
        .subscribe(pictures => this.pictures = pictures); */
  }

