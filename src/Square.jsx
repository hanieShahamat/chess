import React, { useState } from 'react'


export default function Square() {
  const initialBoard = Array.from({ length: 10 }, (_, row) =>
  Array.from({ length: 10 }, (_, col) =>
      (row + col) % 2 === 0 ? 'bg-white' : 'bg-black'
  )
);
const [board] = useState(initialBoard);

  return (
    <div className="flex flex-col w-screen h-screen">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-auto">
                    {row.map((color, colIndex) => (
                        <div key={colIndex} className={`flex-auto ${color}`}></div>
                    ))}
                </div>
            ))}
    </div>

  );
}
