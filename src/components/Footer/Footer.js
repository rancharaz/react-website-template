import React from 'react';
import { Button } from '../../globalStyles';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join us so that we can show you what we can do
                    to improve your business
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at anytime
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Email" />
                    <Button fontBig>Subscribe</Button>

                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About us
                        </FooterLinkTitle>
                        <FooterLink to="/aboutus">About us</FooterLink>
                        <FooterLink to="/sign-up">Sign up here</FooterLink>
                        <FooterLink to="/">This is what I love</FooterLink>
                        <FooterLink to="/">This is more </FooterLink>
                        <FooterLink to="/">This is less</FooterLink>

                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About us
                        </FooterLinkTitle>
                        <FooterLink to="/aboutus">Contact us</FooterLink>
                        <FooterLink to="/sign-up">Sign up here</FooterLink>
                        <FooterLink to="/">This is what I love</FooterLink>
                        <FooterLink to="/">This is more </FooterLink>
                        <FooterLink to="/">This is less</FooterLink>

                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About us
                        </FooterLinkTitle>
                        <FooterLink to="/aboutus">Videos</FooterLink>
                        <FooterLink to="/sign-up">Sign up here</FooterLink>
                        <FooterLink to="/">This is what I love</FooterLink>
                        <FooterLink to="/">This is more </FooterLink>
                        <FooterLink to="/">This is less</FooterLink>

                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About us
                        </FooterLinkTitle>
                        <FooterLink to="/aboutus">Social media</FooterLink>
                        <FooterLink to="/sign-up">Sign up here</FooterLink>
                        <FooterLink to="/">This is what I love</FooterLink>
                        <FooterLink to="/">This is more </FooterLink>
                        <FooterLink to="/">This is less</FooterLink>

                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>ULTRA © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href={
                                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                            }
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer >
    )
}
export default Footer;