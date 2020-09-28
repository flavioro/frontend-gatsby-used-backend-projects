import React from 'react';
// import ReactMarkdown from "react-markdown";
import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Button, ListGroupItem, ListGroupItemHeading, Container, Row, Col
} from "reactstrap";

export default ({pageContext: {project}}) => (
    <div className="layout">
        {/* {console.log('project', project)} */}
        {project.id &&
        <ListGroupItem className="repository-list-item">
            <Link to={`/project/${project.id}`}>
                <ListGroupItemHeading className="text-muted">
                    <Container fluid={true}>
                        <Row>
                            <Col lg={1}>
                                <img src='https://www.archshop.com.br/assets/img/todos-os-projetos/casa-sydney-106.jpg' 
                                height={60} width={60} alt={project.descricao_projeto}/>
                            </Col>
                            <Col>
                            <h2>{`id: ${project.id}`}</h2>
                            <h2>{`projeto: ${project.descricao_projeto}`}</h2>
                            <h3>{`quartos: ${project.quartos}`}</h3>
                            <h3>{`suites: ${project.suites}`}</h3>
                            </Col>
                        </Row>
                    </Container>
                    <hr/>
                </ListGroupItemHeading>
            </Link>
            {/* <ListGroupItemText>
                <Container fluid={true} className="repository-data-container">
                    <Row>
                        <Col>
                            <Container fluid={true}>
                                <Row>
                                    {`${repository.repositoryDescription}`}
                                </Row>
                                <Row className="repository-buttons-row">
                                    <a href={`https://www.github.com${repository.resourcePath}`}
                                       rel="noopener noreferrer" target="_blank">
                                        <Button className="repository-button" size="sm" outline color="success">
                                            {`Latest release: ${repository.tagName}`}
                                        </Button>
                                    </a>
                                    {repository.homepageUrl &&
                                    <a href={`${repository.homepageUrl}`}
                                       rel="noopener noreferrer"
                                       target="_blank">
                                        <Button className="repository-button" size="sm" outline color="secondary">
                                            {`${repository.homepageUrl}`}
                                        </Button>
                                    </a>}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <h1 className="release-notes">{`Release notes`}</h1>
                    <hr/>
                    {/* This the place where we will use markdown formatted release notes }
                    <ReactMarkdown source={`${repository.releaseDescription}`}/>
                </Container>
            </ListGroupItemText> */}
        </ListGroupItem>
        }
        <Link to={`/`}>
            <Button size="sm" outline color="danger">{`Back to All Projects`}</Button>
        </Link>
    </div>
);
