import { Injectable, Type, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root',
})
export class UiSlideOutService {
  #dialog = inject(Dialog);
  #overlay = inject(Overlay);

  open(component: Type<unknown>) {
    return this.#dialog.open(component, {
      positionStrategy: this.#overlay.position().global().end(),
      panelClass: ['pointer-events-auto', 'max-w-md'],
    });
  }
}
