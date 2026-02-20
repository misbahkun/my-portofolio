import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="content">
          <div className="container mx-auto max-w-[65ch]! px-3">
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
