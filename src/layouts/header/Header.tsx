'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY

        if (currentScrollY > lastScrollY && currentScrollY > 70) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }

        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader)

      return () => {
        window.removeEventListener('scroll', controlHeader)
      }
    }
  }, [lastScrollY])

  return (
    <header className={`sticky left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-sm transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='page flex-center-between'>
        <Link href='/' className='text-2xl font-bold text-primary'>
          Logo
        </Link>
        <nav className='hidden space-x-4 md:flex'>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className='text-foreground transition-colors hover:text-primary'>
              {item.label}
            </Link>
          ))}
        </nav>
        <Button variant='outline' size='icon' className='md:hidden'>
          <Menu className='h-6 w-6' />
          <span className='sr-only'>Open menu</span>
        </Button>
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
