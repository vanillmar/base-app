import { Skeleton } from '@/components/custom-ui/skeleton'

export default function UserLoadingPage() {
    return ( 
        <div  className="p-6 space-y-6">
            <Skeleton data-testid="skeleton-title" className="h-9 w-[200px]" />
                <div className="space-y-4">
                    <Skeleton data-testid="skeleton-section" className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[350px]" />
                    <Skeleton className="h-4 w-[300px]" />
                </div>
            <Skeleton data-testid="skeleton-large" className="h-[300px] w-full" />
        </div>
    )
}