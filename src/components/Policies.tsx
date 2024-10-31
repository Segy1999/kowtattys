// components/Policies.tsx
import React, { FC, useState } from 'react';

interface Policy {
  id: number;
  title: string;
  description: string;
}

const Policies: FC = () => {
  // Example policies - replace with your actual policies
  const [policies] = useState<Policy[]>([
    {
      id: 1,
      title: "Booking Policy",
      description: "Details about booking requirements and process."
    },
    {
      id: 2,
      title: "Deposit Policy",
      description: "Information about deposits and payment terms."
    },
    {
      id: 3,
      title: "Cancellation Policy",
      description: "Rules regarding cancellations and rescheduling."
    },
    {
      id: 4,
      title: "Health & Safety",
      description: "Health and safety requirements for tattoo sessions."
    }
  ]);

  return (
    <div id="policies" className=" oswald text-2xl section max-w-4xl mx-auto my-20 bg-[#c89d7c] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Policies</h2>
      <ul className="space-y-2">
        {policies.map((policy) => (
          <li 
            key={policy.id}
            className="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
          >
            <h3 className="font-bold mb-2">{policy.title}</h3>
            <p className="text-sm opacity-90">{policy.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Policies;
