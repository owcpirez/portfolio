/* Exercicio 01 */
alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

let nome = prompt("Digite o seu nome: ")
let idade = prompt("Informe a sua idade: ")
let confIdade = confirm("Confirme a sua idade. \nVocê possui " + idade + " anos?")

if(confIdade == true){
  alert("Nome digitado: " + nome + "\nIdade digitada: " + idade + "\nConfirmação da Idade: " + confIdade)
}else{
  console.log("Usuário não confirmou a idade!!!")
}

/* Exercicio 02 */
let nameOne = prompt("Informe o primeiro nome.")
let ageOne = prompt("informe a idade do peimeiro nome.")
let nameTwo = prompt("Informe o segundo nome.")
let ageTwo = prompt("informe a idade do segundo nome.")
let difAges

if (ageOne > ageTwo) {
    difAges = " é " + (ageOne - ageTwo) + " anos mais velho"
} else if (ageOne < ageTwo) {
    difAges = " é " + (ageTwo - ageOne) + " anos mais novo"
} else {
    difAges = " tem a mesma idade"
}
alert(nameOne + " tem " + ageOne + " anos e," + difAges + " que " + "\n" + nameTwo + ", que tem " + ageTwo + " anos de idade:")

/* Exercicio 03 */
let namePilot = window.prompt('Informe o nome do Piloto: ')
let initialVelocity = 0

velocityAcceleration = Number(window.prompt('Que velocidade quer acelerar? '))
confirmVelocity = window.confirm(`Quer ir para velocidade ${velocityAcceleration} Km/s?`)

confirmVelocity === true ? initialVelocity = velocityAcceleration : initialVelocity === 0

if(initialVelocity <= 0) {
	window.alert('Nave está parada. Considere partir  e aumentar a velocidade')
} else if (initialVelocity < 40) {
	window.alert('Você está devagar. podemos aumentar mais')
} else if ((initialVelocity >= 40) && (initialVelocity < 80)) {
	window.alert('Parece uma boa velocidade para manter')
} else if ((initialVelocity >= 80) && (initialVelocity < 100)) {
	window.alert('Velocidade alta. Considere diminuir.')
} else {
	window.alert('Velocidade perigosa. Controle automático forçado.')
}

/* Exercicio 04 */
let pilotName = prompt ('Piloto, digitar seu nome abaixo.')

alert ('Seja bem vindo á bordo ' + pilotName + ' ,atenção á seguir!')

alert ('Velocidade da Nave é de 0km/h')

let velocity = prompt ('Qual a velocidade desejada para aceleração?')

alert ('A velocidade está avançando para ' + velocity + 'km/h')

if (velocity <= 0){
    alert('Nave está parada. Considere partir e aumentar a velocidade')
} else if (velocity < 40){
    alert('Você está devagar, podemos aumentar mais')
} else if (velocity >= 40 && velocity <= 80){
    alert('Parece uma boa velocidade')
} else if (velocity >=80 && velocity <= 100){
    alert('Velocidade alta. Considere diminuir')
} else if ( velocity >= 100){
    alert('Controle automático forçado')
}

