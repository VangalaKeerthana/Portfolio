import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Resiligence',
    role: 'Software Development Intern',
    location: 'Remote · US',
    period: 'May 2025 – Aug 2025',
    description: [
      'Built and deployed a Hazard & Security Risk Assessment (HVA/SRA) web application using React for organizational risk evaluation.',
      'Integrated Supabase (Auth, Postgres) with relational models for secure storage and real-time updates.',
      'Designed RESTful APIs in Python to connect Supabase with dynamic risk models.',
      'Implemented CI/CD pipelines via AWS Amplify for continuous deployment.'
    ],
    tech: ['React', 'Supabase', 'Python', 'AWS Amplify', 'CI/CD', 'REST APIs', 'PostgreSQL']
  },
  {
    company: 'Deloitte',
    role: 'Analyst',
    location: 'Hyderabad, India',
    period: 'Sep 2022 – Aug 2024',
    client: 'Vanguard Client',
    description: [
      'Migrated legacy COBOL + DB2 mainframe applications to AWS Cloud using PySpark ETL pipelines – cut infrastructure cost by 25%.',
      'Automated predecessor/successor dependency analysis for hundreds of mainframe jobs by parsing input/output metadata in Python – reduced manual tracing by 85%.',
      'Designed and implemented AWS Glue jobs to integrate DB2 outputs with downstream AWS services (S3, Redshift, QuickSight) for analytics.'
    ],
    tech: ['Python', 'PySpark', 'AWS Glue', 'DB2', 'COBOL', 'S3', 'Redshift', 'QuickSight']
  },
  {
    company: 'Elevance Health',
    role: 'Technical Specialist',
    location: 'Remote · US',
    period: '2022',
    description: [
      'Engineered the "Timber" AI-driven claim verification platform to automate validation of ICD-10 (diagnostic) and CPT/HCPCS (procedural) codes for professional and Medicaid claims.',
      'Integrated COBOL + DB2 backend with an AI-based rule engine that cross-references payer edits, claim owners, billing dates, and provider data to detect incorrect or duplicate billing.',
      'Implemented and tested edit-trigger logic for claim pricing and compliance, documenting the source and behavior of institutional, professional, and medical edits.',
      'Optimized legacy verification workflows, cutting review time by 30% – delivered cost savings of $16,287 per month.',
      'Visualized claim analytics with AWS QuickSight, React, and Power BI.'
    ],
    tech: ['Python', 'COBOL', 'DB2', 'React', 'QuickSight', 'Power BI', 'Postman', 'AI/ML']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="label mb-4">EXPERIENCE</p>
          <h2 className="title-big">PROFESSIONAL JOURNEY</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent-primary/10 border border-accent-primary/20">
                  <Briefcase size={24} className="text-accent-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-regular mb-1">{exp.company}</h3>
                  <p className="label-small mb-2">{exp.role}</p>
                  {exp.client && <p className="label-small opacity-60 mb-2">{exp.client}</p>}
                  <div className="flex flex-wrap gap-4 text-body opacity-70">
                    <span>{exp.location}</span>
                    <span>·</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-body opacity-80 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-accent-primary">
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-muted label-small">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;