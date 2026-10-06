import { useState } from 'react';

function FormObjek() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    kategori: 'Pemasukan'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Menggunakan spread operator (...) agar properti lain tidak hilang
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <form>
        <input
          name='nama'
          value={formData.nama}
          onChange={handleChange}
          placeholder='Nama Transaksi'
        />
        <input
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
      </form>
      {/* Baris di bawah hanya tambahan agar hasil ketikan terlihat */}
      <p>Nama: {formData.nama} | Email: {formData.email} | Kategori: {formData.kategori}</p>
    </div>
  );
}

export default FormObjek;
