import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../logo.svg";
import { ButtonContainer } from "../Button/Button";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
`;

const MyNavbar = () => {
  return (
    <div>
      <NavWrapper>
        <Navbar expand="sm" className="navbar-dark px-sm-5">
          {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="store icon" />
            </Navbar.Brand>
          </Link>
          <Nav className="align-items-center">
            <Nav.Item className="ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </Nav.Item>
          </Nav>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                {" "}
                <i className="fas fa-cart-plus" />
              </span>{" "}
              my cart
            </ButtonContainer>
          </Link>
        </Navbar>
      </NavWrapper>
    </div>
  );
};

export default MyNavbar;
