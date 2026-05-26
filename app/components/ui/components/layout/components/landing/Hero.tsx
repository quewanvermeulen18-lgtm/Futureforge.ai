'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Sparkles, ArrowRight, Zap, Target, BookOpen, Trophy } from 'lucide-react'

export function Hero() {
  const features = [
    { icon: Zap, label: 'AI-Powered', desc: 'Smart recommendations' },
    { icon: Target, label: 'Goal Tracking', desc: 'Achieve more daily' },
    { icon: BookOpen, label: 'Skill Building', desc: 'Learn what matters' },
    { icon: Trophy, label: 'Gamified', desc: 'Earn while you learn' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>The future of student success</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-white">Forge Your</span>
            <br />
            <span className="text-gradient">Future with AI</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover opportunities, build your CV, learn valuable skills, and track your goals — all powered by artificial intelligence designed for ambitious students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">Watch Demo</Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div key={feature.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="glass-dark rounded-2xl p-6 hover:bg-white/5 transition-colors">
              <feature.icon className="w-8 h-8 text-primary-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-1">{feature.label}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
