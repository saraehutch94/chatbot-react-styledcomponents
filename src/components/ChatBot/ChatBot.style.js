import styled from 'styled-components';

export const ChatBotDiv = styled.div`
    position: fixed;
    right: 10px;
    bottom: 0;
    height: ${props => props.chatBotState ? "35%" : "5%"};
    width: 20%;
    background-color: #9e9c9c;
    transition: 0.3s;
`