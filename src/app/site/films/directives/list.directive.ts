import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[movieList]'
})
export class ListDirective {

  private _list !: Object;

  constructor(private el: ElementRef) { }

  @Input()
  set movieList(movie: any) {
    let temp = `<a class="list-group-item list-group-item-action">`;
    temp += `Titre : ${movie.Title} Année: ${movie.Year} Réalisateur : ${movie.Director}`;
    temp += '</a>';

    temp += `<img src=${movie.Poster}>`;

    this.el.nativeElement.innerHTML = temp;

    console.log(movie);
  }

}
