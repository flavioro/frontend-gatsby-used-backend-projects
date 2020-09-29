import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
// import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import {
    ListGroup, ListGroupItem, ListGroupItemHeading, Container, Row, Col
} from "reactstrap";
var path = require('path');


// import fs from 'fs';
// import path from ('path');

// const { casa_101_1 } = useStaticQuery(graphql`
// query {
//     casa_101_1: file(relativePath: { eq: "projetos/101/1.jpg" }) {
//         childImageSharp {
//             fluid (maxWidth: 1920, maxHeight: 600, quality: 100) {
//                 ...GatsbyImageSharpFluid_tracedSVG
//             }
//         }
//     },
// }
// `)

function nameImg() {
    var nameImage = path.join(__dirname, '..', 'images', 'projetos', '101', '1.jpg');
    console.log('nameImage', nameImage);
    console.log('__dirname', `${__dirname}/src/images/`);
    // console.log('casa_101_1', `${casa_101_1}`);
    console.log('path.resolve', path.resolve(nameImage));
    console.log('path.resolve', path.resolve('.src/images/projetos/101/1.jpg'));
    console.log('path.resolve', path.resolve('src/images/projetos/101/1.jpg'));
    console.log('path.resolve', path.resolve('../images/projetos/101/1.jpg'));
    console.log('path.dirname', path.dirname('../images/projetos/101/1.jpg'));
    console.log('path.dirname', path.dirname('src/images/projetos/101/1.jpg'));
    console.log('path.dirname', path.dirname('.src/images/projetos/101/1.jpg'));
    console.log('path.dirname', path.dirname(__filename));
    console.log('path.dirname()', path.dirname());
    console.log('process.cwd()', process.cwd());
    // console.log('process', process.chdir());
    console.log('path.basename', path.basename(__dirname));

    // const na = `src/images/projetos/101/1.jpg`;
    // const na = `../images/projetos/101/1.jpg`;
    // const na = `${__dirname}/src/images/projetos/101/1.jpg`;
    // const na = `../images/projetos/101/1.jpg`;
    // return path.resolve('../src/templates/project.js')
    return nameImage;
}

const images = [];
const req = require.context('../images/projetos/101', false);
req.keys().forEach(function (key) {
    images.push(key.substr(1));
});

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
                                    {/* <Img fluid={casa_101_1.childImageSharp.fluid} alt="Banner da página tudo em um só lugar" title="Clique para ver o Projeto" /> */}
                                    <img src={nameImg()}
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

        <div id="main">
            <section className="spotlights">
                <section>
                    {images.map((image) => {
                        return (
                        <div className="image">
                        <img src={'../images/projetos/101' + image} alt="" />
                    </div>
                        )
                    })}
                </section>
            </section>
        </div>

    </div>
);


