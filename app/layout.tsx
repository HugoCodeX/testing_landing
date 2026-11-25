import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unidas, Fuertes y Protagonistas | Comunidad de mujeres',
  description:
    'Una comunidad de mujeres que se encuentra para compartir, disfrutar y celebrar juntas. Descubre nuestros próximos eventos, talleres y encuentros en Concepción, Chile.',
  applicationName: 'Unidas, Fuertes y Protagonistas',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Unidas, Fuertes y Protagonistas',
    description:
      'Un espacio para compartir, disfrutar y celebrar juntas. Conoce nuestros próximos encuentros y sé parte de la comunidad.',
    type: 'website',
    locale: 'es_CL',
    siteName: 'Unidas, Fuertes y Protagonistas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unidas, Fuertes y Protagonistas',
    description:
      'Un espacio para compartir, disfrutar y celebrar juntas. Conoce nuestros próximos encuentros y sé parte de la comunidad.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
