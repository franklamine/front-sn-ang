import { UserSummary } from './userModele';


export interface Post {
  id: number;
  message: string;
  urlPhoto?: string;
  urlVideo?: string;
  author: UserSummary;
  commentCount: number;
  likeCount: number;
  isAuthor: boolean;
  likedByConnectedUser: boolean;
  followingAuthor: boolean;
  createdAt: string;
}


