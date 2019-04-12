class TabLink {
  static of(element) {
    return new TabLink(element)
  }

  constructor(tabElement){
    this.tabElement = tabElement
    this.tabData = this.tabElement.dataset.tab
    
    const tabsContainer = document.querySelector('.tabs')
    const cardsContainer = document.querySelector('.cards-container')
    const allTabs = Array.from(tabsContainer.querySelectorAll('.tab'))
    const allCards = Array.from(cardsContainer.querySelectorAll('.card'))
   
    this.cardElements = 
      (this.tabData === 'all') 
        ? allCards
        : allCards.filter(card => card.dataset.tab === this.tabData)
   
    this.cards = 
      [...this.cardElements]
      .map(TabCard.of)
  }

  selectTab(){

    // Select all elements with the .tab class on them
    // const tabs = document.querySelectorAll();
    
    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach()

    // Select all of the elements with the .card class on them
    // const cards = ;

    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach()
    
    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    // this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  static of(element) {
    return new TabCard(element)
  }

  constructor(cardElement){
    this.cardElement = cardElement
  }

  selectCard(){
    this.cardElement.style.display = 'flex'
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
const tabs = document.querySelectorAll('.tab')
tabs.forEach(TabLink.of)
