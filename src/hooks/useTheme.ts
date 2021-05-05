import { useEffect, useState } from 'react';
import Theme from 'src/enums/Theme';
import { themes } from 'src/styles/colors';

export const useTheme = (): any => {
  const [theme, setTheme] = useState(themes.light);
  const [themeName, setThemeName] = useState(Theme.Light);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) {
      setTheme(themes.dark);
      setThemeName(Theme.Dark);

      // Also update body background color
      document.body.style.backgroundColor = themes.dark.background.primary;
    }
  }, []);

  return {
    theme,
    setTheme,
    themeName,
  };
};
