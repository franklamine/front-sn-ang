import { Component } from '@angular/core';
import {AsideGauche} from '../../composants/aside-gauche/aside-gauche';
import {AsideDroite} from '../../composants/aside-droite/aside-droite';
import {Posts} from '../../composants/posts/posts';

@Component({
  imports: [
    AsideGauche,
    AsideDroite,
    Posts
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
