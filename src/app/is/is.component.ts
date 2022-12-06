import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
type Tcontroler = {
  steps: {
    positionScrollY: number;
    classe: string;
  }[];
  classePrincipal: string;
};

@Component({
  selector: 'app-is',
  templateUrl: './is.component.html',
  styleUrls: ['./is.component.scss'],
})
export class IsComponent {
  @ViewChild('content') content?: ElementRef<HTMLDivElement>;
  @ViewChildren('animation') animations?: QueryList<ElementRef<HTMLDivElement>>;

  controleAnimations: Tcontroler[] = [
    {
      classePrincipal: 'line-to-pass',
      steps: [
        { classe: 'line-to-pass-1', positionScrollY: 0 },
        { classe: 'line-to-pass-2', positionScrollY: 100 },
        { classe: 'line-to-pass-3', positionScrollY: 200 },
      ],
    },
    {
      classePrincipal: 'meu-nome',
      steps: [
        { classe: 'meu-nome-visible', positionScrollY: 0 },
        { classe: 'meu-nome-semi-visible', positionScrollY: 100 },
        { classe: 'meu-nome-not-visible', positionScrollY: 200 },
      ],
    },
    {
      classePrincipal: 'little-description',
      steps: [
        { classe: 'little-description-1', positionScrollY: 0 },
        { classe: 'little-description-2', positionScrollY: 100 },
        { classe: 'little-description-3', positionScrollY: 200 },
      ],
    },
    {
      classePrincipal: 'workshowcase',
      steps: [
        { classe: 'workshowcase-1', positionScrollY: 0 },
        { classe: 'workshowcase-2', positionScrollY: 100 },
        { classe: 'workshowcase-3', positionScrollY: 200 },
        { classe: 'workshowcase-3', positionScrollY: 300 },
        { classe: 'workshowcase-2', positionScrollY: 400 },
        { classe: 'workshowcase-1', positionScrollY: 500 },
      ],
    },
  ];

  lastPositionOfScroll = 0;

  constructor() {}

  findStep(scrollY: number) {
    let toAnimate: { classeFinder: string; step: string }[] = [];
    for (let i = 0; i <= this.controleAnimations.length; i++) {
      let controle = this.controleAnimations[i];
      if (!controle) {
        return toAnimate;
      }

      controle.steps.forEach((step, index) => {
        const match =
          (step.positionScrollY - scrollY > -30 &&
            step.positionScrollY - scrollY < 30) ||
          (controle.steps.length - 1 == index &&
            step.positionScrollY < scrollY);
        if (match) {
          toAnimate.push({
            classeFinder: controle.classePrincipal,
            step: step.classe,
          });
        }
      });
    }
    return toAnimate;
  }
  nextStep() {
    setTimeout(() => {
      const animations = this.findStep(
        this.content?.nativeElement.scrollTop ?? 0
      );
      animations.forEach((animation) => {
        let controlAlreadyAnimate = false;
        this.animations?.forEach((sec) => {
          if (
            sec.nativeElement.classList.contains(animation.classeFinder) &&
            !controlAlreadyAnimate
          ) {
            sec.nativeElement.classList.forEach((c) => {
              sec.nativeElement.classList.remove(c);
            });
            sec.nativeElement.classList.add(animation.classeFinder);
            sec.nativeElement.classList.add(animation.step);
            controlAlreadyAnimate = true;
          }
        });
      });
    }, 250);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.content?.nativeElement.scrollTo({ behavior: 'smooth', top: 0 });
    this.content?.nativeElement.addEventListener('scroll', (e) => {
      this.nextStep();
    });
  }
}
