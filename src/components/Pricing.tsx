import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'react-icons/lu'; // Updated import

const pricingTiers = [
  {
    name: 'Free',
    price: 'Rp 0',
    features: [
      '5 Queries per month',
      'Watermark on code',
      'Export Code',
    ],
    buttonText: 'Get Started',
    buttonLink: '#', // Replace with actual signup link
  },
  {
    name: 'Developer',
    price: 'Rp 550k',
    features: [
      '100 Queries per month',
      'No Watermark',
      'Export Code',
      'GitHub Integration',
      'Database Direct Integration',
      'Custom Domain',
      'Consultation with Professional',
    ],
    buttonText: 'Choose Developer',
    buttonLink: '#', // Replace with actual signup link
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Developer',
      'Unlimited Queries',
      'Custom AI Model',
      'Custom Token Allocation',
      'Priority Support',
    ],
    buttonText: 'Contact Us',
    buttonLink: 'https://wa.me/628998937095', // WhatsApp link
  },
];

const Pricing = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Flexible Pricing
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-8 bg-white rounded-lg shadow-xl transform transition-transform hover:scale-105"
              variants={item}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{tier.name}</h3>
              <p className="text-3xl font-semibold text-blue-600 mb-6">{tier.price}</p>
              <ul className="text-left text-gray-700 mb-8 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.buttonLink}
                className={`block w-full text-center py-3 px-6 rounded-full font-bold transition-colors ${
                  tier.name === 'Enterprise'
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {tier.buttonText}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
