import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const particlesRef = useRef([])
  const glowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(titleRef.current.children, {
        opacity: 0,
        y: 100,
        rotationX: -90,
        stagger: 0.1,
        duration: 1,
        ease: 'back.out(1.7)',
      })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            scale: 0.5,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        )

      gsap.to(glowRef.current, {
        scale: 1.5,
        opacity: 0.3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* Video Background */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/gallery/everest.jpg"
      >
        <source src="/images/gallery/video.mp4" type="video/mp4" />
      </video>

      <div className="particles-hero">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="particle-hero"
            ref={(el) => (particlesRef.current[i] = el)}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="glow-hero" ref={glowRef}></div>

      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <span className="title-word gradient-text">AWARA</span>
          <span className="title-word gradient-text-alt">SAPPY</span>
        </h1>

        <p className="hero-subtitle" ref={subtitleRef}>
          अवारा सैपी
        </p>

        <button className="hero-cta" ref={ctaRef}>
          <span>View Gallery</span>
          <div className="cta-glow"></div>
        </button>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
