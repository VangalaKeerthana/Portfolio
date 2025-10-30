import React from 'react';
import { TrendingDown, Zap, Shield, Rocket } from 'lucide-react';

const cards = [
  {
    icon: TrendingDown,
    title: 'Cost Optimization Expert',
    subtitle: 'Proven Track Record of Reducing Expenses',
    summary: 'Delivered 25% infrastructure cost reduction and $16K+ monthly savings through smart automation and cloud migration strategies. I make systems both faster and cheaper.'
  },
  {
    icon: Zap,
    title: 'Automation Architect',
    subtitle: 'From Manual to Magical',
    summary: 'Reduced manual effort by 85% through intelligent automation. I build systems that think for themselves – from dependency analysis to claim verification, turning weeks of work into seconds.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Ready Builder',
    subtitle: 'Production-Grade from Day One',
    summary: 'Migrated legacy COBOL+DB2 mainframes to AWS cloud with zero downtime. Built secure full-stack platforms with CI/CD, JWT auth, and real-time updates. Enterprise scale is my comfort zone.'
  },
  {
    icon: Rocket,
    title: 'AI Integration Specialist',
    subtitle: 'Making AI Practical & Profitable',
    summary: 'Built LLM-powered systems for healthcare risk prediction and multi-agent research assistants. I don\'t just use AI - I architect intelligent systems that deliver measurable business value.'
  }
];

const WhyHireMe = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="label mb-4">WHY HIRE ME</p>
          <h2 className="title-big">THE EDGE I BRING</h2>
          <p className="text-body opacity-70 mt-6 max-w-3xl">
            I don't just write code – I solve expensive problems. Every project I touch becomes faster, cheaper, and smarter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="card group">
                <div className="mb-4">
                  <Icon size={32} className="text-accent-primary" />
                </div>
                <h3 className="text-regular mb-2">{card.title}</h3>
                <p className="label-small mb-4 opacity-70">{card.subtitle}</p>
                <p className="text-body opacity-80">{card.summary}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;