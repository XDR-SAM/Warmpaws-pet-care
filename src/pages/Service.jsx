import { useState, useEffect } from 'react'
import ServiceCard from '../components/ServiceCard'
import 'animate.css'

const Service = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch services data
    fetch('/services.json')
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching services:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffbf9]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          {/* <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto"></div> */}
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fffbf9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto animate__animated animate__fadeIn">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Availavle Service</h1>
          {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Services</h1> */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive winter pet care services designed to keep your furry friends warm, healthy, and happy during the cold season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div> */}

        {services.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🐾</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services available</h3>
            <p className="text-gray-500">Please check back later for available services.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Service