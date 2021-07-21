import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Image from 'gatsby-image';

import { Container, Row, Col } from 'react-bootstrap';

import Button from '../components/Button';
import CustomMarkdown from '../components/CustomMarkdown';
import Hero from '../components/Hero';
import Panel from '../components/Panel';
import SEO from '../components/seo';
import RevealOnScroll from '../components/RevealOnScroll';
import Typography from '../components/Typography';

import '../scss/bootstrap.scss';
import '../scss/main.scss';

const ZeroTrustIsolationEndpointPage = ({ path }) => {
    const data = useStaticQuery(graphql`
        query {
            product: pagesYaml(id: {eq: "zti-endpoint"}) {
                hero {
                    title
                }
                copy {
                    text
                }
                contents {
                    text
                    image {
                        childImageSharp {
                            fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                wiify {
                    title
                    cards {
                        title
                        text
                    }
                }
                cta {
                    title
                    text
                    actionTitle
                    actionURL
                }
            }
        }
    `);

    const { product } = data;

    return (
        <>
            <SEO
                title="Zero Trust Isolation for Endpoint"
                description="Airgap’s Agentless Zero Trust Isolation for Endpoint turns every EDR protected endpoint into a Zero Trust endpoint with the stringiest visibility and security from endpoint to endpoint."
                url={path}
            />
            <Hero theme="dark" container="small" centered>
                <Container fluid="xl">
                    <Row>
                        <Col xs={12} md={9} className="mx-auto">
                            <Typography variant="heading1" paragraph>
                                {product.hero.title}
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </Hero>
            <div style={{ backgroundColor: '#F3F6F8' }}>
                <Container fluid="xl" className="pt-10">
                    <Row className="pb-10 justify-content-center">
                        <Col lg={10}>
                            <CustomMarkdown>{product.copy.text}</CustomMarkdown>
                        </Col>
                    </Row>
                </Container>
            </div>
            <RevealOnScroll>
                <Container fluid="xl" className="pb-10 pb-lg-15">
                    {product.contents.map((content, index) => (
                        <Row className="mt-10 mt-lg-15 align-items-center">
                            <Col lg={{
                                span: 6,
                                offset: (index % 2 === 0) ? 1 : 0,
                                order: (index % 2 === 0) ? 2 : 1,
                            }}
                            >
                                <Image
                                    alt="logo of the section"
                                    fluid={content.image.childImageSharp.fluid}
                                />
                            </Col>
                            <Col lg={{
                                span: 5,
                                offset: (index % 2 === 0) ? 0 : 1,
                                order: 1,
                            }}
                                className="mt-4 mt-lg-0"
                            >
                                <CustomMarkdown>{content.text}</CustomMarkdown>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </RevealOnScroll>
            <Container fluix="xl" className="pt-10">
                <Row>
                    <Col>
                        <Typography variant="heading3" as="h2" className="text-center">
                            {product.wiify.title}
                        </Typography>
                    </Col>
                </Row>
                <Row>
                    {product.wiify.cards.map((card) => (
                        <Col sm={6} className="mt-10">
                            <Typography variant="heading4" as="h3" paragraph>
                                {card.title}
                            </Typography>
                            <CustomMarkdown>{card.text}</CustomMarkdown>
                        </Col>
                    ))}
                </Row>
            </Container>
            <RevealOnScroll>
                <Container fluid="xl" className="my-10 my-lg-15">
                    <Panel
                        background="globe"
                        theme="white"
                        className="p-5 p-md-10"
                        rounded
                    >
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <Typography variant="heading3" as="h2" paragraph>
                                    {product.cta.title}
                                </Typography>
                                <Typography variant="inherit">
                                    {product.cta.text}
                                </Typography>
                                <div className="mt-4">
                                    <Button to={product.cta.actionURL} variant="ctaAccent">
                                        {product.cta.actionTitle}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Panel>
                </Container>
            </RevealOnScroll>
        </>
    );
};

export default ZeroTrustIsolationEndpointPage;
