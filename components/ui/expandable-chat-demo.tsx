"use client"

import { useState, FormEvent } from "react"
import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    ChatBubble,
    ChatBubbleAvatar,
    ChatBubbleMessage,
} from "@/components/ui/chat-bubble"
import { ChatInput } from "@/components/ui/chat-input"
import {
    ExpandableChat,
    ExpandableChatHeader,
    ExpandableChatBody,
    ExpandableChatFooter,
} from "@/components/ui/expandable-chat"
import { ChatMessageList } from "@/components/ui/chat-message-list"

export default function ExpandableChatDemo() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            content: "¡Hola! ¿Cómo puedo ayudarte hoy?",
            sender: "ai",
        },
        {
            id: 2,
            content: "Tengo una pregunta sobre la librería de componentes.",
            sender: "user",
        },
        {
            id: 3,
            content: "¡Claro! Estaré encantado de ayudarte. ¿Qué te gustaría saber?",
            sender: "ai",
        },
    ])

    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return

        setMessages((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                content: input,
                sender: "user",
            },
        ])
        setInput("")
        setIsLoading(true)

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: prev.length + 1,
                    content: "Gracias por tu mensaje. Un agente te responderá pronto.",
                    sender: "ai",
                },
            ])
            setIsLoading(false)
        }, 1000)
    }

    const handleAttachFile = () => {
        //
    }

    const handleMicrophoneClick = () => {
        //
    }

    return (
        <div className="w-full h-full min-h-[600px] relative flex items-center justify-center p-4 bg-gray-50">
            <ExpandableChat
                size="md"
                position="bottom-right"
                icon={<Bot className="h-6 w-6" />}
                className="absolute bottom-4 right-4"
            >
                <ExpandableChatHeader className="flex-col text-center justify-center">
                    <h1 className="text-xl font-semibold">Chat con IA ✨</h1>
                    <p className="text-sm text-muted-foreground">
                        Pregúntame cualquier cosa
                    </p>
                </ExpandableChatHeader>

                <ExpandableChatBody>
                    <ChatMessageList>
                        {messages.map((message) => (
                            <ChatBubble
                                key={message.id}
                                variant={message.sender === "user" ? "sent" : "received"}
                            >
                                <ChatBubbleAvatar
                                    className="h-8 w-8 shrink-0"
                                    src={
                                        message.sender === "user"
                                            ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                                            : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                                    }
                                    fallback={message.sender === "user" ? "YO" : "IA"}
                                />
                                <ChatBubbleMessage
                                    variant={message.sender === "user" ? "sent" : "received"}
                                >
                                    {message.content}
                                </ChatBubbleMessage>
                            </ChatBubble>
                        ))}

                        {isLoading && (
                            <ChatBubble variant="received">
                                <ChatBubbleAvatar
                                    className="h-8 w-8 shrink-0"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                                    fallback="AI"
                                />
                                <ChatBubbleMessage isLoading />
                            </ChatBubble>
                        )}
                    </ChatMessageList>
                </ExpandableChatBody>

                <ExpandableChatFooter>
                    <form
                        onSubmit={handleSubmit}
                        className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
                    >
                        <ChatInput
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe tu mensaje..."
                            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                        />
                        <div className="flex items-center p-3 pt-0 justify-between">
                            <div className="flex">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    type="button"
                                    onClick={handleAttachFile}
                                >
                                    <Paperclip className="size-4" />
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    type="button"
                                    onClick={handleMicrophoneClick}
                                >
                                    <Mic className="size-4" />
                                </Button>
                            </div>
                            <Button type="submit" size="sm" className="ml-auto gap-1.5">
                                Enviar
                                <CornerDownLeft className="size-3.5" />
                            </Button>
                        </div>
                    </form>
                </ExpandableChatFooter>
            </ExpandableChat>

            {/* Background hint */}
            <div className="text-center text-gray-400">
                <p>El chat está en la esquina inferior derecha</p>
                <p className="text-sm">(Haz clic en el botón flotante)</p>
            </div>
        </div>
    )
}
