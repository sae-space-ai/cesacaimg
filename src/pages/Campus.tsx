import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, CheckCircle, FileText, Download, MessageSquare, Clock, ChevronRight, Users, Video, Headphones, Presentation, ArrowLeft, Send, Bot, AlertTriangle, ExternalLink, Cpu } from 'lucide-react';
import { useApp } from '../lib/store';
import { products } from '../lib/data';

export function Campus() {
  const { state } = useApp();
  const user = state.user;
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Accede al Campus</h1>
        <Link to="/auth" className="px-6 py-3 bg-cesac-700 text-white rounded-lg font-medium">Iniciar sesión</Link>
      </div>
    );
  }

  const enrolledProducts = products.filter(p => user.enrolledCourses.includes(p.id));
  const activeCourse = selectedCourse ? products.find(p => p.id === selectedCourse) : enrolledProducts[0];

  if (activeCourse) {
    return (
      <div className="animate-fade-in min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/dashboard" className="p-2 rounded-lg hover:bg-white transition"><ArrowLeft className="w-5 h-5" /></Link>
            <div>
              <h1 className="text-xl font-bold text-cesac-900">{activeCourse.name}</h1>
              <p className="text-sm text-gray-500">{activeCourse.unit}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar - modules */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border shadow-sm">
                <div className="p-4 border-b">
                  <h3 className="font-semibold text-sm">Contenido del curso</h3>
                  <div className="mt-2 h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-cesac-600 rounded-full" style={{ width: `${user.progress[activeCourse.id] || 0}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{user.progress[activeCourse.id] || 0}% completado</p>
                </div>
                <div className="p-2">
                  {activeCourse.program.map((mod, i) => {
                    const completed = i < Math.floor((user.progress[activeCourse.id] || 0) / 100 * activeCourse.program.length);
                    return (
                      <button key={i} className={`w-full text-left p-3 rounded-lg text-sm flex items-center gap-2 transition ${completed ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50 text-gray-700'}`}>
                        {completed ? <CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> : <div className="w-4 h-4 rounded-full border-2 border-gray-300 shrink-0"></div>}
                        <span className="truncate">{mod}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border shadow-sm">
                <div className="aspect-video bg-gradient-to-br from-cesac-800 to-cesac-900 rounded-t-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-3 opacity-80" />
                    <p className="text-sm opacity-70">Contenido de la lección</p>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-cesac-900 mb-2">{activeCourse.program[0]}</h2>
                  <p className="text-gray-600 mb-4">Módulo introductorio del programa. En este módulo se presentan los conceptos fundamentales y se establecen las bases para el resto del curso.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {[
                      { icon: <Video className="w-4 h-4" />, label: 'Vídeo', time: '45 min' },
                      { icon: <FileText className="w-4 h-4" />, label: 'Documento', time: 'PDF' },
                      { icon: <Presentation className="w-4 h-4" />, label: 'Presentación', time: '30 slides' },
                      { icon: <Headphones className="w-4 h-4" />, label: 'Audio', time: '20 min' }
                    ].map((resource, i) => (
                      <div key={i} className="p-3 bg-gray-50 rounded-lg text-center">
                        <div className="text-cesac-600 flex justify-center mb-1">{resource.icon}</div>
                        <p className="text-xs font-medium">{resource.label}</p>
                        <p className="text-[10px] text-gray-500">{resource.time}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-cesac-700 text-white text-sm font-medium rounded-lg hover:bg-cesac-800 transition flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" /> Marcar como completado
                    </button>
                    <button className="px-4 py-2 border text-sm font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                      <Download className="w-4 h-4" /> Descargar material
                    </button>
                  </div>
                </div>
              </div>

              {/* Evaluation */}
              <div className="bg-white rounded-xl border shadow-sm mt-6 p-6">
                <h3 className="font-semibold text-cesac-900 mb-3">Evaluación del módulo</h3>
                <p className="text-sm text-gray-600 mb-4">Realiza el test de evaluación para verificar tu comprensión del contenido.</p>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm font-medium mb-2">1. ¿Cuál es el concepto fundamental del módulo?</p>
                    <div className="space-y-2">
                      {['Opción A - Concepto básico', 'Opción B - Concepto avanzado', 'Opción C - Concepto intermedio', 'Opción D - Ninguna anterior'].map((opt, i) => (
                        <label key={i} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                          <input type="radio" name="q1" className="rounded border-gray-300" /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-success-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition">
                    Enviar respuesta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-center">
      <BookOpen className="w-12 h-12 mx-auto text-gray-300 mb-4" />
      <h2 className="text-xl font-bold text-cesac-900 mb-2">No tienes cursos activos</h2>
      <p className="text-gray-600 mb-4">Explora nuestro catálogo y matricúlate en un programa</p>
      <Link to="/formacion" className="px-6 py-3 bg-cesac-700 text-white rounded-lg font-medium">Ver catálogo</Link>
    </div>
  );
}

interface Message {
  role: string;
  content: string;
  sources?: { type: string; title: string; page: number }[];
}

export function AITutor() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy el Tutor IA de CESAC AI. Puedo ayudarte con dudas sobre tus cursos, normativa, conceptos y materiales. Mis respuestas están basadas en fuentes verificadas y siempre indico el nivel de confianza.\n\n¿En qué puedo ayudarte?', sources: [] }
  ]);
  const [input, setInput] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    setTimeout(() => {
      const responses = [
        {
          content: `Basándome en los materiales del curso seleccionado, la respuesta es la siguiente:\n\nEl concepto que consultas está desarrollado en el módulo correspondiente. Es importante distinguir entre la definición teórica y su aplicación práctica.\n\n**Nivel de confianza:** Alto (92%)\n\n⚠️ Esta es una interpretación generada por IA. Consulta siempre las fuentes oficiales para decisiones críticas.`,
          sources: [
            { type: 'CESAC', title: 'Módulo 3 - Fundamentos', page: 12 },
            { type: 'OFICIAL', title: 'Normativa aplicable', page: 1 }
          ]
        },
        {
          content: `Excelente pregunta. Según los materiales de referencia:\n\n1. El concepto principal se define como...\n2. Su aplicación práctica requiere...\n3. Las limitaciones a considerar son...\n\n**Nivel de confianza:** Medio-Alto (78%)\n\n📌 Te recomiendo revisar el módulo 5 para profundizar en este tema.`,
          sources: [
            { type: 'CESAC', title: 'Material del curso - Tema 5', page: 34 },
            { type: 'INTERPRETACIÓN', title: 'Síntesis IA', page: 0 }
          ]
        }
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', ...response }]);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <div className="animate-fade-in min-h-[80vh] flex flex-col">
      <div className="bg-white border-b p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-cesac-900">Tutor IA CESAC</h1>
              <p className="text-xs text-gray-500">Respuestas con fuentes verificadas · RAG · Anti-alucinación</p>
            </div>
          </div>
          <select value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)} className="px-3 py-2 border rounded-lg text-sm">
            <option value="">Todos los cursos</option>
            <option value="p16">AI Literacy</option>
            <option value="p18">Prompt Engineering</option>
            <option value="p39">EU AI Act</option>
          </select>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-xl p-4 ${msg.role === 'user' ? 'bg-cesac-700 text-white' : 'bg-gray-100'}`}>
                <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-[10px] font-semibold uppercase text-gray-500 mb-1">Fuentes:</p>
                    <div className="space-y-1">
                      {msg.sources.map((src, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            src.type === 'OFICIAL' ? 'bg-green-100 text-green-700' :
                            src.type === 'CESAC' ? 'bg-blue-100 text-blue-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>{src.type}</span>
                          <span className="text-gray-600">{src.title}{src.page > 0 && ` · p.${src.page}`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isThinking && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span>Buscando en fuentes verificadas...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Warning */}
      <div className="max-w-4xl mx-auto w-full px-4">
        <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg mb-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800">Las respuestas del tutor son generadas por IA con apoyo de fuentes verificadas. No sustituyen el consejo profesional ni la normativa oficial. Verifica siempre la información crítica.</p>
        </div>
      </div>

      {/* Input */}
      <div className="border-t bg-white p-4">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu pregunta..."
            className="flex-1 px-4 py-3 border rounded-xl text-sm focus:ring-2 focus:ring-cesac-500 focus:border-cesac-500"
          />
          <button onClick={handleSend} className="px-4 py-3 bg-cesac-700 text-white rounded-xl hover:bg-cesac-800 transition">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
