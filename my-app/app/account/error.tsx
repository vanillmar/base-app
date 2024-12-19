'use client'

import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

export default function AccountErrorPage({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container mx-auto py-10">
      <Alert variant="destructive" className="max-w-md mx-auto">
        <AlertCircle className="h-5 w-5" />
        <AlertTitle>Network Error</AlertTitle>
        <AlertDescription className="mb-4">
          {error.message || 'Unable to load page'}
        </AlertDescription>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            onClick={() => reset()}
          >
            Try Again
          </Button>
          <Button 
            variant="secondary"
            onClick={() => window.location.href = '/dashboard'}
          >
            Go to Dashboard
          </Button>
        </div>
      </Alert>
    </div>
  )
}