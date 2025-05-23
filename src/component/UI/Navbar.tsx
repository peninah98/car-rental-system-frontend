import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Houses', href: '/houses' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },

]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className={`flex items-center justify-between text-white p-6 lg:px-8 transition-colors duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md' : 'bg-gray-900'
      }`}>
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1 className="text-3xl font-bold">
              <span className="text-gray-700 bg-orange-500 px-2 py-1 rounded">K</span>
              <span className={`${isScrolled ? 'text-gray-600' : 'text-white'}`}>Housing</span>
            </h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <a 
            href="#" 
            className={`${isScrolled ? 'text-white bg-orange-500 px-4 py-2 rounded items-center' : 'text-white bg-orange-500 px-4 py-2 rounded items-center'}`}
          >

            Register <span aria-hidden="true"></span>
          </a>
          <a 
            href="#" 
            className={`${isScrolled ? 'text-orange-500 bg-white border border-orange-500 px-4 py-2 rounded items-center ' : 'text-orange-500 bg-white items-center px-4 py-2 rounded items-center'}`}
          >
            Log in <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              <span className="text-gray-900 bg-orange-500 px-2 py-1 rounded">K</span>
              <span className="text-white ml-1">Housing</span>
            </h1>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}