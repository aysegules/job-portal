export interface UpdateUserInput {
  id: string;
  name?: string;
  email?: string;
  image?: Express.Multer.File;
  resume?: Express.Multer.File;
}
