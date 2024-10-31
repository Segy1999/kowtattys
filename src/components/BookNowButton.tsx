// components/BookNowButton.tsx
import React from 'react';

interface BookNowButtonProps {
  handleOpenBookNow: () => void;
}

const BookNowButton: React.FC<BookNowButtonProps> = ({ handleOpenBookNow }) => {
  return (
    <button
      className="oswald text-2xl bg-[#c89d7c] text-white text-lg px-6 py-3 rounded-lg"
      onClick={handleOpenBookNow}
    >
      Book Now
    </button>
  );
};

export default BookNowButton;