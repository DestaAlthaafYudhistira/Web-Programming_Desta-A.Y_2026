import { useState } from 'react';

function Counter() {
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => {
    setJumlah(jumlah + 1); // Memperbarui state
  };

  const kurang = () => {
    setJumlah(jumlah - 1);
  };

  return (
    <div className='counter-box'>
      <h2>Hitungan: {jumlah}</h2>
      <button onClick={tambah}>+</button>
      <button onClick={kurang}>-</button>
    </div>
  );
}

export default Counter;
