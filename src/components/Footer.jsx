import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-8 border-t border-white/5 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm font-light">
            {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;