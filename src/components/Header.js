import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
  border-bottom: 1px solid #eee;
  display: flex;
`
const Item = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`

const Header = () => (
  <Container>
    <Item>
      <Link to="/">Home</Link>
    </Item>
    <Item>
      <Link to="/about">About</Link>
    </Item>
    <Item>
      <Link to="/topics">Topics</Link>
    </Item>
  </Container>
)

export default Header
