'use client';

import { useState } from 'react';
import { Send, Bot, AlertTriangle } from 'lucide-react';
import { products } from '@/lib/data';

interface Message {
  role: string;
  content: string;
  sources?: { type: string; title: string; page: number }[];
}

export default function AITutorPage() {
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
            {products.slice(0, 10).map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
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
