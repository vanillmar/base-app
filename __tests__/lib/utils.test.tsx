import { cn, getInitials, getFirstNameFromEmail, obfuscateEmail } from '@/lib/utils' // Adjust path if needed
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

jest.mock('clsx', () => ({
  clsx: jest.fn((...inputs) => inputs.join(' ')) // Mock clsx behavior
}))

jest.mock('tailwind-merge', () => ({
  twMerge: jest.fn(classes => classes) // Mock tailwind-merge behavior
}))

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('text-red-500', 'bg-white', 'p-4')
    expect(twMerge).toHaveBeenCalledWith(clsx(['text-red-500', 'bg-white', 'p-4']))
    expect(result).toBe('text-red-500,bg-white,p-4')
  })
})

describe('getInitials function', () => {
  it('returns initials for full name', () => {
    expect(getInitials('John Doe')).toBe('JD')
  })

  it('returns initials for multiple words', () => {
    expect(getInitials('Maria Clara Silva')).toBe('MC')
  })

  it('returns two letters for a single word', () => {
    expect(getInitials('Elon')).toBe('EL')
  })

  it('handles extra spaces correctly', () => {
    expect(getInitials('  John   Doe ')).toBe('JD')
  })

  it('returns empty string for an empty input', () => {
    expect(getInitials('')).toBe('')
  })
})

describe('getFirstNameFromEmail function', () => {
  it('extracts first name from email without dots', () => {
    expect(getFirstNameFromEmail('john@example.com')).toBe('john')
  })

  it('extracts first name from email with dots', () => {
    expect(getFirstNameFromEmail('john.doe@example.com')).toBe('john doe')
  })

  it('handles emails with multiple dots', () => {
    expect(getFirstNameFromEmail('maria.clara.silva@example.com')).toBe('maria clara silva')
  })

  it('returns empty string for an invalid email format', () => {
    expect(getFirstNameFromEmail('@example.com')).toBe('')
  })
})

describe('obfuscateEmail function', () => {
  // it('obfuscates long email correctly', () => {
  //     expect(obfuscateEmail('johndoe123456789@example.com', 20)).toBe('johndo...6789@example.com')
  // })

  it('does not obfuscate short emails', () => {
    expect(obfuscateEmail('john@example.com', 50)).toBe('john@example.com')
  })

  it('keeps short emails unchanged when below maxLength', () => {
    expect(obfuscateEmail('john@example.com', 20)).toBe('john@example.com')
  })

  // it('handles minimum local part length properly', () => {
  //     expect(obfuscateEmail('jd@example.com', 10)).toBe('jd@example.com')
  // })

  // it('handles emails with a long domain correctly', () => {
  //     expect(obfuscateEmail('username@averylongdomain.com', 25)).toBe('use...ame@averylongdomain.com')
  // })

  it('handles emails where maxLength barely allows obfuscation', () => {
    expect(obfuscateEmail('longname@example.com', 15)).toBe('lo...me@example.com')
  })

  it('returns the same email if domain is missing', () => {
    expect(obfuscateEmail('invalidEmail')).toBe('invalidEmail')
  })
})
