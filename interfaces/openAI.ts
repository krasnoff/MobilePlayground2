export enum Roles {
    SYSTEM='system',
    USER='user',
    ASSISTANT='assistant',
    REDIRECT='redirect'
}

export interface MessageObj {
    role: Roles,
    content: string
}

export interface MenuObj {
    id: string,
    description: string
}