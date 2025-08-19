import React from 'react'

const StarBackground = () => {
  const [stars, setStars] = React.useState([])
  const [meteors, setMeteors] = React.useState([])

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    )

    const newStars = []
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2
      })
    }
    setStars(newStars)
  }

  const generateMeteors = () => {
    const numberOfMeteors = 4

    const newMeteors = []
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 20,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3
      })
    }
    setMeteors(newMeteors)
  }

  React.useEffect(() => {
    generateStars()
    generateMeteors()

    const handleResize = () => {
      generateStars()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {stars.map((star) => (
        <div
          key={star.id}
          className='star animate-pulse-subtle'
          style={{
            left: star.x + '%',
            top: star.y + '%',
            width: star.size + 'px',
            height: star.size + 'px',
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className='meteor animate-meteor'
          style={{
            left: meteor.x + '%',
            top: meteor.y + '%',
            width: meteor.size * 50 + 'px',
            height: meteor.size * 2 + 'px',
            backgroundColor: 'white',
            borderRadius: '50%',
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`
          }}
        />
      ))}
    </div>
  )
}

export default StarBackground
