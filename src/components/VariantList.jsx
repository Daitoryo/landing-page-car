import { useState, useEffect } from 'react';

export default function variants() {
  const [variants, setVariants] = useState([]);

  // useEffect dijalankan 1 kali saat halaman pertama kali dibuka (array [] kosong)
  useEffect(() => {
    fetch('./public/variants.json')
      .then((res) => res.json())
      .then((data) => {
        setVariants(data);
      });
  }, []);

  return (
    <section className="bg-slate-100 py-16 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-neutral-900 mb-6">
          GT-R Generation
        </h2>

        {/* Tampilkan teks loading saat data sedang diambil */}
       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {variants.map((car) => (
              <div
                key={car.id}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600"
              >
                <span className="text-xs font-bold text-red-600 uppercase">
                  {car.year}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-1 mb-3">
                  {car.code}
                </h3>

                <p className="text-sm text-neutral-600 mt-1">
                  <strong>Power:</strong> {car.power}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
