import $ from "jquery";

export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  display(elementID) {
    $(`#${elementID}`).text(`${this.firstName} ${this.lastName}`);
  }
}
