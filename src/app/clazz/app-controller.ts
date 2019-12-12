import { Injectable } from '@angular/core';

@Injectable()
export class AppController {

    private static translate = {
        image01: './../../../assets/icon_translate/translate_pt_br.icon.png',
        image02: './../../../assets/icon_translate/translate_eg_eua.icon.png',
        language: undefined
      };

    constructor() {
    }

    public static get getTranslate() {
        return this.translate;
    }



}
