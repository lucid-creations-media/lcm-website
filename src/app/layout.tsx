import React from "react";
import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <link rel="icon" href="/images/logo/favicon/favicon.ico" sizes="any" />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
