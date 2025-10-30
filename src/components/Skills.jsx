import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'R', 'C', 'C++', 'SQL', 'Java', 'Bash', 'React', 'PySpark', 'COBOL']
  },
  {
    category: 'Data Engineering',
    skills: ['PyTorch', 'Spark', 'Kafka', 'Hive', 'Airflow', 'Databricks', 'ETL Pipelines']
  },
  {
    category: 'Cloud & Infra',
    skills: ['AWS EC2', 'S3', 'Lambda', 'Glue', 'Redshift', 'SageMaker', 'QuickSight', 'Docker', 'Amplify']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Redis', 'Supabase', 'Postgres', 'Snowflake']
  },
  {
    category: 'Visualization',
    skills: ['Tableau', 'Power BI', 'QuickSight', 'Plotly']
  },
  {
    category: 'Embedded Systems',
    skills: ['C/C++', 'RTOS', 'UART/SPI/I²C']
  }
];

const Skills = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="label mb-4">TECHNICAL SKILLS</p>
          <h2 className="title-big">TECH STACK</h2>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="label mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-background border border-border label-small hover:bg-accent-primary hover:text-accent-foreground transition-all duration-200 cursor-default"
                  >
                    {skill}
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

export default Skills;