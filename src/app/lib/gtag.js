// src/lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Função para registrar a visualização de páginas
export const pageView = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// Evento Personalizado
export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        evet_label: label,
        value: value,
    });
};
