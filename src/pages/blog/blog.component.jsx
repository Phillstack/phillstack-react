import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import ReactHtmlParser from 'react-html-parser';
import Skeleton from 'react-loading-skeleton';

import './blog.styles.scss';
import { CardDeck, Container } from "react-bootstrap";

class BlogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null
        };
        this.createMarkup = this.createMarkup.bind();
    }

    componentDidMount() {
        fetch("https://blog.phillstack.com/wp-json/wp/v2/posts?per_page=100", {
            method: "GET"
        })
            .then((response) => response.json())
            .then(posts => {
                this.setState({
                    posts: posts
                });
            });
    }

    createMarkup(html) {
        return { __html: html };
    }

    render() {
        if (this.state.posts) {
            return (
                <Container className='postsContainer'>
                    <CardDeck>
                        {this.state.posts?.map(post => (
                            <Card className="p-1">
                                <Card.Img variant="top" src={post.jetpack_featured_media_url} />
                                <Card.Body>
                                    <Card.Title>{post.title.rendered}</Card.Title>
                                    <Card.Text>{ReactHtmlParser(post.excerpt.rendered)}
                                    </Card.Text>
                                    <Button className='viewSiteBtn'>
                                        <a href={`/${post.slug}`}>Read</a>
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardDeck>
                </Container>
            )
        } else {
            return (
                <Container className='postsContainer'>
                    <CardDeck>
                    <Card className="p-1">
                                <Card.Img variant="top"/>
                                <Card.Body>
                                    <Card.Title>{ <Skeleton height={100} width={100} count={1}/>}</Card.Title>
                                    <Card.Text>{ <Skeleton height={100} width={100} count={1}/>}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                    </CardDeck>
                </Container>
            )
        }
    }
}

export default BlogPage;