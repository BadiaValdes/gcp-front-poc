import { Box, Card, CardBody, Center, Circle, Flex, Heading, Image, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import vtm1 from "../../assets/vtm_1.png";
import vtm2 from "../../assets/vtm_2.png";
import vtm3 from "../../assets/vtm_3.png";
import vtm_fallbackimg from "../../assets/vtm_fallbackimg.png";

export const Home = () => {
  return (
    <>
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
    </>
  )
}