/* Exercicio 05 */
let departureDateEntry = prompt("Digite a data de partida:(formato DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment();

let dateDif = today - departureDate;

let choseOption = prompt("escolha como gostaria de exibir o tempo de partida\n1-segundos\n2-minutos\n3-horas\n4-dias")

switch (choseOption) {
    case 1:
        let secondOfDeparture = Math.round(dateDif / 1000)
        alert("tempo de voo:" + secondOfDeparture + "s")
        break;
    case 2:
        minuteOfDeparture = Math.round(dateDif / 1000 / 60)
        alert("tempo de voo:" + minuteOfDeparture + "minutos")
        break;
    case 3:
        hoursOfDeparture = Math.round(dateDif / 1000 / 3600)
        alert("tempo de voo:" + hoursOfDeparture + "horas")
        break;
    case 4:
        dayOfDeparture = Math.round(dateDif / 1000 / 24)
        alert("dias: " + dayOfDeparture + "dias")
        break;

    default:
        alert("erro!")
        break;

}

/* Exercicio 06*/
let lyDistance = prompt("Digite a distância em anos-luz:")
let conversionOptions = prompt("Escolha uma das opções de unidade para conversão:\n\n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)\n")

let chosenConversion
let convertedValue
switch(conversionOptions){
    case "1":
        chosenConversion = "Parsec (pc)"
        convertedValue = lyDistance * 0.306601
        break
    case "2":
        chosenConversion = "Unidade Astronômica (AU)"
        convertedValue = lyDistance * 63241.1
        break
    case "3":
        chosenConversion = "Quilômetros (km)"
        convertedValue = lyDistance * (9.5 * Math.pow(10,12))
        break
}

if(conversionOptions > 0 && conversionOptions <= 3) {
    alert("Distância em Anos-luz: " + lyDistance + "\nDistância convertida para " + chosenConversion + ": " + convertedValue)
} else {
    alert("Distância em Anos-luz: " + lyDistance + "\nUnidade não identificada: Conversão fora do escopo")
}

/* Exercicio 07*/
let shipName = prompt("Digite o Nome da Nave")
let totalWarps = 0
let enterWarp = confirm("\nDeseja entrar em dobra espacial?\n\n1- Sim\n2- Não\n")
if (enterWarp) {
    let totalWarps = 1
    let NextWarp = confirm("\nDeseja realizar a próxima dobra?\n\n1- Sim\n2- Não\n")
    while (NextWarp) {
        NextWarp = confirm("\nDeseja realizar a próxima dobra?\n\n1- Sim\n2- Não\n")
        totalWarps++
    }
    alert("\nNome da Nave: " + shipName + "\nNúmero de dobra espacial realizada: " + totalWarps + "\n")
} else {
    alert("\nNome da Nave: " + shipName + "\nNenhuma dobra espacial foi realizada.\n")
}

/* Exercicio 08*/
let spaceship = prompt("Digite o nome da nave: ")
let charReplace = prompt("Digite o caractere que quer substituir:")
let newChar = prompt("Digite o novo caractere que quer substituir: ")
let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
	if (spaceship[i] === charReplace) {
		newSpaceship = newSpaceship + newChar 
	}
	else {
		newSpaceship = newSpaceship + spaceship[i]
	}
}
alert(`O novo nome da nave é: ${newSpaceship}`)

/* Exercicio 09*/
let spaceshipName = prompt("\nDigite o nome da espaçonave:\n")
let spaceshipNameInverted = ""


//usando for
for(let pos = spaceshipName.length-1; pos >= 0; pos--) {
  if(spaceshipName[pos] == "e") {
        break
  }
  spaceshipNameInverted += spaceshipName[pos]
}


/*
//usando while com ternário
let pos = spaceshipName.length-1
while(pos >= 0) {
  spaceshipName[pos] != "e" ? spaceshipNameInverted += spaceshipName[pos] : pos = 0
  pos--
}
*/


/*
//usando do while
let pos = spaceshipName.length-1
do {
  if(spaceshipName[pos] != "e") spaceshipNameInverted += spaceshipName[pos] 
  else break
  pos--
} while(pos >= 0)
*/


alert("\nNome original da nave: " + spaceshipName + "\nNome após ocultação: " + spaceshipNameInverted)

/* Exercicio 10*/
let spaceshipName = prompt("\nDigite o nome da nave:\n")
let currentVelocity = 0

function acceleration(currentVelocity) {
    let newVelocity
    alert("\n********** ATENÇÃO: **********\nAcelerando Nave em + 5km/s\n")
    newVelocity = currentVelocity + 5;
    alert("\n********** ATENÇÃO: **********\nNave Acelerada com Sucesso!\n")
    return newVelocity
}

