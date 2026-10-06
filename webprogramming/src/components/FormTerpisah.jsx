import { useState } from 'react';
function FormTerpisah() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [umur, setUmur] = useState(0);

  return (
    <div>
      <form>
        <input type='text' value={nama} onChange={(e) => setNama(e.target.value)} />
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='number' value={umur} onChange={(e) => setUmur(Number(e.target.value))} />
      </form>
      {/* Baris di bawah hanya tambahan agar hasil ketikan terlihat */}
      <p>Nama: {nama} | Email: {email} | Umur: {umur}</p>
    </div>
  );
}

export default FormTerpisah;
