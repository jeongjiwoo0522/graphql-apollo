import { photos } from "../entity/photo";

// Query 
export const totalPhotos = () => {
  return () => photos.length;
}

export const allPhotos = () => {
  return () => photos;
}

// Mutation
export const postPhoto = () => {
  let post_id: number = 0;
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
  return parent => `http://github.com/jeongjiwoo0522/img/${parent.id}.jpg`;
}