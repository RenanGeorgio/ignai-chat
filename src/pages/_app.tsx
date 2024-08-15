import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "./global.css";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  document.body.classList?.remove('loading');

  return (
    <ThemeProvider>
      <AuthProvider>
        <AnyComponent {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;