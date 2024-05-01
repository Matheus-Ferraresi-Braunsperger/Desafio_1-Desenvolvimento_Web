//Dados para usar no HTML
const cadastrosJson =[
    
        {
          "nome_completo": "Carlos Silva",
          "numero_apartamento": 101,
          "bloco_apartamento": 1,
          "marca_veiculo": "Toyota",
          "modelo_veiculo": "Corolla",
          "ano_veiculo": 2018,
          "cor_veiculo": "Prata",
          "placa_veiculo": "ABC-1234",
          "numero_vaga_estacionamento": 25
        },
        {
          "nome_completo": "Maria Oliveira",
          "numero_apartamento": 202,
          "bloco_apartamento": 2,
          "marca_veiculo": "Honda",
          "modelo_veiculo": "Civic",
          "ano_veiculo": 2019,
          "cor_veiculo": "Azul",
          "placa_veiculo": "DEF-5678",
          "numero_vaga_estacionamento": 14
        },
        {
          "nome_completo": "José Santos",
          "numero_apartamento": 303,
          "bloco_apartamento": 3,
          "marca_veiculo": "Volkswagen",
          "modelo_veiculo": "Golf",
          "ano_veiculo": 2017,
          "cor_veiculo": "Preto",
          "placa_veiculo": "GHI-9012",
          "numero_vaga_estacionamento": 7
        },
        {
          "nome_completo": "Ana Souza",
          "numero_apartamento": 404,
          "bloco_apartamento": 4,
          "marca_veiculo": "Ford",
          "modelo_veiculo": "Fiesta",
          "ano_veiculo": 2020,
          "cor_veiculo": "Branco",
          "placa_veiculo": "JKL-3456",
          "numero_vaga_estacionamento": 37
        },
        {
          "nome_completo": "Felipe Lima",
          "numero_apartamento": 105,
          "bloco_apartamento": 1,
          "marca_veiculo": "Chevrolet",
          "modelo_veiculo": "Onix",
          "ano_veiculo": 2016,
          "cor_veiculo": "Vermelho",
          "placa_veiculo": "MNO-7890",
          "numero_vaga_estacionamento": 19
        },
        {
          "nome_completo": "Juliana Costa",
          "numero_apartamento": 206,
          "bloco_apartamento": 2,
          "marca_veiculo": "Fiat",
          "modelo_veiculo": "Uno",
          "ano_veiculo": 2015,
          "cor_veiculo": "Amarelo",
          "placa_veiculo": "PQR-2345",
          "numero_vaga_estacionamento": 3
        },
        {
          "nome_completo": "Ricardo Almeida",
          "numero_apartamento": 307,
          "bloco_apartamento": 3,
          "marca_veiculo": "Renault",
          "modelo_veiculo": "Sandero",
          "ano_veiculo": 2018,
          "cor_veiculo": "Verde",
          "placa_veiculo": "STU-4567",
          "numero_vaga_estacionamento": 49
        },
        {
          "nome_completo": "Fernanda Carvalho",
          "numero_apartamento": 408,
          "bloco_apartamento": 4,
          "marca_veiculo": "Hyundai",
          "modelo_veiculo": "HB20",
          "ano_veiculo": 2021,
          "cor_veiculo": "Prata",
          "placa_veiculo": "VWX-8901",
          "numero_vaga_estacionamento": 33
        },
        {
          "nome_completo": "Roberto Pereira",
          "numero_apartamento": 109,
          "bloco_apartamento": 1,
          "marca_veiculo": "Nissan",
          "modelo_veiculo": "Versa",
          "ano_veiculo": 2019,
          "cor_veiculo": "Cinza",
          "placa_veiculo": "YZA-2345",
          "numero_vaga_estacionamento": 42
        },
        {
          "nome_completo": "Camila Santos",
          "numero_apartamento": 210,
          "bloco_apartamento": 2,
          "marca_veiculo": "Jeep",
          "modelo_veiculo": "Renegade",
          "ano_veiculo": 2020,
          "cor_veiculo": "Branco",
          "placa_veiculo": "BCD-6789",
          "numero_vaga_estacionamento": 20
        },
        {
          "nome_completo": "Lucas Oliveira",
          "numero_apartamento": 311,
          "bloco_apartamento": 3,
          "marca_veiculo": "Mitsubishi",
          "modelo_veiculo": "Lancer",
          "ano_veiculo": 2017,
          "cor_veiculo": "Prata",
          "placa_veiculo": "EFG-0123",
          "numero_vaga_estacionamento": 12
        },
        {
          "nome_completo": "Amanda Silva",
          "numero_apartamento": 412,
          "bloco_apartamento": 4,
          "marca_veiculo": "Kia",
          "modelo_veiculo": "Sportage",
          "ano_veiculo": 2018,
          "cor_veiculo": "Azul",
          "placa_veiculo": "HIJ-4567",
          "numero_vaga_estacionamento": 46
        },
        {
          "nome_completo": "Marcelo Santos",
          "numero_apartamento": 113,
          "bloco_apartamento": 1,
          "marca_veiculo": "BMW",
          "modelo_veiculo": "320i",
          "ano_veiculo": 2019,
          "cor_veiculo": "Preto",
          "placa_veiculo": "KLM-8901",
          "numero_vaga_estacionamento": 11
        },
        {
          "nome_completo": "Patrícia Lima",
          "numero_apartamento": 214,
          "bloco_apartamento": 2,
          "marca_veiculo": "Audi",
          "modelo_veiculo": "A3",
          "ano_veiculo": 2020,
          "cor_veiculo": "Branco",
          "placa_veiculo": "NOP-2345",
          "numero_vaga_estacionamento": 29
        },
        {
          "nome_completo": "Gustavo Oliveira",
          "numero_apartamento": 315,
          "bloco_apartamento": 3,
          "marca_veiculo": "Mercedes-Benz",
          "modelo_veiculo": "Classe C",
          "ano_veiculo": 2018,
          "cor_veiculo": "Prata",
          "placa_veiculo": "QRS-6789",
          "numero_vaga_estacionamento": 13
        },
        {
          "nome_completo": "Cristina Silva",
          "numero_apartamento": 416,
          "bloco_apartamento": 4,
          "marca_veiculo": "Volvo",
          "modelo_veiculo": "XC60",
          "ano_veiculo": 2019,
          "cor_veiculo": "Preto",
          "placa_veiculo": "TUV-0123",
          "numero_vaga_estacionamento": 8
        },
        {
          "nome_completo": "Rafaela Santos",
          "numero_apartamento": 117,
          "bloco_apartamento": 1,
          "marca_veiculo": "Tesla",
          "modelo_veiculo": "Model S",
          "ano_veiculo": 2020,
          "cor_veiculo": "Vermelho",
          "placa_veiculo": "WXY-4567",
          "numero_vaga_estacionamento": 23
        },
        {
          "nome_completo": "Fernando Oliveira",
          "numero_apartamento": 218,
          "bloco_apartamento": 2,
          "marca_veiculo": "Porsche",
          "modelo_veiculo": "911",
          "ano_veiculo": 2021,
          "cor_veiculo": "Preto",
          "placa_veiculo": "ZAB-8901",
          "numero_vaga_estacionamento": 16
        },
        {
          "nome_completo": "Carla Lima",
          "numero_apartamento": 319,
          "bloco_apartamento": 3,
          "marca_veiculo": "Ferrari",
          "modelo_veiculo": "488 GTB",
          "ano_veiculo": 2020,
          "cor_veiculo": "Amarelo",
          "placa_veiculo": "BCD-2345",
          "numero_vaga_estacionamento": 36
        },
        {
          "nome_completo": "Rodrigo Silva",
          "numero_apartamento": 420,
          "bloco_apartamento": 4,
          "marca_veiculo": "Lamborghini",
          "modelo_veiculo": "Aventador",
          "ano_veiculo": 2021,
          "cor_veiculo": "Laranja",
          "placa_veiculo": "CDE-6789",
          "numero_vaga_estacionamento": 50
        }
      
      
]


