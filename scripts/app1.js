/* const countCards = 4;
//0.....4 = 5
class CreateElements {

   body = document.body;
   createDiv() {
       const div = document.createElement('div');
       return div;
   }
   cerateH3() {
       const divTitle = document.createElement('h3');
       return divTitle;
   }
   createContainer() {
       const divContainer = this.createDiv();
       divContainer.className = 'container';
       divContainer.id = 'container'
       for (let i = 0; i <= countCards; i++) {
           const card = this.createDiv()
           const h3 = this.cerateH3()
           card.className = `card card${i + 1}`;
           h3.className = 'card__title';
           divContainer.append(card)
           card.append(h3)
       }
       this.body.append(divContainer)
   }
}
const creator = new CreateElements()
creator.createContainer()

*/

const cards = document.querySelectorAll('.card')

for (const card of cards) {
    card.addEventListener('click', () => {
        clearActiveClasses()
        card.classList.add('active')
    })
}
function clearActiveClasses(){
    cards.forEach(card =>{
card.classList.remove('active')
    })
}

