const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fffbf9]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
