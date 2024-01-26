import { Button, ButtonGroup, Flex, Image, Spacer } from "@chakra-ui/react"
import vtm_logo from "../../assets/vtm_logo.png";

export const Header = () => {
  return (
    <Flex 
        bg={'vtm_darkblue'}
        minWidth='max-content' 
        alignItems='center' 
        gap='2' 
        px={12} 
        h={100} 
        border={'1px solid'}
        borderBottomColor={"vtm_lightblue"}
      >

        {/* <Text bgGradient="linear(to-l, #DFDF00, #00AF3F)" bgClip="text" fontSize="6xl" fontWeight="extrabold" p={2}>
              <Center > GCP-FRONT-POC </Center>
            </Text> */}
        
        <Image src={vtm_logo} w={'140px'} h={'60px'}/>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal' hidden>Sign Up</Button>
          <Button colorScheme='teal'>Log in</Button>
        </ButtonGroup>
      </Flex>
  )
}
