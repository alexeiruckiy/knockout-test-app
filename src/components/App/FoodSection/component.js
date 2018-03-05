import ko from 'knockout';

class FoodSection {
  constructor({ section, orderItem, unorderItem }) {
    this.name = section.name;
    this.items = section.items;
    this.isColapsed = ko.observable(false);
    this.orderItem = orderItem;
    this.unorderItem = unorderItem;
  }

  toggleCollapse() {
    const nextState = !this.isColapsed();

    this.isColapsed(nextState);
  }
}

export default FoodSection;
