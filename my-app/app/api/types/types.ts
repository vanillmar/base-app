import type User from '@/app/user/type/user'

export type ErrorResponse = {
    error_type: 'error';
    error_message: string;
};

export type AuthApiResponse = User | ErrorResponse;
