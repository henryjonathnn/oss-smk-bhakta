// components/MemberCard.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

const MemberCard = ({ member, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-gray-600">{member.email}</p>
      <div className="mt-4 flex justify-end space-x-2">
        <Link href={`/members/${member.id}`} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Detail
        </Link>
        <Link href={`/members/${member.id}/edit`} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Edit
        </Link>
        <button onClick={() => onDelete(member.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MemberCard;