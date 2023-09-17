export enum Roles {
    SYSTEM='system',
    USER='user',
    ASSISTANT='assistant'
}

export interface MessageObj {
    role: Roles,
    content: string
}