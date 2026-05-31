export interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICareer {
  id: string;
  userId: string;
  title: string;
  description: string;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IRecommendation {
  id: string;
  userId: string;
  careerPath: string;
  score: number;
  reasoning: string;
  createdAt: Date;
}
