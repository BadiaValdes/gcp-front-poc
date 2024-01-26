import './NotFound.css';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Image, VStack } from '@chakra-ui/react'
import vtm_404_gif from '../../assets/vtm_404.gif'

export const NotFound = () => {
  return (
    <Box 
      width='100%' 
      className='bg-container'
      // bgImage={vtm_404}
      // bgPosition='center'
      // bgRepeat='no-repeat'
    >
      <Center h='100vh'>
        <VStack>
          <Image src={vtm_404_gif} borderRadius="md" boxSize='500px'objectFit='contain'/>
          <Button rightIcon={<ArrowBackIcon />} colorScheme='teal' color='white' variant='solid'>
            <Link to={'home'}> Go Home </Link>
          </Button>
        </VStack>
      </Center>
    </Box>
  )
}
