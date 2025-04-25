
import { Gallery, Image } from "lucide-react";

const Photos = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "Pedro Cantalice performance 1",
      description: "Apresentação no Teatro Municipal"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Pedro Cantalice performance 2",
      description: "Festival de Choro"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Pedro Cantalice performance 3",
      description: "Concerto na Sala Cecília Meireles"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="container mx-auto px-4">
        <h1 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
          Galeria de Fotos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center px-4">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
