import { StatCard } from '@/components/custom-ui/stat-card'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'

export default function DashboardPage({}) {
    return (
        <main className="p-6">
        <h1 className="mb-4 text-3xl font-bold">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Revenue" value="$45,231.89" icon={<DollarSign className="h-4 w-4 text-muted-foreground" />} />
          <StatCard title="Subscriptions" value="+2350" icon={<Users className="h-4 w-4 text-muted-foreground" />} />
          <StatCard title="Sales" value="+12,234" icon={<CreditCard className="h-4 w-4 text-muted-foreground" />} />
          <StatCard title="Active Now" value="+573" icon={<Activity className="h-4 w-4 text-muted-foreground" />} />
        </div>
      </main>
    )
}