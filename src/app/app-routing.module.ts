import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { QuoteGalleryComponent } from './quote-gallery/quote-gallery.component';

const routes: Routes = [
  { path:'', component:QuoteGalleryComponent},
  { path:'header', component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
