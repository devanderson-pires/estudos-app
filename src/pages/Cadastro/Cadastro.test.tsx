import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Cadastro from '.';

describe('Cadastro', () => {
	it('has a title', () => {
		render(
			<BrowserRouter>
				<Cadastro />
			</BrowserRouter>
		);
		const title = screen.getByText('Cadastro');
		expect(title).toBeInTheDocument();
	});
});
