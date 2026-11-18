import { Component } from '@angular/core';

import {
  LucideCompass,
  LucideGamepad2,
  LucideGlobe,
  LucideHeart,
  LucideImage,
  LucideUsers,
  LucideVideo,
} from '@lucide/angular';

@Component({
  selector: 'app-auth-presentation',
  standalone: true,
  imports: [
    LucideGlobe,
    LucideUsers,
    LucideImage,
    LucideVideo,
    LucideGamepad2,
    LucideCompass,
    LucideHeart,
  ],
  templateUrl: './auth-presentation.html',
  styleUrl: './auth-presentation.css',
})
export class AuthPresentation {
  titre = 'Connectez-vous au monde.';

  sousTitre = 'Partagez vos passions.';

  description = `Bienvenue sur SocialNetwork, votre espace de partage et de découverte.
  Retrouvez vos amis, faites de nouvelles rencontres, partagez vos expériences
  et découvrez des contenus qui vous passionnent.`;

  messageFinal = 'Un seul endroit pour partager, découvrir et échanger.';

  fonctionnalites = [
    {
      icone: 'users',
      titre: 'Une communauté connectée',
      description: 'Retrouvez vos amis et faites de nouvelles rencontres.',
    },
    {
      icone: 'image',
      titre: 'Partagez vos moments',
      description: 'Publiez vos photos, vidéos et expériences.',
    },
    {
      icone: 'video',
      titre: 'Découvrez des vidéos',
      description: 'Regardez et partagez vos contenus préférés.',
    },
    {
      icone: 'gamepad',
      titre: 'Divertissez-vous',
      description: 'Découvrez des jeux et amusez-vous avec vos amis.',
    },
  ];
}
