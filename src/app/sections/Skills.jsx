'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiLayout, 
  FiServer, 
  FiDatabase, 
  FiTool,
  FiCpu,
  FiCloud
} from 'react-icons/fi';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiGit,
  SiNpm,
  SiPostman, 
  SiTailwindcss, 
  SiNumpy, 
  SiPandas, 
  SiChartdotjs,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiAmazonwebservices,
  SiVercel,
  SiBootstrap,
  SiAntdesign,
  SiJsonwebtokens
} from 'react-icons/si';

const frontendSkills = [
  { name: 'React.js', icon: SiReact, level: 85 },
  { name: 'JavaScript (ES6+)', icon: SiJavascript, level: 80 },
  { name: 'HTML5', icon: SiHtml5, level: 90 },
  { name: 'CSS3/SCSS', icon: SiCss3, level: 85 },
  { name: 'Redux Toolkit', icon: SiRedux, level: 80 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
  { name: 'Bootstrap', icon: SiBootstrap, level: 75 },
  { name: 'Ant Design', icon: SiAntdesign, level: 70 },
];

const backendSkills = [
  { name: 'Node.js', icon: SiNodedotjs, level: 80 },
  { name: 'Express.js', icon: SiExpress, level: 85 },
  { name: 'MongoDB', icon: SiMongodb, level: 80 },
  { name: 'MySQL', icon: SiMysql, level: 75 },
  { name: 'RESTful APIs', icon: SiPostman, level: 85 },
  { name: 'JWT Authentication', icon: SiJsonwebtokens, level: 80 },
];

const mlSkills = [
  { name: 'Python', icon: SiPython, level: 85 },
  { name: 'OpenCV', icon: SiOpencv, level: 70 },
  { name: 'Scikit-learn', icon: SiScikitlearn, level: 80 },
  { name: 'NumPy', icon: SiNumpy, level: 85 },
  { name: 'Pandas', icon: SiPandas, level: 90 },
  { name: 'Matplotlib', icon: SiChartdotjs, level: 75 },
];

const toolsSkills = [
  { name: 'Git & GitHub', icon: SiGit, level: 80 },
  { name: 'NPM', icon: SiNpm, level: 85 },
  { name: 'Postman', icon: SiPostman, level: 85 },
  { name: 'AWS', icon: SiAmazonwebservices, level: 65 },
  { name: 'Vercel', icon: SiVercel, level: 80 },
];

const SkillCategory = ({ title, skills, icon, delay, isInView }) => {
  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 mr-4 bg-primary-100 dark:bg-dark-300 rounded-lg text-primary-600 dark:text-primary-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <div className="flex items-center">
                <skill.icon className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
                <span className="font-medium">{skill.name}</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: delay + index * 0.1 }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20">
      <div className="section-container" ref={ref}>
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are the technologies and tools I work with. I'm constantly learning and expanding my skillset to stay up-to-date with the latest industry trends.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory 
            title="Frontend" 
            skills={frontendSkills} 
            icon={<FiLayout className="w-6 h-6" />} 
            delay={0.3}
            isInView={isInView}
          />
          
          <SkillCategory 
            title="Backend" 
            skills={backendSkills} 
            icon={<FiServer className="w-6 h-6" />} 
            delay={0.5}
            isInView={isInView}
          />

          <SkillCategory 
            title="AI/ML" 
            skills={mlSkills} 
            icon={<FiCpu className="w-6 h-6" />} 
            delay={0.7}
            isInView={isInView}
          />
          
          <SkillCategory 
            title="Tools & Cloud" 
            skills={toolsSkills} 
            icon={<FiCloud className="w-6 h-6" />} 
            delay={0.9}
            isInView={isInView}
          />
        </div>

        <motion.div 
          className="mt-12 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 p-6 rounded-lg border border-primary-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <h3 className="text-lg font-bold mb-4 gradient-text">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
              <span>Agile Development</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></div>
              <span>CI/CD</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
              <span>Nodemailer</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></div>
              <span>Computer Vision</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}