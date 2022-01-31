import React  from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Header/Header.css';

const Header = () => {

  const {user, logOut} = useAuth();
 
    
    return (
        <div>
           <div >
           <Navbar collapseOnSelect expand="lg" className='nav'>
  <Container >
  <Navbar.Brand><i class="fas fa-fan"></i> Rongin Posra</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="me-auto">
    <Nav.Link><NavLink
  to="/Home"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
Home
</NavLink></Nav.Link>
<Nav.Link><NavLink
  to="/Explore"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
Explore
</NavLink></Nav.Link>

{user.email &&

<NavDropdown title="DashBoard" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/ManageAllOrders">Manage All Orders</NavDropdown.Item>
        <NavDropdown.Item href="/AddAProduct">Add A Product</NavDropdown.Item>
        <NavDropdown.Item href="/MakeAdmin">Make Admin</NavDropdown.Item>
        <NavDropdown.Item href="/ManageProducts">Manage Products</NavDropdown.Item>
        <NavDropdown.Item href="/MyOrders">My Orders</NavDropdown.Item>
        <NavDropdown.Item href="/Review">Review</NavDropdown.Item>
        <NavDropdown.Item href="/Pay">Pay</NavDropdown.Item>
      </NavDropdown>

}

<Nav.Link><NavLink
  to="/Contact"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
Contact
</NavLink> </Nav.Link>
    </Nav>
    <Nav>
<span style={{color:'chocolate'}}> {user.email}</span>
 {
  user.email?
  <button onClick={logOut} className='btn btn-dark text-white'><i className="far fa-user"></i> Logout</button>
  : 
  <Nav.Link eventKey={2}>
      <NavLink
  to="/LogIn"
  activeStyle={{
    fontWeight: "bold",
    color: "gray"
  }}
>
<i className="far fa-user"></i> Login 
</NavLink>
      </Nav.Link>
} 
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           
           
            </div>
            
            
            
      </div>
        
    );
};

export default Header; 