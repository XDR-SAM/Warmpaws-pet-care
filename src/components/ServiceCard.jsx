import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {service.serviceName}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">⭐</span>
            <span className="text-gray-700 font-semibold text-sm">{service.rating}</span>
          </div>
          <span className="text-xl font-bold text-orange-500">${service.price}</span>
        </div>
        <Link to={`/service/${service.serviceId}`}>
          <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-colors duration-300 text-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard