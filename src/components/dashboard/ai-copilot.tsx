"use client"

import { useState } from "react"
import { Bot, Send, X, Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const suggestions = [
  "Which AMC contracts expire this month?",
  "Show overdue invoices.",
  "Which rental assets are underutilized?",
  "Summarize today's service operations.",
]

export function AICopilot() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello Admin. I'm your Nexus Copilot. Ask me anything about your business." }
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    const userMessage = query
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setQuery("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: `I've analyzed the data for "${userMessage}". Everything looks stable, but you have 3 AMC contracts expiring this week.` 
      }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      {/* Floating Action Button */}
      <Button 
        size="icon" 
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50 bg-foreground text-background hover:bg-foreground/90"
        onClick={() => setIsOpen(true)}
      >
        <Sparkles className="h-5 w-5" />
      </Button>

      {/* Slide-out Panel */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-screen w-96 bg-background border-l border-border/50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border/50 bg-muted/20">
          <div className="flex items-center gap-2 font-semibold">
            <Bot className="h-5 w-5" />
            Nexus Copilot
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={cn("flex flex-col max-w-[85%]", msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start")}>
              <div 
                className={cn(
                  "p-3 rounded-lg text-sm",
                  msg.role === "user" 
                    ? "bg-foreground text-background rounded-tr-none" 
                    : "bg-muted text-foreground rounded-tl-none"
                )}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm p-3 bg-muted rounded-lg rounded-tl-none w-fit">
              <Loader2 className="h-4 w-4 animate-spin" />
              Thinking...
            </div>
          )}
        </div>

        <div className="p-4 border-t border-border/50 bg-muted/10">
          {messages.length === 1 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button 
                  key={i}
                  className="text-xs border border-border/50 bg-background hover:bg-muted px-2 py-1.5 rounded-md text-left transition-colors"
                  onClick={() => {
                    setQuery(s)
                    setTimeout(() => handleSubmit({ preventDefault: () => {} } as any), 100)
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything..." 
              className="flex-1 focus-visible:ring-foreground"
            />
            <Button type="submit" size="icon" disabled={!query.trim() || isTyping}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
