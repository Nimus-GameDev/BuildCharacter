import { Component, OnInit } from '@angular/core';
import { CharacterControllerService } from '../../services/character-controller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private cardActived = false;
  private valueCard = undefined;

  constructor(private characterCtrl: CharacterControllerService) { }

  ngOnInit() {
  }

  active(character) {
    this.getPersons()[character.id].active = !this.getPersons()[character.id].active;
  }

  getPersons() {
    return this.characterCtrl.getPersons;
  }

}
