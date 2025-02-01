import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Only update if the section is more visible than previous ones
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          // Adjust the root margin to better detect sections
          rootMargin: '-10% 0px -85% 0px',
          threshold: [0.3], // Lower threshold for earlier detection
        }
      );

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}