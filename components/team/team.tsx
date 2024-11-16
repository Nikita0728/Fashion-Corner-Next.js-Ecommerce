import React from 'react';
import 'tailwindcss/tailwind.css'; // Make sure Tailwind CSS is imported

const teamMembers = [
  {
    name: 'Ganesh',
    position: 'CEO of Company',
    image: 'path_to_image_1.jpg', // Replace with your image path
    socialLinks: [
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fab fa-facebook-f', link: '#' },
      { icon: 'fab fa-google-plus-g', link: '#' },
      { icon: 'fab fa-linkedin-in', link: '#' },
    ],
  },
  {
    name: 'Ram',
    position: 'Co-founder',
    image: 'path_to_image_2.jpg',
    socialLinks: [
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fab fa-facebook-f', link: '#' },
      { icon: 'fab fa-google-plus-g', link: '#' },
      { icon: 'fab fa-linkedin-in', link: '#' },
    ],
  },
  {
    name: 'Monica',
    position: 'Marketing Officer',
    image: 'path_to_image_3.jpg',
    socialLinks: [
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fab fa-facebook-f', link: '#' },
      { icon: 'fab fa-google-plus-g', link: '#' },
      { icon: 'fab fa-linkedin-in', link: '#' },
    ],
  },
  {
    name: 'Hari',
    position: 'Photographer',
    image: 'path_to_image_4.jpg',
    socialLinks: [
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fab fa-facebook-f', link: '#' },
      { icon: 'fab fa-google-plus-g', link: '#' },
      { icon: 'fab fa-linkedin-in', link: '#' },
    ],
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 text-center bg-gray-100">
      <h3 className="text-lg text-gray-600">Who We Are</h3>
      <h2 className="text-4xl font-semibold mb-10">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 w-60"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-bold">{member.name}</h4>
            <p className="text-sm text-gray-500 mb-4">{member.position}</p>
            <div className="flex justify-center space-x-4">
              {member.socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
