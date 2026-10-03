export type RegisterInput = {
  name: string;
  email: string;
  password: string;
  image?: Express.Multer.File;
};
