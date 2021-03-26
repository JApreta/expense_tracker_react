import { Container } from "./styles";
import { useEffect } from 'react'
import {api} from '../../Services/api'

export function TransactionsTable() {
useEffect(() => {
   api.get('transactions').then(response=>console.log(response.data))
    
}, [])

    return (
        <Container>
            <table>
              
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th> Amount</th>
                            <th>Category</th>
                            <th>Date</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Web dev</td>
                            <td className="deposit">$200</td>
                            <td> Projects</td>
                             <td>3/25/2012</td>
                        </tr>
                    </tbody>
              
            </table>
        </Container>
    );
}