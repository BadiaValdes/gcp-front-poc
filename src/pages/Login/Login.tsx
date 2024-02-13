import './Login.css';
import { useNotifications } from "../../hooks/useNotifications";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Card, CardBody, CardHeader, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react";
import { signInWithGooglePopup } from '../../firebase/config';


type Inputs = {
  email: string,
  password: string,
}

export const Login = () => {
  const {notify} = useNotifications();
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
        // console.log(JSON.stringify(values, null, 2));
        notify("Ha iniciado sesión correctamente!", "success", 1500);
        resolve('ok'); 
        reset();
      }, 500)
    })
  }

  const signInWithPopupHandler =  async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
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
                className='placeholder-color'
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
                className='pla-color'
                placeholder='*****'
                {...register('password', {
                  required: { value: true, message: 'Campo requerido'},
                  minLength:{ value: 5,    message: 'Debe tener mínimo 5 caracteres'},            
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
              Submit
            </Button>
            <Button mt={4} colorScheme='teal' variant='outline' onClick={signInWithPopupHandler} type='button'>
              signInWithPopup
            </Button>
          </form>
        </CardBody>
      </Card>
    </Center>
  )
}
