// API service for career recommendations

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

interface UserProfile {
  skills: string[];
  experience: string;
  interests: string[];
}

interface Recommendation {
  id: string;
  careerPath: string;
  score: number;
  reasoning: string;
}

interface SkillGapAnalysis {
  targetCareer: string;
  currentSkills: string[];
  missingSkills: string[];
  developmentPath: {
    skill: string;
    timeframe: string;
  }[];
}

export const careerService = {
  async getRecommendations(profile: UserProfile): Promise<Recommendation[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/career/recommendations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      throw error;
    }
  },

  async analyzeSkillGap(
    userSkills: string[],
    targetCareer: string
  ): Promise<SkillGapAnalysis> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/career/skill-gap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userSkills, targetCareer }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze skill gap');
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error analyzing skill gap:', error);
      throw error;
    }
  },

  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/health`);
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }
};
