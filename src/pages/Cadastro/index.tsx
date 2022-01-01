import Container from '../../components/Container';
import FormPrincipal from '../../components/FormPrincipal';

function Cadastro() {
	function handleSubmit(email: string, senha: string) {
		console.log(email, senha);
	}

	return (
		<Container>
			<FormPrincipal
				titulo="Cadastro"
				funcaoSubmit={handleSubmit}
				textoBotao="Cadastrar"
				url="/"
				textoLink="Voltar para login"
			/>
		</Container>
	);
}

export default Cadastro;
