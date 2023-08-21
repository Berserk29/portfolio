import { Container, Heading, Text, Button } from "./errorPage.style";
import img from '../../assets/image/main_01.jpg'

const ErrorPage = ({error, resetErrorBoundary}) => {
    return (
        <Container image={img}>
            <div>
                <Heading >Something went wrong :</Heading> 
                <Text>{error.message}</Text>
                <Text>{error.code}</Text>
            </div>
            <Button onClick={resetErrorBoundary}>Try again</Button>
        </Container>
    )
}

export default ErrorPage;