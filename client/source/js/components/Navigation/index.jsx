import React from 'react'
import { NavLink } from 'react-router-dom'

import { Flex, Box } from 'reflexbox'
import * as styles from './styles.css'

const Item = (props) => {
  return (
    <NavLink
      exact
      activeStyle={{color: 'black', fontWeight: 'bold'}}
      className={styles.navigationItem}
      to={props.to}
    >
      {props.children}
    </NavLink>
  )
}

const Wrapper = (props) => {
  return (
    <Flex
      align='center'
      justify='center'
    >
      <Box
        className={styles.navigationWrapper}
        col={6}
      >
        {props.children}
      </Box>
    </Flex>
  )
}

export default {
  Item, Wrapper
}
