import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MdWbSunny, MdNightsStay, MdMenu, MdClose } from 'react-icons/md'
import { useTheme } from '../hooks/useTheme'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  const navItems = [
    { to: '/', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Reach me!' },
  ]

  const ThemeIcon = isDark ? MdNightsStay : MdWbSunny

  return (
    <header>
      <nav>
        <div className="flex justify-center italic px-8 py-3 text-center">
          <div className="w-1/3" />
          <h3 className="flex justify-center items-center mt-2 mb-3 text-xl w-1/3">
            <Link
              to="/"
              className="decoration-none dark:text-white!"
            >
              Misbah
            </Link>
          </h3>
          <div className="flex items-center w-1/3 gap-3 justify-end">
            <button
              onClick={toggle}
              className="bg-transparent border-none block md:hidden p-2"
              type="button"
              aria-label="Toggle Theme"
            >
              <ThemeIcon className="text-xl" />
            </button>
            <button
              className="bg-transparent border-none inline-block md:hidden p-2"
              type="button"
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <MdClose className="text-xl" />
              ) : (
                <MdMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>

        <div className={`${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex justify-center list-none flex-col gap-5 lg:p-0 lg:text-center md:flex-row p-0 pr-8 text-right">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="hidden md:block">
              <button
                onClick={toggle}
                className="bg-transparent border-none p-0 navbar__link"
                type="button"
                aria-label="Toggle Theme"
              >
                <ThemeIcon />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
