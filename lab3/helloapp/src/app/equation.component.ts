import { Component } from "@angular/core";

@Component({
  selector: 'count-equation',
  template:`
    <div class="flex flex-col items-center">
      <div class="py-4">
        <p>Формат виразу: {{a === 1 ? '' : a}}x² + {{b < 0 ? '(' + b + ')' : b }}x + {{c < 0 ? '(' + c + ')' : c}} = 0 </p>
      </div>
      <div class="flex flex-wrap gap-x-1 py-4">
          <input type="number" class="border p-1" [(ngModel)]="a" placeholder="Введіть а"/>
          <input type="number" class="border p-1" [(ngModel)]="b" placeholder="Введіть b"/>
          <input type="number" class="border p-1" [(ngModel)]="c" placeholder="Введіть c"/>
          <button class="py-1 px-2 border-black border" (click)="solveEquation()">Розв'язати</button>
      </div>
      <div *ngIf="isEquationHasRoots; else noRoots">
        <p>
          Рішення:
        </p>
        <div *ngIf="d; else oneRoot">
          <p>
            x1 = {{ x1 }}
          </p>
          <p>
            x2 = {{ x2 }}
          </p>
        </div>
        <ng-template #oneRoot>
          <p>
            x1, 2 = {{ x1 }}
          </p>
        </ng-template>
      </div>
      <ng-template #noRoots>
        <h1>Рівняння немає розв'язків</h1>
      </ng-template>
    </div>
  `
})

export class CountEquation {
  a: string = '0';
  b: string = '0';
  c: string = '0';
  x1: number;
  x2: number;
  d: number ;
  isEquationHasRoots: boolean;

  solveEquation() {
    this.d = Math.pow(Number(this.b), 2) - 4 * Number(this.a) * Number(this.c);
    console.log('hello')

    if (this.d < 0 || !Number(this.a)) {
      this.isEquationHasRoots = false;
    } else {
      this.x1 = (-this.b + Math.sqrt(Math.pow(Number(this.b), 2) - 4 * Number(this.a) * Number(this.c))) / 2 * Number(this.a);
      this.x2 = (-this.b - Math.sqrt(Math.pow(Number(this.b), 2) - 4 * Number(this.a) * Number(this.c))) / 2 * Number(this.a);
      this.isEquationHasRoots = true;
    }
  }
}