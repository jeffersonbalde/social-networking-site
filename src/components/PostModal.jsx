import React from 'react'
import styled from 'styled-components'

function PostModal(props) {
  return (
    <Container>
        <Content>

            <Header>
                <h2>Create a post</h2>
                <button>
                    <img src="images/close-icon.svg" alt="close-icon"/>
                </button>
            </Header>

            <SharedContent>
                <UserInfo>
                    {/* <img src="https://media.licdn.com/dms/image/D5635AQEwXyyzfW_v5g/profile-framedphoto-shrink_100_100/0/1681201292915?e=1682470800&amp;v=beta&amp;t=hw33DgM9CjfcJXnYZE7GcaJi7EmmuurZ4uiwA-BqamA" loading="lazy" alt="Jefferson Balde" id="ember772" className="EntityPhoto-circle-2 lazy-image ember-view" /> */}
                    <img src="images/user.svg" alt="user" />
                    <span>Name</span>
                </UserInfo>
            </SharedContent>

        </Content>
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0, 0, 0, 0.8);
`

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        height: 40px;
        width: 40px;
        min-height: auto;
        color: rgba(0, 0, 0, 0.15);
        svg {
            pointer-events: none;
        }
    }
`

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg, img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`

export default PostModal