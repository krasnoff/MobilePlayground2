import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";

let props: any;

function SamplePage(props: any): JSX.Element {
    const [propsStr, setPropsStr] = useState<string>();
    const [titleStr, setTitleStr] = useState<string>();

    const setTitle = (bankService: string) => {
      switch(bankService) {
        case 'balance account':
          setTitleStr('תנועות אחרונות');
          break;
        case 'deposit cheque':
          setTitleStr('הפקדות שיק');
          break;
        case 'money transfer':
          setTitleStr('העברה מחשבון לחשבון');
          break;
        case 'exchange rate conversion':
          setTitleStr('שער חליפין');
          break;
        case 'portfolio':
          setTitleStr('תיק השקעות');
          break;
        case 'loan':
          setTitleStr('הלוואה');
          break;
        case 'Ordering check books':
          setTitleStr('הזמנת פנקסי שיקים');
          break;
        case 'order credit card':
          setTitleStr('הזמנת כרטיסי אשראי');
          break;
        case 'contact banker':
          setTitleStr('צור קשר עם הבנקאי');
          break;
        default:
          setTitleStr('אחר');
          break;
      }
    }

    useEffect(() => {
        setPropsStr(JSON.stringify(props));
        setTitle(props.route.params.bankService);
    }, []);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
          fontFamily: 'Heebo-Bold', 
          fontSize: 20
        }}>{titleStr}</Text>
        <Text>עמוד: </Text>
        <Text>{propsStr}</Text>
      </View>
    );
}

export default SamplePage;