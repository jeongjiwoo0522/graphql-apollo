import { Photo, photos } from "../entity/photo";
import { User, users } from "../entity/user";
import { tags } from "../entity/tag";

// Query 
export const totalPhotos = () => {
  return () => photos.length;
}

export const allPhotos = () => {
  return () => photos;
}

// Mutation
export const postPhoto = () => {
  let post_id: number = 3;
  return (parent, args) => {
    const newPhoto = {
      id: ++post_id,
      ...args.input
    };
    photos.push(newPhoto);
    return newPhoto;
  }
}

// Trivial Resolver 
export const url = () => {
  return (parent: Photo) => `http://github.com/jeongjiwoo0522/img/${parent.id}.jpg`;
}

export const postedBy = () => {
  return (parent: Photo) => {
    return users.find(u => u.githubLogin === parent.githubUser);
  };
}

export const taggedUsers = () => {
  return (parent: Photo): User[] => 
    tags
    .filter(tag => tag.photoId === parent.id)
    .map(tag => tag.userId)
    .map(userId => users.find(u => u.githubLogin === userId));
}