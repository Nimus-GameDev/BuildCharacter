import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { CreateCharacterService } from '../../services/create-character.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-character.page.html',
  styleUrls: ['./create-character.page.scss'],
})
export class CreateCharacterPage implements OnInit {

  constructor(private router: Router, private createPersonCtrl: CreateCharacterService) { }

  ngOnInit() {
  }

  callReturn() {
    this.router.navigate(['home']);
  }

  getMakers() {
    return this.createPersonCtrl.getMakers;
  }

}
