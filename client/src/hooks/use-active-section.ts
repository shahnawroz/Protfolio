import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Create an observer for each section
    const observers = sectionIds.map(id => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -70% 0px', // Adjust these values to make detection more accurate
          threshold: [0.5], // Require at least 50% visibility
        }
      );

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }

      return observer;
    });

    // Cleanup function
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}