import './globals.css';

export const metadata = {
  title: 'Food Menu',
  description: 'Food cards rendered from the backend API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
