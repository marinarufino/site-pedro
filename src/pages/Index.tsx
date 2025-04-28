import Navigation from "@/components/Navigation";
import { Guitar, Music, BookOpen, Mail, Image } from "lucide-react";
import { Button } from "@/components/ui/button";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
    {/* Hero Section - Widescreen */}
<section className="pt-20 pb-10 px-0 bg-gradient-to-b from-primary/10 to-transparent">
  <div className="w-full max-w-none px-0">
    <div className="flex flex-col items-center gap-6">
      
      {/* Imagem com largura completa */}
      <div className="w-full aspect-[4/3] sm:aspect-[16/4.5] overflow-hidden shadow-2xl bg-gray-100">
  <img 
    src="/fotopedro.jpg" 
    alt="Foto de Pedro Cantalice" 
    className="w-full h-full object-cover object-[center_53%]"
  />
</div>

      {/* Conteúdo centralizado */}
      <div className="text-center space-y-4 px-4 max-w-4xl mx-auto mt-10 sm:mt-0">
        <h1 className="font-title text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 animate-fade-in">
          Pedro Cantalice
        </h1>
        <p className="font-body text-2xl lg:text-3xl text-gray-600 animate-fade-in">
          Cavaquinista e Pesquisador
        </p>
        <div className="flex justify-center gap-6 pt-2">
          <Button variant="outline" size="lg" asChild>
            <a href="#musica" className="text-lg">
              <Music className="mr-2 h-5 w-5" />
              Música
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#pesquisa" className="text-lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Pesquisa
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Sobre Section - Layout expansivo */}
      <section id="sobre" className="py-20">
        <div className="px-4 md:px-16 lg:px-24 max-w-none">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Sobre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-title text-2xl font-semibold mb-4">Trajetória</h3>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                Pedro Cantalice é cavaquinista, arranjador, compositor e pesquisador. Iniciou seus estudos em música aos 13 anos e desde então vem desenvolvendo uma reconhecida carreira artística.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-title text-2xl font-semibold mb-4">Formação</h3>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                Mestre em Música pela UFRJ, onde pesquisou as transformações na maneira de se tocar o cavaquinho ao longo do século XX, desenvolveu uma tese defendendo o cavaquinho enquanto instrumento solista.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-title text-2xl font-semibold mb-4">Atuação</h3>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                Atua como instrumentista em diversos grupos e como solista, além de ministrar workshops e palestras sobre o cavaquinho brasileiro em festivais e instituições de ensino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pesquisa Section - Layout expansivo */}
      <section id="pesquisa" className="py-20 bg-gray-50">
        <div className="px-4 md:px-16 lg:px-24 max-w-none">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-12 text-center">
            Pesquisa
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-4">O Cavaquinho como Instrumento Solista</h3>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                Sua pesquisa se concentra no desenvolvimento do cavaquinho como instrumento solista e sua evolução ao longo do século XX. Através de extensa análise histórica e musical, documenta as transformações técnicas e estilísticas do instrumento.
              </p>
              <p className="font-body text-gray-600 mb-6 leading-relaxed">
                O trabalho investiga as contribuições de importantes cavaquinistas brasileiros e como eles influenciaram novas gerações de instrumentistas.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="aspect-video w-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Vídeo ou imagem sobre a pesquisa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Música Section - Layout expansivo */}
      <section id="musica" className="py-20">
        <div className="px-4 md:px-16 lg:px-24 max-w-none">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Música
          </h2>
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-gray-600 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
              Como instrumentista, Pedro tem se apresentado em importantes palcos e festivais, levando o cavaquinho para diferentes contextos musicais. Seu trabalho abrange desde o choro tradicional até composições contemporâneas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Music Preview Cards */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-100">
                  {/* Album Cover Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Capa do Álbum 1
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-title text-xl font-semibold mb-2">Título da Música 1</h3>
                  <audio className="w-full" controls>
                    <source src="#" type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-100">
                  {/* Album Cover Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Capa do Álbum 2
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-title text-xl font-semibold mb-2">Título da Música 2</h3>
                  <audio className="w-full" controls>
                    <source src="#" type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-100">
                  {/* Album Cover Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Capa do Álbum 3
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-title text-xl font-semibold mb-2">Título da Música 3</h3>
                  <audio className="w-full" controls>
                    <source src="#" type="audio/mpeg" />
                    Seu navegador não suporta o elemento de áudio.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Section - Layout expansivo */}
      <section id="eventos" className="py-20 bg-gray-50">
        <div className="px-4 md:px-16 lg:px-24 max-w-none">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Eventos
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-primary">Próximo evento</p>
                <h3 className="text-2xl font-semibold mb-2">Recital de Cavaquinho</h3>
                <p className="text-gray-600 mb-4">Centro Cultural, Rio de Janeiro</p>
                <p className="text-gray-500">15 de Maio de 2025, 19h</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-primary">Workshop</p>
                <h3 className="text-2xl font-semibold mb-2">O Cavaquinho Solista</h3>
                <p className="text-gray-600 mb-4">Conservatório de Música, São Paulo</p>
                <p className="text-gray-500">20 de Junho de 2025, 14h</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-primary">Festival</p>
                <h3 className="text-2xl font-semibold mb-2">Festival de Choro</h3>
                <p className="text-gray-600 mb-4">Teatro Municipal, Belo Horizonte</p>
                <p className="text-gray-500">10 de Julho de 2025, 20h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fotos Section - Layout expansivo */}
      <section id="fotos" className="py-20">
        <div className="px-4 md:px-16 lg:px-24 max-w-none">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Fotos
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="col-span-2 row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                  alt="Preview 1"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="Preview 2"
                  className="w-full aspect-square object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Preview 3"
                  className="w-full aspect-square object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Preview 4"
                  className="w-full aspect-square object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Preview 5"
                  className="w-full aspect-square object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="text-center">
              <Button asChild size="lg">
                <a href="/fotos">
                  <Image className="mr-2" />
                  Ver todas as fotos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section - Layout expansivo */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="px-4 md:px-16 lg:px-24 max-w-none">
          <h2 className="font-title text-4xl font-bold text-gray-900 mb-8 text-center">
            Contato
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Entre em Contato</h3>
                <p className="text-gray-600 mb-6">
                  Para contratações, workshops, projetos ou qualquer outra informação, entre em contato através do email ou redes sociais.
                </p>
                <Button variant="secondary" asChild className="w-full">
                  <a href="mailto:contato@pedrocantalice.com.br">
                    <Mail className="mr-2" />
                    contato@pedrocantalice.com.br
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Redes Sociais</h3>
                <p className="text-gray-600 mb-6">
                  Acompanhe as novidades, apresentações e lançamentos através das redes sociais.
                </p>
                <div className="flex justify-center gap-6">
                  <Button variant="outline" size="lg" asChild>
                    <a href="#" className="text-lg">
                      Instagram
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#" className="text-lg">
                      YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;