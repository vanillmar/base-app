import { type FC } from 'react'

export interface ProtectedRouteProps {
    component: FC;
    roles?: string[];
}
