import { Calendar, Home, PersonStanding } from "lucide-react";

export const sidebarLinks = [
  {
    name: "Accueil",
    path: "/",
    logo: <Home />,
  },
  {
    name: "Groupes",
    path: "/",
    logo: "",
  },
  {
    name: "Amis",
    path: "/",
    logo: <PersonStanding />,
  },
  { name: "Événements", path: "/evenements", logo: <Calendar /> },
];
