import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ServiceCard from '../components/ServiceCard'
import hero1 from '../assets/hero1.png'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.png'

//Import vet images directly (so Netlify can load them no error)
import vet1 from '../assets/vet1.jpg'
import vet2 from '../assets/vet2.jpg'
import vet3 from '../assets/vet3.jpg'

const Home = () => {
  const [services, setServices] = useState([])
  const [winterTips, setWinterTips] = useState([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    // AOS.init({ duration: 800, once: true })

    // Fetch services data
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Error fetching services:', err))

    // Fetch winter tips data
    fetch('/winter-tips.json')
      .then(res => res.json())
      .then(data => setWinterTips(data))
      .catch(err => console.error('Error fetching winter tips:', err))
  }, [])

  // Static expert vets dataset 
  const expertVets = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Winter Pet Care Specialist",
      experience: "8 years",
      image: vet1
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Pet Nutrition Expert",
      experience: "12 years",
      image: vet2
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Emergency Pet Care",
      experience: "6 years",
      image: vet3
    }
  ]

  const membershipPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "800৳",
      period: "month",
      features: [
        "One grooming session",
        "Coat cleaning",
        "Warm blanket service"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Comfort Plan",
      price: "1,200৳",
      period: "month",
      features: [
        "Grooming twice a month",
        "Paw treatment",
        "Nutritious winter meals"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "1,800৳",
      period: "month",
      features: [
        "Weekly grooming",
        "Health checkups",
        "Coat fitting",
        "Warm bedding",
        "Meal delivery"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-[#fffbf9]">
      {/* Hero slider option fix */}
      <section className="w-full ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full"
        >
          {/* <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="w-full"
        > */}
          <SwiperSlide>
            <div className="w-full">
              <img 
                src={hero1} 
                alt="Winter Pet Care" 
                className="w-full h-auto object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img 
                src={hero2} 
                alt="Pet Grooming" 
                className="w-full h-auto object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img 
                src={hero3} 
                alt="Pet Boarding" 
                className="w-full h-auto object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Popular winter careservices */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Winter Care Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional services to keep your pets warm and healthy this winter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={service.serviceId} data-aos="fade-up" data-aos-delay={index * 100}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={service.serviceId} data-aos="fade-up" data-aos-delay={index * 100}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* winter care tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Winter Care Tips for Pets
            </h2>
            <p className="text-xl text-gray-600">
              Expert advice to keep your furry friends safe and comfortable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {winterTips.map((tip, index) => (
              <div 
                key={tip.id} 
                className="bg-[#fffbf9] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* meet our expert vets  */}
      <section className="py-16 bg-[#fffbf9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Vets
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your pet's winter wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertVets.map((vet, index) => (
              <div 
                key={vet.id} 
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  {/* <div className="w-32 h-32 mx-auto mb-4 rounded-full"> */}
                  <img 
                    src={vet.image} 
                    alt={vet.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vet.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{vet.specialty}</p>
                <p className="text-gray-600">{vet.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* warm paws meembership plans ui  */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join the Warm Paws Family this Winter
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Enjoy full winter care for your pets — from grooming to warm meals, all in one plan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${
                  plan.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
                }`}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-500">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  plan.popular 
                    ? 'bg-orange-500 text-white hover:bg-orange-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8" data-aos="fade-up">
            <p className="text-gray-600 mb-6">
              Choose a plan that fits your pet's needs — cancel anytime, no extra charges.
            </p>
            {/* <p className="text-gray-600 mb-6">
              Choose a plan that fits your pet's needs — cancel anytime.
            </p> */}
            <button className="btn btn-primary btn-lg">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home