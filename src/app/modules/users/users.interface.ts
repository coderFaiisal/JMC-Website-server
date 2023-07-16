export interface IUser {
  name: string;
  email: string;
  role: string;
}

declare module "express" {
  interface Request {
    decoded?: any;
  }
}
