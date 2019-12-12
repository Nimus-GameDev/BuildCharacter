import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppController } from '../../clazz/app-controller';
import { CreateCharacterService } from '../../services/create-character.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-character.page.html',
  styleUrls: ['./create-character.page.scss'],
})
export class CreateCharacterPage implements OnInit {

  constructor(
    private router: Router,
    private createPersonCtrl: CreateCharacterService) { }

  ngOnInit() {
  }

  callReturn() {
    this.router.navigate(['home']);
  }

  getMakers() {
    return AppController.getTranslate.language === AppController.getTranslate.image01 ?
               this.createPersonCtrl.getMakers.portugues_br : this.createPersonCtrl.getMakers.english;
  }

}
