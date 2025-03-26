import { z } from 'zod'

// Define the schema for your environment variables
const envSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().nonempty()
})

// Validate process.env
const result = envSchema.safeParse(process.env)

if (!result.success) {
  throw new Error('Environment variable validation failed')
}

// Export the validated environment variables
export const env = result.data
