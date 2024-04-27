import React, { useEffect, useState } from "react";
import Image from "next/image";
import { listGame } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";

const ListTournaments = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 922);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mx-auto overflow-hidden lg:max-w-screen-xl">
      <AnimatePresence>
        {!isMobile ? (
          <motion.ul
            initial={{ x: 1500 }}
            animate={{ x: -1700 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
            className="mx-auto flex justify-center gap-5 lg:max-w-screen-xl"
          >
            {listGame.map((game) => (
              <li key={game.id} className="flex flex-col items-center">
                <Image
                  src={game.image}
                  alt={game.name}
                  width={200}
                  height={200}
                  className="w-full shadow-[0px_4px_4px_rgba(0,0,0,0.5)] hover:scale-105"
                />
                <h5 className="text-3xl font-semibold">{game.name}</h5>
              </li>
            ))}
          </motion.ul>
        ) : (
          <ul className="mx-auto flex flex-wrap justify-center gap-3 lg:max-w-screen-xl">
            {listGame.map((game) => (
              <li key={game.id} className="flex flex-col items-center">
                <Image
                  src={game.image}
                  alt={game.name}
                  width={200}
                  height={200}
                  className="w-full shadow-[0px_4px_4px_rgba(0,0,0,0.5)] hover:scale-105"
                />
                <h5 className="text-3xl font-semibold">{game.name}</h5>
              </li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ListTournaments;
