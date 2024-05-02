import React from "react";
import styled, {keyframes, css } from "styled-components";

function Sponsors() {
    const row1 = [
        "https://www.carmenslahacienda.com/static/media/carmens-logo.9e59422bb7e76e9db010.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HP1ttH-NOaBXeVj9YMhqRGWygb8P1VH2hbV_GsM2XQ&s",
        "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover_square/a2d6a3ae-d9f3-44fb-9e81-c5b5c12ab9c5.png",
        "https://www.pailabs.io/pai-logo-v1.png",
        // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
        // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
      ];
    
      const row2 = [
        // "https://www.carmenslahacienda.com/static/media/carmens-logo.9e59422bb7e76e9db010.png",
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HP1ttH-NOaBXeVj9YMhqRGWygb8P1VH2hbV_GsM2XQ&s",
        // "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover_square/a2d6a3ae-d9f3-44fb-9e81-c5b5c12ab9c5.png",
        // "https://www.pailabs.io/pai-logo-v1.png",
        // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
        // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
      ];


return (
    <AppContainer>
    <Wrapper>
        <Text>Sponsors</Text>
        <Note>Grateful for our amazing sponsors</Note>
        <Marquee>
            <MarqueeGroup>
                {row1.map((el) => (
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                ))}
            </MarqueeGroup>
            <MarqueeGroup>
                {row1.map((el) => (
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                ))}
            </MarqueeGroup>
        </Marquee>
        <Marquee>
            <MarqueeGroup2>
                {row2.map((el) => (
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
                {row2.map((el) => (
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                ))}
            </MarqueeGroup2>
        </Marquee>
    </Wrapper>
    </AppContainer>
 )
}

export default Sponsors;

const AppContainer = styled.div`
    width: 100vw;
    height: 50vh;
    color: #000;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {  // Adjust this value based on your definition of 'desktop' screens
        height: 40vh;  // Height for desktop screens
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Text = styled.div`
    font-size: 35px;
    font-family: 500;
    margin-bottom: 10px;
    color: #02203c;
`;

const Note = styled.div`
    font-size: 18px;
    font-weight: 200px;
    margin-bottom: 40px;
    color: #7c8e9a;
`;

const Marquee = styled.div`
    display: flex;
    width: 1200px;
    overflow: hidden;
    user-select: none;

    mask-image: linear-gradient(
        to right,
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 1) 10%,
        hsl(0 0% 0% / 1) 90%,
        hsl(0 0% 0% / 0)
    );
`;

const scrollX = keyframes`
    from {
        left: translate(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

const common = css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    width: 100%;
    animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
    ${common}
`;

const MarqueeGroup2 = styled.div`
    ${common}
    animation-direction: reverse;
    animation-delay: -3s;
`;

const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: clamp(10rem, 1rem + 40vmin, 30rem);
    padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    aspect-ratio: 16/9;
    padding: 5px 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;





