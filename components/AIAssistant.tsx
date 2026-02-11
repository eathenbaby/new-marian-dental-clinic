import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { IconMap } from './Icons.tsx';
import { SERVICES } from '../constants.ts';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! I am your Marian Dental Assistant. How can I help you with your smile today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    if (!process.env.API_KEY) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', text: "The AI Assistant is currently in demo mode. For real inquiries, please call us at +91 88481 98200." }]);
      }, 600);
      return;
    }

    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are a helpful dental assistant for "New Marian Dental Clinic" in Pala, Kerala.
      Clinic Info:
      - Founded in 2008 by Dr. Aby Joseph Thomas.
      - 2 Locations: Old Market Rd (Main) and Ramapuram Rd.
      - Top Services: ${SERVICES.map(s => s.name).join(', ')}.
      - Specialized in painless Root Canal and Dental Implants.
      - Tone: Professional, warm, and community-focused. 
      - If users ask for booking, tell them to use the "Book Now" button or call +91 88481 98200.
      Respond concisely.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: userMsg }] }],
        config: {
          systemInstruction: systemInstruction
        }
      });

      const botText = response.text || "I'm sorry, I'm having trouble connecting. Please call our clinic directly.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm offline right now. Please call us at +91 88481 98200 for immediate help." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-[100] bg-primary text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        aria-label="AI Assistant"
      >
        {isOpen ? <IconMap.X className="w-8 h-8" /> : <IconMap.MessageCircle className="w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 left-8 w-[350px] md:w-[400px] h-[500px] glass rounded-[40px] z-[100] flex flex-col overflow-hidden border border-white/20 shadow-2xl animate-in slide-in-from-bottom-10 duration-300">
          <div className="bg-primary/20 p-6 flex items-center gap-4 border-b border-white/10">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <IconMap.Plus className="text-white w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold">Marian Assistant</h4>
              <p className="text-[10px] text-primary-light font-bold uppercase tracking-widest">Online & Helpful</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-white/5 text-gray-300 border border-white/10 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 animate-pulse text-gray-500 text-xs uppercase tracking-widest">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              placeholder="Ask about implants..."
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-colors"
            >
              <IconMap.ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};