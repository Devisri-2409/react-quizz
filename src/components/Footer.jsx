import React from 'react';
import { Heart } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <h4 style={{ color: 'var(--text-heading)', marginBottom: '4px' }}>QuizMaster</h4>
            <p>A modern, interactive React assessment platform designed for students and developers.</p>
          </div>
          <div className="footer-tags">
            <span className="footer-tag">React 19</span>
            <span className="footer-tag">Vite</span>
            <span className="footer-tag">Pure CSS3</span>
            <span className="footer-tag">Zero Backend</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {CURRENT_YEAR} QuizMaster &bull; College Assignment Project</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Built with React &amp; <Heart size={14} color="#EF4444" fill="#EF4444" />
          </span>
        </div>
      </div>
    </footer>
  );
}

