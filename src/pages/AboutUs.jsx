import React from 'react';
import { Link } from 'react-router-dom';
import vet1 from '../assets/vet1.jpg';
import vet2 from '../assets/vet2.jpg';
import vet3 from '../assets/vet3.jpg';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="hero min-h-[400px] bg-gradient-to-r from-orange-50 to-pink-50">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent animate__animated animate__fadeInDown">
                            About WarmPaws
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeInUp">
                            Dedicated to keeping your furry friends happy, healthy, and warm during the winter season. We believe every pet deserves the best care, no matter the weather.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16 px-4 container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1" data-aos="fade-right">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
                        <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                            At WarmPaws, our mission is simple: to provide comprehensive, compassionate, and accessible care for pets during the challenging winter months. We understand that cold weather brings unique challenges for pet owners, from keeping them warm to ensuring they stay active and healthy.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We connect loving pet owners with experienced veterinarians, grooming services, and essential winter care tips to ensure your companions thrive all year round.
                        </p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4" data-aos="fade-left">
                        <div className="stats shadow bg-white border border-orange-100">
                            <div className="stat place-items-center">
                                <div className="stat-title">Happy Pets</div>
                                <div className="stat-value text-orange-500">500+</div>
                                <div className="stat-desc">Winter season</div>
                            </div>
                        </div>
                        <div className="stats shadow bg-white border border-pink-100">
                            <div className="stat place-items-center">
                                <div className="stat-title">Expert Vets</div>
                                <div className="stat-value text-pink-500">20+</div>
                                <div className="stat-desc">Available daily</div>
                            </div>
                        </div>
                        <div className="stats shadow bg-white border border-orange-100 col-span-2">
                            <div className="stat place-items-center">
                                <div className="stat-title">Services Completed</div>
                                <div className="stat-value text-secondary">1,200+</div>
                                <div className="stat-desc">Grooming & Checkups</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-orange-50 py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Experts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="100">
                            <figure className="px-10 pt-10">
                                <div className="avatar">
                                    <div className="w-32 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                                        <img src={vet1} alt="Dr. Sarah Smith" className="object-cover" />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-gray-800">Dr. Sarah Smith</h2>
                                <p className="text-orange-500 font-medium">Senior Veterinarian</p>
                                <p className="text-gray-500 text-sm">Specialist in cold-weather animal care with 10+ years of experience.</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="200">
                            <figure className="px-10 pt-10">
                                <div className="avatar">
                                    <div className="w-32 rounded-full ring ring-pink-400 ring-offset-base-100 ring-offset-2">
                                        <img src={vet2} alt="Dr. Michael Chen" className="object-cover" />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-gray-800">Dr. Michael Chen</h2>
                                <p className="text-pink-500 font-medium">Pet Nutritionist</p>
                                <p className="text-gray-500 text-sm">Expert in winter diet plans to keep pets energetic and warm.</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="300">
                            <figure className="px-10 pt-10">
                                <div className="avatar">
                                    <div className="w-32 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                                        <img src={vet3} alt="Emily Davis" className="object-cover" />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-gray-800">Emily Davis</h2>
                                <p className="text-orange-500 font-medium">Lead Groomer</p>
                                <p className="text-gray-500 text-sm">Professional groomer specializing in winter coat maintenance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 px-4 container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to give your pet the best winter care?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join thousands of happy pet owners who trust WarmPaws for their pet's winter needs. Sign up today and get access to exclusive tips and services.
                </p>
                <Link to="/signup" className="btn btn-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                    Get Started Now
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;
