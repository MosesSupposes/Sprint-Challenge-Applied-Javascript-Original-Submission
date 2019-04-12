class TabLink {
  static of(element) {
    return new TabLink(element)
  }

  static allTabs() {
    return [...document.querySelectorAll('.tab')]
  }

  constructor(tabElement){
    const allCards = TabCard.allCards()

    this.tabElement = tabElement
    this.tabData = this.tabElement.dataset.tab

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

  static allCards() {
    return [...document.querySelectorAll('.card')]
  }

  constructor(cardElement){
    this.cardElement = cardElement
  }

  selectCard(){
    this.cardElement.style.display = 'flex'
  }

}

/**
 * ----------------------------
 *          Main
 * ----------------------------
 */

const tabs = document.querySelectorAll('.tab')
tabs.forEach(TabLink.of)
