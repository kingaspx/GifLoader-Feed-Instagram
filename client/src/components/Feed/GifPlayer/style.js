import styled from 'styled-components';

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const Player = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    span {
        position: absolute;

        font-weight: 600;
        background: rgba(0,0,0,.7);
        color: #fff;
        border: 2px dashed #fff;
        backdrop-filter: blur(4px);

        height: 80px;
        width: 80px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`