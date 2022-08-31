import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../form-validators';
import { SearchmovieService } from '../services/searchmovie.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  searchForm !: FormGroup;
  title !: FormControl;
  year !: FormControl;

  results: any;
  errors !: string;

  constructor(private fb: FormBuilder, private searchMovie: SearchmovieService) {

  }

  ngOnInit(): void {
    this.title = this.fb.control('', [Validators.required, Validators.maxLength(30), Validators.pattern('[ A-Za-z0-9\.,]+')]);
    this.year = this.fb.control(2018, [Validators.pattern('[0-9]{4}'), FormValidators.integerBetween(1900, 2022)]);
    this.searchForm = this.fb.group({
      title: this.title,
      year: this.year
    })
  }
  startSearch() {
    let title = this.title.valid ? this.title.value : null;
    let year = this.year.valid ? this.year.value : null;
    let that = this; // attention le contexte peut etre bugges
    let action = (data: any) => {
      if (data.error) {
        that.errors = data.error;
        that.results = '';
      } else {
        that.errors = '';
        that.results = data;
      }
    };

    if (title) {
      this.searchMovie.search(action, this.searchForm.value.title, this.searchForm.value.number);

    } else {
      this.errors = 'Titre non fourni';
    }
  }
}
