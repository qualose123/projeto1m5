import {
  Container,
  Row,
  Col,
  FormGroup,
  Button,
  Title
} from '@styles';

function SingUp() {
  return (
    <>
      <Container>
        <Title>Faça seu Cadastro</Title>
        <form action="">
          <Row>
            <FormGroup>
              <label htmlFor="nome">Nome</label>
              <input
                name="nome"
                type="text"
                placeholder="Digite seu nome completo"
              />
            </FormGroup>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <label htmlFor="email">E-mail de Cadastro</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Digite seu E-mail de cadastro"
                />
              </FormGroup>
            </Col>
            <Col>
              {" "}
              <FormGroup>
                <label htmlFor="email">Confirme seu E-mail</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Confirme seu E-mail de cadastro"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <FormGroup>
              <label htmlFor="password">Senha</label>
              <input
                name="password"
                type="password"
                placeholder="Digite sua Senha"
              />
            </FormGroup>
          </Row>

          <Button>Enviar</Button>
        </form>
      </Container>
    </>
  );
}
export default SingUp;
