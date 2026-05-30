import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from 'sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import SiteLayout from './components/layout/SiteLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import NauticedDetail from './pages/NauticedDetail';
import AsaDetail from './pages/AsaDetail';
import IssaDetail from './pages/IssaDetail';
import PracticalDetail from './pages/PracticalDetail';
import References from './pages/References';
import Livros from './pages/Livros';
import Comandantes from './pages/Comandantes';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router basename={import.meta.env.VITE_BASE_PATH?.replace(/\/$/, '') || undefined}>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/curso/:level" element={<CourseDetail />} />
            <Route path="/internacional/nauticed" element={<NauticedDetail />} />
            <Route path="/internacional/asa" element={<AsaDetail />} />
            <Route path="/internacional/issa" element={<IssaDetail />} />
            <Route path="/pratica/:slug" element={<PracticalDetail />} />
            <Route path="/referencias" element={<References />} />
            <Route path="/livros" element={<Livros />} />
            <Route path="/comandantes" element={<Comandantes />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
        <SonnerToaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#001A33',
              color: '#ffffff',
              border: '1px solid #E8723A',
              borderRadius: '2px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.1em',
            },
          }}
        />
      </Router>
    </QueryClientProvider>
  )
}

export default App
