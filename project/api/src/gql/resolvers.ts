import * as photoService from "../service/photo";

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
  },
};
