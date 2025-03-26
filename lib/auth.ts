import { cookies } from 'next/headers'

export async function isAuthenticated() {
  const cookieStore = cookies()
  return (await cookieStore).has('auth_token') // Replace with your actual authentication check
}
