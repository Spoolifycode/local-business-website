import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heading, Text } from '@/components/ui/typography'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <span className="text-6xl sm:text-8xl font-bold text-gray-300">404</span>
        </div>
        
        <Heading level={1} className="mb-4">
          Page Not Found
        </Heading>
        
        <Text className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </Text>
        
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full">
              Return Home
            </Button>
          </Link>
          
          <Link href="/garages">
            <Button variant="outline" className="w-full">
              Browse Garages
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}