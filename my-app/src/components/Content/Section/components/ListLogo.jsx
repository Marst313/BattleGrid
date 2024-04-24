import React from "react";
import Image from "next/image";
import { listLogoGame } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";

const ListLogo = () => {
  return (
    <div className="mx-auto overflow-hidden lg:max-w-screen-xl">
      <AnimatePresence>
        <motion.ul
          // initial={{ x: -1800, opacity: 1 }}
          // animate={{ x: 1500, opacity: 1 }}
          className="mx-auto flex w-full  flex-wrap justify-between  gap-3 lg:max-w-screen-xl "
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        >
          {listLogoGame.map((game) => {
            return (
              <li key={game.id} className="flex flex-col items-center gap-3">
                <Image
                  src={game.image}
                  alt={game.name}
                  className="hover:scale-110"
                />
              </li>
            );
          })}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default ListLogo;
