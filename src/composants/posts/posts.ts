import { Component, inject, OnInit, signal } from '@angular/core';
import {
  LucideCircleUser,
  LucideEllipsis,
  LucideFaceSlightlySmiling,
  LucideHeart,
  LucideImage,
  LucideMessageCircle,
  LucideSend,
  LucideShare2,
  LucideThumbsUp,
  LucideVideo,
} from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { PostService } from '../../services/posts-service/post-service';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

@Component({
  imports: [
    LucideSend,
    LucideFaceSlightlySmiling,
    LucideImage,
    LucideVideo,
    LucideShare2,
    LucideMessageCircle,
    LucideHeart,
    LucideThumbsUp,
    LucideEllipsis,
    LucideCircleUser,
    RouterLink,
  ],
  selector: 'app-posts',
  styleUrl: './posts.css',
  templateUrl: './posts.html',
})
export class Posts implements OnInit {
  private postService = inject(PostService);
  posts = signal<any[]>([]);

  ngOnInit(): void {
    this.chargerPublications();
  }

  chargerPublications(): void {
    this.postService.getAllPublications().subscribe({
      next: (res) => {
        this.posts.set(res);
      },
      error: (erreur) => {
        console.error('Erreur lors du chargement des publications', erreur);
      },
    });
  }

  formatDate(date: string): string {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: fr
    });
  }
  
}
