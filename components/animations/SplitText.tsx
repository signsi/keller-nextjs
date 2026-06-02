'use client'

import { useLayoutEffect, useRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import SplitType from 'split-type'

type Trigger = 'mount' | 'scroll'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props<T extends ElementType> = {
  as?: T
  trigger?: Trigger
  delay?: number
  stagger?: number
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyTag = any

export default function SplitText<T extends ElementType = 'h2'>({
  as,
  trigger = 'scroll',
  delay = 0,
  stagger = 0.055,
  children,
  ...props
}: Props<T>) {
  const Tag = (as ?? 'h2') as AnyTag
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const split = new SplitType(el, { types: 'words' })
    if (!split.words?.length) return

    gsap.set(split.words, { y: 24, opacity: 0 })

    const animate = () =>
      gsap.to(split.words!, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger,
        delay,
        ease: 'power3.out',
      })

    if (trigger === 'mount') {
      animate()
    } else {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: animate,
      })
    }

    return () => {
      split.revert()
      ScrollTrigger.getAll()
        .filter(t => t.vars.trigger === el)
        .forEach(t => t.kill())
    }
  }, [trigger, delay, stagger])

  return (
    <Tag ref={ref} {...props}>
      {children}
    </Tag>
  )
}
