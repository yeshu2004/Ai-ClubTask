import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Card = ({ index, event }) => {
  const card = useRef(null);
  const { scrollYProgress } = useScroll({
    target: card,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [index * 200, 1]);
  return (
    <motion.div
      ref={card}
      style={{ y, backgroundImage: `url(${event.img})`, backgroundPosition: "center",backgroundSize: "cover"}}
      className="h-full w-[25vw] text-white cursor-pointer"
    >
        <div className="h-full w-full bg-black bg-opacity-70 hover:bg-opacity-50 transition ease-linear pt-10 px-4">
            <div className="flex flex-col gap-10">
                <h2 className="text-[8vw] font-[Humane] leading-none ">
                {event.title}
                </h2>
                <div className="flex flex-col gap-1 font-[Neue] tracking-tight">
                <p className="mt-2 text-lg leading-[1.1]">{event.description}</p>
                <p className="mt-4 text-xl font-semibold">{event.date}</p>
                </div>
            </div>
        </div>

    </motion.div>
  );
};

export default Card;
