import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    font-family: "Arial";

    h3{
        font-size: 24px;
        color: #fafafa;
    }
    p{
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 10px
    }

    a{
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
    }

    a.remover{
        color: #ff0000;
        margin-left: 10px;
    }

    hr{
        color: #fafafa60;
        margin: 20px 0;
    }
`