import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('contact.subtitle')}
            </p>

            <div className="mt-8">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-gray-900" />
                <span className="ml-4 text-gray-600">vs_eztech@gmail.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? (
                <span className="flex items-center">
                  {t('contact.form.sending')}...
                </span>
              ) : (
                <span className="flex items-center">
                  {t('contact.form.submit')} <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </button>

            {status === 'success' && (
              <div className="text-green-600 text-center">
                {t('contact.form.success')}
              </div>
            )}
            {status === 'error' && (
              <div className="text-red-600 text-center">
                {t('contact.form.error')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
