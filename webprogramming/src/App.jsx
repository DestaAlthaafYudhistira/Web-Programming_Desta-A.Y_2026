// Hapus { Component } karena tidak digunakan
import React from 'react'; 
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavbarUtama from './components/Navbar';
import Card from './components/Card';
import KartuProfil from './components/KartuProfil';
import KartuProfilClass from './components/KartuProfilClass';
import Counter from './components/Counter';
import UserProfileClass from './components/UserProfilClass';
import CounterClass from './components/CounterClass';
import FormTerpisah from './components/FormTerpisah';
import FormObjek from './components/FormObjek';
import { PrimaryButton, DangerButton, ButtonSimpan, ButtonEdit, ButtonHapus } from './components/Button';


function Profil() {
  const nama = "Desta Althaaf Yudhistira";
  const umur = 19;

  return(
    <div>
      <p>Nama: {nama}</p>
      <p>Tahun Depan Umur: {umur + 1} tahun</p>
    </div>
  );
}

function formatNama(user) {
  return user.namaDepan + ' ' + user.namaBelakang;
}

const user = { namaDepan: 'Desta', namaBelakang: 'Yudhistira' };
function Sapaan() {
  return <h2>Selamat Datang, {formatNama(user)}!</h2>;
}

function StatusLogin() {
  const isLogin = true;

  return (
    <div>
      {isLogin ? <p>Selamat Datang Kembali!</p> : <p>Silakan Login Terlebih Dahulu</p>}
    </div>
  );
}

function ContohAturan() {
  return (
    <>
      <h3 className='judul'>Contoh Aturan JSX</h3>
      <label htmlFor='nama'>Nama: </label>
      <input id='nama' type='text' />
      <br />
      <label htmlFor='email'>Email: </label>
      <input id='email' type='text' />
      <p style={{ color: 'red', fontSize: '12px' }}>Teks merah ukuran 12px</p>
      <button onClick={() => alert('Tombol diklik!')}>Klik Saya</button>
    </>
  );
}

function TombolAksi({ label, onClickHandler }) {
  return (
    <button onClick={onClickHandler} className='btn'>
      {label}
    </button>
  );
}

function TampilanStatus({ status, angka }) {
  return <p>Status: {status} | Total: {angka}</p>;
}

function PengelolaAplikasi() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);

  return (
    <div>
      <TampilanStatus status={count > 0 ? 'Aktif' : 'Idle'} angka={count} />
      <TombolAksi label='Tambah Angka' onClickHandler={handleIncrement} />
      <TombolAksi label='Reset' onClickHandler={handleReset} />
    </div>
  );
}




// Komponen Utama
function App() {
  return (
    <div>
      <div className='container'>
        <h3>Navbar</h3>
        <NavbarUtama />
        <h3>Header</h3>
        <Header />
        <h3>Sapaan</h3>
        <Sapaan />
        <h3>Status Login</h3>
        <StatusLogin />
        <ContohAturan />
        <main>
          <p>Selamat datang di dashboard pengelolaan keuangan!</p>
        </main>
        <h3>Kartu Profil dan KartuProfilClass</h3>
        <KartuProfil nama="Desta Althaaf Yudhistira" pekerjaan="Mahasiswa" />
        <KartuProfilClass nama="HuTao" pekerjaan="My Kisah" />
        <h3>Contoh Button</h3>
        <PrimaryButton />
        <DangerButton />
        <h3>Contoh Counter</h3>
        <Counter />
        <h3>Pengelola Aplikasi</h3>
        <PengelolaAplikasi />
        <h3>UserProfileClass</h3>
        <UserProfileClass />
        <h3>CounterClass</h3>
        <CounterClass />
        <h3>Card</h3>
        <Card />
        <h3>Profil</h3>
        <Profil />
        <h3>Formulir Terpisah dan Objek</h3>
        <FormTerpisah />
        <FormObjek />
        <h3>Contoh Button Lainnya</h3>
        <ButtonSimpan />
        <ButtonEdit />
        <ButtonHapus />
        <h3>Footer</h3>
        <Footer />
      </div>
    </div>
  );

}


export default App;