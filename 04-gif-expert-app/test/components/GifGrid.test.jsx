import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const category = 'One Punch';
  test('debe de mostrar el loading inicialemente', () => {
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true,
    })


    render(<GifGrid category={category}/>);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });
  test('debe de mostrar items cuandos se cargan las imagenes useFetchGifs', () => {
    
    const gifs = [
        {
        id: 'ABC',
        title: 'saitama',
        url: 'https://localhost/saitama.jpg',
    }, 
    {
        id: '123',
        title: 'goku',
        url: 'https://localhost/goku.jpg',
    },
]
    
    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false,
    })
    render(<GifGrid category={category}/>);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
  
  
})
