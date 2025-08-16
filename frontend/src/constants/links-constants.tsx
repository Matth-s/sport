import { Calendar, Home, MessageSquare, UsersRound } from "lucide-react";

export const sidebarLinks = [
  {
    name: "Accueil",
    path: "/",
    logo: <Home />,
  },
  {
    name: "Groupes",
    path: "/groupes",
    logo: <UsersRound />,
  },
  { name: "Événements", path: "/evenements", logo: <Calendar /> },
  { name: "Amis", path: "/amis", logo: <UsersRound /> },
  { name: "Messages", path: "/messages", logo: <MessageSquare /> },
];
