import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CTA.css'

gsap.registerPlugin(ScrollTrigger)

const CTA = () => {
  const ctaRef = useRef(null)
  const contentRef = useRef(null)
  const circlesRef = useRef([])
  const imagesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out',
      })

      circlesRef.current.forEach((circle, i) => {
        if (circle) {
          gsap.to(circle, {
            rotation: 360,
            duration: 20 + i * 5,
            repeat: -1,
            ease: 'none',
          })
        }
      })

      imagesRef.current.forEach((img, i) => {
        if (img) {
          gsap.from(img, {
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 80%',
            },
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 1,
            delay: i * 0.2,
            ease: 'power3.out',
          })

          gsap.to(img, {
            y: 'random(-20, 20)',
            duration: 'random(3, 5)',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const scatteredImages = [
    { src: '/images/gallery/pf1.jpg', position: 'top-left' },
    { src: '/images/gallery/pf2.jpg', position: 'top-right' },
    { src: '/images/gallery/pf3.jpg', position: 'bottom-left' },
    { src: '/images/gallery/pf4.jpg', position: 'middle-left' },
    { src: '/images/gallery/pf5.jpg', position: 'bottom-right' },
    { src: '/images/gallery/pf6.jpg', position: 'middle-right' },
    { src: '/images/gallery/pf7.jpg', position: 'top-center' },
    { src: '/images/gallery/pf8.jpg', position: 'bottom-center' },
  ]

  return (
    <section className="cta" ref={ctaRef}>
      <div className="cta-background">
        <div className="cta-circle" ref={(el) => (circlesRef.current[0] = el)}></div>
        <div className="cta-circle-2" ref={(el) => (circlesRef.current[1] = el)}></div>

        {scatteredImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Portfolio ${i + 1}`}
            className={`scattered-image ${img.position}`}
            ref={(el) => (imagesRef.current[i] = el)}
          />
        ))}
      </div>

      <div className="cta-content" ref={contentRef}>
        <h2 className="cta-title">
          <span className="gradient-text">Let's Capture</span>
          <br />
          <span className="gradient-text-alt">Your Adventure</span>
        </h2>

        <p className="cta-description">
          Book your mountain photography experience or explore my latest collections
        </p>

        <div className="cta-buttons">
          <button className="cta-button primary">
            <span>Contact Me</span>
            <div className="button-glow"></div>
          </button>
          <button className="cta-button secondary">
            <span>View Collections</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
