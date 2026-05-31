export interface UserProfile {
  skills: string[];
  experience: string;
  interests: string[];
}

export interface CareerRecommendation {
  id: string;
  careerPath: string;
  score: number;
  reasoning: string;
}

export interface SkillGapAnalysis {
  targetCareer: string;
  currentSkills: string[];
  missingSkills: string[];
  developmentPath: DevelopmentStep[];
}

export interface DevelopmentStep {
  skill: string;
  timeframe: string;
}
