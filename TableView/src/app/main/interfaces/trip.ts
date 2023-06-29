export interface Trip {
    id: number;
    userEmail: string;
    country: string;
    city: string;
    attraction: string;
    restaurant: string;
    likes: number;
    image: string;
    likedByCurrentUser: boolean;
}
