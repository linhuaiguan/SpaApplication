
import React, { useState } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Header from "../homepage/header"
import { Navbar, Nav, NavDropdown,Carousel,CardGroup, Row,Col,ButtonGroup } from "react-bootstrap"
import './Dashboard.css';
import First from "./pictures/first.jpg"
import Second from "./pictures/second.jpg"
import Third from "./pictures/third.jpg"


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    
    <>
    <Navbar style={{backgroundColor:"#2699FB"}} expand="lg" >
  <Navbar.Brand> 
          {error && <Alert variant="danger">{error}</Alert>}
          <strong style={{color:"white"}} >Welcome : </strong> {currentUser.email}
        </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{color:"white"}} href="#home">Home</Nav.Link>
      <Nav.Link  style={{color:"white"}}href="#link">Link</Nav.Link>
      <Button className="buttonclass" style={{color:"white"}} variant="link" onClick={handleLogout}>
          Log Out
        </Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>



<Container  style = {{marginTop : 100}} className="containercardwidth">
{/* <Card  className="cardwidth">
        <Card.Body>
          <h1 style = {{textAlign : "center"}}>Social Awareness Web Application</h1>
          <p>The campaign content or message is entirely up to you.  The COVID distancing message is an example of how a business can provide a community message that also provides a platform for them to advertise. Road safety, Health warnings, etc. are examples of how government agencies do it.  Effectively sponsoring or using attribution or sponsorship to promote not just there message but their department. Associations or not for profits do it in a similar way RACV, RACQ, NRMA for example will issue road, car and traffic messages as both ‘infomercial’ reports and as banner alerts. </p>
        </Card.Body>
        <Button className="buttonclass">Create a Compaign</Button>

      </Card> */}
      <Card className="text-center">
  <Card.Body>
    <Card.Title style={{color:"#2699FB"}}>Social Awareness Web Application</Card.Title>
    <Card.Text style={{color:"#2699FB"}}>
    The campaign content or message is entirely up to you.  The COVID distancing message is an example of how a business can provide a community message that also provides a platform for them to advertise. Road safety, Health warnings, etc. are examples of how government agencies do it.  Effectively sponsoring or using attribution or sponsorship to promote not just there message but their department. Associations or not for profits do it in a similar way RACV, RACQ, NRMA for example will issue road, car and traffic messages as both ‘infomercial’ reports and as banner alerts.    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>

  </Card.Body>
</Card>
</Container>

<Container>
<Carousel className="text-center">
  <Carousel.Item>
  <img className="images" src={First}/>

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="images"   src={Second}/>


    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="images"  src={Third}/>


    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>


<Container style = {{marginTop : 100}}>
<CardGroup className="text-center" >
  <Card style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card  style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card  style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card  style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</Container>


<Container style = {{marginTop : 100}} >
  <Row >
    <Col xs={12} md={8}>
    <Row >
    <Col sm={4}>  
    <Card style = {{height : 300}} style={{backgroundColor:"#7FC4FD"}}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle >Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick 
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link> */}
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
  </Col>
    <Col sm={8}>
    <Card style = {{height : 300}} style={{backgroundColor:"#7FC4FD"}}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle >Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

    </Col>
  </Row>
  <CardGroup>
  <Card style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card >
  <Card style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<CardGroup>
  <Card style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{backgroundColor:"#7FC4FD"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
<Button variant="primary" className="text-center">Create Campaign</Button>

  
    </Col>
    <Col xs={6} md={4}>
    <Row>
    <Button variant="light">Light</Button> 

     </Row>
  <Row>
  <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
  </Row>
  <Row>
  <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
  </Row>
    </Col>
  </Row>



</Container>
  <br />
<Navbar bg="primary" >
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#link">Developers</Nav.Link>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  )
}
