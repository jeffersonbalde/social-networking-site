import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    padding: 0px;

`

const Nav = styled.div`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`

const Join = styled.div`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.8);
    margin-right: 12px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
    }
`

function Login() {
  return (
    <Container>
        <Nav>
            <Link to={""}>
                <img src="/public/images/login-logo.svg" alt="LinkedIn logo" />
            </Link>

            <div>
                <Join>Join now</Join>
            </div>
        </Nav>
    </Container>
  )
}

export default Login