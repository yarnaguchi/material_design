import { useState, VFC } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';

import { MiniDrawer } from './components/Drawer';

export const App: VFC<Record<string, never>> = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MiniDrawer darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
};
