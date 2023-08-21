// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type UserSignIn = {
  username: string,
  hashed_password: string
  email: string
};
  
export type SubmitNewLevel = {
  secretphrase: string
  submission_input: string
};
export type RevealAllGuards = {
  InputGuard : string
  SystemContext ?: string 
  SanitizerGuard ?: string
};

export type SubmitAnswer = {
  secretphrase: string | string[]
  levelcode: string
}