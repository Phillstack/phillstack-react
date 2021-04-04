import React from 'react';

import './contact.styles.scss';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            tier: '',
            budget: '',
            message: '',
        }
    }

    onFullNameChange = (event) => {
        this.setState({ fullName: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onTierChange = (event) => {
        this.setState({ tier: event.target.value })
    }

    onBudgetChange = (event) => {
        this.setState({ budget: event.target.value })
    }

    onMessageChange = (event) => {
        this.setState({ message: event.target.value })
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="contactForm" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Contact Us!</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="fullName">Full Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="fullName"
                                    id="name"
                                    placeholder='Full Name'
                                    onChange={this.onFullNameChange}
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
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="tier">Tier</label>
                                <select
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="tier"
                                    name="tier"
                                    id="tier"
                                    placeholder='Tier'
                                    onChange={this.onTierChange}
                                >
                                    <option value='' disabled selected>Select Tier</option>
                                    <option>Consulting</option>
                                    <option>Tier 1</option>
                                    <option>Tier 2</option>
                                    <option>Tier 3</option>
                                </select>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="budget">Budget</label>
                                <select
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="budget"
                                    name="budget"
                                    id="budget"
                                    onChange={this.onBudgetChange}
                                >
                                    <option value='' disabled selected>Select Budget</option>
                                    <option>0 - 25,000</option>
                                    <option>0 - 25,000</option>
                                    <option>0 - 25,000</option>
                                    <option>0 - 25,000</option>
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
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmit}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Contact"
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default ContactPage;