
import styled from 'styled-components'
import { GlobalStyle } from './styles/global'
import {Header} from './components/Heather'
import { Dashboard } from './components/Dashboard';
const Title = styled.h1`
font-size:64px;
color:#8257e6;
`
export function App() {
  return (
    <>
      
      <Header />
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}


