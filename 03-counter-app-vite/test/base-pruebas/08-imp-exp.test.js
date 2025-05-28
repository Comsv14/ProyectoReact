import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe reotnrar undefined si no existe el id', () => {
    const id =100;
    const hero = getHeroeById(id);
    console.log(hero);
    // expect(hero).toEqual( {
    //     id: 1,
    //     name: 'Batman',
    //     owner: 'DC'
    // });

    expect (hero).toBeFalsy();
  })

  test('getHeroeByOwner debe de regresar heroes de DC ', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
        {id: 1, name: 'Batman', owner: 'DC'},
        {id: 3, name: 'Superman', owner: 'DC'},
        {id: 4, name: 'Flash', owner: 'DC'},
    ])
  })
  test('getHeroeByOwner debe de regresar heroes de Marvel ', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
  })
  
  
})