function deceleration(currentVelocity) {
    let newVelocity
    if (currentVelocity > 0) {
        alert("\n************ ATENÇÃO: ************\nDesacelerando Nave em 5km/s\n")
        newVelocity = currentVelocity - 5;
        alert("\n************ ATENÇÃO: ************\nNave Desacelerada com Sucesso!\n")
    } else {
        newVelocity = 0
        alert("\n************************* ATENÇÃO: *************************\nA nave já está parada! Não é possível reduzir a velocidade.\n")
    }
    return newVelocity
}

function onboardData(spaceshipName, currentVelocity) {
    alert("\nDADOS DE NAVEGAÇÃO:\nNome da Nave: " + spaceshipName + "\nVelocidade Atual: " + currentVelocity)
}

function navigationMenu() {
    let navigationMenu = prompt("\nBem-vindo ao Menu de Navegação! Digite uma das opções a seguir:\n\n1 -> Acelerar a nave em 5km/s\n2 -> Desacelerar a nave em 5km/s\n3 -> Imprimir dados de bordo\n4 -> Sair do Programa\n")
    return navigationMenu
}

let chosenNavOption

while ((chosenNavOption = navigationMenu()) != 4) {
    if (chosenNavOption == "1") {
        currentVelocity = acceleration(currentVelocity)
    } else if (chosenNavOption == "2") {
        currentVelocity = deceleration(currentVelocity)
    } else if (chosenNavOption == "3") {
        onboardData(spaceshipName, currentVelocity)
    }
}

alert("A Navegação da Nave " + spaceshipName + " foi ENCERRADA com Sucesso!")

/* Exercicio 11*/
let spaceshipVelocity = 150

let deceleration = (spaceshipVelocity, printer) => {
  while(spaceshipVelocity > 0) {
    printer(spaceshipVelocity)
    spaceshipVelocity -= 20
  } 
}

let takeOff = deceleration(spaceshipVelocity, velocity => {
  alert("\nDecolagem iniciada!\n\nVelocidade Atual: " + velocity + "km/s")
})

alert("\nA decolagem foi concluída e as comportas podem ser abertas.")

