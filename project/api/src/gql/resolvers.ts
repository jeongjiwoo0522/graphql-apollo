import * as photoService from "../service/photo";
import * as userService from "../service/user";

export const resolvers = {
  Query: {
    totalPhotos: photoService.totalPhotos(),
    allPhotos: photoService.allPhotos(),
  },

  Mutation: {
    postPhoto: photoService.postPhoto(),
  },

  Photo: {
    url: photoService.url(),
    postedBy: photoService.postedBy(),
    taggedUsers: photoService.taggedUsers(),
  },

  User: {
    postedPhotos: userService.postedPhotos(),
    inPhotos: userService.inPhotos(),
  },  
};
