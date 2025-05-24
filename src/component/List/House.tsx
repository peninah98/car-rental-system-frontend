import { useState, useEffect } from 'react'
import { Bed, Bath, Ruler } from 'lucide-react'
import HouseCard from '../UI/cards/House'
import { useNavigate } from 'react-router-dom'

const houses = Array.from({ length: 40 }).map((_, i) => ({
  id: i + 1,
  image: `/house1.png`, // Correct path
  location: `House #${i + 1}, Kigali`,
  price: `$${(100 + i * 5).toLocaleString()}`,
  icons: [
    { icon: <Bed className="w-4 h-4" />, text: `${2 + (i % 3)} Beds` },
    { icon: <Bath className="w-4 h-4" />, text: `${1 + (i % 2)} Bath` },
    { icon: <Ruler className="w-4 h-4" />, text: `${150 + i * 10} m²` },
  ],
}))

export default function HouseList() {
  const [visibleCount, setVisibleCount] = useState(12)
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()


  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768
      setIsMobile(isMobileView)
      setVisibleCount(isMobileView ? 12 : 20)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + (isMobile ? 6 : 8))
  }

  const showMoreVisible = visibleCount < houses.length

  return (
    <section className="p-6 max-w-7xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore Available Houses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {houses.slice(0, visibleCount).map((house) => (
          <HouseCard
            key={house.id}
            image={house.image}
            location={house.location}
            price={house.price}
            icons={house.icons}
            onViewMore={() => navigate(`/houses/${house.id}`)}
            />
        ))}
      </div>

      {showMoreVisible && (
        <div className="mt-8 text-center">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 rounded-md bg-gray-500 text-white hover:bg-orange-600 transition"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  )
}