/* Exercicio 12*/
let hitchedSpaceships = [["Fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]]

let moreNineCrew = hitchedSpaceships.filter(function(elementos){
    if(elementos[1] > 9){
        return elementos
    }
}).map(function(elemento){
    return elemento[0]
})

// console.log(moreNineCrew)


let engatePendente = hitchedSpaceships.findIndex(function(elemento) {
    if(elemento[2] == false){
        return elemento 
    }
})

let plataforma = engatePendente + 1
// console.log(plataforma)


let upperCase = hitchedSpaceships.map(function(elemento){
    let upper = elemento[0].toUpperCase()
    return upper
})

// console.log(upperCase)


alert("Naves com numero maior de 9 tripulantes: " + moreNineCrew
+"\nPlataforma pendente de engate: " + plataforma
+"\nNome das Naves: " + upperCase)

/* Exercicio 13*/
let spaceship = {
    speedHistory: [0]
}

let getSpaceshipData = function () {
    let name = prompt("\nDigite o nome da nave:\n")
    spaceship.name = name
    let type = prompt("\nDigite o tipo da nave:\n")
    spaceship.type = type
    let maxSpeed = prompt("\nDigite a velocidade máxima da nave em km/s:\n")
    spaceship.maxSpeed = maxSpeed
}

getSpaceshipData()

let totalSpeed = 0
let maxSpeed = spaceship.maxSpeed

do {
    var options = prompt("\Deseja acelerar ou parar a nave?\n1- Acelerar\n2- Parar")
    if (options == "1") {
        let speedUp = prompt("\nInforme quantos km/s deseja acelerar:\n")
        spaceship.speedHistory.push(parseInt(speedUp))
        totalSpeed = spaceship.speedHistory.reduce((total, speed) => total + speed)
        if (totalSpeed > maxSpeed) {
            alert("\nAtenção:\nVelocidade Atual da Nave: " + totalSpeed + "km/s\nVelocidade Máxima Permitida: " + maxSpeed + "km/s")
        }
    } else {
        alert("\nNome da Nave: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade: " + totalSpeed + "km/s")
        break
    }
} while (options == "1")

/* Exercicio 14*/
class SpacialStation {
    spacheshipHitch(name, crew, hitched, openDoors) {
        this.spacheShipName = name
        this.crewQuantity = crew
        this.isHitched = hitched
        this.isOpen = openDoors
    }
}

let spaceshipList = new Array()

let hitchSpaceship = () => {
    let spacheShipName = prompt("Digite o nome da nave:")
    let crewQuantity = Number(prompt("Digite o número de tripulantes: "))
    let hitch = new SpacialStation()
    hitch.spacheshipHitch(spacheShipName, crewQuantity, true, true)
    spaceshipList.push(spacheShipName)
}

let printSpaceshipList = function () {
    let List = spaceshipList.join("\n")
    alert("Lista de nave(s): \n" + List)
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = Number(prompt("Digite a opção desejada:\n1- Realizar Engate\n2- Imprimir Naves\n3- Sair do Programa"))
        switch (chosenOption) {
            case 1:
                hitchSpaceship()
                break
            case 2:
                printSpaceshipList()
                break
            case 3:
                break
            default:
                alert("Escolha uma opção válida!")
        }
    } while (chosenOption != 3)
}

showMenu()

/* Exercicio 15*/
class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entraceDoorsOpen = false
    }
    hitch() {
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "O que deseja fazer?\n" +
                                "1- Engatar nave\n" +
                                "2- Imprimir naves\n" +
                                "3- Sair do programa")
    }
    return chosenOption
}

function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList +=    (index + 1) + "- " + spaceship.name + 
                            " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []
let chosenOption

while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}

/* Exercicio 16*/
class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }
    set spaceshipType(type) {
        this.type = type
    }
    set spaceshipTypeQuantity(quantity) {
        this.quantity = quantity
    }
    set speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - 0.17))
    }
}

let spaceshipName, spaceshipCrewQuantity, spaceship, spaceshipTypeQuantity, spaceshipType

function spaceshipCreate() {
    spaceshipName = prompt("Digite o nome da nave")
    spaceshipCrewQuantity = Number(prompt("Digite a quantidade de tripulantes"))
    spaceship = new Spaceship(spaceshipName, spaceshipCrewQuantity)
    spaceshipTypeQuantity, spaceshipType
    do {
        spaceshipType = prompt("A nave é de batalha ou transporte?")
        if (spaceshipType != null) spaceshipType = spaceshipType.toUpperCase()
        switch (spaceshipType) {
            case "BATALHA":
                spaceshipTypeQuantity = Number(prompt("Informe quantas armas a nave tem disponível:"))
                spaceship.spaceshipType = spaceshipType
                spaceship.spaceshipTypeQuantity = spaceshipTypeQuantity
                break
            case "TRANSPORTE":
                spaceshipTypeQuantity = Number(prompt("Informe quantos lugares a nave comporta:"))
                spaceship.spaceshipType = spaceshipType
                spaceship.spaceshipTypeQuantity = spaceshipTypeQuantity
                break
            default:
                alert("Tipo de nave inválido!")
        }
    } while (spaceshipType != "BATALHA" && spaceshipType != "TRANSPORTE")
}

function options() {
    let acceleration
    let chosenOption
    while (chosenOption != 3) {
        chosenOption = Number(prompt("O que deseja fazer?\n1- Acelerar a nave\n2- Trocar a Nave\n3- Imprimir e sair"))
        switch (chosenOption) {
            case 1:
                acceleration = Number(prompt("Para qual velocidade em km/s deseja acelerar a nave?"))
                spaceship.speedUp = acceleration
                break
            case 2:
                spaceshipCreate()
                break
            case 3:
                alert("Nome: " + spaceship.name + "\n" +
                    "Quantidade de tripulantes: " + spaceship.crewQuantity + "\n" +
                    "Velocidade atual: " + spaceship.currentVelocity + "km/s")
                break
            default:
                alert("Opção Inválida! Tente novamente.")
        }
    }
}

