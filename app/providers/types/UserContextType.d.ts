import type User from '@/app/user/types/user'

export default interface UserAuthContext {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}
