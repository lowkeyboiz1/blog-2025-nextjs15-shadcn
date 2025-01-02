import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-background text-foreground'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold'>Company Name</h2>
            <p className='text-sm leading-6 text-muted-foreground'>Empowering innovation through cutting-edge technology solutions. Join us in shaping the future of digital experiences.</p>
            <div className='flex space-x-4'>
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href='#' className='transform text-muted-foreground transition-colors duration-300 hover:scale-110 hover:text-foreground' aria-label={`Visit our ${Icon.name} page`}>
                  <Icon className='h-6 w-6' />
                </a>
              ))}
            </div>
          </div>

          {['Products', 'Company', 'Resources'].map((section) => (
            <div key={section} className='space-y-6'>
              <h3 className='text-lg font-semibold'>{section}</h3>
              <ul className='space-y-4'>
                {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((item) => (
                  <li key={item}>
                    <a href='#' className='group flex items-center text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground'>
                      <span className='group-hover:underline'>{item}</span>
                      <ArrowRight className='ml-2 h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex w-full items-center justify-center border-t border-border py-6 text-center text-sm'>
          <p className='w-fit text-muted-foreground'>&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
