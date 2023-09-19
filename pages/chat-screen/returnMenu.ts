import { MenuObj } from "../../interfaces/openAI";

export function returnMenu(): MenuObj[] {
    return [
        {
            id: 'balance account',
            description: 'תנועות אחרונות ובירור יתרה',
            redirectTo: 'SamplePage'
        },
        {
            id: 'deposit cheque',
            description: 'הפקדת שיק',
            redirectTo: 'SamplePage'
        },
        {
            id: 'money transfer',
            description: 'העברה לחשבון אחר',
            redirectTo: 'SamplePage'
        },
        {
            id: 'exchange rate conversion',
            description: 'מט\"ח',
            redirectTo: 'SamplePage'
        },
        {
            id: 'portfolio',
            description: 'תיק השקעות',
            redirectTo: 'SamplePage'
        },
        {
            id: 'loan',
            description: 'הלוואה',
            redirectTo: 'SamplePage'
        },
        {
            id: 'Ordering check books',
            description: 'הזמנת פנקסי שיקים',
            redirectTo: 'SamplePage'
        },
        {
            id: 'order credit card',
            description: 'הזמנת כרטיס אשראי',
            redirectTo: 'SamplePage'
        },
        {
            id: 'contact banker',
            description: 'צור קשר עם הבנקאי',
            redirectTo: 'SamplePage'
        }
    ]
}