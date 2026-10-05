import { BookOpen } from 'lucide-react';

interface ModuleListProps {
  modules: string[];
}

export function ModuleList({ modules }: ModuleListProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-cesac-900 mb-3 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-cesac-600" />
        Programa
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {modules.map((mod, i) => (
          <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <span className="w-6 h-6 rounded-full bg-cesac-100 text-cesac-700 text-xs font-bold flex items-center justify-center shrink-0">
              {i + 1}
            </span>
            <span className="text-sm text-gray-700">{mod}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