// funcoes gerais
function getById(id){
    return document.getElementById(id)
}


//Evento de click cadastrar
const buttonRegister = getById("button-register")
buttonRegister.addEventListener("click", function(event){ 
  
  //pegando os dados dos inputs
  let nameFull = getById("name")
  let aptoNumber = getById("apt-number")
  let aptoBlock = document.querySelector('input[name="blocks"]:checked')
  let vehiBrand = getById("brand")
  let vehiModel = getById("model")
  let vehiYear = getById("year")
  let vehiColor = getById("color")
  let vehiPlate = getById("plate")
  let parkNumber = getById("parking-number")

 
  //printando os dados no console
  console.log(`-----------Cadastro-----------` + `\n
  Nome Completo: ${nameFull.value}
  N.º do Apartamento: ${aptoNumber.value}
  Bloco: ${aptoBlock.value}` + `\n
  -----------Veículo-----------` + `\n
  Marca: ${vehiBrand.value}` + `
  Modelo: ${vehiModel.value}
  Ano: ${vehiYear.value}
  Cor: ${vehiColor.value}
  Placa: ${vehiPlate.value}` + `\n
  VAGA ->> ${parkNumber.value}`) 

  //limpando o formulario
  nameFull.value = ""
  aptoNumber.value = ""
  vehiBrand.value = ""
  vehiModel.value = ""
  vehiYear.value = ""
  vehiColor.value = ""
  vehiPlate.value = ""
  parkNumber.value = ""

  alert("Cadastro Realizado com Sucesso")

})
 


