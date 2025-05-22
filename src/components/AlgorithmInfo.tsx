import React, { useState } from 'react';
import { AlgorithmInfo as AlgorithmInfoType } from '../types';
import { Clock, Database, Code } from 'lucide-react';

interface AlgorithmInfoProps {
  algorithmInfo: AlgorithmInfoType;
}

const AlgorithmInfo: React.FC<AlgorithmInfoProps> = ({ algorithmInfo }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('JavaScript');

  const languages = ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'C'];

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{algorithmInfo.name}</h2>
      <p className="text-gray-600 mb-4">{algorithmInfo.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-700 flex items-center">
            <Clock size={18} className="mr-2 text-indigo-600" />
            Time Complexity
          </h3>
          <div className="pl-6">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Best Case:</span>
              <span className="text-sm font-medium">{algorithmInfo.timeComplexity.best}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Average Case:</span>
              <span className="text-sm font-medium">{algorithmInfo.timeComplexity.average}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Worst Case:</span>
              <span className="text-sm font-medium">{algorithmInfo.timeComplexity.worst}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-md font-semibold text-gray-700 flex items-center">
            <Database size={18} className="mr-2 text-indigo-600" />
            Space Complexity
          </h3>
          <div className="pl-6">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Auxiliary Space:</span>
              <span className="text-sm font-medium">{algorithmInfo.spaceComplexity}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-md font-semibold text-gray-700 flex items-center">
          <Code size={18} className="mr-2 text-indigo-600" />
          Implementation
        </h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedLanguage === lang
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
        <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
          <code>{algorithmInfo.implementations[selectedLanguage]}</code>
        </pre>
      </div>
    </div>
  );
};

export default AlgorithmInfo;