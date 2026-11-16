import { Component } from '@angular/core';
import { LucideFaceSlightlySmiling, LucideImage, LucideSend, LucideVideo } from '@lucide/angular';

@Component({
  imports: [LucideSend, LucideFaceSlightlySmiling, LucideImage, LucideVideo],
  selector: 'app-posts',
  styleUrl: './posts.css',
  templateUrl: './posts.html',
})
export class Posts {}
