import React from 'react';
import styled from 'styled-components';

const StyledAboutUsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  padding-left: 50px;
`;

const AboutUs = () => {
    return (
        <StyledAboutUsSection>
            <Left>
                <h1>hello</h1>
            </Left>
            <Right>
                <h1>About Us</h1>
                <p>
                    Discover the essence of elevated living through K&L Life Spaces, an integral subsidiary within the esteemed
                    Nakshatra Builders and HavinHomes Realty family. As specialists in property development and construction, we
                    redefine spaces into captivating narratives of modern luxury. Our unwavering dedication to craftsmanship and
                    innovation drives us to curate living experiences that transcend the ordinary. With a solid foundation of
                    expertise from our parent companies, we turn blueprints into realities, and aspirations into addresses that
                    resonate with sophistication. Join us in creating a future where each structure we build is infused with
                    passion, and every space becomes a testament to our commitment to crafting exceptional lifestyles.
                </p>
            </Right>
        </StyledAboutUsSection>
    );
};

export default AboutUs;
