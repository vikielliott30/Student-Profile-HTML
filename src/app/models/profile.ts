export interface Profile {
  id: string;
  name: string;
  age: number;
  semester: number;
  skills: Skill[];
  profileImage: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export type ProfileStatus = 'active' | 'graduated' | 'inactive';