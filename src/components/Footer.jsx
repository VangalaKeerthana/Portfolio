import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="header-logo">KEERTHANA.V</div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-body opacity-70">
            <a href="mailto:vangala.keerthana20@gmail.com" className="hover:opacity-100 transition-opacity">Email</a>
            <a href="https://www.linkedin.com/in/keerthana-vangala-cs/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="#resume" className="hover:opacity-100 transition-opacity">Resume</a>
          </div>
          
          <p className="label-small opacity-60">© 2025 Keerthana Vangala</p>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;