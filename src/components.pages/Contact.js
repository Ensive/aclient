import React from 'react'
import Card from '../components.common/Card/Card'
import Text from '../components.common/Text/Text'
import ContactForm from '../components.forms/ContactForm/ContactForm'

function Contact () {
  // TODO: refactor out the function as a helper
  function getBriefText () {
    return <Text
      text='Nam in maximus arcu, ac aliquam tellus. Donec vestibulum ipsum nunc, at placerat ante posuere non. Integer at dui a lacus suscipit elementum id non massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eu neque eros. Ut eu quam justo.'
      textStyle='emphasized' />
  }

  return <Card title='Contact Us' briefText={getBriefText()} body={<ContactForm />} />
}

export default Contact
