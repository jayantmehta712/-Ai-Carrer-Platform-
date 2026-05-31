import React from 'react';

interface RecommendationCardProps {
  title: string;
  score: number;
  reasoning: string;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  score,
  reasoning,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
          {(score * 100).toFixed(0)}%
        </span>
      </div>
      <p className="text-gray-600">{reasoning}</p>
    </div>
  );
};

export default RecommendationCard;
