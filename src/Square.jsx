import React, { useState } from 'react'


export default function Square() {
  const initialBoard = 1;
  const [size, setsize] = useState(initialBoard)
  const handleclick  = ()=>{
    setsize(prevsize => prevsize + 1)
  }
  const board = Array.from({ length: size }, (_, row) =>
  Array.from({ length: size }, (_, col) =>
      (row + col) % 2 === 0 ? 'bg-white' : 'bg-black'
  ));
  
  
  return (
    <div className="flex flex-col w-screen h-screen" onClick={handleclick}>
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
