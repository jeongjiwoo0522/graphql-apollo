import { Photo, photos } from "../entity/photo";
import { User } from "../entity/user";

// Trivial Resolver 
export const postedPhotos = () => {
  return (parent: User): Photo[] => {
    return photos.filter(p => p.githubUser === parent.githubLogin);
  }
}