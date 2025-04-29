
import { Gallery, Image } from "lucide-react";
import Navigation from "@/components/Navigation";

const Photos = () => {
  const photos = [
    {
      id: 1,
      src: "/images/pedro2.jpeg",
      alt: "Pedro Cantalice performance 1",
      description: "Apresentação no Teatro Municipal"
    },
    {
      id: 2,
      src: "/images/pedro3.jpeg",
      alt: "Pedro Cantalice performance 2",
      description: "Festival de Choro"
    },
    {
      id: 3,
      src: "/images/pedro4.jpeg",
      alt: "Pedro Cantalice performance 3",
      description: "Concerto na Sala Cecília Meireles"
    }
    ,
    {
      id: 4,
      src: "/images/pedro1.jpeg",
      alt: "Pedro Cantalice e amigo",
      description: "pedro e amigo no bar"
    }
    ,
    {
      id: 5,
      src: "/images/pedro5.jpg",
      alt: "Pedro Cantalice e amigo",
      description: "grupo alma carioca"
    }
    ,
    {
      id: 6,
      src: "/images/pedro6.jpeg",
      alt: "Pedro Cantalice e amigo",
      description: "grupo alma carioca"
    }
    ,
    {
      id: 7,
      src: "/images/pedro7.jpeg",
      alt: "Pedro Cantalice e amigo",
      description: "grupo alma carioca"
    }
    ,
    {
      id: 8,
      src: "/images/pedro8.jpeg",
      alt: "Pedro Cantalice e amigo",
      description: "grupo alma carioca"
    }
  ];

  return (
    <div className="min-h-screen bg-background ">
      {/* Adicionando o componente Navigation aqui */}
      <Navigation />
      
      {/* Conteúdo principal com padding-top para compensar a barra de navegação fixa */}
      <main className="pt-24 md:pt-28">
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
      </main>
    </div>
  );
};

export default Photos;
