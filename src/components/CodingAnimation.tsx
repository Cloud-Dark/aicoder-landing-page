import React from 'react';
import { motion } from 'framer-motion';

const CodingAnimation = () => {
  // Simple placeholder animation
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          See AI in Action
        </motion.h2>
        <motion.div
          className="w-full max-w-2xl mx-auto bg-gray-800 rounded-lg p-6 font-mono text-left text-green-400 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.pre
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 5, ease: 'linear' }}
            style={{ overflow: 'hidden', whiteSpace: 'pre-wrap' }}
          >
            {`// AI generating code...
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hello, AI World!</h1>
      <p>Code generated with intelligence.</p>
    </motion.div>
  );
};

export default AnimatedComponent;
`}
          </motion.pre>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingAnimation;
