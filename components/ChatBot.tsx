import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useChat } from '@/hooks/useChat';
import { useTheme } from 'next-themes';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, sendMessage, isLoading } = useChat();
  const { theme } = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isDark = theme === 'dark';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll when messages change

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={cn(
          "fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg transition-colors",
          isDark 
            ? "bg-white text-black hover:bg-gray-200" 
            : "bg-green-600 text-white hover:bg-green-700"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      <Card className={cn(
        'fixed bottom-20 right-4 w-[380px] h-[600px] flex flex-col shadow-xl transition-all duration-300 ease-in-out border',
        isDark ? 'bg-gray-900' : 'bg-gray-100',
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'
      )}>
        <div className={cn(
          "flex items-center justify-between p-4 border-b",
          isDark ? 'bg-gray-900' : 'bg-gray-100'
        )}>
          <h3 className="font-semibold">AgriFund Assistant</h3>
          <Button
            onClick={() => setIsOpen(false)}
            size="icon"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className={cn(
          "flex-1 overflow-y-auto p-4 space-y-4",
          isDark ? 'bg-gray-900' : 'bg-gray-100'
        )}>
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          <div ref={messagesEndRef} /> {/* Invisible element to scroll to */}
        </div>

        <ChatInput
          onSend={sendMessage}
          disabled={isLoading}
        />
      </Card>
    </>
  );
};

export default ChatBot;
