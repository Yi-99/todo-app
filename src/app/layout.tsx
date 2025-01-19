import Navbar from './Navbar';
import Footer from './Footer';

export const metadata = {
  title: 'Todo app',
  description: 'A simple todo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
				<Navbar />
				{children}
				<Footer />
			</body>
    </html>
  )
}