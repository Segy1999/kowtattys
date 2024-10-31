// components/ContactForm.tsx
import React, { FC, useState, FormEvent } from 'react';

interface ContactFormData {
  contact: string;
  message: string;
}

interface ValidationErrors {
  contact?: string;
  message?: string;
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    contact: '',
    message: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    // Validate contact (email or phone)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    
    if (!formData.contact) {
      newErrors.contact = 'Contact information is required';
    } else if (!emailRegex.test(formData.contact) && !phoneRegex.test(formData.contact)) {
      newErrors.contact = 'Please enter a valid email or phone number';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      // Reset form on success
      setFormData({ contact: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-us" className=" oswald section max-w-lg mx-auto my-20 bg-[#c89d7c] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Contact Us</h2>
      <p className="mb-4">For any requests outside of a regular booking, leave a detailed message below.</p>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-500 text-white rounded-md">
          Thank you for your message. We'll get back to you soon!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-500 text-white rounded-md">
          There was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-600 mb-2">
            Phone number or Email:
          </label>
          <input
            type="text"
            id="contact"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className={`w-full p-2 border rounded-md ${
              errors.contact ? 'border-red-500' : 'border-gray-300'
            }`}
            disabled={isSubmitting}
          />
          {errors.contact && (
            <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 mb-2">
            Message:
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full p-2 border rounded-md ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            rows={4}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-green-500 text-white px-4 py-2 rounded-md ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;