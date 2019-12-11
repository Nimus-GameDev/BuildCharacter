import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterService {

  private makers = [
    {
      name: 'Character',
      img: './../../assets/icon/character.icon.png',
      info: 'You can add images or thumbnails of your character here.'
    },
    {
      name: 'History',
      img: '',
      info: 'You can create the history of your character here.'
    },
    {
      name: 'Informations',
      img: '',
      info: 'You can add the informations of your character here.'
    },
    {
      name: 'References',
      img: '',
      info: 'You can add Images used for create your character here.'
    }
  ];

  constructor() { }


  get getMakers() {
    return this.makers;
  }
}
