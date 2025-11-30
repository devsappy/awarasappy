import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Balatro from './Balatro'
import './Showcase.css'

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
  const cardsRef = useRef([])
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  const showcaseItems = [
    {
      title: 'Kangchenjunga',
      description: 'The Five Treasures of Snow - Third highest peak in the world',
      image: '/images/gallery/kanchenjunga.jpg',
      color: '#6366f1',
    },
    {
      title: 'Mount Everest',
      description: 'The roof of the world - Highest peak on Earth',
      image: '/images/gallery/everest.jpg',
      color: '#8b5cf6',
    },
    {
      title: 'Kailash',
      description: 'Sacred mountain of spiritual significance and divine beauty',
      image: '/images/gallery/kailash.jpg',
      color: '#ec4899',
    },
    {
      title: 'Makalu',
      description: 'The Great Black - Fifth highest mountain in the world',
      image: '/images/gallery/makalu.jpg',
      color: '#f59e0b',
    },
    {
      title: 'Annapurna',
      description: 'Goddess of the Harvests - Majestic and treacherous',
      image: '/images/gallery/annapurna.jpg',
      color: '#10b981',
    },
    {
      title: 'Ama Dablam',
      description: 'Mother\'s Necklace - Most beautiful mountain in the Himalayas',
      image: '/images/gallery/ama-dablam.jpg',
      color: '#3b82f6',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })

      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 30%',
              scrub: 1,
            },
            opacity: 0,
            y: 100,
            rotationX: -20,
            scale: 0.9,
          })

          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateX = (y - centerY) / 15
            const rotateY = (centerX - x) / 15

            gsap.to(card, {
              rotationX: rotateX,
              rotationY: rotateY,
              duration: 0.5,
              ease: 'power2.out',
              transformPerspective: 1000,
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              duration: 0.5,
              ease: 'power2.out',
            })
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="showcase" ref={sectionRef}>
      <div className="balatro-bg">
        <Balatro
          isRotate={false}
          mouseInteraction={true}
          pixelFilter={700}
          color1="#D4A857"
          color2="#1a1a2e"
          color3="#000000"
          contrast={3.0}
          lighting={0.5}
          spinAmount={0.3}
          spinSpeed={5.0}
        />
      </div>
      <div className="showcase-bg"></div>
      <div className="container">
        <h2 className="showcase-title" ref={titleRef}>
          <span className="gradient-text">My Photography Journey</span>
        </h2>

        <div className="showcase-grid">
          {showcaseItems.map((item, i) => (
            <div
              key={i}
              className="showcase-card"
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ '--card-color': item.color }}
            >
              <div className="card-bg-glow"></div>
              {item.image ? (
                <div className="card-image-container">
                  <img src={item.image} alt={item.title} className="card-image" />
                </div>
              ) : (
                <div className="card-icon">{item.icon}</div>
              )}
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <div className="card-gradient-border"></div>
              <div className="card-shine-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
