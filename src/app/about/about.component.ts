import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @ViewChildren('box')
  boxes!: QueryList<ElementRef>;
  boxesPonter = {
    x: 0,
    y: 0,
  };

  ngOnInit(): void {
    window.addEventListener('mousewheel', (e: any) => {
      console.log(window.innerWidth);
      if (
        this.boxesPonter.x + e.deltaY >= 0 &&
        this.boxesPonter.x + e.deltaY < window.innerWidth
      ) {
        this.boxesPonter.x += e.deltaY;
      }
      this.boxes.forEach((box) => {
        box.nativeElement.style =
          'translate:' +
          this.boxesPonter.x +
          'px ' +
          this.boxesPonter.y +
          'px;';
      });
    });
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.boxes.forEach((box) => {
      box.nativeElement.classList.add('play1');
    });
  }
  @HostListener('mousewhell', ['$event'])
  moverNovamente(e: any) {}
}
