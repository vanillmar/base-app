export default interface User {
    id: number;
    name: string;
    email: string;
    avatarUrl:string;
    role: string;
    canSend: boolean;
    channels: string[]; // Array of strings, representing the channels
}