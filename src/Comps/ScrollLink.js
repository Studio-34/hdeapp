import React from 'react';
import { forwardRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Switch, Route, Routes, Link } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';

const ScrollLink = forwardRef(({ href, text, onClick }, ref) => (
      <Nav.Link as={NavHashLink} smooth activeClassName="selected"
          ref={ref} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeStyle={{ color: 'red' }} to={href} href={href} onClick="scroll(0,0)">
              {text}
          </Nav.Link>
  ));

export default ScrollLink;