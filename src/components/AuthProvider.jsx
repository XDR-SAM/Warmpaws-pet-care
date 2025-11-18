import { createContext, useContext, useState, useEffect } from 'react'
import { 
  signInWithEmailAndPassword,  createUserWithEmailAndPassword,  signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail,updateProfile
} from 'firebase/auth'
import { auth } from '../firebase/config'
// import { auth } from '../firebase/firebase.config'

const AuthContext = createContext()
// const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  // const [authError, setAuthError] = useState(null)
  // const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsLoading(false)
    })

    return unsubscribe
    // return () => unsubscribe()
  }, [])

  const login = async (email, password) => {
    setIsLoading(true)
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: result.user }
      // return result.user
    } catch (error) {
      return { success: false, error: error.message }
      // return { success: false, error: error.code }
      // console.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name, email, password, photoURL) => {
    setIsLoading(true)
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL || null
      })
      // await updateProfile(result.user, { displayName: name, photoURL: photoURL })
      // await updateProfile(auth.currentUser, { displayName: name, photoURL })
      return { success: true, user: result.user }
    } catch (error) {
      return { success: false, error: error.message }
      // throw error
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      return { success: true, user: result.user }
      // return result
    } catch (error) {
      return { success: false, error: error.message }
      // console.log(error)
      // return { success: false }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      await signOut(auth)
      return { success: true }
      // setUser(null)
    } catch (error) {
      return { success: false, error: error.message }
      // console.error('Logout error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const resetPassword = async (email) => {
    setIsLoading(true)
    try {
      await sendPasswordResetEmail(auth, email)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
      // throw new Error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const updateUserProfile = async (name, photoURL) => {
    setIsLoading(true)
    // if (!auth.currentUser) return { success: false, error: 'No user logged in' }
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL || null
      })
      // setUser(auth.currentUser)
      // setUser({...auth.currentUser})
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
      // console.log('Profile update failed', error)
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    user,
    login,
    signup,
    loginWithGoogle,
    logout,
    resetPassword,
    updateUserProfile,
    isLoading
  }
  // const value = { user, login, signup, loginWithGoogle, logout, resetPassword, updateUserProfile, isLoading, authError }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}