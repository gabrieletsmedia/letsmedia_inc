import React, { useEffect, useRef } from 'react';

const clients = [
  {
    name: "Client 1",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/1.png"
  },
  {
    name: "Client 2",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/2.png"
  },
  {
    name: "Client 3", 
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/3.png"
  },
  {
    name: "Client 4",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/4.png"
  },
  {
    name: "Client 5",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/5.png"
  },
  {
    name: "Client 6",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/6.png"
  },
  {
    name: "Client 7",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/7.png"
  },
  {
    name: "Client 8",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/8.png"
  },
  {
    name: "Client 9",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/9.png"
  },
  {
    name: "Client 10",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/10.png"
  },
  {
    name: "Client 11",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/11.png"
  },
  {
    name: "Client 12",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/12.png"
  },
  {
    name: "Client 13",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/13.png"
  },
  {
    name: "Client 14",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/14.png"
  },
  {
    name: "Client 15",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/15.png"
  },
  {
    name: "Client 16",
    logo: "https://letsmediahub.com.br/wp-content/uploads/2024/11/16.png"
  }
];

const testimonials = [
  {
    quote: "A Let's Media desempenha um papel crucial no setor. Para o Iniciador, nossa parceria nos permitiu não só ampliar nossa visibilidade, **mas também fortalecer a credibilidade junto à comunidade de especialistas**. Com canais de distribuição estratégicos, conteúdo ultra especializado e uma linguagem próxima do público, a Let's Media conecta-nos a um público altamente qualificado e favorece o seu engajamento.",
    author: "Gustavo Bresler",
    role: "Chief Operating Officer",
    company: "Iniciador",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQGU8T72u1q-SA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1631128711977?e=1737590400&v=beta&t=3oQ2A8qHBjB-N366glcbGKwdlHCnfJI7kDYf3z36yFQ"
  },
  {
    quote: "A Let's Media tem sido um parcerial essencial para a klavi. Tínhamos um problema para encontrar copywriters ou agências que pudessem criar conteúdo com propriedade e profundidade para o mercado financeiro. **Com a Let's Media conseguimos alavancar nossas publicações e trazer temas relevantes para nossa audiência, tornando a klavi referência em soluções para os assuntos**.",
    author: "Bruno Moura",
    role: "Business and Marketing Director",
    company: "klavi",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQG0EXdBrfAxPQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1641992428630?e=1737590400&v=beta&t=Pa5-rT_qMQbfoK2I71bf1S4t_QsQMfKpuGliVnOKFL8"
  }
];

const OurClients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const step = 1;
    
    const scroll = () => {
      scrollAmount += step;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#231F20] mb-6">
            Clientes que Fazem Parte da Nossa História
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nos orgulhamos em sermos parceiros das principais instituições da indústria financeira do Brasil, entregando conteúdo de qualidade que transforma audiência em negócios
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative mb-24 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden whitespace-nowrap py-8"
          >
            {/* Double the logos for infinite scroll effect */}
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className="flex-none w-[200px] h-[100px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-4"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-18 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAF9F5] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAF9F5] to-transparent pointer-events-none" />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg overflow-hidden flex flex-col h-full"
            >
              {/* Quote Mark */}
              <div className="absolute top-4 right-4 text-8xl text-blue-500/10 font-serif">
                "
              </div>
              
              <div className="relative flex flex-col justify-between h-full">
                <blockquote 
                  className="text-xl text-gray-700 mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: `"${testimonial.quote.replace(
                      /\*\*(.*?)\*\*/g, 
                      '<strong>$1</strong>'
                    )}"` 
                  }}
                />
                
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-[200px]">
                    <div className="font-semibold text-[#231F20]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;