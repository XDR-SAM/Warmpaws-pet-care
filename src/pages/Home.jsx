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

// Import vet images directly
import vet1 from '../assets/vet1.jpg'
import vet2 from '../assets/vet2.jpg'
import vet3 from '../assets/vet3.jpg'

const Home = () => {
  const [services, setServices] = useState([])
  const [winterTips, setWinterTips] = useState([])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error('Error fetching services:', err))

    fetch('/winter-tips.json')
      .then(res => res.json())
      .then(data => setWinterTips(data))
      .catch(err => console.error('Error fetching winter tips:', err))
  }, [])

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
      {/* Hero Slider (Responsive) */}
      <section className="w-full relative overflow-hidden">
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
          className="w-full max-h-[70vh]"
        >
          {[hero1, hero2, hero3].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={img}
                  alt={`Hero ${i + 1}`}
                  className="w-auto h-full max-h-[80vh] object-contain rounded-none sm:rounded-xl mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Popular winter care services */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Popular Winter Care Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Professional services to keep your pets warm and healthy this winter
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {services.slice(0, 8).map((service, index) => (
              <div key={service.serviceId} data-aos="fade-up" data-aos-delay={index * 100}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winter care tips */}
      <section className="py-10 md:py-16 bg-white px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Winter Care Tips for Pets
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Expert advice to keep your furry friends safe and comfortable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {winterTips.map((tip, index) => (
              <div
                key={tip.id}
                className="bg-[#fffbf9] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet our expert vets */}
      <section className="py-10 md:py-16 bg-[#fffbf9] px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Meet Our Expert Vets
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Experienced professionals dedicated to your pet's winter wellness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {expertVets.map((vet, index) => (
              <div
                key={vet.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl text-center transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src={vet.image} alt={vet.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{vet.name}</h3>
                <p className="text-sm sm:text-base text-blue-600 font-semibold mb-1">{vet.specialty}</p>
                <p className="text-sm sm:text-base text-gray-600">{vet.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-10 md:py-16 bg-white px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Join the Warm Paws Family this Winter
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Enjoy full winter care for your pets — from grooming to warm meals, all in one plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {membershipPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all relative ${plan.popular ? 'ring-2 ring-orange-500 transform scale-[1.02]' : ''
                  }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-600">
                    {plan.price}
                    <span className="text-base text-gray-500">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center justify-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8" data-aos="fade-up">
            <p className="text-sm text-gray-600 mb-4">
              Choose a plan that fits your pet's needs — cancel anytime, no extra charges.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
