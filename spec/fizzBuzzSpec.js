describe('Javabuzz', function() {

  let javabuzz;

  beforeEach(function() {
      javabuzz = new Javabuzz();
    });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 5 and by 3', function() {
        javabuzz = new Javabuzz();
        expect(javabuzz.isDivisibleByFiveAndThree(15)).toBe(true);
    });

  });

  describe ('knows when a number is NOT', function() {

      it('divisible by 3', function() {
        expect(javabuzz.isDivisibleByThree(1)).toBe(false);
      });

      it('divisible by 5', function() {
          expect(javabuzz.isDivisibleByFive(1)).toBe(false);
      });
    
      it('divisible by 5 and by 3', function() {
          expect(javabuzz.isDivisibleByFiveAndThree(14)).toBe(false);
      });
  });

  describe('when playing, says', function() {


      it('"JavaBuzz" when a number is divisible by 15', function() {
        expect(javabuzz.says(15)).toEqual("JavaBuzz");
      });

      it('"Java" when a number is divisible by 3', function() {
        expect(javabuzz.says(3)).toEqual("Java");
      });
      
      it('"Buzz" when a number is divisible by 5', function() {
        expect(javabuzz.says(5)).toEqual("Buzz");
      });
    });

});
