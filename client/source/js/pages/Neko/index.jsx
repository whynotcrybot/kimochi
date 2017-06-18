import React from 'react'

import { Flex, Box } from 'reflexbox'
import cat from '../../../assets/img/cat.jpg'

const Neko = () => {
  return (
    <Flex justify='center'>
      <Box col={8}>
        <h2>Neko</h2>
        <img width='512px' src={cat} alt='' />
      </Box>
    </Flex>
  )
}

export default Neko
