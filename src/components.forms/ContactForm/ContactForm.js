import './ContactForm.css'
import React, { Component } from 'react'

class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <div className='TextBoxes'>
            <input
              className='TextBox'
              name='name'
              type='text'
              value={this.state.name}
              placeholder='Your Name'
              onChange={this.handleInputChange}
            />
            <input
              className='TextBox'
              name='email'
              type='email'
              value={this.state.email}
              placeholder='Email'
              onChange={this.handleInputChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <input
            className='TextBox'
            name='subject'
            type='text'
            value={this.state.subject}
            placeholder='Subject'
            onChange={this.handleInputChange}
          />
        </fieldset>

        <fieldset>
          <textarea
            className='TextBox TextBox--area'
            name='message'
            value={this.state.message}
            placeholder='Your Message'
            onChange={this.handleInputChange}
          />
        </fieldset>

        <input className='Button' type='submit' value='Send Message' />
      </form>
    )
  }
}

export default ContactForm
