import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Title
} from '@styles';

function SingIn() {
  return (
    <>
      <Container>
        <Title>Faça seu Login</Title>
        <form action="">
          <FormGroup>
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email"
            placeholder="Digite seu Login" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Senha</label>
            <input name="password" type="password"
            placeholder="Digite sua Senha" />
          </FormGroup>
          <Button>
            Enviar
          </Button>
        </form>
      </Container>
    </>
  );
}
export default SingIn;
