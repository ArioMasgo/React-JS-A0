import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    name: "Luis Ario",
    userName: "ariomasgo",
  },
  {
    name: "Midu Angel",
    userName: "midudev",
    isFollowing: true,
  },
  {
    name: "Platzi",
    userName: "platzi",
  },
  {
    name: "Carmen Ansio",
    userName: "carmenansio",
  },
  {
    name: "Leonidas Esteban",
    userName: "LeonidasEsteban",
  },
  {
    name: "Gndx",
    userName: "gndx",
  },
  {
    name: "Udemy",
    userName: "udemy",
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
