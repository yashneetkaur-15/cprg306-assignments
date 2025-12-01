import React from 'react';
import ItemList from './item-list'; // Make sure this path is correct

const Page = () => {
  return (
    <main className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-700 border-b-4 border-indigo-500 pb-2">
        🛒 Shopping List
      </h1>
      <ItemList />
    </main>
  );
};

export default Page;