spaceshipCreate()
options()

/* Exercicio 17*/
class Spaceship {
    static get DECELERATION_RATE() {
      return 0.17
    }
    constructor(name, crewQuantity) {
      this.name = name
      this.crewQuantity = crewQuantity
      this.currentVelocity = 0
    }
    speedUp(acceleration) {
      this.currentVelocity += acceleration * (1 - Spaceship.DECELERATION_RATE)
    }
  }
  
  
  battle_spaceship.js
  
  
  class BattleSpaceship extends Spaceship {
    constructor(name, crewQuantity, weaponsQuantity) {
      super(name, crewQuantity)
      this.weaponsQuantity = weaponsQuantity
    }
  }
  
  
  transport_spaceship.js
  
  
  class TransportSpaceship extends Spaceship {
    constructor(name, crewQuantity, sitsQuantity) {
      super(name, crewQuantity)
      this.sitsQuantity = sitsQuantity
    }
  }
  
  
  app.js
  
  
  class App {
    constructor() {
      this.spaceship = null
    }
    start() {
      this.enrollSpaceship()
      let chosenOption
      do {
        chosenOption = this.showInitialMenu()
        this.redirectFeature(chosenOption)
      } while(chosenOption != "3")
      this.printAndExit()
    }
    enrollSpaceship() {
      let spaceshipName = prompt("Qual o nome da nave?")
      let crewQuantity = prompt("Qual a quantidade de tripulates?")
      let spaceshipKind = this.askForSpaceshipKind()
      if(spaceshipKind == "1") {
        let weaponsQuantity = prompt("Quantas armas a nave possui?")
        this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
      } else {
        let sitsQuantity = prompt("Quantos lugares a nave possui?")
        this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)
      }
    }
    askForSpaceshipKind() {
      let chosenOption
      while(!["1", "2"].includes(chosenOption)) {
        chosenOption = prompt("Qual o tipo da nave?\n1- Batalha\n2- Transporte")
      }
      return chosenOption
    }
    showInitialMenu() {
      const promptMessage =   "O que você deseja fazer?\n" +
                              "1- Acelerar a nave\n" +
                              "2- Trocar a nave\n" +
                              "3- Imprimir e sair"
      let chosenOption = prompt(promptMessage)
      while(!["1", "2", "3"].includes(chosenOption)) {
        chosenOption = prompt(promptMessage)
      }
      return chosenOption
    }
    redirectFeature(chosenOption) {
      switch(chosenOption) {
        case "1":
          this.accelerateSpaceship()
          break
        case "2":
          this.enrollSpaceship()
          break
      }
    }
    accelerateSpaceship() {
      let acceleration = Number(prompt("Quanto gostaria de acelerar?"))
      this.spaceship.speedUp(acceleration)
    }
    printAndExit() {
      let finalMessage =  "Nome: " + this.spaceship.name + "\n" +
                          "Quantidade de tripulates: " + this.spaceship.crewQuantity + "\n" +
                          "Velocidade atual: " + this.spaceship.currentVelocity + "\n"
      alert(finalMessage)
    }
  }
  
  
  index.js
  
  
  const app = new App()
  app.start()
  
/* Exercicio 18*/
class Houses{
    constructor(number, neighborhood, city, area){
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.area = area;

        this.houseLi = document.createElement('li');
        this.houseLiP = document.createElement('p');
        this.houseLiRemoverButton = document.createElement('button');

        this.houseLi.classList.add('house-li');
        this.houseLiRemoverButton.setAttribute('onclick', 'houseRemover(this)');
        this.houseLiRemoverButton.classList.add('house-remover-button');
        
        this.housesContainer = document.querySelector('.houses-container');
        this.housesLiSelect = document.querySelectorAll('.house-li');
        this.houseRemoverButtons = document.querySelectorAll('.house-remover-button');
    }

