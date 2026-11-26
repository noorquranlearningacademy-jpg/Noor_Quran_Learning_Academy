import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ACADEMY_CONFIG, AI_COPY, ROUTES, type AiQuestionKey } from '../data/academy';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  isError?: boolean;
}

const SUGGESTION_KEYS: AiQuestionKey[] = ['courses', 'teachers', 'trial', 'timings', 'apps', 'fees'];

export function AiAssistant() {
  const { lang, navigate } = useApp();
  const copy = AI_COPY[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesBoxRef.current) {
      messagesBoxRef.current.scrollTop = messagesBoxRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const sendMessage = async (questionText: string) => {
    const trimmed = questionText.trim();
    if (!trimmed || isLoading) return;

    const historyPayload = messages
      .filter((m) => !m.isError)
      .slice(-12)
      .map((m) => ({
        role: m.isUser ? ('user' as const) : ('model' as const),
        text: m.text,
      }));

    const userMsg: ChatMessage = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      text: trimmed,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          lang,
          history: historyPayload,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        reply?: string;
        error?: string;
      } | null;

      if (!response.ok || !data?.reply) {
        const errorText =
          data?.error ||
          (lang === 'ur'
            ? 'اس وقت جواب موصول نہیں ہو سکا۔ براہ کرم دوبارہ کوشش کریں یا واٹس ایپ / ای میل پر رابطہ کریں۔'
            : 'Unable to get a response right now. Please try again or contact us via WhatsApp or Email.');

        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            text: errorText,
            isUser: false,
            isError: true,
          },
        ]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          text: data.reply as string,
          isUser: false,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          text:
            lang === 'ur'
              ? 'نیٹ ورک کنکشن کا مسئلہ پیش آیا ہے۔ براہ کرم دوبارہ کوشش کریں یا واٹس ایپ / ای میل کے ذریعے رابطہ کریں۔'
              : 'Network error while reaching the AI Assistant. Please try again or contact the academy via WhatsApp or Email.',
          isUser: false,
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggested = (key: AiQuestionKey) => {
    void sendMessage(copy.q[key]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputVal.trim();
    if (!val || isLoading) return;
    setInputVal('');
    void sendMessage(val);
  };

  const loadingText = lang === 'ur' ? 'جواب تیار کیا جا رہا ہے...' : 'Thinking...';

  return (
    <div id="ai-assistant-root" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3" dir="ltr">
      {isOpen && (
        <section
          id="ai-chat-panel"
          role="dialog"
          aria-label={copy.title}
          dir={lang === 'ur' ? 'rtl' : 'ltr'}
          className="w-[calc(100vw-2.5rem)] sm:w-96 bg-light-surface-container-lowest border border-light-outline-variant rounded-xl overflow-hidden flex flex-col shadow-lg"
        >
          {/* Chat Header */}
          <header className="bg-light-primary text-light-on-primary px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className="w-8 h-8 rounded-full bg-accent-soft text-light-secondary flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-title-md">smart_toy</span>
              </span>
              <div className="flex flex-col">
                <span className="font-title text-title-md leading-tight">{copy.title}</span>
                <span className="text-label-sm text-light-on-primary-container leading-tight">{copy.subtitle}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Assistant"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-light-primary-container transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                close
              </span>
            </button>
          </header>

          {/* Messages Area */}
          <div
            ref={messagesBoxRef}
            aria-live="polite"
            className="p-4 bg-light-surface flex flex-col gap-3 max-h-72 overflow-y-auto"
          >
            <div className="bg-light-surface-container-lowest border border-light-outline-variant rounded-lg p-3 text-body-md text-light-on-surface">
              {copy.welcome}
            </div>
            {messages.map((msg) => {
              if (msg.isUser) {
                return (
                  <div
                    key={msg.id}
                    className="self-end max-w-[85%] bg-light-primary text-light-on-primary rounded-lg px-3.5 py-2.5 text-body-md whitespace-pre-wrap"
                  >
                    {msg.text}
                  </div>
                );
              }
              if (msg.isError) {
                return (
                  <div
                    key={msg.id}
                    role="alert"
                    className="self-start max-w-[90%] bg-light-error-container border border-light-error rounded-lg px-3.5 py-2.5 text-body-md text-light-on-error-container whitespace-pre-wrap"
                  >
                    {msg.text}
                  </div>
                );
              }
              return (
                <div
                  key={msg.id}
                  className="self-start max-w-[90%] bg-light-surface-container-lowest border border-light-outline-variant rounded-lg px-3.5 py-2.5 text-body-md text-light-on-surface whitespace-pre-wrap"
                >
                  {msg.text}
                </div>
              );
            })}
            {isLoading && (
              <div
                role="status"
                className="self-start inline-flex items-center gap-2 bg-light-surface-container-lowest border border-light-outline-variant rounded-lg px-3.5 py-2.5 text-body-md text-light-on-surface-variant"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-light-primary animate-pulse" aria-hidden="true" />
                <span>{loadingText}</span>
              </div>
            )}
          </div>

          {/* Suggested Questions */}
          <div className="px-4 py-2.5 bg-light-surface-container-low border-t border-light-outline-variant flex flex-col gap-2">
            <span className="text-label-sm font-label text-light-on-surface-variant">{copy.suggestLabel}</span>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTION_KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  disabled={isLoading}
                  onClick={() => handleSuggested(key)}
                  className="text-start px-2.5 py-1 rounded-full bg-light-surface-container-lowest border border-light-outline-variant text-label-sm text-light-primary hover:border-light-primary disabled:opacity-50 transition-colors duration-state-change"
                >
                  {copy.q[key]}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions inside Chat */}
          <div className="px-4 py-2.5 bg-light-surface-container-lowest border-t border-light-outline-variant flex flex-wrap items-center gap-2">
            <a
              href={ROUTES.freeTrial}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                navigate(ROUTES.freeTrial);
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-DEFAULT bg-light-primary text-light-on-primary font-label text-label-sm hover:bg-light-primary-container transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                event_available
              </span>
              <span>{copy.trialBtn}</span>
            </a>
            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-DEFAULT bg-accent-soft text-light-secondary border border-accent font-label text-label-sm hover:bg-light-surface-container-low transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                chat
              </span>
              <span>{copy.waBtn}</span>
            </a>
            <a
              href={`mailto:${ACADEMY_CONFIG.email}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-DEFAULT bg-light-surface-container-low text-light-on-surface border border-light-outline-variant font-label text-label-sm hover:border-light-primary transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-label-lg" aria-hidden="true">
                mail
              </span>
              <span>{copy.emailBtn}</span>
            </a>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-light-surface-container-lowest border-t border-light-outline-variant flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              disabled={isLoading}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={copy.placeholder}
              aria-label={copy.fab}
              className="flex-1 rounded-DEFAULT border border-light-outline-variant bg-light-surface px-3 py-2 text-body-md text-light-on-surface focus:border-light-primary focus:ring-1 focus:ring-light-primary focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !inputVal.trim()}
              aria-label="Send message"
              className="inline-flex items-center justify-center w-10 h-10 rounded-DEFAULT bg-light-primary text-light-on-primary hover:bg-light-primary-container disabled:opacity-50 transition-colors duration-state-change shrink-0"
            >
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                send
              </span>
            </button>
          </form>
        </section>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="ai-chat-panel"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-light-primary text-light-on-primary border border-accent font-label text-label-lg hover:bg-light-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors duration-state-change shadow-md"
      >
        <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
          forum
        </span>
        <span>{copy.fab}</span>
      </button>
    </div>
  );
}
