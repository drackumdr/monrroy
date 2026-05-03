import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Orthopedic Center Cd. Juárez | Dr. Gustavo Monroy · Columna y Rodilla',
  description: 'Especialistas en cirugía de columna, rodilla y traumatología en Cd. Juárez. Hospitales Star Médica, Consultorio 909. Agenda tu cita: (656) 113-2264.',
  keywords: 'ortopedista Ciudad Juárez, cirugía de columna Juárez, cirugía de rodilla, Star Médica consultorio 909, Dr. Monroy',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: 'icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-[#F5F4FA]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Physician", "LocalBusiness"],
              "name": "Orthopedic Center Cd. Juárez",
              "description": "Especialistas en cirugía de columna, rodilla y traumatología",
              "telephone": "+526561132264",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hospitales Star Médica, Consultorio 909",
                "addressLocality": "Cd. Juárez",
                "addressRegion": "Chihuahua",
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 31.6667,
                "longitude": -106.4167
              },
              "url": "https://orthopediccenter.mx",
              "openingHours": ["Mo-Fr 09:00-19:00", "Sa 09:00-13:00"]
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
