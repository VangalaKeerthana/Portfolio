import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Maternal Infant Insight',
    subtitle: 'LLM-Augmented Risk Prediction',
    period: 'Oct 2024 – Jan 2025',
    description: 'Built an end-to-end ML pipeline using scikit-learn + XGBoost with SHAP interpretability. Achieved F1 = 0.94, Recall = 0.93. Extended pipeline with LLM explanation layer (GPT-3.5/T5) to generate clinical-style summaries from SHAP insights, improving transparency for non-technical users.',
    highlights: [
      'Identified systolic BP and blood sugar as dominant risk factors through SHAP',
      'Integrated EDA and statistical validation',
      'Benchmarked Logistic Regression, Random Forest, and XGBoost models'
    ],
    tech: ['Python', 'XGBoost', 'SHAP', 'GPT-3.5/T5', 'pandas', 'scikit-learn', 'NumPy', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc2MTU1OTc0MHww&ixlib=rb-4.1.0&q=85'
  },
  {
    title: 'Noit Research Mini',
    subtitle: 'Agentic Multi-Agent Research Assistant',
    period: '2025',
    description: 'Designed an Agentic AI multi-agent system with autonomous planner → researcher → summarizer → citation agents coordinated by an Orchestrator. Built production-grade FastAPI backend with JWT authentication, SQLAlchemy + SQLite persistence, and modular query handling with model selection (gpt-4o-mini).',
    highlights: [
      'Implemented secure CORS policy and dynamic model orchestration',
      'Built minimal HTML/JS frontend for authentication and history visualization',
      'Containerized with Docker for easy deployment'
    ],
    tech: ['FastAPI', 'SQLAlchemy', 'SQLite', 'JWT', 'bcrypt', 'LangChain', 'OpenAI API', 'HTML/JS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc2MTU1OTc0MHww&ixlib=rb-4.1.0&q=85'
  },
  {
    title: 'Predictive Loan Advisor',
    subtitle: 'ML Capstone (Deloitte AI Academy)',
    period: 'Oct 2022 – Nov 2022',
    description: 'Engineered distributed ETL pipeline on Databricks (PySpark) to preprocess 50,000+ loan records with feature encoding, scaling, and correlation analysis. Trained and tuned XGBoost, Random Forest, and Logistic Regression on AWS SageMaker. Achieved 94% Accuracy, 92% Recall, 0.96 AUC.',
    highlights: [
      'Identified Debt-to-Income Ratio, Credit History Length, and LTV as top predictors',
      'Built interactive AWS QuickSight and Power BI dashboards',
      'Visualized approval probability, credit risk tiers, and demographic analysis'
    ],
    tech: ['Databricks', 'PySpark', 'AWS SageMaker', 'S3', 'Aurora', 'XGBoost', 'Random Forest', 'QuickSight', 'Power BI'],
    image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NjE2NzQzNDh8MA&ixlib=rb-4.1.0&q=85'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="label mb-4">SELECTED WORK</p>
          <h2 className="title-big">PROJECTS</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card group overflow-hidden p-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-regular mb-1">{project.title}</h3>
                  <p className="label-small mb-2 opacity-70">{project.subtitle}</p>
                  <p className="label-small opacity-50">{project.period}</p>
                </div>
                
                <p className="text-body opacity-80 mb-4">{project.description}</p>
                
                <ul className="space-y-1 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-body opacity-70 text-sm pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-accent-primary">
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-muted label-small text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;