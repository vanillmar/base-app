'use client'

import { 
    Card, 
    CardHeader, 
    CardTitle,
    CardDescription, 
    CardFooter, 
    CardContent 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
    FormField, 
    FormItem, 
    FormLabel, 
    FormControl, 
    FormMessage, 
    Form
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import axiosInstance from '@/lib/axios'
import axios from 'axios'
import { useAuth } from '@/app/providers/AuthProvider'
import { useRouter } from 'next/navigation'
import { type AuthApiResponse } from '@/app/api/types/types'

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
})
type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const { login } = useAuth()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const form = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    })
    
    const onSubmit = async (data: LoginFormInputs) => {
        setLoading(true)
        setErrorMessage('')
    
        try {
            const response = await axiosInstance.post<AuthApiResponse>('/login', data)
            if ('error_type' in response.data) {
                // Handle error response
                setErrorMessage(response.data.error_message) // Correct property usage
                setLoading(false)
                return // Stop further execution
            }
            // Handle successful response (User)
            const { id, name, email, role, canSend, channels, avatarUrl } = response.data
            login({ id, name, email, role, canSend, channels, avatarUrl })
            router.push('/dashboard')
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            setErrorMessage(error.response.data.message || 'Login failed')
          } else {
            setErrorMessage('An unexpected error occurred')
          }
        } finally {
          setLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>{process.env.NEXT_PUBLIC_APP_NAME}</CardTitle>
                        <CardDescription>Enter your credentials to access your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <FormField 
                                    control={form.control} 
                                    name="email" 
                                    render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="mail@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                                    </FormItem>
                                )} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                            <FormField 
                                control={form.control} 
                                name="password" 
                                render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="********" {...field} />
                                </FormControl>
                                <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                                </FormItem>
                            )} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading && (<Loader2 className="animate-spin"/>)}
                            Log In
                        </Button>
                    </CardFooter>
                    {errorMessage && <div className="text-red-600">{errorMessage}</div>}
                </Card>
            </form>
        </Form>
    )
}




