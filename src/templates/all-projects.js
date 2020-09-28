import React from 'react';
import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

import {
    ListGroup, ListGroupItem, ListGroupItemHeading, Container, Row, Col
} from "reactstrap";

export default ({pageContext: {projects}}) => (
    <div className="layout">
        <h1 className="title">Projetos</h1>
        <ListGroup>
            {/* {console.log(projects)} */}
            {/* Because projects parameter is a list, we are iterating over each item and using their fields */}
            {projects.map(project => (project.id && 
                <ListGroupItem className="repository-list-item" key={project.id}>
                    <Link to={`/project/${project.id}`}>
                        <ListGroupItemHeading className="text-muted">
                            <Container fluid={true}>
                                <Row>
                                    <Col lg={1}>
                                        <img src="https://www.archshop.com.br/assets/img/todos-os-projetos/casa-sydney-106.jpg" 
                                            height={60} width={60} alt={project.descricao_projeto}/>
                                    </Col>
                                    <Col>
                                        <h2>{`id: ${project.id}`}</h2>
                                        <h2>{`projeto: ${project.descricao_projeto}`}</h2>
                                    </Col>
                                </Row>
                            </Container>
                            <hr/>
                        </ListGroupItemHeading>
                    </Link>
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
);


