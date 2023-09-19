export enum Roles {
    SYSTEM='system',
    USER='user',
    ASSISTANT='assistant',
    REDIRECT='redirect'
}

export interface MessageObj {
    role: Roles,
    content: string,
    function_call: any
}

export interface MenuObj {
    id: string,
    description: string,
    redirectTo: string
}