import React from 'react'
import Card from '../components/Card/Card'
import Text from '../components/Text/Text'

function About () {
  function getBriefText () {
    return <Text
      text='Aliquam rhoncus tincidunt dui ut auctor. Maecenas eget purus maximus, commodo sem et, porta nunc. Maecenas lacinia nibh in elementum sagittis.'
      textStyle='gray,large,italic,emphasized' />
  }

  function renderBody () {
    return (
      <div>
        <Text text='Maecenas auctor, libero sit amet varius lacinia, ante orci tincidunt lorem, at posuere neque ligula eu sapien. Etiam pellentesque, leo a porta auctor, nisi magna pellentesque mauris, eu lacinia risus lectus at diam. In vel consequat orci. Integer quis tristique enim. Proin ut orci ut ex eleifend porttitor. Vestibulum cursus sodales rhoncus.' />
        <Text text='Cras ac elit non massa sodales commodo. Nullam dapibus sed orci nec finibus. Sed gravida nibh at mattis mattis. Ut bibendum orci at diam pharetra viverra. Nam pellentesque varius eleifend. Integer vitae elit viverra, mollis quam et, vehicula odio.' />
      </div>
    )
  }

  return <Card title='About' briefText={getBriefText()} body={renderBody()} />
}

export default About
