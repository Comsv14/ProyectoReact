
describe('Pruebas en <DemoComponent', () => {
  
test('Esta prueba no debe fallar', ()=>{
   // 1 inicializacion

   const message1 ='Hola Mundo';

   //2. estimulo

    const message2 = message1.trim();

   //4.Observar el comportamiento... esperado

   expect(message1).toBe(message2);
})
})