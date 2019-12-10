
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
	Button,
	ListGroup,
	ListGroupItem
} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
			<Container>
				<h1 class="text-center">much todo app</h1>

				<ListGroupSample />
			</Container>
        );
    }
}

const ListGroupSample = (props) => {
	return (
	  <ListGroup>
		<ListGroupItem>Cras justo odio</ListGroupItem>
		<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
		<ListGroupItem>Morbi leo risus</ListGroupItem>
		<ListGroupItem>Porta ac consectetur ac</ListGroupItem>
		<ListGroupItem>Vestibulum at eros</ListGroupItem>
	  </ListGroup>
	); 
}

export default App;