import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterControllerService {

  private character: any = [
    {id: 0, nome: 1, active: false}, {id: 1, nome: 2, active: false}
  ];

  constructor() { }

  addPersons(nome: string, idade: number, altura: number, peso: number, sexo: string, raça: string) {
    this.character.push({id: this.character.lenght + 1, nome, idade, altura, peso, sexo, raça});
  }

  get getPersons(): any {
    return this.character;
  }
}