// ------------------MOSTRAR DADOS A MAIS NA PAGINA------------------

// Descobrir vagas nao utilizadas
function prkSpotAvailable(array) {
  const spotsTaken = array.map(object => object.numero_vaga_estacionamento);
  const spotsAvailables = [];

  for (let i = 1; i <= 50; i++) {
    if (!spotsTaken.includes(i)) {
      spotsAvailables.push(i);
    }
  }

  return spotsAvailables;
}

//array com as vagas nao utilizadas
const spotsAvailableArray = prkSpotAvailable(cadastrosJson)


// Funcao mostrar no DOM Vagas Cadastradas
let prkSpotRegisteredDiv = getById("prk-spot-registered")

function showData(database){
  
  //cria titulo
  let newH2 = document.createElement("h2")
  newH2.innerHTML = "VAGAS CADASTRADAS:"
  prkSpotRegisteredDiv.appendChild(newH2)
  
  
  //percorre o array de dados e cria os elementos no DOM para cada iteracao
  database.forEach(entry => {
    
    let newDiv = document.createElement("div")
    prkSpotRegisteredDiv.appendChild(newDiv)
    newDiv.classList.add("data-card-style")
    

    let newPName = document.createElement("p")
    newPName.innerHTML = `Nome do Proprietário: ${entry.nome_completo}`

    let newPApto = document.createElement("p")
    newPApto.innerHTML = `N.º do Apartamento: ${entry.numero_apartamento}`

    let newPBlock = document.createElement("p")
    newPBlock.innerHTML = `Bloco: ${entry.bloco_apartamento}`

    let newPBrand = document.createElement("p")
    newPBrand.innerHTML = `Marca Veículo: ${entry.marca_veiculo}`

    let newPModel = document.createElement("p")
    newPModel.innerHTML = `Modelo Veículo: ${entry.modelo_veiculo}`

    let newPYear = document.createElement("p")
    newPYear.innerHTML = `Ano Veículo: ${entry.ano_veiculo}`

    let newPColor = document.createElement("p")
    newPColor.innerHTML = `Cor Veículo: ${entry.cor_veiculo}`

    let newPPlate = document.createElement("p")
    newPPlate.innerHTML = `Placa Veículo: ${entry.placa_veiculo}`

    let newPNumberSpot = document.createElement("p")
    newPNumberSpot.innerHTML = `Cor Veículo: ${entry.numero_vaga_estacionamento}`

    let newPSpotTaken = document.createElement("p")
    newPSpotTaken.innerHTML = `Vaga Cadastrada: ${entry.numero_vaga_estacionamento}`


    newDiv.appendChild(newPName)
    newDiv.appendChild(newPApto)
    newDiv.appendChild(newPBlock)
    newDiv.appendChild(newPBrand)
    newDiv.appendChild(newPModel)
    newDiv.appendChild(newPYear)
    newDiv.appendChild(newPColor)
    newDiv.appendChild(newPPlate)
    newDiv.appendChild(newPNumberSpot)
    newDiv.appendChild(newPSpotTaken)




    
  });
}


//funcao mostrar no DOM vagas disponiveis
let prkSpotAvailableDiv = getById("prk-spot-available")
let availableSpotTitle = getById("available-spots-title")

function showData2(database){
  
  //cria o titulo
  let newH2 = document.createElement("h2")
  newH2.innerHTML = "VAGAS DISPONÍVEIS:"
  availableSpotTitle.appendChild(newH2)

  

    database.forEach(entry =>{

      //percorre o array de vagas nao utilizadas e cria os elementos no DOM
      let newDiv = document.createElement("div")
      prkSpotAvailableDiv.appendChild(newDiv)
      newDiv.classList.add("data-dot-style")

      let newPSpot = document.createElement("p")
      newPSpot.innerHTML = entry

      newDiv.appendChild(newPSpot)
    })
}








// Evento de click mostrar dados
const buttonShowData = getById("button-show-data")
buttonShowData.addEventListener("click",  function(event){
  event.preventDefault()
  showData(cadastrosJson)
  showData2(spotsAvailableArray)
  buttonShowData.setAttribute("disabled", "")

})


























//








