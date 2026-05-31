import { useState, useEffect } from 'react';
import DouyinEntry from './components/DouyinEntry';
import AIThinking from './components/AIThinking';
import AIAnswer from './components/AIAnswer';
import Wardrobe from './components/Wardrobe';
import OutfitJournal from './components/OutfitJournal';

type Page = 'douyin' | 'ai-thinking' | 'ai-answer' | 'wardrobe' | 'journal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('douyin');

  return (
    <div className="size-full overflow-hidden bg-white">
      {currentPage === 'douyin' && (
        <DouyinEntry onEnter={() => setCurrentPage('ai-thinking')} />
      )}
      {currentPage === 'ai-thinking' && (
        <AIThinking onComplete={() => setCurrentPage('ai-answer')} />
      )}
      {currentPage === 'ai-answer' && (
        <AIAnswer onNavigate={setCurrentPage} />
      )}
      {currentPage === 'wardrobe' && (
        <Wardrobe onNavigate={setCurrentPage} />
      )}
      {currentPage === 'journal' && (
        <OutfitJournal onNavigate={setCurrentPage} />
      )}
    </div>
  );
}