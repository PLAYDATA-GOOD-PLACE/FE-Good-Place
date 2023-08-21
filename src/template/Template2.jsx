import React from "react";
import { Container, Nav, NavItem, Navbar, NavLink } from "reactstrap";
import { Outlet, Link } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import Rectangle from "../components/Rectangle";

const Template2 = () => {
  return (
    <>

      <Rectangle />
      <Container fluid="md">
        <Outlet />
      </Container>
    </>
  );
};

export default Template2;