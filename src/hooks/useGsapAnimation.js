import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const useGsapAnimation = (animationFn, dependencies = []) => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ref.current) {
        animationFn(ref.current)
      }
    })

    return () => ctx.revert()
  }, dependencies)

  return ref
}

export const useScrollAnimation = (animationFn, dependencies = []) => {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ref.current) {
        animationFn(ref.current)
      }
    })

    return () => ctx.revert()
  }, dependencies)

  return ref
}
