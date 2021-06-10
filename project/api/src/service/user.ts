import { Photo, photos } from "../entity/photo";
import { tags } from "../entity/tag";
import { User } from "../entity/user";

// Trivial Resolver 
export const postedPhotos = () => {
  return (parent: User): Photo[] => {
    return photos.filter(p => p.githubUser === parent.githubLogin);
  }
}

export const inPhotos = () => {
  return (parent: User): Photo[] => 
    tags
    .filter(tag => tag.userId === parent.githubLogin)
    .map(tag => tag.photoId)
    .map(photoId => photos.find(p => p.id === photoId));
}