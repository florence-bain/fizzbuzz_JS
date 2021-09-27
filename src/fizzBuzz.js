class Javabuzz {
  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFiveAndThree(number) {
    return this._isDivisibleBy(number, 15);
  }

  says(number) {

    if (this.isDivisibleByFiveAndThree(number)) {
      return "JavaBuzz";  
    }

    if (this.isDivisibleByThree(number)) {
      return "Java";
    }
  
    if (this.isDivisibleByFive(number)) {
      return "Buzz";  
    }

  
  }
  
}