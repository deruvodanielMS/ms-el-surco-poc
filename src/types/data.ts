export interface Order {
  id: number;
  status: string;
  details: string;
  date: string;
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
