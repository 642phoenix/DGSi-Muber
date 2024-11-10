import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * PageLayout component provides a consistent layout structure by wrapping
 * each page with a Header and Footer.
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - Content to be displayed within the layout.
 */
function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Header />
      <main className="page-layout__content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
