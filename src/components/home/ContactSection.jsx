import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactMessage } from '@/api/forms';
import { ApiError } from '@/api/http';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course_interest: 'general', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await submitContactMessage(form);
      setForm({ name: '', email: '', phone: '', course_interest: 'general', message: '' });
      toast.success('Mensagem enviada! Em breve entraremos em contato.');
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Não foi possível enviar. Tente novamente.';
      toast.error(message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] text-orange mb-4">
              SINAL DE CONTATO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="font-archivo text-3xl md:text-4xl tracking-wide text-navy mb-6">
              FALE COM NOSSOS
              <br />
              ASSESSORES
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-inter text-base text-muted-foreground leading-relaxed mb-12 max-w-md">
              Nossos assessores marítimos estão prontos para orientar você na escolha do curso ideal para o seu nível de experiência e objetivos de navegação.
            </motion.p>

            <div className="space-y-4 font-mono text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-[0.2em] text-orange w-16">LOCAL</span>
                <span>São Paulo, Ilhabela, Represa Guarapiranga</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-[0.2em] text-orange w-16">WHATSAPP</span>
                <a href="https://wa.me/5511913112332" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors duration-300">+55 (11) 91311-2332</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs tracking-[0.2em] text-orange w-16">EMAIL</span>
                <a href="mailto:contato@nautk.org" className="hover:text-orange transition-colors duration-300">contato@nautk.org</a>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="space-y-5 bg-secondary/50 p-8 md:p-10 border border-chart-grey">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-mono text-xs tracking-wider text-muted-foreground mb-2 block">NOME</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-white border-chart-grey font-inter text-base h-12"
                  placeholder="Seu nome completo" />
              </div>
              <div>
                <label className="font-mono text-xs tracking-wider text-muted-foreground mb-2 block">EMAIL</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-white border-chart-grey font-inter text-base h-12"
                  placeholder="seu@email.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="font-mono text-xs tracking-wider text-muted-foreground mb-2 block">TELEFONE</label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-white border-chart-grey font-inter text-base h-12"
                  placeholder="(21) 99999-9999" />
              </div>
              <div>
                <label className="font-mono text-xs tracking-wider text-muted-foreground mb-2 block">INTERESSE</label>
                <Select value={form.course_interest} onValueChange={(v) => setForm({ ...form, course_interest: v })}>
                  <SelectTrigger className="bg-white border-chart-grey h-12 font-inter text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Informações Gerais</SelectItem>
                    <SelectItem value="arrais">Arrais Amador</SelectItem>
                    <SelectItem value="mestre">Mestre Amador</SelectItem>
                    <SelectItem value="capitao">Capitão Amador</SelectItem>
                    <SelectItem value="pratica">Prática</SelectItem>
                    <SelectItem value="internacional">Internacional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="font-mono text-xs tracking-wider text-muted-foreground mb-2 block">MENSAGEM</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="bg-white border-chart-grey font-inter text-base min-h-[120px]"
                placeholder="Como podemos ajudar?" />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-3 font-mono text-xs tracking-[0.15em] bg-orange text-white py-4 hover:bg-orange/90 transition-all duration-500 ease-ship disabled:opacity-50 min-h-[44px]">
              {sending ? 'ENVIANDO...' : <><Send className="w-4 h-4" /> ENVIAR MENSAGEM</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
