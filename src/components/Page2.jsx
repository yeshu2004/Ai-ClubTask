import { useTransform, motion } from "framer-motion";
import React from "react";
import Info from "./Info";
import Card from "./Card";

const events = [
  {
    index: 1,
    title: "AI Introductory Workshop",
    description:
      "Kickstart your journey with AI basics! Learn the foundational concepts of artificial intelligence and get hands-on experience with beginner-friendly projects.",
    date: "November 5, 2024",
    img: "https://images.unsplash.com/photo-1677691824304-279660ceece3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    index: 2,
    title: "AI Hackathon 2024 Contest",
    description:
      "Join us for a 24-hour AI hackathon! Team up, ideate, and build innovative AI solutions for real-world challenges. Prizes and mentorship available.",
    date: "November 18-19, 2024",
    img: "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    index: 3,
    title: "Machine Learning Bootcamp",
    description:
      "An intensive bootcamp focused on machine learning algorithms, model training, and data processing. Perfect for those who want to level up their AI skills.",
    date: "December 2-6, 2024",
    img: "https://images.unsplash.com/photo-1569682535081-3e826bee049b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
  },
  {
    index: 4,
    title: "AI in Healthcare Seminar",
    description:
      "Discover how AI is transforming the healthcare industry. This seminar features guest speakers from leading health-tech companies and hands-on demos.",
    date: "December 12, 2024",
    location: "Health Sciences Building, Room 203",
    img: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const Page2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.div
      style={{ scale, rotate }}
      className="bg-zinc-900 min-h-screen w-full relative"
    >
      <Info />
      <div className="flex flex-shrink-0 w-full h-screen overflow-hidden">
        {events.map((event,i) => {
          return (
            <div key={i}>
              <Card index={event.index} event={event} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Page2;
