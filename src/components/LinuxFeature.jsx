'use client';

import { useRef } from 'react';

export default function LinuxFeature({
  title,
  description,
  icon,
  index = 0
}) {
  return (
    <div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {icon && (
        <div className="text-3xl text-blue-600 dark:text-blue-400 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
