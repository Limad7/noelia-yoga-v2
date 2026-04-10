import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import salonImg from '../assets/yogasalon.jpg'
import instructionImg from '../assets/yoga-instruction.png'
import meditandoImg from '../assets/YogaMeditando.jpg'
import retirosImg from '../assets/retiros-talleres.jpg'

const images = [
  { src: salonImg, alt: 'Espacio de yoga', caption: 'Nuestro espacio' },
  { src: instructionImg, alt: 'Clase de yoga', caption: 'Clases personalizadas' },
  { src: meditandoImg, alt: 'Meditación', caption: 'Meditación y mindfulness' },
  { src: retirosImg, alt: 'Retiro de yoga', caption: 'Retiros y talleres' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const openLightbox = (idx) => setSelected(idx)
  const closeLightbox = () => setSelected(null)
  const prev = () => setSelected((s) => (s > 0 ? s - 1 : images.length - 1))
  const next = () => setSelected((s) => (s < images.length - 1 ? s + 1 : 0))

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-sage-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-700 text-sm font-medium rounded-full mb-4">
            Galería
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-sage-800">
            Momentos de{' '}
            <span className="gradient-text">conexión</span>
          </h2>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => openLightbox(idx)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
                idx === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  idx === 0 ? 'h-full min-h-[300px]' : 'h-48 sm:h-56'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm">{img.caption}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selected !== null && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 text-white/70 hover:text-white p-2 z-10"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 text-white/70 hover:text-white p-2 z-10"
            >
              <ChevronRight size={40} />
            </button>
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}
