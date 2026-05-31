import { Router } from 'express';
import careerController from '../controllers/careerController';

const router = Router();

router.post('/recommendations', careerController.getRecommendations.bind(careerController));
router.post('/skill-gap', careerController.analyzeSkillGap.bind(careerController));

export default router;
