import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
interface HouseCardProps{
    image:string,
    location:string,
    icons?:{
        icon:ReactNode,
        text:string
    }[],
    price:string,
    onViewMore:()=>void
}

export default function HouseCard({ image, location, icons = [], price, onViewMore }:HouseCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      <div className="relative h-52 w-full">
        <img
          src={image}
          alt={location}
          className="h-full w-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {price}
        </span>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">{location}</h2>

        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          {icons.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onViewMore}
          className="mt-3 inline-block px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded hover:bg-orange-600 transition-all"
        >
          View More
        </button>
      </div>
    </motion.div>
  )
}
