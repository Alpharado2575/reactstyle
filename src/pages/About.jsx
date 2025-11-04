import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Tentang Kami
          </h1>

          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="/about" className="text-blue-600 font-semibold">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-500">Contact</a>
          </nav>

          <nav className="flex md:hidden space-x-2 text-sm">
            <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="/about" className="text-blue-600 font-semibold">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section className="flex-grow py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:w-3/4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            Siapa Kami?
          </h2>

          <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed mb-8">
            Kami adalah tim kreatif di balik proyek <strong>Educourse</strong>, 
            sebuah platform sederhana yang bertujuan untuk membantu pelajar memahami
            konsep pembuatan website menggunakan <span className="text-blue-500 font-semibold">React</span> 
            dan <span className="text-teal-500 font-semibold">Tailwind CSS</span>.
            Website ini dibuat untuk menunjukkan betapa mudah dan cepatnya membuat
            tampilan modern tanpa harus menulis banyak kode CSS manual.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <span className="text-4xl mb-4 block">💻</span>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Modern Design</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Tampilan yang bersih dan minimalis menggunakan komponen Tailwind CSS.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <span className="text-4xl mb-4 block">⚡</span>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Fast Development</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Dengan React Router, navigasi antar halaman menjadi cepat dan efisien.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <span className="text-4xl mb-4 block">🌍</span>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Accessible Anywhere</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Website ini bisa diakses di berbagai perangkat dengan desain responsif.
              </p>
            </div>
          </div>
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

export default About;
