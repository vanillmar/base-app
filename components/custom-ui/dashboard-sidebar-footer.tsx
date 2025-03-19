import { ChevronsUpDown, LogOut, User as UserIcon } from 'lucide-react'
import {
  SidebarFooter,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type User from '@/app/user/type/user'
import { getInitials, obfuscateEmail } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export interface DashboardSidebarFooterProps {
  user: User,
  logout: () => void
} 

export default function DashboardSidebarFooter({ user, logout }: DashboardSidebarFooterProps) {
  
  const router = useRouter()

  const accountRedirect = () => {
    router.push('/account')
  } 
  
  return (
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{getInitials( user.name)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">{user.name}</span>
                <span className="text-xs text-muted-foreground">
                  { obfuscateEmail(user.email, 10) }
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>          
            </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={user.avatarUrl}
                  alt={user.name}
                />
                <AvatarFallback className="rounded-lg">
                { getInitials(user.name) }
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {user.name}
                </span>
                <span className="truncate text-xs">
                  {obfuscateEmail(user.email, 10)}
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={accountRedirect} 
            >
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Account settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={logout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
  )
}

