import {Component, effect, model, signal} from '@angular/core';

@Component({
  selector: 'simple-slider',
  template: `
    <span>Current value: {{value()}}</span>
    <button (click)="value.update(value => value + 1)">Increment</button>
  `,
})
export class SimpleSlider {
  value = model.required<number>()
}

@Component({
  selector: 'two-way-binding',
  imports: [
    SimpleSlider
  ],
  template: `<simple-slider [(value)]="volume"/>`
})
export class MediaControl {
  volume = signal(5);
  constructor() {
    effect(() => console.log(this.volume()));
  }
}
