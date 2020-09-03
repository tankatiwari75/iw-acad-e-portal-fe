import React, { useState } from 'react';
import { Accordion, Container, Card } from 'react-bootstrap';
import { Document, Page } from 'react-pdf'; 

import "./syllabus.css";

export default function Syllabus() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
        <Container>

            <h1 class="heading">"SYLLABUS UNITS"</h1>

            <div className="content">
                <h2><i>This course covers the following units:</i></h2> 
            </div>
            
            <Accordion defaultActiveKey="" className="pb-5"> 

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
                            COMPUTER SCIENCE
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <Document file="class_10_computer.pdf" onLoadSuccess={onDocumentLoadSuccess}> 
                        <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="1">
                            HEALTH EDUCATION
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <Document file="class_10_health.pdf" onLoadSuccess={onDocumentLoadSuccess}> 
                        <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="2">      
                            MATHEMATICS
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        <Document file="class_10_math.pdf" onLoadSuccess={onDocumentLoadSuccess}> 
                        <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="3">
                            OPTIONAL MATHEMATICS
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                        <Document file="class_10_optional.pdf" onLoadSuccess={onDocumentLoadSuccess}> 
                        <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="4">
                            SCIENCE
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                        <Document file="class_10_science.pdf" onLoadSuccess={onDocumentLoadSuccess}> 
                        <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="5">
                            SOCIAL STUDIES
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                        <Document file="class_10_social.pdf" onLoadSuccess={onDocumentLoadSuccess}> 
                        <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>

            </Accordion>

        </Container>
    )
}