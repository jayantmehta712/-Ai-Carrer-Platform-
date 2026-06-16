import { useState } from 'react';
import { careerService } from '../services/careerService';
import type { CareerRecommendation, SkillGapAnalysis } from '../types';

export const useCareerRecommendations = () => {
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = async (profile: {
    skills: string[];
    experience: string;
    interests: string[];
  }) => {
    setLoading(true);
    setError(null);
    try {
      const data = await careerService.getRecommendations(profile);
      setRecommendations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { recommendations, loading, error, fetchRecommendations };
};

export const useSkillGapAnalysis = () => {
  const [analysis, setAnalysis] = useState<SkillGapAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeSkills = async (userSkills: string[], targetCareer: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await careerService.analyzeSkillGap(userSkills, targetCareer);
      setAnalysis(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { analysis, loading, error, analyzeSkills };
};
