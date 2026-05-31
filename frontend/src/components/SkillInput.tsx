import React, { useState } from 'react';

interface SkillInputProps {
  onSubmit: (profile: {
    skills: string[];
    experience: string;
    interests: string[];
  }) => void;
  loading: boolean;
}

export const SkillInput: React.FC<SkillInputProps> = ({ onSubmit, loading }) => {
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      skills: skills.split(',').map(s => s.trim()).filter(s => s),
      experience,
      interests: interests.split(',').map(i => i.trim()).filter(i => i),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tell Us About Yourself</h2>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Skills (comma-separated)
        </label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="e.g., JavaScript, React, Node.js, TypeScript"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Years of Experience
        </label>
        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="e.g., 5"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Interests (comma-separated)
        </label>
        <input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="e.g., AI, Cloud, Mobile Development"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {loading ? 'Generating Recommendations...' : 'Get Recommendations'}
      </button>
    </form>
  );
};

export default SkillInput;
