import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3b4651;
    position: relative;
    margin-bottom: 24px;
`
export const ImageBackground = styled.img`
    width: 100%;
    height: 100%;
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`
export const UserInfo = styled.div`
    display: flex;
    margin-bottom: 12px;

    div{
        margin-left: 12px;
    }
    h4{
        font: normal 700 18px/25px "Open Sans", sans-serif;
        color: #fff;
    }
    p{
        font: normal 400 12px/16px "Open Sans", sans-serif;
        color: #fff;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 3px solid #fff;
`
export const PostInfo = styled.div`
    margin-bottom: 12px;

    h4{
        font: normal 700 18px/25px "Open Sans", sans-serif;
        color: #fff;
    }
    p{
        font: normal 400 12px/16px "Open Sans", sans-serif;
        color: #fff;
    }
`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4{
        font: normal 700 12px/16px "Open Sans", sans-serif;
        color: #ffffff80;
    }
    p{
        font: normal 700 16px/22px "Open Sans", sans-serif;
    }
`