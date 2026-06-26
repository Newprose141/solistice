import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import projectImage1 from '../assets/images/regenerated_image_1782466563286.jpg';
import projectImage2 from '../assets/images/regenerated_image_1782466578554.jpg';
import projectImage3 from '../assets/images/regenerated_image_1782466896732.jpg';
import projectImage4 from '../assets/images/regenerated_image_1782466908004.jpg';
import projectImage5 from '../assets/images/regenerated_image_1782466909265.jpg';

const projects = [
  {
    id: 1,
    image: projectImage1,
    location: 'Greystone Valley',
    title: 'Hillside Ridge Roof Upgrade',
    colSpan: 'md:col-span-6',
  },
  {
    id: 2,
    image: projectImage2,
    location: 'Maplewood Estate',
    title: 'Summit View Roofing',
    colSpan: 'md:col-span-6',
  },
  {
    id: 3,
    image: projectImage3,
    location: 'Riverstone District',
    title: 'Modern Shingle Install',
    colSpan: 'md:col-span-4',
  },
  {
    id: 4,
    image: projectImage4,
    location: 'Oakridge Community',
    title: 'Premium Tile Replacement',
    colSpan: 'md:col-span-4',
  },
  {
    id: 5,
    image: projectImage5,
    location: 'Pine Haven',
    title: 'Emergency Storm Repair',
    colSpan: 'md:col-span-4',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-black font-medium underline decoration-1 underline-offset-[6px] decoration-black text-sm mb-4"
            >
              Projects
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[44px] font-semibold text-black tracking-tight leading-[1.1]"
            >
              Delivering excellence through projects with proven results
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="shrink-0 mb-2 md:mb-0"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-2 border border-slate-300 hover:border-slate-400 bg-white text-black font-medium text-sm transition-colors rounded-sm"
            >
              View all Work
            </a>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              className={`group cursor-pointer flex flex-col ${project.colSpan}`}
            >
              <div className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden rounded-md mb-4 bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <div className="flex flex-col gap-1.5 px-0.5 text-left">
                <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                  <MapPin size={16} strokeWidth={1.5} className="text-slate-500" />
                  {project.location}
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
