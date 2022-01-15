const url = 'https://economia.awesomeapi.com.br/json/all';

const fetchExchanges = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Transforma o objeto num array para filtragem de moedas
    const array = Object.entries(data);

    // Retirando a paridade USDT do array de moedas
    const filter = array.filter((c) => c[0] !== 'USDT');

    // Transforma o array em objeto, (chave: valor), mais uma vez
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
    const treatedData = Object.fromEntries(filter);

    return treatedData;
  } catch (error) {
    return error;
  }
};

// Victor Shin - T16 - Tribo B
// https://github.com/tryber/sd-016-b-project-trybewallet/pull/13

export default fetchExchanges;
