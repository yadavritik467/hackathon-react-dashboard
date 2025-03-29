export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface Deal {
  id: string;
  amount: number;
  company: string;
  user: User;
  timestamp: string;
  win_rate: number;
}

export interface SalesData {
  id: string;
  user: User;
  amount: number;
  deals: number;
  win_rate: number;
  conversion: number;
}

export interface Platform {
  id: string;
  name: string;
  icon: string;
  revenue: number;
  growth: number;
  percentage: number;
}

export interface RevenueData {
  total: number;
  previousPeriod: number;
  percentage: number;
  currency: string;
  timeframe: [string, string];
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}
