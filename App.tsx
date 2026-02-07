
import React from 'react';
import Background from './components/Background';
import Profile from './components/Profile';
import LinkCard from './components/LinkCard';
import { SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative flex justify-center items-start pt-12 pb-20 px-4">
      <Background />
      
      <main className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Profile />
        
        <div className="space-y-4">
          {SOCIAL_LINKS.map((link, index) => (
            <div 
              key={link.id} 
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700"
            >
              <LinkCard 
                name={link.name} 
                url={link.url} 
                icon={link.icon} 
                color={link.color}
                textColor={link.textColor}
              />
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center space-y-4">
          <p className="text-slate-400 text-xs font-medium tracking-widest uppercase">
            Built with Passion • 2025
          </p>
          <div className="flex justify-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-300"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-pink-300"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
          </div>
        </footer>
      </main>

      {/* Additional UI elements for polish */}
      <div className="fixed bottom-6 right-6 hidden md:block">
        <button className="p-3 bg-white glass rounded-full shadow-lg border border-slate-200 text-slate-500 hover:text-purple-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
