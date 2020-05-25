import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import siteConfig from '../../../data/siteConfig'
import { withPrefix } from "gatsby"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #000000;
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #000000;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
` 

const HeaderLink = styled(Link)`
  position: relative;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
  ${({ active }) => active && css`
    border-bottom: 2px solid #fff;
  `}
`
const NikoRzLink = styled(({ className }) => (
  <a 
    className={className}
    href={`https://nikorz.dev`}
    rel="noopener noreferrer"
  >
    <img className="site-nav-icon" src="https://s3-us-east-2.amazonaws.com/nikorz-blog/2020/05/Logo.png" alt="NikoRz.Dev" />
  </a>
))`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`
const HomeLink = styled(({ className }) => (
  <a 
    className={className}
    href={`https://nikorz.dev`}
    rel="noopener noreferrer"
  >
    Blog
  </a>
))`
position: relative;
box-sizing: border-box;
text-decoration: none;
display: flex;
align-items: center;
color: #fff;
border: 0;
margin: 0;
margin-right: 0.5rem;
padding-left: 20px;
padding-right: 20px;
min-width: 42px;
z-index: 10;
${({ active }) => active && css`
  border-bottom: 2px solid #fff;
`}
`

const Header = ({ location }) => {
  const { headerLinks } = siteConfig

  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderLinkGroup>
          <NikoRzLink/>
          {headerLinks.map((headerLink, i) => (
            <HeaderLink
              active={location.pathname === withPrefix(headerLink.url)}
              to={headerLink.url}
              key={`header-link-${i}`}
            >
              {headerLink.label}
            </HeaderLink>
          ))}
          <HomeLink/>
        </HeaderLinkGroup>
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header