import React from 'react';
import { Palette, Scissors, CircleDot } from 'lucide-react';

const hobbies = [
  {
    icon: Palette,
    name: 'Painting',
    description: 'Expressing creativity through colors and canvas. Art keeps my problem-solving skills fresh and my perspective unique.'
  },
  {
    icon: Scissors,
    name: 'Art & Craft',
    description: 'Building things with my hands – from paper to prototypes. The same attention to detail I bring to code.'
  },
  {
    icon: CircleDot,
    name: 'Tennis',
    description: 'Competitive spirit meets strategic thinking. Every match is a lesson in quick decisions and resilience.'
  }
];

const Hobbies = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="label mb-4">BEYOND CODE</p>
          <h2 className="title-big">HOBBIES</h2>
          <p className="text-body opacity-70 mt-6 max-w-3xl">
            When I'm not architecting cloud systems, you'll find me creating art, crafting, or dominating the tennis court.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div key={index} className="card group text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-accent-primary/10 border border-accent-primary/20">
                    <Icon size={36} className="text-accent-primary" />
                  </div>
                </div>
                <h3 className="text-regular mb-4">{hobby.name}</h3>
                <p className="text-body opacity-80">{hobby.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;