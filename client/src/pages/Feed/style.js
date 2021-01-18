import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  
  height: 100%;
  width: 100%;
`;

export const PostContainer = styled.section`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 20px;

    ul {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        max-width: 550px;
        width: 100%;

        li{
            display: flex;
            flex-direction: column;
            
            background: #fff;
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            height: 600px;
        }
    }
`

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    #user-info {
        display: flex;
        padding: 15px;

        img {
            height: 32px;
            width: 32px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 15px;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-weight: 600;
            }
        }
    }
`