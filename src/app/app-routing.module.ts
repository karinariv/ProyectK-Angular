import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureDetailsComponent } from './pages/picture-details/picture-details.component';
import { PicturesComponent } from './pages/pictures/pictures.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'pictures', component: PicturesComponent},
  {path: 'picture/:tday', component: PictureDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'pictures'},
  {path: '404', component: PagenotfoundComponent},
  {path: '**', pathMatch: 'full', redirectTo: '404'}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
