// src/types/data.ts
export interface Order {
  id: string;
  name: string;
  status: string;
  businessUnit: string;
  details: string;
  date: string;
  path_lower: string;
  link: string;
}

export interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

export interface Chat {
  id: number;
  user: string;
  orderDetails: string;
  messages: Message[];
  unread: boolean;
}
