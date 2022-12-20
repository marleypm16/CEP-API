//https://brasilapi.com.br/api/cep/v2/{cep}
const form = document.querySelector(".form");
const cep = document.querySelector(".cep");
const rua = document.querySelector("#rua");
const state = document.querySelector("#state");
const city = document.querySelector("#city");
const neighborhood = document.querySelector('#neighborhood')
const cepValueTitle = document.querySelector('#cepValueTitle')
const searchButton = document.querySelector('#searchButton')
const complemento = document.querySelector('#complemento')
const information = document.querySelector('.information')

const api = async (cep) => {
  const url_api = `https://viacep.com.br/ws/${cep}/json/`;
  const data = await fetch(url_api);
  console.log(data)
  if (data.status === 200) {
    const response = data.json();

    return response;
  }
  
};

const Address = async (cep) => {
  const data = await api(cep);
  console.log(data)
  if (data.erro === true ){
    window.alert('Insira um CEP válido')
  }
  else{
    cepValueTitle.innerHTML = `CEP: ${data.cep}`
    rua.innerHTML = data.logradouro;
    city.innerHTML = data.localidade;
    neighborhood.innerHTML = data.bairro
    state.innerHTML = data.uf;
    if (data.complemento == ""){
      complemento.innerHTML = 'Não há complemento'
    }else{
      complemento.innerHTML = data.complemento
    }
  }

  

};




searchButton.addEventListener('click', () =>{
  if (cep.value == ''){
    window.alert('Digite um CEP')
  }
  else{
    Address(cep.value)

    information.className = 'active'
    cep.value = ''
  }

})


form.addEventListener('submit',(e)=>{
  e.preventDefault()
  if (cep.value == ''){
    window.alert('Digite um CEP')
  }
  else{
    Address(cep.value)
    information.className = 'active'
    cep.value = ''
  }
})


 
