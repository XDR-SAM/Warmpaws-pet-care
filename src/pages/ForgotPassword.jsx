import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../components/AuthProvider'
import toast from 'react-hot-toast'
import 'animate.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState('')
  
  const { resetPassword } = useAuth()
  const location = useLocation()

  useEffect(() => {
    // Pre-fill email if passed from login page
    if (location.state?.email) {
      setEmail(location.state.email)
    }
    // if (location.state && location.state.email) {
    //   setEmail(location.state.email)
    // }
  }, [location.state])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const result = await resetPassword(email)
      if (result.success) {
        setIsSubmitted(true)
        toast.success('Password reset email sent!')
        // toast.succes('Password reset email sent!')
        window.open('https://mail.google.com', '_blank') 
      } else {
        toast.error(result.error)
        // toast.error('Failed to send reset email')
      }
    } catch (error) {
      toast.error('An error occurred while sending reset email')
      // console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGmailRedirect = () => {
    window.open('https://mail.google.com', '_blank')
    // window.location.href = 'https://mail.google.com'
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffbf9] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 animate__animated animate__fadeIn">
          <div className="text-center bg-white rounded-2xl shadow-xl p-8">
            <div className="mx-auto h-16 w-16 text-green-600 mb-6">
              <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Check your email
            </h2>
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Email Sent Successfully
            </h2> */}
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to <span className="font-semibold text-orange-600">{email}</span>
            </p>
            <div className="space-y-4">
              <button
                onClick={handleGmailRedirect}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200"
              >
                Open Gmail
              </button>
              <Link
                to="/login"
                className="block text-center font-medium text-orange-600 hover:text-orange-500"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffbf9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate__animated animate__fadeIn">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Forgot your password?
          </h2>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label> */}
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? 'Sending...' : 'Send reset link'}
            </button>
            {/* <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 disabled:opacity-50 transition-all duration-200"
            >
              {isLoading ? 'Sending...' : 'Send reset link'}
            </button> */}

            <div className="text-center">
              <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
