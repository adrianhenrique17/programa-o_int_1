import { validarCPF } from './cpf';

describe('Testes da função validarCPF', () => {
  test('CPF válido: Deve retornar true para um CPF com 11 dígitos e dígitos verificadores corretos', () => {
    const cpfValido = '529.982.247-25'; 
    expect(validarCPF(cpfValido)).toBe(true);
  });

  test('CPF inválido: Deve retornar false para um CPF com 11 dígitos, mas dígitos verificadores incorretos', () => {
    const cpfInvalidoVerificadores = '529.982.247-26'; // Último dígito incorreto
    expect(validarCPF(cpfInvalidoVerificadores)).toBe(false);
  });

  test('CPF com formato incorreto: Deve retornar false para CPFs com menos de 11 dígitos ou com caracteres não numéricos', () => {
    const cpfCurto = '123.456.789-0';   
    const cpfComLetras = 'abc.def.ghi-jk'; 
    expect(validarCPF(cpfCurto)).toBe(false);
    expect(validarCPF(cpfComLetras)).toBe(false);
  });
});