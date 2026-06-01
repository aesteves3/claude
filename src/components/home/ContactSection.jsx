import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContactMessage } from '@/api/forms';
import { ApiError } from '@/api/http';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, Anchor, AlertTriangle, X } from 'lucide-react';

const INITIAL_FORM = { name: '', email: '', phone: '', course_interest: 'general', message: '' };

export default function ContactSection() {
  const [form, setForm]         = useState(INITIAL_FORM);
  const [sending, setSending]   = useState(false);
  const [status, setStatus]     = useState(null); // null | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await submitContactMessage(form);
      setForm(INITIAL_FORM);
      setStatus('success');
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Não foi possível enviar. Tente novamente.';
      setErrorMsg(message);
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setStatus(null);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left column */}
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
              Nossos assessores náuticos estão prontos para orientar você na escolha do curso ideal para o seu nível de experiência e objetivos de navegação.
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

          {/* Right column — form + overlay */}
          <div className="relative">

            {/* Form — always mounted, dims when status shown */}
            <motion.form
              onSubmit={handleSubmit}
              animate={{ opacity: status ? 0.15 : 1, scale: status ? 0.98 : 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-5 bg-secondary/50 p-8 md:p-10 border border-chart-grey pointer-events-auto"
              style={{ pointerEvents: status ? 'none' : 'auto' }}>

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
                className="w-full flex items-center justify-center gap-3 font-mono text-xs tracking-[0.15em] bg-orange text-white py-4 hover:bg-orange/90 transition-all duration-500 disabled:opacity-50 min-h-[44px]">
                {sending ? 'ENVIANDO...' : <><Send className="w-4 h-4" /> ENVIAR MENSAGEM</>}
              </button>
            </motion.form>

            {/* Overlay — appears on top of dimmed form */}
            <AnimatePresence>
              {status && (
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-7"
                  style={{
                    background: status === 'success'
                      ? 'linear-gradient(135deg, #001A33 0%, #002244 100%)'
                      : 'linear-gradient(135deg, #1a0a0a 0%, #2a0f0f 100%)',
                    border: status === 'success' ? '1px solid rgba(232,114,58,0.5)' : '1px solid rgba(239,68,68,0.4)',
                    boxShadow: status === 'success'
                      ? '0 0 60px rgba(232,114,58,0.15), inset 0 0 40px rgba(0,26,51,0.8)'
                      : '0 0 60px rgba(239,68,68,0.1), inset 0 0 40px rgba(26,10,10,0.8)',
                  }}>

                  {/* Close button */}
                  <button
                    onClick={handleReset}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors duration-200 p-1">
                    <X className="w-5 h-5" />
                  </button>

                  {/* Icon */}
                  <div className={`p-3 mb-4 ${status === 'success' ? 'border border-orange/50' : 'border border-red-500/40'}`}>
                    {status === 'success'
                      ? <Anchor className="w-7 h-7 text-orange" />
                      : <AlertTriangle className="w-7 h-7 text-red-400" />}
                  </div>

                  {/* Label */}
                  <p className={`font-mono text-xs tracking-[0.4em] mb-2 ${status === 'success' ? 'text-orange' : 'text-red-400'}`}>
                    {status === 'success' ? 'TRANSMISSÃO CONFIRMADA' : 'FALHA NA TRANSMISSÃO'}
                  </p>

                  {/* Headline */}
                  <h3 className="font-archivo text-2xl md:text-3xl tracking-wide text-white mb-4">
                    {status === 'success' ? 'SINAL RECEBIDO' : 'SINAL PERDIDO'}
                  </h3>

                  {/* Divider */}
                  <div className={`w-10 h-px mb-4 ${status === 'success' ? 'bg-orange/50' : 'bg-red-500/40'}`} />

                  {/* Body */}
                  <p className="font-inter text-sm text-white/60 leading-relaxed max-w-xs mb-6">
                    {status === 'success'
                      ? 'Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.'
                      : errorMsg}
                  </p>

                  {/* Action button */}
                  {status === 'error' && (
                    <button
                      onClick={handleReset}
                      className="font-mono text-xs tracking-[0.2em] border border-red-500/50 text-red-400 px-8 py-3 hover:bg-red-500/10 transition-all duration-300">
                      TENTAR NOVAMENTE
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
