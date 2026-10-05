// Tipos para contenido detallado de cursos/programas

export type ResourceType = 'video' | 'pdf' | 'audio' | 'presentation' | 'article' | 'exercise' | 'quiz' | 'case-study' | 'download' | 'link';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'theory' | 'practice' | 'workshop' | 'evaluation';
  resources: Resource[];
  objectives: string[];
  keyPoints: string[];
}

export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  description?: string;
  url?: string;
  duration?: string;
  pages?: number;
  downloadable: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
  evaluation?: Evaluation;
}

export interface Evaluation {
  id: string;
  title: string;
  type: 'test' | 'project' | 'case-study' | 'oral' | 'mixed';
  description: string;
  passingScore: number;
  duration: string;
  questions?: Question[];
  rubric?: RubricItem[];
}

export interface Question {
  id: string;
  type: 'single-choice' | 'multiple-choice' | 'true-false' | 'short-answer' | 'long-answer' | 'case';
  text: string;
  options?: string[];
  correctAnswer?: string | string[];
  points: number;
  explanation?: string;
}

export interface RubricItem {
  criterion: string;
  excellent: string;
  good: string;
  acceptable: string;
  needsImprovement: string;
  weight: number;
}

export interface CourseContent {
  productId: string;
  productSlug: string;
  productName: string;
  introduction: string;
  methodology: string;
  evaluationSystem: string;
  certification: string;
  modules: Module[];
  additionalResources: Resource[];
  bibliography: string[];
  tutorNotes?: string;
}

export interface UnitContent {
  unitId: string;
  unitName: string;
  courses: CourseContent[];
}
