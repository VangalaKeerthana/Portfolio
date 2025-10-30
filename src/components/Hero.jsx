import React from 'react';
import { Mail, Download, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-body opacity-70">Hi, I'm Keerthana Vangala 👋</p>
            <h1 className="hero-title">SOFTWARE ENGINEER</h1>
            <p className="text-big">Cloud, Data & AI</p>
            <p className="text-regular opacity-80 max-w-3xl mx-auto mt-6">
              2+ years building cloud-native systems and data pipelines on AWS. <span className="text-accent-primary">Cut infrastructure costs by 25%</span> and <span className="text-accent-primary">manual effort by 85%</span> through intelligent automation. Optimized enterprise workflows, saving <span className="text-accent-primary">~$16K/month</span>. Architect of full-stack platforms using React, Supabase, and AWS.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a href="mailto:vangala.keerthana20@gmail.com" className="btn-accent">
              <Mail size={18} className="mr-2" />
              Email
            </a>
            <a href="https://customer-assets.emergentagent.com/job_dev-profile-hub-1/artifacts/2b6h705f_HW1%20%286%29.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Download size={18} className="mr-2" />
              Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/keerthana-vangala-cs/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
          </div>
          
          <div className="pt-6">
            <p className="label-small opacity-60">Open to SDE/AI/Data Roles (US)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;