import axios from 'axios';
import React from 'react';
import SuccessImage from '../../assets/success.png';
import ErrorIcon from '../../assets/error-icon.png';
import { Container, Button } from 'react-bootstrap';

import './contact.styles.scss';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            tier: '',
            budget: '',
            message: '',
            subscribe: 'checked',
            isSubmitted: false,
            isSubmissionError: false
        }
    }

    onFirstNameNameChange = (event) => {
        this.setState({ firstName: event.target.value })
    }

    onLastNameNameChange = (event) => {
        this.setState({ lastName: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onBudgetChange = (event) => {
        this.setState({ budget: event.target.value })
    }

    onMessageChange = (event) => {
        this.setState({ message: event.target.value })
    }

    onSubscribeChange = (event) => {
        this.setState({ subscribe: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const inquiry = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Email: this.state.email,
            Budget: this.state.budget,
            Message: this.state.message,
            Subscribe: this.state.subscribe
        };
        axios.post("https://vg0kqries7.execute-api.us-west-1.amazonaws.com/prod/inquire", inquiry)
            .then(
                () => {
                    this.setState({
                        isSubmitted: true
                    })
                },
                (error) => {
                    console.error(error);
                    this.setState({
                        isSubmissionError: true
                    })
                }
            )
    }

    retry = () => {
        this.setState({
            isSubmissionError: false,
            isSubmitted: false
        })
    }

    render() {
        if (!this.state.isSubmitted && !this.state.isSubmissionError) {
            return (
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 mv6 shadow-5 center">
                    <form className="pa4 black-80" onSubmit={this.onSubmit}>
                        <div className="measure">
                            <fieldset id="contactForm" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Contact Us!</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="firstName">First Name</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="firstName"
                                        id="name"
                                        placeholder='First Name'
                                        onChange={this.onFirstNameNameChange}
                                        required
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="lastName">Last Name</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="lastName"
                                        id="name"
                                        placeholder='Last Name'
                                        onChange={this.onLastNameNameChange}
                                        required
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        placeholder='Email'
                                        onChange={this.onEmailChange}
                                        required
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="budget">Budget</label>
                                    <select
                                        className="b pa2 ba bg-transparent hover-bg-black w-100"
                                        type="budget"
                                        name="budget"
                                        id="budget"
                                        onChange={this.onBudgetChange}
                                    >
                                        <option disabled defaultValue>Select Budget</option>
                                        <option>0 - 999</option>
                                        <option>1,000 - 4,999</option>
                                        <option>5,000 - 9,999</option>
                                        <option>10,000+</option>
                                    </select>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="message">Message</label>
                                    <textarea
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="message"
                                        name="message"
                                        id="message"
                                        placeholder='Message'
                                        onChange={this.onMessageChange}
                                    />
                                </div>
                                <div className="checkbox">
                                    <input
                                        type='checkbox'
                                        id='subscribeCheck'
                                        name='subscribe'
                                        value={this.onSubscribeChange.value}
                                    />
                                    <label htmlFor='subscribe'>Stay up to date with Phillstack!</label>
                                </div>
                            </fieldset>
                            <div className="mv3" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <input
                                    className="submitBtn b pa2 ph3 pv2 input-reset ba b--black grow pointer w-40 dib"
                                    type="submit"
                                    value="Contact"
                                />
                            </div>
                        </div>
                    </form>
                </article>
            );
        } else if (this.state.isSubmitted && !this.state.isSubmissionError) {
            return (
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 mv6 shadow-5 center">
                    <div className="inquiry-submission-status">
                        <img className="submission-status-image" src={SuccessImage} alt="success"></img>
                        <h1>Thank You {this.state.firstName + ' ' + this.state.lastName}!</h1>
                        <p>We've received your inquiry and will be in touch soon.</p>
                    </div>
                </article>);
        } else if (this.state.isSubmissionError) {
            return (
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 mv6 shadow-5 center">
                    <div className="inquiry-submission-status">
                        <img className="submission-status-image" src={ErrorIcon} alt="error"></img>
                        <h1>Error Submitting Inquiry</h1>
                        <Container className='errorBtn'>
                            <a onClick={this.retry}>
                                <Button className='contactBtn btn'>Try Again</Button>
                            </a>
                        </Container>
                    </div>
                </article>
            )
        }
    }
}

export default ContactPage;