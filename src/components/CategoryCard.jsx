import React from 'react';
import { Code2, Atom, Layout, Brain, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Atom: Atom,
  Layout: Layout,
  Brain: Brain
};

export function CategoryCard({ category, isSelected, onSelect, questionCount }) {
  const IconComponent = iconMap[category.iconName] || Code2;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(category.id);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={`category-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(category.id)}
      onKeyDown={handleKeyDown}
      aria-pressed={isSelected}
      aria-label={`Select category ${category.name}`}
    >
      <div className="category-card-top">
        <div className="category-icon-box" style={{ color: category.color }}>
          <IconComponent size={24} />
        </div>
        {isSelected ? (
          <span className="badge badge-primary">
            <CheckCircle2 size={13} /> Selected
          </span>
        ) : (
          <span className="badge" style={{ background: 'var(--bg-app)', color: 'var(--text-muted)' }}>
            {category.badge}
          </span>
        )}
      </div>

      <h3 className="category-name">{category.name}</h3>
      <p className="category-description">{category.description}</p>

      <div className="category-meta">
        <span>{questionCount} Questions</span>
        <span>{isSelected ? 'Active choice' : 'Click to select'}</span>
      </div>
    </div>
  );
}

