export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  image?: Express.Multer.File;
  resume?: Express.Multer.File;
}

export interface UserFiles {
  img?: Express.Multer.File[];
  resume?: Express.Multer.File[];
}
