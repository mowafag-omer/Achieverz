import React from 'react'
import { Jumbotron, Container, Form, FormControl, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <Jumbotron className="mb-0" fluid>
      <Container>
        <h1>Lorem ipsum</h1>
        <p className="w-50">
          Êtes-vous un employeur à la recherche d'un.e développeur.se freelance ou vous êtes un.e développeur.se ouvert au travail ?
        </p>
        <Form className="w-75" inline>
          <FormControl type="text" placeholder="quelle compétence recherchez-vous ?" className="rounded-0 w-75" />
          <Button type="submit" variant="success" className="rounded-0">Chercher</Button>
        </Form>
      </Container>
    </Jumbotron>  
  )
}

export default Home