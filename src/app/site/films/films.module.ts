import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';
import { FormValidators } from './form-validators';
import { SearchformComponent } from './searchform/searchform.component';
import { ListDirective } from './directives/list.directive';

const routes: Routes = [{ path: 'films', component: FilmsComponent }]

@NgModule({
  declarations: [
    FilmsComponent,
    SearchformComponent,
    ListDirective
  ],
  providers:[SearchformComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
