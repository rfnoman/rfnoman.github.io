'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    setStatus({
      type: 'success',
      message: 'Thank you for your message! I will get back to you soon.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      {status.type && (
        <div
          className={`p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-500/10 text-green-500'
              : 'bg-red-500/10 text-red-500'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
          placeholder:text-gray-500"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
          placeholder:text-gray-500"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
          placeholder:text-gray-500"
          placeholder="What is this about?"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
          placeholder:text-gray-500 resize-none"
          placeholder="Your message here..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-600 to-purple-600 
        rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02]
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Send Message
      </button>
    </form>
  );
}
