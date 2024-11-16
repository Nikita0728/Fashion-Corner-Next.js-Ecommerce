import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-wrap justify-between gap-8 p-8">
      <div className="flex-1 min-w-[300px] p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className="mb-4">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
        <div className="space-y-2">
          <p><i className="fas fa-map-marker-alt mr-2"></i> 545 Mavis Island, Chicago, IL 99191</p>
          <p><i className="fas fa-phone mr-2"></i> +1 (555) 234-5678</p>
          <p><i className="fas fa-envelope mr-2"></i> hello@example.com</p>
        </div>
      </div>
      <div className="flex-2 min-w-[300px] p-6 bg-white rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">First name</label>
              <input type="text" placeholder="First name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Last name</label>
              <input type="text" placeholder="Last name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone number</label>
            <input type="tel" placeholder="Phone number" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded resize-vertical"></textarea>
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
