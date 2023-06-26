export interface cardProps {
  className?: string;
  title: string;
  value: string;
  type: "revenue" | "transaction" | "likes" | "users";
}

export interface navProps {
  logo: string;
  value: string;
}

export interface graphProps {
  className?: string;
  metrics: Array<any>;
  tenure: string;
  customers: Array<string>;
}

export interface connectProps {
  logo: "google" | "apple";
}

export interface productProps {
  name: string;
  value: number;
}

export interface inputProps {
  type: "email" | "password";
}

export interface scheduleProps {
  task: string;
  time: string;
  location: string;
  item?: number;
}
