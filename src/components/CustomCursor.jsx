import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './CustomCursor.css'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      })

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const growCursor = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
      })
      gsap.to(follower, {
        scale: 1.5,
        duration: 0.3,
      })
    }

    const shrinkCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      })
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
      })
    }

    window.addEventListener('mousemove', moveCursor)

    const interactiveElements = document.querySelectorAll('a, button, .card')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', growCursor)
      el.addEventListener('mouseleave', shrinkCursor)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', growCursor)
        el.removeEventListener('mouseleave', shrinkCursor)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}

export default CustomCursor
