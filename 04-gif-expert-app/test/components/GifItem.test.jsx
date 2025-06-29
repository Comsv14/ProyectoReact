import { GifItem } from "../../src/components/GifItem";
import {render, screen} from '@testing-library/react';

describe('Pruebas en GifItem', () => {
    const title ='Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('debe de hacer match con el snapshot', () => {
      const {container} = render(<GifItem title={title} url={url}/>);
      expect(container).toMatchSnapshot();
    })
    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
      const {container} = render(<GifItem title={title} url={url}/>);
    //   screen.debug();
    // expect (screen.getByRole('img').src).toBe(url);
    const { src, alt}= screen.getByRole('img');
    expect( src ).toBe(url);
    expect( alt ).toBe(alt);
    })
    test('debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url}/>);
        expect ( screen.getByText(title)).toBeTruthy();
    });
    
    
});
