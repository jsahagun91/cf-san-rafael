import React from "react";
import styled, {keyframes, css } from "styled-components";

function Sponsors() {
    const row1 = [
        "https://www.carmenslahacienda.com/static/media/carmens-logo.9e59422bb7e76e9db010.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HP1ttH-NOaBXeVj9YMhqRGWygb8P1VH2hbV_GsM2XQ&s",
        "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover_square/a2d6a3ae-d9f3-44fb-9e81-c5b5c12ab9c5.png",
        "https://www.pailabs.io/pai-logo-v1.png",
        "https://static.wixstatic.com/media/0518fc_bf5aea454ee541dfbb9aa8b58276fa95~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image0%20(1).png",
        
      ];
    
      const row2 = [
        "https://premier.upsl.com/wp-content/themes/am/assets/build/img/logo__premier.png",
        "https://theme.zdassets.com/theme_assets/11632675/18faa1764a84e5adcd3fab9e48a8396d79390d88.png",
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/354458762_693464229459767_911089323762139782_n.png?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zrKrMwLtVtsQ7kNvgHo6gha&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBvfM1N0o8_GH_Vkobv5GsNp_CCvOIIqbUo8_jXr-rhQQ&oe=6639ED55",
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/300499304_423807816509420_5250933669540981815_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=x0re1uvyt8kQ7kNvgEBvkju&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCP9VTExOYNGcVH07I9MmZZKLZ8-3jgqQtZ3SascVZCgw&oe=6639F07B",
        // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
      ];


return (
    <AppContainer>
    <Wrapper>
        <Text>Sponsors & Partners</Text>
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
    height: 70vh;
    color: #000;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {  // Adjust this value based on your definition of 'desktop' screens
        height: 50vh;  // Height for desktop screens
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
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
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
    left: translateX(0);
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
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;





