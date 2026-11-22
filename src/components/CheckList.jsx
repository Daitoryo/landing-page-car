import { useState } from 'react';

export default function Checklist() {
  // State untuk menyimpan teks yang sedang diketik di input
  const [Text, setText] = useState('');
  // State array untuk menyimpan daftar checklist modifikasi
  const [items, setItems] = useState([]);

  // Fungsi menambah item baru ke array
  function addItem(e) {
    e.preventDefault(); // Mencegah halaman refresh saat form disubmit
    if (Text === '') return;

    setItems([...items, Text]);
    setText(''); // Kosongkan kotak input kembali
  }

  function deleteItem(indexToDelete) {
    const newItems = items.filter((_, index) => index !== indexToDelete);
    setItems(newItems);
  }

  return (
    <section className="bg-white py-16 px-[5%]">
      <div className="max-w-xl mx-auto bg-slate-50 p-8 rounded-lg shadow-sm border-t-4 border-red-600">
        <h2 className="text-2xl font-bold text-neutral-900 text-center mb-2">
          Inspection Checklist
        </h2>
        <p className="text-neutral-600 text-sm text-center mb-6">
          Components needs to be installed or inspected
        </p>

        {/* Form Input */}
        <form onSubmit={addItem} className="flex gap-2 mb-6">
          <input
            type="text"
            value={Text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Example: Ecu Reflash"
            className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer"
          >
            Add
          </button>
        </form>

        {/* Daftar Item */}
        <ul className="space-y-3">
          {items.map((item,index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow-xs border border-neutral-200"
            >
              <span className="text-neutral-800"
              >{item}

              </span>

              <button
                onClick={() => deleteItem(index)}
                className="text-xs bg-neutral-200 hover:bg-red-600 hover:text-white text-neutral-700 px-3 py-1 rounded transition-colors cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
