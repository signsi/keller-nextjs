'use client'

import { useLayoutEffect, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export default function ScrollReveal() {
  // Set initial hidden state before first paint
  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(22px)'
    })

    document.querySelectorAll<HTMLElement>('[data-reveal-stagger] > *').forEach(el => {
      ;(el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(22px)'
    })
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Individual reveals
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
      const delay = parseFloat(el.dataset.revealDelay ?? '0')
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay,
            ease: 'power2.out',
          })
        },
      })
    })

    // Staggered children
    document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach(parent => {
      const children = Array.from(parent.children) as HTMLElement[]
      ScrollTrigger.create({
        trigger: parent,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
          })
        },
      })
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return null
}
