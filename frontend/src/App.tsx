import { useEffect, useState } from 'react';
import './App.css';

type Recommendation = {
  id: string;
  careerPath: string;
  score: number;
  reasoning: string;
};

type SkillGapAnalysis = {
  targetCareer: string;
  currentSkills: string[];
  missingSkills: string[];
  developmentPath: Array<{
    skill: string;
    timeframe: string;
  }>;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

function App() {
  const [skills, setSkills] = useState('JavaScript, React, Node.js');
  const [experience, setExperience] = useState('2');
  const [interests, setInterests] = useState('AI, Web Development');
  const [targetCareer, setTargetCareer] = useState('Full Stack Developer');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [skillGap, setSkillGap] = useState<SkillGapAnalysis | null>(null);
  const [apiStatus, setApiStatus] = useState('Checking API...');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/health`)
      .then((response) => {
        setApiStatus(response.ok ? 'Backend connected' : 'Backend unavailable');
      })
      .catch(() => setApiStatus('Backend unavailable'));
  }, []);

  const profile = {
    skills: skills.split(',').map((item) => item.trim()).filter(Boolean),
    experience,
    interests: interests.split(',').map((item) => item.trim()).filter(Boolean),
  };

  async function postJson<T>(path: string, body: unknown): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const payload = await response.json();
    return payload.data;
  }

  async function analyzeCareer() {
    setLoading(true);
    setError('');

    try {
      const [recommendationData, skillGapData] = await Promise.all([
        postJson<Recommendation[]>('/api/career/recommendations', profile),
        postJson<SkillGapAnalysis>('/api/career/skill-gap', {
          userSkills: profile.skills,
          targetCareer,
        }),
      ]);
      setRecommendations(recommendationData);
      setSkillGap(skillGapData);
    } catch (err) {
      setApiStatus('Static demo mode');
      setError('');
      setRecommendations([
        {
          id: 'demo-1',
          careerPath: 'Full Stack Developer',
          score: 0.93,
          reasoning: `${profile.skills.slice(0, 3).join(', ')} gives you a strong base for building complete web applications.`,
        },
        {
          id: 'demo-2',
          careerPath: 'Frontend Engineer',
          score: 0.88,
          reasoning: `Your interests in ${profile.interests.slice(0, 2).join(', ')} fit user-facing product development.`,
        },
        {
          id: 'demo-3',
          careerPath: 'AI Product Developer',
          score: 0.81,
          reasoning: 'Combining web development with AI interests can lead to practical AI-powered applications.',
        },
      ]);
      setSkillGap({
        targetCareer,
        currentSkills: profile.skills,
        missingSkills: ['System Design', 'Testing', 'Deployment'],
        developmentPath: [
          { skill: 'System Design', timeframe: '4-6 weeks' },
          { skill: 'Testing', timeframe: '2-4 weeks' },
          { skill: 'Deployment', timeframe: '2-3 weeks' },
        ],
      });
      console.info(err instanceof Error ? err.message : 'Using static demo fallback');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Career AI Platform</p>
          <h1>AI-powered career guidance and skill gap analysis</h1>
          <p className="hero-copy">
            Enter your skills, experience, and interests to generate role recommendations and a focused development path.
          </p>
        </div>
        <div className="status">{apiStatus}</div>
      </header>

      <section className="workspace">
        <form className="panel form-panel" onSubmit={(event) => {
          event.preventDefault();
          analyzeCareer();
        }}>
          <h2>Career Profile</h2>
          <label>
            Skills
            <input value={skills} onChange={(event) => setSkills(event.target.value)} />
          </label>
          <label>
            Years of Experience
            <input value={experience} onChange={(event) => setExperience(event.target.value)} />
          </label>
          <label>
            Interests
            <input value={interests} onChange={(event) => setInterests(event.target.value)} />
          </label>
          <label>
            Target Career
            <input value={targetCareer} onChange={(event) => setTargetCareer(event.target.value)} />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Analyzing...' : 'Analyze Career'}
          </button>
          {error && <p className="error">{error}</p>}
        </form>

        <section className="panel">
          <h2>Recommendations</h2>
          <div className="cards">
            {recommendations.length === 0 ? (
              <p className="muted">Submit the form to generate recommendations.</p>
            ) : recommendations.map((item) => (
              <article className="recommendation" key={item.id}>
                <div>
                  <h3>{item.careerPath}</h3>
                  <p>{item.reasoning}</p>
                </div>
                <strong>{Math.round(item.score * 100)}%</strong>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="panel gap-panel">
        <h2>Skill Gap Analysis</h2>
        {skillGap ? (
          <div className="gap-grid">
            <div>
              <h3>Current Skills</h3>
              <ul>{skillGap.currentSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
            <div>
              <h3>Missing Skills</h3>
              <ul>{skillGap.missingSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
            <div>
              <h3>Development Path</h3>
              <ul>{skillGap.developmentPath.map((step) => <li key={step.skill}>{step.skill}: {step.timeframe}</li>)}</ul>
            </div>
          </div>
        ) : (
          <p className="muted">Skill gap results will appear after analysis.</p>
        )}
      </section>
    </main>
  );
}

export default App;
