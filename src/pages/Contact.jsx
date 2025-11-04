import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Contact Us
          </h1>

          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="/about" className="text-gray-600 hover:text-blue-500">About</a>
            <a href="/contact" className="text-blue-600 font-semibold">Contact</a>
          </nav>

          <nav className="flex md:hidden space-x-2 text-sm">
            <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="/about" className="text-gray-600 hover:text-blue-500">About</a>
            <a href="/contact" className="text-blue-600 font-semibold">Contact</a>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <section className="flex-grow py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:w-2/3">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
            Hubungi Kami
          </h2>

          <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
            Kami senang mendengar dari Anda! Isi formulir di bawah ini untuk mengirim pesan.
          </p>

          <form className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Pesan</label>
              <textarea
                rows="4"
                placeholder="Tulis pesan Anda..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
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

export default Contact;