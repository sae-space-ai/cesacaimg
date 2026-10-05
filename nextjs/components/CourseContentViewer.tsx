'use client';

import { useState } from 'react';
import type { CourseContent, Module, Lesson } from '@/lib/content-types';
import { BookOpen, Clock, Target, CheckCircle, Download, Play, FileText, Video, Headphones, Presentation, ChevronDown, ChevronRight } from 'lucide-react';

interface CourseContentViewerProps {
  content: CourseContent;
}

export function CourseContentViewer({ content }: CourseContentViewerProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(content.modules[0]?.id || null);
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  const totalLessons = content.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalResources = content.modules.reduce(
    (sum, m) => sum + m.lessons.reduce((lSum, l) => lSum + l.resources.length, 0), 0
  );

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header del curso */}
      <div className="bg-gradient-to-r from-cesac-700 to-cesac-900 text-white rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">{content.productName}</h2>
        <p className="text-blue-100 mb-4">{content.introduction}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-blue-200 text-xs">Módulos</p>
            <p className="font-bold">{content.modules.length}</p>
          </div>
          <div>
            <p className="text-blue-200 text-xs">Lecciones</p>
            <p className="font-bold">{totalLessons}</p>
          </div>
          <div>
            <p className="text-blue-200 text-xs">Recursos</p>
            <p className="font-bold">{totalResources}</p>
          </div>
          <div>
            <p className="text-blue-200 text-xs">Certificación</p>
            <p className="font-bold text-xs">{content.certification}</p>
          </div>
        </div>
      </div>

      {/* Metodología */}
      <div className="bg-white rounded-xl border p-5 mb-6">
        <h3 className="font-semibold text-cesac-900 mb-2 flex items-center gap-2">
          <Target className="w-5 h-5 text-cesac-600" /> Metodología
        </h3>
        <p className="text-sm text-gray-600">{content.methodology}</p>
      </div>

      {/* Sistema de evaluación */}
      <div className="bg-white rounded-xl border p-5 mb-6">
        <h3 className="font-semibold text-cesac-900 mb-2 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-success-500" /> Sistema de Evaluación
        </h3>
        <p className="text-sm text-gray-600">{content.evaluationSystem}</p>
      </div>

      {/* Módulos */}
      <div className="space-y-3">
        <h3 className="font-bold text-cesac-900 text-lg">Contenido del Programa</h3>
        {content.modules.map((module, mIndex) => (
          <ModuleAccordion
            key={module.id}
            module={module}
            index={mIndex}
            isExpanded={expandedModule === module.id}
            onToggle={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
            expandedLesson={expandedLesson}
            onLessonClick={(id) => setExpandedLesson(expandedLesson === id ? null : id)}
          />
        ))}
      </div>

      {/* Recursos adicionales */}
      {content.additionalResources.length > 0 && (
        <div className="bg-white rounded-xl border p-5 mt-6">
          <h3 className="font-semibold text-cesac-900 mb-3">Recursos Adicionales</h3>
          <div className="space-y-2">
            {content.additionalResources.map(resource => (
              <div key={resource.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                <Download className="w-4 h-4 text-cesac-600" />
                <span className="text-sm flex-1">{resource.title}</span>
                {resource.downloadable && (
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded">Descargable</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bibliografía */}
      {content.bibliography.length > 0 && (
        <div className="bg-white rounded-xl border p-5 mt-6">
          <h3 className="font-semibold text-cesac-900 mb-3">Bibliografía</h3>
          <ul className="space-y-1">
            {content.bibliography.map((ref, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                {ref}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ModuleAccordion({
  module,
  index,
  isExpanded,
  onToggle,
  expandedLesson,
  onLessonClick,
}: {
  module: Module;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  expandedLesson: string | null;
  onLessonClick: (id: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 transition text-left"
      >
        <div className="w-8 h-8 rounded-lg bg-cesac-100 text-cesac-700 flex items-center justify-center font-bold text-sm shrink-0">
          {index + 1}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-cesac-900">{module.title}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{module.lessons.length} lecciones · {module.duration}</p>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="border-t bg-gray-50 p-4">
          <p className="text-sm text-gray-600 mb-4">{module.description}</p>
          <div className="space-y-2">
            {module.lessons.map(lesson => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                isExpanded={expandedLesson === lesson.id}
                onToggle={() => onLessonClick(lesson.id)}
              />
            ))}
          </div>

          {module.evaluation && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <h5 className="font-medium text-amber-900 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Evaluación: {module.evaluation.title}
              </h5>
              <p className="text-xs text-amber-800 mt-1">{module.evaluation.description}</p>
              <div className="flex gap-3 mt-2 text-xs text-amber-700">
                <span>Duración: {module.evaluation.duration}</span>
                <span>Nota mínima: {module.evaluation.passingScore}%</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LessonItem({
  lesson,
  isExpanded,
  onToggle,
}: {
  lesson: Lesson;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const typeIcons = {
    theory: <BookOpen className="w-4 h-4 text-blue-600" />,
    practice: <Play className="w-4 h-4 text-green-600" />,
    workshop: <Target className="w-4 h-4 text-violet-600" />,
    evaluation: <CheckCircle className="w-4 h-4 text-amber-600" />,
  };

  const resourceIcons = {
    video: <Video className="w-3 h-3" />,
    pdf: <FileText className="w-3 h-3" />,
    audio: <Headphones className="w-3 h-3" />,
    presentation: <Presentation className="w-3 h-3" />,
    article: <FileText className="w-3 h-3" />,
    exercise: <Target className="w-3 h-3" />,
    quiz: <CheckCircle className="w-3 h-3" />,
    'case-study': <BookOpen className="w-3 h-3" />,
    download: <Download className="w-3 h-3" />,
    link: <BookOpen className="w-3 h-3" />,
  };

  return (
    <div className="bg-white rounded-lg border">
      <button
        onClick={onToggle}
        className="w-full p-3 flex items-center gap-3 hover:bg-gray-50 transition text-left"
      >
        {typeIcons[lesson.type]}
        <div className="flex-1">
          <p className="text-sm font-medium text-cesac-900">{lesson.title}</p>
          <p className="text-xs text-gray-500 flex items-center gap-2 mt-0.5">
            <Clock className="w-3 h-3" /> {lesson.duration}
            <span>·</span>
            <span>{lesson.resources.length} recursos</span>
          </p>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="border-t p-3 space-y-3">
          <p className="text-sm text-gray-600">{lesson.description}</p>

          {/* Objetivos */}
          <div>
            <h6 className="text-xs font-semibold text-cesac-700 mb-1">Objetivos:</h6>
            <ul className="space-y-1">
              {lesson.objectives.map((obj, i) => (
                <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                  <CheckCircle className="w-3 h-3 text-success-500 shrink-0 mt-0.5" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Puntos clave */}
          <div>
            <h6 className="text-xs font-semibold text-cesac-700 mb-1">Puntos clave:</h6>
            <div className="flex flex-wrap gap-1">
              {lesson.keyPoints.map((point, i) => (
                <span key={i} className="text-[10px] bg-cesac-50 text-cesac-700 px-2 py-0.5 rounded">
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Recursos */}
          <div>
            <h6 className="text-xs font-semibold text-cesac-700 mb-1">Recursos:</h6>
            <div className="space-y-1">
              {lesson.resources.map(resource => (
                <div key={resource.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded text-xs">
                  {resourceIcons[resource.type]}
                  <span className="flex-1">{resource.title}</span>
                  {resource.duration && <span className="text-gray-500">{resource.duration}</span>}
                  {resource.pages && <span className="text-gray-500">{resource.pages} págs</span>}
                  {resource.downloadable && (
                    <Download className="w-3 h-3 text-cesac-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
