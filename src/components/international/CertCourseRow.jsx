import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, CheckCircle } from 'lucide-react';

export default function CertCourseRow({ course, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: index * 0.08 }}
      className={`border-b border-chart-grey last:border-b-0 ${course.featured ? 'bg-orange/5' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 py-5 px-0 text-left group min-h-[44px]"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-orange w-10 flex-shrink-0">{course.rank}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-archivo text-base md:text-lg text-navy group-hover:text-orange transition-colors duration-300 ease-ship">
              {course.name}
            </span>
            <span className="font-mono text-xs tracking-wider text-muted-foreground border border-chart-grey px-2 py-0.5">
              {course.level}
            </span>
            {course.featured && (
              <span className="font-mono text-xs tracking-wider text-orange border border-orange/30 bg-orange/5 px-2 py-0.5">
                RECOMENDADO
              </span>
            )}
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ease-ship ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-14 pr-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-5">
                  {course.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {course.highlights.map((h, i) => (
                    <span key={i} className="flex items-start gap-2 font-inter text-sm text-navy">
                      <CheckCircle className="w-3 h-3 text-orange flex-shrink-0 mt-0.5" /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="border border-chart-grey divide-y divide-chart-grey">
                  {course.scope && (
                    <div className="p-3">
                      <p className="font-mono text-xs tracking-wider text-muted-foreground mb-0.5">ESCOPO</p>
                      <p className="font-inter text-sm text-navy">{course.scope}</p>
                    </div>
                  )}
                  {course.experience && (
                    <div className="p-3">
                      <p className="font-mono text-xs tracking-wider text-muted-foreground mb-0.5">EXPERIÊNCIA MÍNIMA</p>
                      <p className="font-inter text-sm text-navy">{course.experience}</p>
                    </div>
                  )}
                  {course.duration && (
                    <div className="p-3">
                      <p className="font-mono text-xs tracking-wider text-muted-foreground mb-0.5">DURAÇÃO</p>
                      <p className="font-inter text-sm text-navy">{course.duration}</p>
                    </div>
                  )}
                  {course.age && (
                    <div className="p-3">
                      <p className="font-mono text-xs tracking-wider text-muted-foreground mb-0.5">IDADE MÍNIMA</p>
                      <p className="font-inter text-sm text-navy">{course.age}</p>
                    </div>
                  )}
                  {course.prereqs && (
                    <div className="p-3">
                      <p className="font-mono text-xs tracking-wider text-muted-foreground mb-0.5">PRÉ-REQUISITOS</p>
                      <p className="font-inter text-sm text-navy">{course.prereqs}</p>
                    </div>
                  )}
                </div>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.15em] border border-orange text-orange py-3 hover:bg-orange hover:text-white transition-all duration-500 ease-ship min-h-[44px]"
                >
                  SAIBA MAIS <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}