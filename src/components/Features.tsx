import React from 'react';
import { motion } from 'framer-motion';
import { LuCode, LuDatabase, LuGithub, LuGlobe, LuMessageCircle, LuShieldCheck } from 'react-icons/lu'; // Updated import

const features = [
  {
    icon: <LuCode className="w-8 h-8 text-blue-600" />,
    title: 'Export Code',
    description: 'Easily export the generated code in various formats.',
  },
  {
    icon: <LuShieldCheck className="w-8 h-8 text-green-600" />,
    title: 'No Watermark',
    description: 'Developer and Enterprise plans come with no watermarks.',
  },
  {
    icon: <LuGithub className="w-8 h-8 text-gray-800" />,
    title: 'GitHub Integration',
    description: 'Seamlessly integrate with your GitHub repositories (Developer+).',
  },
  {
    icon: <LuDatabase className="w-8 h-8 text-purple-600" />,
    title: 'Database Integration',
    description: 'Direct database integration for faster development (Developer+).',
  },
  {
    icon: <LuGlobe className="w-8 h-8 text-teal-600" />,
    title: 'Custom Domain',
    description: 'Use your own custom domain for your projects (Developer+).',
  },
  {
    icon: <LuMessageCircle className="w-8 h-8 text-yellow-600" />,
    title: 'Professional Consultation',
    description: 'Get expert consultation for your projects (Developer+).',
  },
];

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Powerful Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md"
              variants={item}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
