import { MenuObj } from "../../interfaces/openAI";

export function returnMenu(): MenuObj[] {
    return [
        {
            id: 'balance account',
            description: 'תנועות אחרונות ובירור יתרה'
        },
        {
            id: 'deposit cheque',
            description: 'הפקדת שיק'
        },
        {
            id: 'money transfer',
            description: 'העברה לחשבון אחר'
        },
        {
            id: 'exchange rate conversion',
            description: 'מט\"ח'
        },
        {
            id: 'portfolio',
            description: 'תיק השקעות'
        },
        {
            id: 'loan',
            description: 'הלוואה'
        },
        {
            id: 'Ordering check books',
            description: 'הזמנת פנקסי שיקים'
        },
        {
            id: 'order credit card',
            description: 'הזמנת כרטיס אשראי'
        },
        {
            id: 'contact banker',
            description: 'צור קשר עם הבנקאי'
        }
    ]
}