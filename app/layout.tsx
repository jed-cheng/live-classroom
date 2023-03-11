import '@/styles/globals.css';
import React from 'react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="overflow-y-scroll bg-zinc-900">
        {children}
      </body>
    </html>
  );
}
