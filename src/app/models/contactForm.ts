import { Profile } from "./profile";

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  selectedProfile: Profile[] | null;
}