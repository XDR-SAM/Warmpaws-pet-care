import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../components/AuthProvider'
import toast from 'react-hot-toast'
import 'animate.css'

const ServiceDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [service, setService] = useState(null)
  const [isBooking, setIsBooking] = useState(false)
  // const [loading, setLoading] = useState(true)
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    // Check if user is logged in
    if (!user) {
      navigate('/login', { state: { from: { pathname: `/service/${id}` } } })
      return
    }
    // if (!user) {
    //   navigate('/login')
    //   return
    // }

    // Fetch service data
    fetch('/services.json')
      .then(res => res.json())
      .then(data => {
        const foundService = data.find(s => s.serviceId === parseInt(id))
        if (foundService) {
          setService(foundService)
        } else {
          navigate('/')
        }
      })
      .catch(error => {
        console.error('Error fetching service:', error)
        navigate('/')
        // toast.error('Failed to load service')
      })
  }, [id, user, navigate])

  const handleBookingChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    })
  }

  const handleBookService = async (e) => {
    e.preventDefault()
    setIsBooking(true)
    
    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Service booked successfully!')
      // toast.succes('Service booked successfully!')
      setBookingForm({ name: '', email: '' })
    } catch (error) {
      toast.error('Failed to book service')
      // console.log(error)
    } finally {
      setIsBooking(false)
    }
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffbf9]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          {/* <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto"></div> */}
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fffbf9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto animate__animated animate__fadeIn">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="h-64 w-full object-cover md:h-full"
                src={service.image}
                alt={service.serviceName}
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{service.rating}</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.serviceName}</h1>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Provider:</h3>
                {/* <h3 className="text-lg font-bold text-gray-900 mb-3">Service Provider:</h3> */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">{service.providerName}</p>
                  <p className="text-gray-600">{service.providerEmail}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">{service.slotsAvailable} slots available</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600">{service.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-bold text-gray-900">${service.price}</span>
                  <span className="text-gray-600">Per session</span>
                </div>
                
                <form onSubmit={handleBookService} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={bookingForm.name}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={bookingForm.email}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isBooking}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isBooking ? 'Booking...' : 'Book Now'}
                  </button>
                  {/* <button
                    type="submit"
                    disabled={isBooking}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 disabled:opacity-50 transition-all duration-200"
                  >
                    {isBooking ? 'Booking...' : 'Book Now'}
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails