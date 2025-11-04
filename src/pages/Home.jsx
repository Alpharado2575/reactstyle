import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Intinya Ini Landing Page
          </h1>

          {/* Navbar Desktop */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-500">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
          </nav>

          {/* Navbar Mobile */}
          <nav className="flex md:hidden space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-500">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Spasi supaya konten tidak tertutup header */}
      <div className="pt-20">
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
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-500 text-3xl">💡</span>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Simple</h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Landing Page ini dibuat secara simpel dengan menggunakan Tailwind CSS.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-500 text-3xl">🌱</span>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Educourse</h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Dibuat dengan penuh cinta kasih 💚
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-500 text-3xl">⚙️</span>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Easy</h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Dengan Tailwind CSS, kita dapat membuat tampilan kustom dengan mudah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 sm:py-12 bg-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Hubungi Kami</h3>
            <p className="text-base sm:text-xl">
              Untuk informasi lebih lanjut mengenai web ini, silakan hubungi kami lewat Instagram:{" "}
              <strong>@educourse.id</strong>
            </p>
          </div>
        </section>

        <footer className="bg-amber-900 text-white py-4 sm:py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base">
            &copy; 2025 Landing Page. All rights reserved.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default Home;
