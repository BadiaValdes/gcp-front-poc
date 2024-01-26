import { Box, ButtonGroup, Center, Container, Flex, Grid, Image, Spacer, Button, Text, VStack, Card, Wrap, WrapItem, Circle, Heading, CardBody, GridItem } from "@chakra-ui/react"
import vtm1 from "./assets/vtm_1.png";
import vtm2 from "./assets/vtm_2.png";
import vtm3 from "./assets/vtm_3.png";
import vtm_logo from "./assets/vtm_logo.png";
import vtm_fallbackimg from "./assets/vtm_fallbackimg.png";

function App() {

  return (
    <>
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
      
      <Container h={'100vh'} bg={'vtm_darkblue'}  maxW='100%'>
        <Container py={6} maxW='container.lg'>

          <Flex wrap={"wrap"} align={'center'} justify={'center'} gap={6} mb={6}>   
            <Box maxW='container.sm'>
              <Heading as='h3' size='md' color={'vtm_yellow'} mb={4} textAlign="center" >
                Integridad
              </Heading>
              <Card  p="2" maxW="300px" borderWidth="1px" borderColor={'vtm_lightblue'} borderRadius="md" background={'vtm_lightblue'}>              
                <Image borderRadius="md" src={vtm3} fallbackSrc={vtm_fallbackimg} boxSize='200px'objectFit='cover'
                />  
              </Card>
            </Box>    
                    
            <Box maxW='container.sm'>
              <Heading as='h3' size='md' color={'vtm_yellow'} mb={4} textAlign="center" >
                Humanidad
              </Heading>            
              <Card  p="2" maxW="300px" borderWidth="1px" borderColor={'vtm_yellowgreen'} borderRadius="md" background={'vtm_yellowgreen'}>              
                <Image borderRadius="md" src={vtm1} fallbackSrc={vtm_fallbackimg} boxSize='200px' objectFit='cover'/>  
              </Card>
            </Box>
          
            <Box maxW='container.sm'>
              <Heading as='h3' size='md' color={'vtm_yellow'} mb={4} textAlign="center" >
                Colaboración
              </Heading>
              <Card  p="2" maxW="300px" borderWidth="1px" borderColor={'vtm_lightblue'} borderRadius="md" background={'vtm_lightblue'}>              
                <Image borderRadius="md" src={vtm2} fallbackSrc={vtm_fallbackimg} boxSize='200px' objectFit='cover'/>  
              </Card>
            </Box>            
          </Flex>

          <Card bgGradient="linear(to-l, #DFDF00, #008B97)" w={'98.5%'}>
            <CardBody>
              <Wrap spacing='15px' justify='center' align='center'>
                <WrapItem>
                  <Circle size='220px' color='white' bg={'vtm_yellowgreen'}>
                    <Center>
                      <VStack gap={0}>
                        <Heading as='h3' size='md' mb={2}> CERCANA </Heading>
                        <Text>Humana</Text>
                        <Text>Confiable</Text>
                        <Text>Generosa</Text>
                        <Text>Accesible</Text>
                      </VStack>
                    </Center>
                  </Circle>
                </WrapItem>

                <WrapItem>
                  <Circle size='220px' color='white' bg={'vtm_darkblue'}>
                    <Center>
                      <VStack gap={0}>
                        <Heading as='h3' size='md' mb={2}> INNOVADORA </Heading>
                        <Text>Auténtica</Text>
                        <Text>Visionaria</Text>
                        <Text>Creativa</Text>
                        <Text>Avanzada</Text>
                        <Text>Transformadora</Text>
                      </VStack>
                    </Center>
                  </Circle>
                </WrapItem>

                <WrapItem>
                  <Circle size='220px' color='white' bg={'vtm_blue'}>
                    <Center>
                      <VStack gap={0}>
                        <Heading as='h3' size='md' mb={2}> PROACTIVA </Heading>
                        <Text>Dinámica</Text>
                        <Text>Ágil</Text>
                        <Text>Versátil</Text>
                        <Text>Flexible</Text>
                        <Text>Energética</Text>
                      </VStack>
                    </Center>
                  </Circle>
                </WrapItem>

                <WrapItem>
                  <Circle size='220px' color='white' bg={'vtm_lightblue'}>
                    <Center>
                      <VStack gap={0}>
                        <Heading as='h3' size='md' mb={2}> EXPERTA </Heading>
                        <Text>Conocedora</Text>
                        <Text>Especialista</Text>
                        <Text>Experimentada</Text>
                        <Text>Competente</Text>
                        <Text>Seria</Text>
                      </VStack>
                    </Center>
                  </Circle>
                </WrapItem>
              </Wrap>
            </CardBody>
          </Card>

        </Container>
      </Container>      
    </>
  )
}

export default App
