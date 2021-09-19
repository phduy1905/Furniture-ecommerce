import React from "react";
import {
  Container,
  Feature,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  Wrapper,
} from "./Features.styles";
import HouseIcon from "@material-ui/icons/House";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import SettingsPhoneIcon from "@material-ui/icons/SettingsPhone";
export const Features = () => {
  return (
    <Container>
      <Wrapper>
        <Feature data-aos="fade-down">
          <FeatureIcon>
            <HouseIcon />
          </FeatureIcon>
          <FeatureTitle>Modern design</FeatureTitle>
          <FeatureText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            odio culpa amet earum ad veniam possimus recusandae vel consectetur,
            vero ab dolorum libero maxime quas. Dolorem asperiores distinctio
            vel modi.
          </FeatureText>
        </Feature>
        <Feature data-aos="fade-down" data-aos-delay="300">
          <FeatureIcon>
            <AccountBalanceWalletIcon />
          </FeatureIcon>
          <FeatureTitle>honest prices</FeatureTitle>
          <FeatureText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            odio culpa amet earum ad veniam possimus recusandae vel consectetur,
            vero ab dolorum libero maxime quas. Dolorem asperiores distinctio
            vel modi.
          </FeatureText>
        </Feature>
        <Feature data-aos="fade-down" data-aos-delay="500">
          <FeatureIcon>
            <SettingsPhoneIcon />
          </FeatureIcon>
          <FeatureTitle>great support</FeatureTitle>
          <FeatureText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            odio culpa amet earum ad veniam possimus recusandae vel consectetur,
            vero ab dolorum libero maxime quas. Dolorem asperiores distinctio
            vel modi.
          </FeatureText>
        </Feature>
      </Wrapper>
    </Container>
  );
};
