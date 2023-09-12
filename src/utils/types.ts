export type TEmployee = {
    id: number | string;
    name: string;
    age: number;
    subscription: Subscription;
    employed: boolean;
}

export enum Subscription{
    Subscribed,
    NotSubscribed,
    Other
}