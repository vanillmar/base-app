import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string): string {
  // Split the name by spaces and filter out empty strings
  const words = name.split(' ').filter(word => word.length > 0)

  if (words.length >= 2) {
    // If there are at least two words, take the first letter of the first two
    return (words[0][0] + words[1][0]).toUpperCase()
  } else if (words.length === 1) {
    // If there's only one word, take the first two letters
    return words[0].slice(0, 2).toUpperCase()
  }
  return '' // If no valid words, return an empty string
}

export function getFirstNameFromEmail(email: string): string {
  const [firstName] = email.split('@') // Split the email by '@' and take the first part
  return firstName.replace(/\./g, ' ') // Replace all dots with spaces
}

export function obfuscateEmail(email: string, maxLength: number = 20): string {
  const [localPart, domain] = email.split('@')
  if (!domain) return email

  const domainLength = domain.length
  const localMaxLength = Math.max(maxLength - domainLength - 3, 3)
  if (email.length <= maxLength) {
    return email
  }

  const visibleLocalPartLength = Math.ceil(localMaxLength / 2)
  return `${localPart.slice(0, visibleLocalPartLength)}...${localPart.slice(-visibleLocalPartLength)}@${domain}`
}
