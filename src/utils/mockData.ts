import { User, SalesData, Platform, RevenueData } from "../types";

export const users: User[] = [
  { id: "1", name: "Armin A.", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
  { id: "2", name: "Eren Y.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" },
  { id: "3", name: "Mikasa A.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" },
  { id: "4", name: "Levi A.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjinRY0ig5swpwMtoKwsvNq9Q6VuWz7l4FpfK9UB7WmqMdRhLYsPN1gaOow4yuqvJwOA8&usqp=CAU" },
  { id: "5", name: "Hange Z.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" },
  { id: "6", name: "Jean K.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjinRY0ig5swpwMtoKwsvNq9Q6VuWz7l4FpfK9UB7WmqMdRhLYsPN1gaOow4yuqvJwOA8&usqp=CAU" },
  { id: "7", name: "Sasha B.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" },
  { id: "8", name: "Connie S.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjinRY0ig5swpwMtoKwsvNq9Q6VuWz7l4FpfK9UB7WmqMdRhLYsPN1gaOow4yuqvJwOA8&usqp=CAU" },
];

export const revenueData: RevenueData = {
  total: 528976.82,
  previousPeriod: 501641.73,
  percentage: 7.9,
  currency: "$",
  timeframe: ["Jun 1", "Aug 31, 2023"],
};

export const salesData: SalesData[] = [
  {
    id: "1",
    user: users[0],
    amount: 209633,
    deals: 41,
    win_rate: 0.84,
    conversion: 31,
  },
  {
    id: "2",
    user: users[1],
    amount: 117115,
    deals: 22,
    win_rate: 0.79,
    conversion: 32,
  },
  {
    id: "3",
    user: users[2],
    amount: 156841,
    deals: 54,
    win_rate: 0.89,
    conversion: 39,
  },
  {
    id: "4",
    user: users[3],
    amount: 242750,
    deals: 48,
    win_rate: 0.91,
    conversion: 43,
  },
  {
    id: "5",
    user: users[4],
    amount: 134980,
    deals: 36,
    win_rate: 0.76,
    conversion: 29,
  },
  {
    id: "6",
    user: users[5],
    amount: 98675,
    deals: 19,
    win_rate: 0.68,
    conversion: 25,
  },
  {
    id: "7",
    user: users[6],
    amount: 87460,
    deals: 15,
    win_rate: 0.62,
    conversion: 22,
  },
  {
    id: "8",
    user: users[7],
    amount: 124890,
    deals: 27,
    win_rate: 0.72,
    conversion: 34,
  },
];

export const platformData: Platform[] = [
  {
    id: "1",
    name: "Dribbble",
    icon: "dribbble",
    revenue: 227459,
    growth: 43,
    percentage: 28.1,
  },
  {
    id: "2",
    name: "Instagram",
    icon: "instagram",
    revenue: 142823,
    growth: 27,
    percentage: 14.1,
  },
  {
    id: "3",
    name: "Behance",
    icon: "behance",
    revenue: 89935,
    growth: 11,
    percentage: 5.4,
  },
  {
    id: "4",
    name: "Google",
    icon: "google",
    revenue: 37028,
    growth: 7,
    percentage: 14.1,
  },
  {
    id: "5",
    name: "Other",
    icon: "other",
    revenue: 44672,
    growth: 0,
    percentage: 7.1,
  },
];

export const bestDeal = {
  amount: 42300,
  company: "Rolf Inc.",
  user: users[2],
};

export const chartData = {
  labels: [
    "W 1",
    "W 2",
    "W 3",
    "W 4",
    "W 5",
    "W 6",
    "W 7",
    "W 8",
    "W 9",
    "W 10",
    "W 11",
  ],
  datasets: [
    {
      label: "Sales",
      data: [
        30000, 35000, 25000, 45000, 30000, 55000, 40000, 60000, 45000, 35000,
        65000,
      ],
      borderColor: "#F43F5E",
      backgroundColor: "rgba(244, 63, 94, 0.1)",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};
