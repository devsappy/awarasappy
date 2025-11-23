import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Gallery.css'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  const galleryRef = useRef(null)
  const imagesRef = useRef([])
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power3.out',
      })

      imagesRef.current.forEach((img, i) => {
        if (img) {
          gsap.fromTo(
            img,
            {
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
              opacity: 0,
            },
            {
              scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 1,
              },
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              opacity: 1,
            }
          )

          gsap.to(img, {
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
            y: i % 2 === 0 ? -50 : 50,
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  const galleryData = [
    {
      image: '/images/gallery/1.jpg',
      title: 'Sunrise Summit',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      image: '/images/gallery/2.jpg',
      title: 'Alpine Glow',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      image: '/images/gallery/3.jpg',
      title: 'Mountain Vista',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      image: '/images/gallery/4.jpg',
      title: 'Foggy Peaks',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    },
    {
      image: '/images/gallery/5.jpg',
      title: 'Golden Valley',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      image: '/images/gallery/6.jpg',
      title: 'Twilight Ridge',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    },
    {
      image: '/images/gallery/7.jpg',
      title: 'Snowy Heights',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    },
    {
      image: '/images/gallery/8.jpg',
      title: 'Glacier Path',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    },
  ]

  return (
    <section className="gallery" ref={galleryRef}>
      <div className="container">
        <h2 className="gallery-title" ref={titleRef}>
          <span className="gradient-text">Visual Excellence</span>
        </h2>

        <div className="gallery-grid">
          {galleryData.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              ref={(el) => (imagesRef.current[i] = el)}
            >
              <div
                className="gallery-image"
                style={{
                  background: item.gradient,
                  backgroundImage: item.image ? `url(${item.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="image-overlay"></div>
                <div className="image-content">
                  <div className="image-number">{String(i + 1).padStart(2, '0')}</div>
                  {item.title && <div className="image-title">{item.title}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
