
import Navigation from "@/components/Navigation";
import { Guitar, Music, BookOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto text-center">
          <Guitar className="w-16 h-16 mx-auto mb-6 text-primary animate-fade-in" />
          <h1 className="font-title text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Pedro Cantalice
          </h1>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in">
            Músico, Cavaquinista e Pesquisador
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="#musica">
                <Music className="mr-2" />
                Música
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#pesquisa">
                <BookOpen className="mr-2" />
                Pesquisa
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Sobre
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-gray-600 mb-6 leading-relaxed">
              Pedro Cantalice é cavaquinista, arranjador, compositor e pesquisador. Iniciou seus estudos em música aos 13 anos e desde então vem desenvolvendo uma reconhecida carreira artística.
            </p>
            <p className="font-body text-gray-600 mb-6 leading-relaxed">
              Mestre em Música pela UFRJ, onde pesquisou as transformações na maneira de se tocar o cavaquinho ao longo do século XX, desenvolveu uma tese defendendo o cavaquinho enquanto instrumento solista.
            </p>
          </div>
        </div>
      </section>

      {/* Pesquisa Section */}
      <section id="pesquisa" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Pesquisa
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-gray-600 mb-6 leading-relaxed">
              Sua pesquisa se concentra no desenvolvimento do cavaquinho como instrumento solista e sua evolução ao longo do século XX. Através de extensa análise histórica e musical, documenta as transformações técnicas e estilísticas do instrumento.
            </p>
          </div>
        </div>
      </section>

      {/* Música Section */}
      <section id="musica" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Música
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-gray-600 mb-6 leading-relaxed">
              Como instrumentista, Pedro tem se apresentado em importantes palcos e festivais, levando o cavaquinho para diferentes contextos musicais. Seu trabalho abrange desde o choro tradicional até composições contemporâneas.
            </p>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Contato
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <Button variant="secondary" asChild className="mx-auto">
              <a href="mailto:contato@pedrocantalice.com.br">
                <Mail className="mr-2" />
                contato@pedrocantalice.com.br
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
