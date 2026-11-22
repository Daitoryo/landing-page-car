import { useState, useEffect } from 'react';
import nissanGtr from '../assets/Nissan-GTR.jpg'
import engineGtr from '../assets/GTR-Engine.jpg'
import aeroGtr from '../assets/GTR-Aero.jpg'

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    // useState berfungsi untuk menyimpan, bisa berupa form, gambar dan lainnya. Disini dipakai untuk menyimpan gambar untuk ditampilkan nanti, 
    // (null) artinya tertutup atau nonaktif jika tidak dipencet

    useEffect(() => {
        // Jika modal tidak terbuka, tidak perlu pasang event listener
        if (!selectedImage) return;

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                setSelectedImage(null);
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup function: menghapus listener saat modal ditutup
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage]);

    return (

        <section id="gallery" className="bg-white py-20 px-[5%]">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
                Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                        src={nissanGtr}
                        alt="Nissan GT-R"
                        onClick={() => setSelectedImage(nissanGtr)}
                        className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                        src={engineGtr}
                        alt="GT-R Engine"
                        onClick={() => setSelectedImage(engineGtr)}
                        className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                    <img
                        src={aeroGtr}
                        alt="GT-R Aerodynamic"
                        onClick={() => setSelectedImage(aeroGtr)}
                        className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                </div>
            </div>

            {/* Modal Pop-up hanya dirender jika selectedImage tidak null */}
            
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
                >
                    <img
                        src={selectedImage}
                        alt="Preview Image"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                    />
                </div>
            )}
        </section>

    );

}