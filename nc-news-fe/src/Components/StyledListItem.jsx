import styled from 'styled-components'
import React from 'react'

const Li = styled.li`
  background-color: #dcdcdc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 5px;
`

const StyledListItem = (props) => {
  return <Li {...props}>{props.children}</Li>
}

export default StyledListItem
