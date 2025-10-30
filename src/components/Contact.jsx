import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="label mb-4">GET IN TOUCH</p>
          <h2 className="title-big">CONTACT</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="mailto:vangala.keerthana20@gmail.com" className="card hover:border-accent-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-primary/10 border border-accent-primary/20">
                <Mail size={24} className="text-accent-primary" />
              </div>
              <div>
                <p className="label-small mb-1">EMAIL</p>
                <p className="text-body">vangala.keerthana20@gmail.com</p>
              </div>
            </div>
          </a>
          
          <a href="tel:+19296621511" className="card hover:border-accent-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-primary/10 border border-accent-primary/20">
                <Phone size={24} className="text-accent-primary" />
              </div>
              <div>
                <p className="label-small mb-1">PHONE</p>
                <p className="text-body">+1 929 662 1511</p>
              </div>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/keerthana-vangala-cs/" target="_blank" rel="noopener noreferrer" className="card hover:border-accent-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-primary/10 border border-accent-primary/20">
                <Linkedin size={24} className="text-accent-primary" />
              </div>
              <div>
                <p className="label-small mb-1">LINKEDIN</p>
                <p className="text-body">keerthana-vangala-cs</p>
              </div>
            </div>
          </a>
          
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-primary/10 border border-accent-primary/20">
                <MapPin size={24} className="text-accent-primary" />
              </div>
              <div>
                <p className="label-small mb-1">LOCATION</p>
                <p className="text-body">Buffalo, NY</p>
              </div>
            </div>
          </div>
          
          <a href="https://customer-assets.emergentagent.com/job_dev-profile-hub-1/artifacts/2b6h705f_HW1%20%286%29.pdf" target="_blank" rel="noopener noreferrer" className="card hover:border-accent-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-primary/10 border border-accent-primary/20">
                <Download size={24} className="text-accent-primary" />
              </div>
              <div>
                <p className="label-small mb-1">RESUME</p>
                <p className="text-body">Download PDF</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;