import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          description: 'Tran 1',
          amount: '40',
          type: 'deposit',
          category: 'Food',
          creationDate: '3/3/5'
        
        }
      ]
    })
}

})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


