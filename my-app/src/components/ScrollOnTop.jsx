"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollOnTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }} // Properti awal animasi (opacity: 0 dan scale: 0)
          animate={{ opacity: 1, scale: 1 }} // Properti akhir animasi (opacity: 1 dan scale: 1)
          exit={{ opacity: 0, scale: 0 }} // Properti animasi keluar (opacity: 0 dan scale: 0)
          transition={{ duration: 0.3 }} // Durasi animasi (0.3 detik)
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 rounded-full bg-oren px-4 py-2 text-white shadow-lg focus:outline-none"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollOnTop;
