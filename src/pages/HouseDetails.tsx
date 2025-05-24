import { useParams, useNavigate } from 'react-router-dom'
import { Bed, Bath, Ruler } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const houses = Array.from({ length: 40 }).map((_, i) => ({
  id: `${i + 1}`,
  image: `/house1.png`,
  location: `House #${i + 1}, Kigali`,
  price: `$${(100 + i * 5).toLocaleString()}`,
  icons: [
    { icon: <Bed className="w-5 h-5" />, text: `${2 + (i % 3)} Beds` },
    { icon: <Bath className="w-5 h-5" />, text: `${1 + (i % 2)} Bath` },
    { icon: <Ruler className="w-5 h-5" />, text: `${150 + i * 10} m²` },
  ],
  amenities: ['WiFi', 'Air Conditioning', 'Private Parking', 'Smart Lock', 'Backup Power', 'Furnished'],
  moveIn: 'Available immediately',
  landlordCriteria: 'No smoking · No pets · Max 4 tenants',
}))

export default function HouseDetails() {
  const { id } = useParams<{ id: string }>()
  const house = houses.find((h) => h.id === id)
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleBook = () => {
    if (!name || !phone) return alert('Please fill out all fields')
    alert(`Thank you, ${name}, your request to book ${house?.location} has been received!`)
    navigate('/')
  }

  if (!house) return <div className="p-6">House not found</div>

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-6 mt-8"
    >
      <img src={house.image} alt="House" className="w-full h-80 object-cover rounded-lg mb-6" />
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{house.location}</h2>
      <p className="text-xl text-green-600 font-semibold mb-4">{house.price}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {house.icons.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {item.icon}
            <span className="text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {/* Details Column */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-3">About this House</h3>
          <p className="text-gray-600 mb-4">
            This beautiful and spacious home offers comfort, style, and convenience. Located in a serene area of Kigali,
            it provides easy access to public transport, supermarkets, and schools.
          </p>

          <h4 className="font-semibold mt-6 mb-2">Amenities</h4>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {house.amenities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>

          <div className="mt-6">
            <p><span className="font-medium">Move-in:</span> {house.moveIn}</p>
            <p><span className="font-medium">Landlord Criteria:</span> {house.landlordCriteria}</p>
          </div>
        </div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="border rounded-xl shadow-md p-6 bg-white"
        >
          <h3 className="text-lg font-semibold mb-4">Book this house</h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-2 rounded"
            />
            <button
              onClick={handleBook}
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
