import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-green-100">
      <div className="container mx-auto text-center">
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-5xl font-bold text-gray-800 mb-4"
            variants={item}
          >
            AI Code Builder
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            variants={item}
          >
            Build your code with the power of AI.
          </motion.p>
          <motion.div className="hero-buttons" variants={item}>
            <a
              href="#pricing"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mr-4"
            >
              Pricing
            </a>
            <a
              href="#features"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full"
            >
              Features
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
