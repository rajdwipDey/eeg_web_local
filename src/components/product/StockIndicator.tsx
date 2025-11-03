import React from 'react';

export default function StockIndicator({ stockLevel, stockCount }) {
  const stockConfig = {
    high: { color: 'green', text: 'In Stock' },
    low: { color: 'orange', text: stockCount ? `${stockCount} Left` : 'Low Stock' },
    out: { color: 'red', text: 'Out of Stock' }
  };
  
  const { color, text } = stockConfig[stockLevel] || stockConfig.high;
  
  return (
    <div className="flex items-center">
      <div className={`w-2 h-2 bg-${color}-500 rounded-full mr-2`}></div>
      <span className={`text-xs text-${color}-600 dark:text-${color}-400 font-medium`}>
        {text}
      </span>
    </div>
  );
}