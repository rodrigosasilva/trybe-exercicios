const {encode, decode} = require('./encodeDecode');

describe('Testa a função encodeDecode', () => {
  it('Verifica se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('Verifica se encode retorna o esperado', () => {
    expect(encode('ana')).toEqual('1n1');
    expect(encode('ele')).toEqual('2l2');
    expect(encode('init')).toEqual('3n3t');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('uhum')).toEqual('5h5m');
  });
  it('Verifica se decode retorna o esperado', () => {
    expect(decode('1n1')).toEqual('ana');
    expect(decode('2l2')).toEqual('ele');
    expect(decode('3n3t')).toEqual('init');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('5h5m')).toEqual('uhum');
  });
  it('Verifica se encode e decode não converte consoantes', () => {
    expect(encode('HTML')).toEqual('HTML');
    expect(decode('CSS')).toEqual('CSS');
  });
  it('Verifica o tamanho da string retornada', () => {
    expect(encode('trybe').length).toEqual(5);
    expect(decode('VQV').length).toEqual(3);
  });
  
  
});
