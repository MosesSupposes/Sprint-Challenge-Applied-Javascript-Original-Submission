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
      this.selectTab()
  }

  selectTab(){
    // strip all instances of tabItem of active tab class
    this.constructor.allTabs().forEach(removeClass('active-tab'))

    // remove all cards from the DOM
    TabCard.allCards().forEach(card => card.style.display = 'none')
    
    // set the currently selected tab to active
    this.tabElement.classList.add('active-tab')
  
    // render all cards that are associated with the active tab
    this.cards.forEach(card => card.selectCard());
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

/**
 * ---------------------------
 *        Helpers
 * ----------------------------
 */

// Strings -> (DOMNode -> DOMNode)
function removeClass(...classes) {
  return function(el) {
    el.classList.remove(...classes)
    return el
  }
}

// Tuple String -> (DOMNode -> DOMNode)
function setAttr([attr, val]) {
  return function(el) {
    el.setAttribute(attr, val)
    return el
  }
}