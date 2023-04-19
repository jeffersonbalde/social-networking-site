import styled from "styled-components"
import PostModal from "./PostModal"


function Main() {
  return (
    <Container>
        <ShareBox>

            Share

            <div>
                <img src="/images/user.svg" alt="user svg" />
                <button>Start a post</button>
            </div>

            <div>
                <button>
                    <img src="/images/photo-icon.svg" alt="photo icon svg" />
                    <span>Photo</span>
                </button>

                <button>
                    <img src="/images/video-icon.svg" alt="video icon svg" />
                    <span>Video</span>
                </button>

                <button>
                    <img src="/images/job-icon.svg" alt="job icon svg" />
                    <span>Job</span>
                </button>

                <button>
                    <img src="/images/write-article.svg" alt="article icon svg" />
                    <span>Write Article</span>
                </button>
            </div>
        </ShareBox>

        <div>
            <Article>

                <SharedActor>
                    <a>
                        <img src="/images/user.svg" alt="user svg" />
                        <div>   
                            <span>title</span>
                            <span>info</span>
                            <span>date</span>
                        </div>
                    </a>
                    <button>
                        <img src="/images/ellipsis.svg" alt="ellipsis svg" />
                    </button>   
                </SharedActor>

                <Description>
                    Description
                </Description>

                <SharedImg>
                    <a>
                        <img src="/images/shared-image.avif" alt="shared image"/>
                    </a>
                </SharedImg>

                <SocialCounts>
                    <li>
                        <button>
                            <img 
                                alt="like-icon"
                                src="https://static.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss"
                            />
                            <img 
                                alt="heart-icon"
                                src="https://static.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49"
                            />
                            <img 
                                src="https://static.licdn.com/sc/h/6gz02r6oxefigck4ye888wosd" 
                                alt="bright-icon" 
                            />
                            <span>75</span>
                        </button>
                    </li>
                    <li>
                        <a>2 comments</a>
                    </li>
                </SocialCounts>

                <SocialActions>
                    <button>
                        <img src="/images/like-icon.svg" alt="like-icon-svg" />
                        <span>Like</span>
                    </button>
                    <button>
                        <img src="/images/comment-icon.svg" alt="comment-icon-svg" />
                        <span>Comments</span>
                    </button>
                    <button>
                        <img src="/images/share-icon.svg" alt="share-icon-svg" />
                        <span>Share</span>
                    </button>
                    <button>
                        <img src="/images/send-icon.svg" alt="send-icon-svg" />
                        <span>Send</span>
                    </button>
                </SocialActions>

            </Article>
        </div>

        <PostModal />
        
    </Container>
  )
}

const Container = styled.div`
    grid-area: main;
`

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative ;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`


const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;
    div {
        button {
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;  
            align-items: center;
            font-weight: 600;
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0px 16px;
            img {
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button {
                margin: 4px 0;
                flex-grow: 1;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                border-radius: 35px;
                background-color: white;
                text-align: left;
            }
        }

        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                img {
                    margin: 0 4px 0 -2px;
                }
                span {
                    color: #70b5f9;
                }
            }
        }
    }
`

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`

const SharedActor = styled.div`    
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span {
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &:nth-child(n + 1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    button {
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }
`

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    text-align: left;
    font-size: 14px;
`

const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: flex;
    position: relative;
    background-color: #f9fafb;
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

`

const SocialCounts = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;    
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style-type: none;
    li {
        margin-right: 5px;
        font-size: 13px;
        button {
            display: flex;
        }
    }
`
const SocialActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;
    button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;

        @media (min-width: 768px) {
            span {
                margin-left: 8px;
            }
        }
    }
`

export default Main