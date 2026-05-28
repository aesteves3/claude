import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitEnrollment } from '@/api/forms';
import { ApiError } from '@/api/http';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, CheckCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function EnrollmentForm({ course, onClose }) {
  const [form, setForm] = useState({ student_name: '', student_email: '', student_phone: '', notes: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await submitEnrollment({
        ...form,
        course_id: course.id || course.certification_level,
        course_title: course.title,
      });
      setSuccess(true);
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Não foi possível enviar. Tente novamente.';
      toast.error(message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="relative bg-white w-full max-w-lg p-8 md:p-10 z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-muted-foreground hover:text-navy transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-orange mx-auto mb-4" />
            <h3 className="font-archivo text-2xl text-navy mb-3">MATRÍCULA ENVIADA</h3>
            <p className="font-inter text-sm text-muted-foreground mb-6">
              Sua solicitação foi recebida. Entraremos em contato em breve para confirmar sua vaga.
            </p>
            <button
              onClick={onClose}
              className="font-mono text-xs tracking-[0.15em] bg-orange text-white px-8 py-3 hover:bg-orange/90 transition-all duration-500 ease-ship min-h-[44px]"
            >
              FECHAR
            </button>
          </div>
        ) : (
          <>
            <p className="font-mono text-xs tracking-[0.3em] text-orange mb-2">MATRÍCULA</p>
            <h3 className="font-archivo text-2xl text-navy mb-6">{course.title}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs tracking-wider text-muted-foreground mb-2 block">NOME COMPLETO</label>
                <Input
                  value={form.student_name}
                  onChange={(e) => setForm({ ...form, student_name: e.target.value })}
                  required
                  className="border-chart-grey font-inter text-base h-12"
                />
              </div>
              <div>
                <label className="font-mono text-xs tracking-wider text-muted-foreground mb-2 block">EMAIL</label>
                <Input
                  type="email"
                  value={form.student_email}
                  onChange={(e) => setForm({ ...form, student_email: e.target.value })}
                  required
                  className="border-chart-grey font-inter text-base h-12"
                />
              </div>
              <div>
                <label className="font-mono text-xs tracking-wider text-muted-foreground mb-2 block">TELEFONE</label>
                <Input
                  value={form.student_phone}
                  onChange={(e) => setForm({ ...form, student_phone: e.target.value })}
                  className="border-chart-grey font-inter text-base h-12"
                />
              </div>
              <div>
                <label className="font-mono text-xs tracking-wider text-muted-foreground mb-2 block">OBSERVAÇÕES</label>
                <Textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="border-chart-grey font-inter text-base min-h-[80px]"
                  placeholder="Experiência prévia, dúvidas..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-3 font-mono text-xs tracking-[0.15em] bg-orange text-white py-4 hover:bg-orange/90 transition-all duration-500 ease-ship disabled:opacity-50 min-h-[44px]"
              >
                {sending ? 'PROCESSANDO...' : <><Send className="w-4 h-4" /> CONFIRMAR MATRÍCULA</>}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
