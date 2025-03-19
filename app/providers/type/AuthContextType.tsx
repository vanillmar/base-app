import type User from '@/app/user/type/user'

export default interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}
