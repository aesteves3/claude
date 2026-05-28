import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const levelLabels = {
  arrais: { label: 'ARRAIS AMADOR', rank: '01' },
  mestre: { label: 'MESTRE AMADOR', rank: '02' },
  capitao: { label: 'CAPITÃO AMADOR', rank: '03' }
};

export default function CourseCard({ course, index, image }) {
  const level = levelLabels[course.certification_level] || levelLabels.arrais;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: index * 0.15 }}
      className="group relative">
      
      <Link to={`/course/${course.certification_level}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[3/2] mb-6">
          <img
            src={image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-ship group-hover:scale-105" />
          
          {/* Rank Badge */}
          <div className="absolute top-4 left-4 font-mono text-xs tracking-[0.2em] bg-navy/80 backdrop-blur-sm text-white px-3 py-1.5">
            NÍVEL {level.rank}
          </div>
          {/* Orange accent on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-ship origin-left" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <p className="font-mono text-xs tracking-[0.2em] text-orange">{level.label}</p>
          <h3 className="font-archivo text-xl md:text-2xl tracking-wide text-navy group-hover:text-orange transition-colors duration-300 ease-ship">
            {course.title}
          </h3>
          <p className="font-inter text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {course.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-6 pt-2">
            {course.duration_hours &&
            <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> {course.duration_hours}H
              </span>
            }

          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-chart-grey">
            

            
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] bg-orange text-white px-6 py-3 hover:bg-orange/90 transition-all duration-500 ease-ship group-hover:gap-3">
              VER DETALHES <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>);

}