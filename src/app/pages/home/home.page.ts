import { Component, OnInit } from '@angular/core';
import { CharacterControllerService } from '../../services/character-controller.service';
import { AppController } from '../../clazz/app-controller';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private cardActived = false;
  private valueCard = undefined;

  constructor(
    private characterCtrl: CharacterControllerService
    ) { 
      AppController.getTranslate.language = AppController.getTranslate.image01;
    //console.log(AppController.getTranslate.language);
    }

  ngOnInit() {
    
  }

  active(character) {
    this.getCharacters()[character.id].active = !this.getCharacters()[character.id].active;
  }

  getCharacters() {
    return this.characterCtrl.getCharacters;
  }

  changeLanguage() {
    AppController.getTranslate.language = AppController.getTranslate.language === AppController.getTranslate.image01 ?
    AppController.getTranslate.image02 : AppController.getTranslate.image01;
  }

  getLanguange() {
    return AppController.getTranslate.language;
  }

}
