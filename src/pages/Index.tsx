
import Navigation from "@/components/Navigation";
import { Guitar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Guitar className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="font-title text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pedro Cantalice
          </h1>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
            Cavaquinista e Pesquisador
          </p>
        </div>
      </section>

      {/* Placeholder sections - to be filled with actual content */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Sobre
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-gray-600 mb-4">
              [Biografia será adicionada aqui]
            </p>
          </div>
        </div>
      </section>

      <section id="pesquisa" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Pesquisa
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-gray-600 mb-4">
              [Área de pesquisa será adicionada aqui]
            </p>
          </div>
        </div>
      </section>

      <section id="musica" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Música
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-gray-600 mb-4">
              [Projetos musicais serão adicionados aqui]
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Contato
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-gray-600 mb-4">
              [Informações de contato serão adicionadas aqui]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
