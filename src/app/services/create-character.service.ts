import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterService {

    private makers = {
     english: [
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
        info: 'You can add the images used for create your character here.'
      }
    ],
    portugues_br: [
      {
        name: 'Personagem',
        img: './../../assets/icon/character.icon.png',
        info: 'Adicione imagens ou miniaturas do seu personagem aqui.'
      },
      {
        name: 'História',
        img: '',
        info: 'Crie a história do seu personagem aqui.'
      },
      {
        name: 'Informações',
        img: '',
        info: 'Adicione as informações do seu personagem aqui.'
      },
      {
        name: 'Referências',
        img: '',
        info: 'Adicione as imagens usadas para criar o seu personagem aqui.'
      }
    ]
  }

  constructor() { }


  get getMakers() {
    return this.makers;
  }
}
