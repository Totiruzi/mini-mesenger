import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window: any;
  tg: any;

  constructor(@Inject(DOCUMENT) private _document: any) {
    this.window = this._document.defaultView;
    this.tg = this.window.Telegram.WebApp;
   }

  get MainButton(): TelegramButton {
    return this.tg.MainButton
  }
}

interface TelegramButton {
  show(): void
  hide(): void
  setText(text: string): void
}
