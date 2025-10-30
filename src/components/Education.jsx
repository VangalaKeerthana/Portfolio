import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    institution: 'State University of New York at Buffalo',
    degree: 'M.S. Computer Science',
    period: 'Aug 2024 – Dec 2025',
    gpa: '3.54 / 4.0',
    courses: ['Machine Learning', 'Data-Intensive Computing', 'Statistical Data Mining', 'Database Systems', 'Algorithms Analysis']
  },
  {
    institution: 'G. Narayanamma Institute of Technology & Science',
    degree: 'B.Tech Electronics & Communication Engineering',
    period: 'Jul 2018 – Jun 2022',
    gpa: '8.5 / 10',
    courses: ['Python', 'Cloud Computing', 'DBMS', 'DSA', 'Operating Systems']
  }
];

const certifications = [
  'AWS Cloud Practitioner',
  'AWS Developer Associate',
  'PG in Software Engineering & Data Science (IIIT-Hyderabad + Great Learning)'
];

const Education = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="label mb-4">EDUCATION</p>
          <h2 className="title-big">ACADEMIC BACKGROUND</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent-primary/10 border border-accent-primary/20">
                  <GraduationCap size={24} className="text-accent-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-regular mb-2">{edu.institution}</h3>
                  <p className="label-small mb-2">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-body opacity-70 mb-4">
                    <span>{edu.period}</span>
                    <span>·</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="label-small mb-3">KEY COURSES</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="px-3 py-1 bg-muted label-small">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="card">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-accent-primary/10 border border-accent-primary/20">
              <Award size={24} className="text-accent-primary" />
            </div>
            <div>
              <h3 className="text-regular mb-2">Certifications</h3>
              <p className="label-small opacity-70">Professional Credentials</p>
            </div>
          </div>
          
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li key={index} className="text-body opacity-80 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-accent-primary before:font-bold">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;