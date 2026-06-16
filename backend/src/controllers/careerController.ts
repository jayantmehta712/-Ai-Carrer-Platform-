import { Request, Response } from 'express';
import careerRecommendationService from '../services/careerRecommendationService';

export class CareerController {
  async getRecommendations(req: Request, res: Response) {
    try {
      const { skills, experience, interests } = req.body;

      if (!skills || !Array.isArray(skills)) {
        return res.status(400).json({ error: 'Skills array is required' });
      }

      const recommendations = await careerRecommendationService.generateCareerRecommendations({
        skills,
        experience: experience || '',
        interests: interests || []
      });

      return res.json({
        success: true,
        data: recommendations
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Failed to generate recommendations',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  async analyzeSkillGap(req: Request, res: Response) {
    try {
      const { userSkills, targetCareer } = req.body;

      if (!userSkills || !targetCareer) {
        return res.status(400).json({ 
          error: 'userSkills and targetCareer are required' 
        });
      }

      const analysis = await careerRecommendationService.analyzeSkillGap(
        userSkills,
        targetCareer
      );

      return res.json({
        success: true,
        data: analysis
      });
    } catch (error) {
      return res.status(500).json({
        error: 'Failed to analyze skill gap',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
}

export default new CareerController();
