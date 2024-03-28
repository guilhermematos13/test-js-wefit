const colors = {
  gray:  '#6B757E',
  white: '#FFFFFF',
  green: '#28A746',
}

function ApplyStyles(elements, styles) {
  elements.forEach(element => {
    for (const [property, value] of Object.entries(styles)) {
      element.style[property] = value;
    }
  });
}

function ChangeMenu() {
  const collectionButtons = document.querySelectorAll(".btn-group-vertical");
  ApplyStyles(collectionButtons, {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center'
  });

  const buttons = document.querySelectorAll(".btn-secondary");
  ApplyStyles(buttons, {
    borderRadius: '4px',
    padding: '4px'
  });
}

function ChangeHeader() {
  const headerCollection = document.querySelectorAll(".jumbotron");
  ApplyStyles(headerCollection, {
    textAlign: 'end',
    backgroundColor: colors.gray,
    color: colors.white
  });

  const headerButtonCollection = document.querySelectorAll('.btn-primary.btn-lg');
  ApplyStyles(headerButtonCollection, {
    backgroundColor: colors.green,
    border: `1px solid ${colors.green}`
  });
}

function SwapElements(a, b, c) {
  const tempA = a.outerHTML;
  const tempB = b.outerHTML;
  const tempC = c.outerHTML;
  a.outerHTML = tempB;
  b.outerHTML = tempC;
  c.outerHTML = tempA;
}

function ChangeColorButtonCard () {
  const ChangeColorButtonCollection = document.getElementsByClassName('btn btn-primary')

  for (let i = 0; i < ChangeColorButtonCollection.length; i++) {
    ChangeColorButtonCollection[1].style.backgroundColor = colors.green,
    ChangeColorButtonCollection[1].style.border = `1px solid ${colors.green}`
  }
}

function ChangeCards() {
  const cards = document.querySelectorAll('.card');
  SwapElements(cards[1], cards[0], cards[3]);
}

function ChangeTitleSection () {
  const titleCollection = document.getElementsByClassName("display-6")

  for (let i = 0; i < titleCollection.length; i++) {
    titleCollection[i].style.fontWeight = '600'
  }

}

function OrderList() {
  const ulElement = document.querySelector('.list-group');

  const fourthItem = document.createElement('li');
  fourthItem.classList.add('list-group-item', 'active');
  fourthItem.textContent = 'Quarto item';
  ulElement.appendChild(fourthItem);

  const fifthItem = document.createElement('li');
  fifthItem.classList.add('list-group-item');
  fifthItem.textContent = 'Quinto item';
  ulElement.appendChild(fifthItem);

  const firstItem = ulElement.querySelector('.list-group-item:first-child');
  firstItem.classList.remove('active');
}

ChangeMenu()
ChangeHeader()
OrderList()
ChangeTitleSection()
ChangeColorButtonCard()
ChangeCards()