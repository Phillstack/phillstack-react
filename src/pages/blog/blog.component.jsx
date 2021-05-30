import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

import './blog.styles.scss';

class BlogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
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
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 mv6 shadow-5 center">
                <div>
                    {this.state.posts?.map(post => (
                        <Link to={`/${post.slug}`} key={post.id}>
                            <Card>
                                <Card.Img variant="top" src={post.jetpack_featured_media_url} />
                                <Card.Body>
                                    <Card.Title>{post.title.rendered}</Card.Title>
                                    <Card.Text>{ReactHtmlParser(post.excerpt.rendered)}
                                    </Card.Text>
                                    <Button variant="primary">Read</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
            </article>
        )
    }
}

export default BlogPage;