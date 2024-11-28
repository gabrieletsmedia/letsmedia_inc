import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const guests = [
  {
    name: 'André Daré',
    role: 'CEO',
    company: 'Núclea',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQG3TcsV1p300w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1679408711128?e=1737590400&v=beta&t=rt3O2QQCZOtoMiM_3iTSUBQkLbzAhLoWQLJkJRyI4yw',
    linkedin: 'https://www.linkedin.com/in/andrédaré/'
  },
  {
    name: 'Bruno Balduccini',
    role: 'Partner',
    company: 'Pinheiro Neto',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQEGF0BdTvMfBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516526980210?e=1737590400&v=beta&t=XNw-ab0EZBdGB2Q5rvrf_SEBn3SL5NNgtqq0gvCSXt8',
    linkedin: 'https://www.linkedin.com/in/bruno-balduccini-b6024114/'
  },
  {
    name: 'Carlos Benitez',
    role: 'CEO',
    company: 'BMP',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH9U3ojQtYWfQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712253321269?e=1737590400&v=beta&t=VVFAa4l-U8Ednwhkk0wOvWgaL9s1cuc0VmbvVXPoL9c',
    linkedin: 'https://www.linkedin.com/in/carlosbenitez14/'
  },
  {
    name: 'Carlos Brandt',
    role: 'Chefe de Departamento Adjunto',
    company: 'Banco Central do Brasil',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQEubtQ1HAbyOQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668536661618?e=1737590400&v=beta&t=IwU3gUHh8cY-BwOg46OgsgKbQwf4M4t5G89u5vR8rcU',
    linkedin: 'https://www.linkedin.com/in/carlos-eduardo-brandt-a56b5b256/'
  },
  {
    name: 'Carolina Pancotto Bohrer',
    role: 'Chefe de Departamento',
    company: 'Banco Central do Brasil',
    image: 'https://telesintese.com.br/wp-content/uploads/2021/08/Carolina-Bohrer-credito-divulgacao-2021-telesintese.jpg',
    linkedin: 'https://www.linkedin.com/in/carolina-pancotto-bohrer-20965123/'
  },
  {
    name: 'Christina Hutchinson',
    role: 'General Manager Brasil',
    company: 'Nium',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQF3OGDwFxUjfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724194810020?e=1737590400&v=beta&t=3rJY9uIOqtUmCyaCNmsygX-PC9Q4yboJqBrg-3xXw9E',
    linkedin: 'https://www.linkedin.com/in/christina-hutchinson-b857019/'
  },
  {
    name: 'Cleber Morais',
    role: 'Country Director',
    company: 'Amazon Web Services',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQF47rPdXJwRdA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1626181147591?e=1737590400&v=beta&t=OtVgHEoyiM3259kPw0kopYcerlU15_waujf9lRm9hwc',
    linkedin: 'https://www.linkedin.com/in/clebermorais/'
  },
  {
    name: 'Edson Santos',
    role: 'Founder',
    company: 'Colink Business Consulting',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHaGzVoKorrlA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726146801059?e=1737590400&v=beta&t=v2KUM2vYV_ufa8uL138nYZM_3R_eHadwbxQpcvN-BDs',
    linkedin: 'https://www.linkedin.com/in/edson-santos/'
  },
  {
    name: 'Glauber Mota',
    role: 'CEO',
    company: 'Revolut Brazil',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQFqtYQqhwIGEA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682996262880?e=1737590400&v=beta&t=EJ-PMjE5CJXphzrHCoH1kmkrkeG9a2amqCXk0MMZnLU',
    linkedin: 'https://www.linkedin.com/in/glauber/'
  },
  {
    name: 'Ingrid Barth',
    role: 'Founder and CEO',
    company: 'PilotIn',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQG7VS4eZ3rbLQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686366275760?e=1737590400&v=beta&t=zmrsiVMz6ucjGPK_Y9YdAcyAno60Lp27LAY5Ux6TKvQ',
    linkedin: 'https://www.linkedin.com/in/ingridbarth/'
  },
  {
    name: 'Juliana Binatti',
    role: 'Founder',
    company: 'Pismo',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHI34DbkLgdpg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665436338772?e=1737590400&v=beta&t=whI8FNpZqZF-qfbpzU97xVhJRniUzxHNVWRx58p8wX8',
    linkedin: 'https://www.linkedin.com/in/juliana-motta/'
  },
  {
    name: 'Larissa Arruy',
    role: 'Sócia',
    company: 'Mattos Filho',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQHUf1TSezytuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1561079553076?e=1737590400&v=beta&t=7NNA3xa9e0nSrjxnyoSoA3fQAMu4vim42VRNU3Mhlms',
    linkedin: 'https://www.linkedin.com/in/larissa-arruy-55886256/'
  },
  {
    name: 'Matheus Rauber',
    role: 'Senior Advisor',
    company: 'Banco Central do Brasil',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQFvP1KDaIrPEg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1529334442790?e=1737590400&v=beta&t=mVsWOTPYh98sH8DQEY3VwN1bVJLSxP2KcEQGbMsV5T0',
    linkedin: 'https://www.linkedin.com/in/matheus-rauber-6a9994166/'
  },
  {
    name: 'Mauricio Santos',
    role: 'CEO',
    company: 'Claro Pay',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH9b3L1XL9Yzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690222817666?e=1737590400&v=beta&t=H6OnIiPPaxCOrbOD-4XgRAvavXDpOoj_4FkYuNtKgW8',
    linkedin: 'https://www.linkedin.com/in/mauricio-r-santos/'
  },
  {
    name: 'Reinaldo Rabelo',
    role: 'CEO',
    company: 'Mercado Bitcoin',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGOdKKFAakYpw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698703425293?e=1737590400&v=beta&t=6R9h0rEXsvqga3lRk2d7m5wpZiCQp54i8kdrSW6OIJg',
    linkedin: 'https://www.linkedin.com/in/reinaldo-rabelo-mb/'
  },
  {
    name: 'Simone Marques',
    role: 'CEO',
    company: 'VR',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHhK_EIdOOCwA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725760996586?e=1737590400&v=beta&t=YEXW1MUllgpz9Iw5KDrf0KYMRzam2qrYmnIa61u4sec',
    linkedin: 'https://www.linkedin.com/in/simone-marques-485a49ab/'
  }
];

const PodcastGuests = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(guests.length - 4, currentIndex + 1);

    const cardWidth = container.offsetWidth / 4;
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const maxIndex = guests.length - 4;
      const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      
      const cardWidth = container.offsetWidth / 4;
      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoScrolling]);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#231F20] mb-6">
            Pessoas
Incríveis já passaram por aqui
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Confira algumas das pessoas convidadas que já participaram dos nossos programas.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden gap-6"
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {guests.map((guest, index) => (
              <div 
                key={index}
                className="flex-none w-[calc(25%-18px)] aspect-[3/4] rounded-2xl overflow-hidden relative group cursor-pointer"
                onClick={() => window.open(guest.linkedin, '_blank', 'noopener,noreferrer')}
              >
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {guest.name}
                    </h3>
                    <p className="text-white/90 text-sm font-medium">
                      {guest.role}
                    </p>
                    <p className="text-white/80 text-xs">
                      {guest.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
            disabled={currentIndex >= guests.length - 4}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PodcastGuests;