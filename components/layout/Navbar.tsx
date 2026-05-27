'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Menu, X, Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">FutureForge</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {!loading && (
              <>
                {user ? (
                  <>
                    <Link href="/dashboard">
                      <Button variant="ghost" size="sm">Dashboard</Button>
                    </Link>
                    <Button size="sm" onClick={handleLogout}>Logout</Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="ghost" size="sm">Sign In</Button>
                    </Link>
                    <Link href="/signup">
                      <Button size="sm">Get Started</Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-white">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-slate-300 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                {!loading && (
                  <>
                    {user ? (
                      <>
                        <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button className="w-full">Dashboard</Button>
                        </Link>
                        <Button variant="outline" className="w-full" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>Logout</Button>
                      </>
                    ) : (
                      <>
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button variant="outline" className="w-full">Sign In</Button>
                        </Link>
                        <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button className="w-full">Get Started</Button>
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