    buildHouse(){
        this.houseLine = `Casa | numero: ${this.number}, bairro ${this.neighborhood}, cidade: ${this.city}, area: ${this.area}`;       
        this.houseLiP.innerText = this.houseLine;
        this.houseLi.appendChild(this.houseLiP);
        this.houseLiRemoverButton.innerText = 'Apagar casa';
        this.houseLi.appendChild(this.houseLiRemoverButton);
        this.insertBuildedHouse();
    }
    
    insertBuildedHouse(element){
        this.housesContainer.appendChild(this.houseLi);
    }

    removeHouse(element){       
        element.parentNode.remove();
        
    }
}


function createHouse(element){
    let houseNumber = document.querySelector('input[name="house-number"]').value;
    let neighborhoodName = document.querySelector('input[name="neighborhood-name"]').value;
    let cityName = document.querySelector('input[name="city-name"]').value;
    let houseArea = document.querySelector('input[name="house-area"]').value;

    let housesInstance = new Houses(houseNumber, neighborhoodName, cityName, houseArea);
    housesInstance.buildHouse();
}

function houseRemover(element){
    let houses = new Houses();
    houses.removeHouse(element);
}

/* Exercicio 19*/
property.js


class Property {
  constructor(kind, area, rented) {
    this.kind = kind
    this.area = area
    this.rented = rented
  }
}

app.js


class App {
  addProperty() {
    event.preventDefault()
    let kind = document.querySelector("select[name='kind']").value
    let area = document.querySelector("input[name='area']").value
    let rented = document.querySelector("input[name='rented']").checked
    let property = new Property(kind, area, rented)
    this.addOnPropertiesList(property)
    this.cleanForm()
  }
  addOnPropertiesList(property) {
    let listElement = document.createElement("li")
    let propertyInfo = " Tipo: " + property.kind + " (Área: " + property.area + "m²)"
    if(property.rented) {
      let rentedMark = this.createRentedMark()
      listElement.appendChild(rentedMark)
    }
    listElement.innerHTML += propertyInfo
    let buttonToRemove = this.createRemoveButton()
    listElement.appendChild(buttonToRemove)
    document.getElementById("properties").appendChild(listElement)
  }
  createRentedMark() {
    let rentedMark = document.createElement("span")
    rentedMark.style.color = "white"
    rentedMark.style.backgroundColor = "red"
    rentedMark.innerText = "ALUGADO"
    return rentedMark
  }
  createRemoveButton() {
    let buttonToRemove = document.createElement("button")
    buttonToRemove.setAttribute("onclick", "app.remove()")
    buttonToRemove.innerText = "Remover"
    return buttonToRemove
  }
  cleanForm() {
    document.querySelector("input[name='area']").value = ""
    document.querySelector("input[name='rented']").checked = false
  }
  remove() {
    let liToRemove = event.target.parentNode
    document.getElementById("properties").removeChild(liToRemove)
  }
}

main.js


const app = new App()

/* Exercicio 20*/

/* Exercicio 21*/

/* Exercicio 22*/

/* Exercicio 23*/

/* Exercicio 24*/

/* Exercicio 25*/

/* Exercicio 26*/

/* Exercicio 27*/

/* Exercicio 29*/

/* Exercicio 30*/

/* Exercicio 31*/

/* Exercicio 32*/

/* Exercicio 33*/

/* Exercicio 34*/

/* Exercicio 35*/

/* Exercicio 36*/

/* Exercicio 37*/

/* Exercicio 38*/

/* Exercicio 39*/

/* Exercicio 40*/

/* Exercicio 41*/

/* Exercicio 42*/
