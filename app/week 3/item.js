import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 m-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 border-l-4 border-amber-500 max-w-sm">
      <div className="text-xl font-bold text-gray-800">{name}</div>
      <div className="text-sm text-gray-600 mt-1">
        Buy <span className="font-semibold text-amber-700">{quantity}</span> in the <span className="capitalize italic text-gray-700">{category}</span> section
      </div>
    </li>
  );
};

export default Item;