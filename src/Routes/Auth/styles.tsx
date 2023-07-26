import styled from 'styled-components';

const AuthRoute = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr;
    margin-left: 50px;
    width:900px;
    margin:30px auto;
    h1 {
      grid-column:auto/span 2; 
      text-align: center; 
    }
`
export default AuthRoute;