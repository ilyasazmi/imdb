import Header from '@/components/Header'
import './globals.css'
import Provider from './Provider'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <Navbar />
          <SearchBox />
          {children}

        </Provider>
      </body>
    </html>
  )
}
