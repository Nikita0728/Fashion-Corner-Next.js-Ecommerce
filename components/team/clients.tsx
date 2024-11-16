'use client'
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const testimonials = [
  {
    quote: "I’m amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care of. This team is really amazing and talented! I will work only with this agency.",
    author: "Donald Trump / CEO of Trump Organization",
  },
  {
    quote: "I have been thoroughly impressed with this team's work ethic and attention to detail. They exceeded my expectations, and I highly recommend them!",
    author: "Jane Smith / Founder of Startup Co.",
  },
  // Add more testimonials as needed
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-8">Happy Clients</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-4">
          {testimonials[currentIndex].quote}
        </p>
        <p className="text-sm text-gray-500">
          {testimonials[currentIndex].author}
        </p>
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-gray-400' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
