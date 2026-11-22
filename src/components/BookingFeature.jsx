import { useState } from 'react';

export default function BookingCounter() {
  // State angka untuk menyimpan jumlah unit (nilai awal: 1)
  const [unit, setUnit] = useState(0);
  const unitPrice = 2500000000; // Rp 2,5 Miliar

  // Fungsi tambah unit
  function addUnit() {
    setUnit(unit + 1);
  }

  // Fungsi kurang unit (minimal 1 unit)
  function removeUnit() {
    if (unit > 1) {
      setUnit(unit - 1);
    }
  }

  const totalPrice = unit * unitPrice;

  return (
    <section className="bg-slate-100 py-16 px-[5%]">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-sm border-t-4 border-red-600 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">
          Booking Simulation  
        </h2>
        <p className="text-neutral-600 text-sm mb-6">
          Select your desired quantity
        </p>

        {/* Tombol Counter - dan + */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            onClick={removeUnit}
            className="w-10 h-10 bg-neutral-200 hover:bg-neutral-300 text-neutral-900 font-bold rounded-lg text-xl cursor-pointer"
          >
            -
          </button>

          <span className="text-3xl font-extrabold text-neutral-900">
            {unit} Unit
          </span>

          <button
            onClick={addUnit}
            className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xl cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Total Harga Otomatis */}
        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-xs text-neutral-500">Estimated Total Price:</p>
          <p className="text-xl font-bold text-red-600">
            Rp {totalPrice.toLocaleString('id-ID')}
          </p>
        </div>
      </div>
    </section>
  );
}