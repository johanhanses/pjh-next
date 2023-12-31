'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
// import { Button } from './Form/Button'
// import { Input } from './Form/Input'
// import { Spinner } from './Icons/Spinner'
// import { Toast } from './Toast'

export const AuthForm = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const session = useSession()

  useEffect(() => {
    if (session.status === 'authenticated') return router.push('/cover-letter')
  }, [router, session])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    setError('')
    e.preventDefault()

    try {
      const response = await signIn('credentials', {
        ...values,
        redirect: false,
      })

      if (response && response.ok) {
        setLoading(false)
        return router.refresh()
      }

      setError('Wrong credentials...')
      setLoading(false)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      setError('Other error...')
      setLoading(false)
    }
  }

  return (
    <>
      <form
        className="mx-auto w-full space-y-2 sm:w-1/2 lg:w-1/3"
        onSubmit={handleSubmit}
      >
        <input
          autoCapitalize="none"
          autoComplete="username"
          autoCorrect="off"
          disabled={loading}
          required
          name="username"
          placeholder="Username"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <input
          required
          // togglevisibility={true.toString()}
          name="password"
          disabled={loading}
          placeholder="Password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <button type="submit" title="Login" disabled={loading}>
          {loading ? /*<Spinner />*/ 'loading...' : 'Login'}
        </button>
      </form>
      {/* <Toast message={error} type="error" /> */}
    </>
  )
}
