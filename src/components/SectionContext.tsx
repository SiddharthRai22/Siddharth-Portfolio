import React, { createContext, useContext } from 'react';

export type SectionTheme = 'light' | 'orange';

interface SectionContextValue {
  theme: SectionTheme;
  index: number;
}

const SectionContext = createContext<SectionContextValue>({
  theme: 'light',
  index: 0,
});

export const useSectionTheme = (explicitTheme?: SectionTheme): SectionTheme => {
  const context = useContext(SectionContext);
  return explicitTheme ?? context.theme;
};

export const SectionProvider: React.FC<{
  index: number;
  theme?: SectionTheme;
  children: React.ReactNode;
}> = ({ index, theme, children }) => {
  // Position-based alternating theme:
  // Even index (0, 2, 4...) -> 'light'
  // Odd index (1, 3, 5...)  -> 'orange'
  // Or explicit override if specified
  const resolvedTheme: SectionTheme = theme ?? (index % 2 === 1 ? 'orange' : 'light');

  return (
    <SectionContext.Provider value={{ theme: resolvedTheme, index }}>
      {children}
    </SectionContext.Provider>
  );
};
