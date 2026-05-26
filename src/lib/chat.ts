export interface ChatMessage { id: string; from: "me" | "them"; text: string; ts: number; }

const key = (id: string) => `ml_chat_${id}`;

export const loadThread = (lawyerId: string): ChatMessage[] => {
  try { return JSON.parse(localStorage.getItem(key(lawyerId)) || "[]"); } catch { return []; }
};

export const saveThread = (lawyerId: string, msgs: ChatMessage[]) => {
  localStorage.setItem(key(lawyerId), JSON.stringify(msgs));
};

const replies = [
  "Thanks for reaching out — I'll review and reply shortly.",
  "Could you share your passport bio page and current visa status?",
  "I'm available Tue/Thu afternoons. Would you like to book a 45-min consult?",
  "Noted. I'll send a tailored eligibility note in a moment.",
  "Happy to help. Let's confirm your preferred consultation mode.",
];
export const autoReply = () => replies[Math.floor(Math.random() * replies.length)];