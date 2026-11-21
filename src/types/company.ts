import { Profile } from "./profile";

export type Company = {
  id: string;
  name: string;
  category: string;
  catchCopy: string;
  description: string;
  strengths: string[];
  profile: Profile;
};

export type CompanyMatch = {
  company: Company;
  score: number;
  matchRate: number;
};

