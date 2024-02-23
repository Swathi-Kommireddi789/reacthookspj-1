import {useState} from 'react'

import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')

  const onChangeName = event => setName(event.target.value)

  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        value={name}
        onChange={onChangeName}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText> Welcome to My Blogs
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
