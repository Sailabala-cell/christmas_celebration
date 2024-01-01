import './globals.css'
import { ThemeProvider } from './components/ThemesProvider'





export const metadata = {
  title: 'Christmas',
  description: 'Responsive christmas website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        <ThemeProvider attribute="class" >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
