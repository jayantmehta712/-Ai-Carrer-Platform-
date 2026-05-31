import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-indigo-600">🚀 Career AI Platform</h1>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Welcome Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to Career AI
              </h2>
              <p className="text-gray-600 mb-6">
                Discover your ideal career path powered by AI. Get personalized recommendations 
                based on your skills, experience, and interests.
              </p>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Get Started
              </button>
            </section>

            {/* Features Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">AI-powered career recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Skill gap analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Personalized development paths</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">Real-time insights</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Stats Section */}
          <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Platform Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">500+</div>
                <p className="text-gray-600 mt-2">Career Paths</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">10K+</div>
                <p className="text-gray-600 mt-2">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">95%</div>
                <p className="text-gray-600 mt-2">Satisfaction Rate</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
