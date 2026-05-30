import { useEffect } from 'react';

/**
 * Sets document title and meta description for each page.
 * @param {string} title - Page title (appended with " | NAUTK")
 * @param {string} description - Meta description for SEO
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | NAUTK` : 'NAUTK — Instituto de Comando Marítimo';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description || '');
  }, [title, description]);
}
