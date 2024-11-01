import React, { useState, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  specialRequests: string;
  photos: FileList | null;
  referralSource: string;
  otherReferralExplanation: string;
}

interface BookNowFormProps {
  isOpen: boolean;  
  onClose: () => void;
  onSubmit?: (data: FormData) => void;  
}

const BookNowForm: React.FC<BookNowFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    specialRequests: '',
    photos: null,
    referralSource: '',
    otherReferralExplanation: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Basic validation
      if (!formData.firstName || !formData.lastName || !formData.email) {
        throw new Error('Please fill in all required fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Phone validation
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (formData.phone && !phoneRegex.test(formData.phone)) {
        throw new Error('Please enter a valid phone number');
      }

      // Referral source validation
      if (!formData.referralSource) {
        throw new Error('Please select how you found us');
      }

      // Other referral explanation validation
      if (formData.referralSource === 'other' && !formData.otherReferralExplanation) {
        throw new Error('Please explain how you found us');
      }

      // Photo validation
      if (formData.photos) {
        const validFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const maxFileSize = 5 * 1024 * 1024; // 5MB

        Array.from(formData.photos).forEach(file => {
          if (!validFileTypes.includes(file.type)) {
            throw new Error('Please upload only JPG, JPEG, or PNG files');
          }
          if (file.size > maxFileSize) {
            throw new Error('Each file must be less than 5MB');
          }
        });
      }

      if (onSubmit) {
        await onSubmit(formData);
      }
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        specialRequests: '',
        photos: null,
        referralSource: '',
        otherReferralExplanation: ''
      });
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        photos: e.target.files
      }));
    }
  };

  if (!isOpen) return null;  // Don't render anything if form is not open

  return (
    <div className="oswald fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Rest of the form content remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">How did you find out about us? *</label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
              >
                <option value="">Select an option</option>
                <option value="instagram">Instagram</option>
                <option value="eden-tattoo">Eden Tattoo Page</option>
                <option value="referral">Referral</option>
                <option value="tiktok">TikTok</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Conditional Other Explanation Field */}
          {formData.referralSource === 'other' && (
            <div className="col-span-full">
              <label className="block text-sm font-medium text-gray-700">Please explain how you found us *</label>
              <textarea
                name="otherReferralExplanation"
                value={formData.otherReferralExplanation}
                onChange={handleInputChange}
                required
                rows={2}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
              />
            </div>
          )}

          {/* Special Requests */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
            />
          </div>

          {/* Photo Upload */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">Upload Photos</label>
            <input
              type="file"
              multiple
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c89d7c]"
            />
            <p className="text-sm text-gray-500 mt-1">Upload JPG, JPEG, or PNG files (max 5MB each)</p>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-opacity"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#c89d7c] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-opacity"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;