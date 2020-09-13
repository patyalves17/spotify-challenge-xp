import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

  @ViewChild('input') input: ElementRef;
  @Output() typing$ = new EventEmitter<string>();

  constructor() { }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(300),
        distinctUntilChanged(),
        tap((text) => {
          console.log(this.input.nativeElement.value)
          this.typing$.emit(this.input.nativeElement.value)
        })
      )
      .subscribe();
  }



}
