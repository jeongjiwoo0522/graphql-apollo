export enum PhotoCategory {
  SELFIE = "SELFIE",
  PORTRAIT = "PORTRAIT",
  ACTION = "ACTION",
  LANDSCAPE = "LANDSCAPE",
  GRAPHIC = "GRAPHIC",
}

export interface Photo {
  id: number;
  name: string;
  description?: string;
  category: PhotoCategory;
  githubUser: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    name: "Dropping the Heart Chute",
    description: "The heart chute is one of my favorite chutes",
    category: PhotoCategory.ACTION,
    githubUser: "gPlake"
  }, 
  {
    id: 2,
    name: "Enjoying the sunshine",
    category: PhotoCategory.SELFIE,
    githubUser: "sSchmidt"
  },
  {
    id: 3,
    name: "Gunbarrel 20",
    description: "25 laps on gunbarrel today",
    category: PhotoCategory.LANDSCAPE,
    githubUser: "sSchmidt"
  },
];