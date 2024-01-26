import { Box, Button, Card, CardBody, CardHeader, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  email: string,
  password: string,
}

export const Login = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues:{
      email: "",
      password: "",
    }
  });

  const onSubmit:SubmitHandler<Inputs> = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        resolve('login ok');
        reset();
      }, 500)
    })
  }

  return (
    <Center mt={12}>
      <Card 
        px={12} py={8} 
        minW="sm" 
        color="white" 
        align='center' 
        bgGradient='linear(to-b, vtm_lightblue, vtm_yellowgreen)' 
      >
        <CardHeader><Heading>Iniciar sesión</Heading></CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.email as boolean | undefined} mb={3}>
              <FormLabel htmlFor='email'>Correo</FormLabel>
              <Input
                id='email'
                placeholder='username@example.com'
                {...register('email', {
                  required: { value: true, message: 'Campo requerido'},
                  pattern:  { value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Correo inválido'},            
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password as boolean | undefined}>
              <FormLabel htmlFor='password'>Contraseña</FormLabel>
              <Input
                id='password'
                placeholder='*****'
                {...register('password', {
                  required: { value: true, message: 'Campo requerido'},
                  minLength:{ value: 5,    message: 'Contraseña inválida'},            
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </Center>
  )
}
