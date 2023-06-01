import { Directive, HostListener } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Directive({
    selector: '[blockCopyPaste]'
})
export class BlockCopyPasteDirective {
    constructor(public toastCtrl: ToastController) {

    }

    @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
        e.preventDefault();
        this.presentToast("此欄位內容禁止貼上!");
    }

    @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
        e.preventDefault();
        this.presentToast("此欄位內容禁止複製!");
    }

    @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
        e.preventDefault();
        this.presentToast("此欄位內容禁止剪下!");
    }

    presentToast(msg: string) {
      alert(msg);
    }
}