import React from 'react';
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Intinya Ini Landing Page
          </h1>

          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-600 hover:text-blue-500 transition">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition">Contact</a>
          </nav>

          <nav className="flex md:hidden space-x-2 text-sm">
            <a href="#home" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-green-400 text-white py-10 sm:py-15">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Selamat Datang di Landing Page!
          </h2>
          <p className="text-lg sm:text-xl">
            Landing Page ini dibuat dengan menggunakan Tailwind CSS
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:w-4/5">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            Tentang Landing Page
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">

            {/* Simple */}
            <div className="text-center hover:scale-105 transition duration-300">
              <div className="bg-blue-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-500 text-4xl">💡</span>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Simple</h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Landing Page ini dibuat secara simpel dengan menggunakan Tailwind CSS
              </p>
            </div>

            {/* Educourse */}
            <div className="text-center hover:scale-105 transition duration-300">
              <div className="bg-green-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-500 text-4xl">🌱</span>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Educourse</h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Dibuat dengan penuh cinta kasih 💚
              </p>
            </div>

            {/* Easy */}
            <div className="text-center hover:scale-105 transition duration-300">
              <div className="bg-purple-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-500 text-4xl">⚙️</span>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Easy</h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Dengan Tailwind CSS, kita dapat membuat tampilan kustom dengan mudah
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-amber-400 text-white">
        <div className="container mx-auto px-4 md:w-2/3 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Hubungi Kami</h3>
          <p className="text-base sm:text-lg mb-8">
            Untuk informasi lebih lanjut mengenai web ini, silakan isi formulir di bawah atau hubungi kami di <strong>@educourse.id</strong>
          </p>

          <form className="bg-white text-gray-700 p-6 sm:p-8 rounded-2xl shadow-lg space-y-6 text-left">
            <div>
              <label className="block font-semibold mb-2">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Pesan</label>
              <textarea
                rows="4"
                placeholder="Tulis pesan Anda..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-4 sm:py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base">
            &copy; 2025 Landing Page. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
