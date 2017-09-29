describe('dateLayout', function() {

	describe('Month', function() {
	  describe('MonthNumber', function() {
	    it('should return the number of the current month ex: January = 1', function() {
	      expect(happen('M')).to.equal(moment().format('M'));
	    });
	  });
	  describe('DblDigit', function() {
	    it('should return the number of the current month as a double digit ex: January = 01', function() {
	      expect(happen('MM')).to.equal(moment().format('MM'));
	    });
	  });
	  describe('AbrOfCurrentMonth', function() {
	    it('should return the abbreviation for the current month', function() {
	      expect(happen('MMM')).to.equal(moment().format('MMM'));
	    });
	  });
	  describe('CurrentMonth', function() {
	    it('should return the name of current month', function() {
	      expect(happen('MMMM')).to.equal(moment().format('MMMM'));
	    });
	  });
	  describe('Date of Month Numeral', function() {
	    it('should return the day of the month', function() {
	      expect(happen('D')).to.equal(moment().format('D'));
	    });
	  });
	  describe('Date of Month Ordinal', function() {
	    it('should return the day of the month as an ordinal value', function() {
	      expect(happen('Do')).to.equal(moment().format('Do'));
	    });
	  });
	  describe('Date of Month DateDblDigit', function() {
	    it('should return the day of the month as a double digit', function() {
	      expect(happen('DD')).to.equal(moment().format('DD'));
	    });
	  });
	});

	describe('Year', function() {
	  describe('DayOfYear Numeral', function() {
	    it('should return the day of the year ex: Februray 1 should return 32', function() {
	      expect(happen('DDD')).to.equal(moment().format('DDD'));
	    });
	  });
	  describe('DayOfYear Ordinal', function() {
	    it('should return the day of the year as an ordinal value', function() {
	      expect(happen('DDDo')).to.equal(moment().format('DDDo'));
	    });
	  });
	  describe('YearAbr', function() {
	    it('should return the last two digits of the year', function() {
	      expect(happen('YY')).to.equal(moment().format('YY'));
	    });
	  });
	  describe('YearFull', function() {
	    it('should return the year as four digits', function() {
	      expect(happen('YYYY')).to.equal(moment().format('YYYY'));
	    });
	  });
  });

	describe('Week', function() {
	  describe('FirstTwoOfWeek', function() {
	    it('should return the first two letters of day the week', function() {
	      expect(happen('dd')).to.equal(moment().format('dd'));
	    });
	  });
	  describe('AbrDayOfWeek', function() {
	    it('should return the first three letters of day the week', function() {
	      expect(happen('ddd')).to.equal(moment().format('ddd'));
	    });
	  });
	  describe('DayOFWeek', function() {
	    it('should return the day of the week', function() {
	      expect(happen('dddd')).to.equal(moment().format('dddd'));
	    });
	  });
	  describe('WeekOfYear', function() {
	    it('should return the numerical value for the week of the year', function() {
	      expect(happen('W')).to.equal(moment().format('W'));
	    });
	  });

	});

	describe('Hour', function() {
	  describe('AMPM', function() {
	    it('should return AM or PM with uppercase format', function() {
	      expect(happen('A')).to.equal(moment().format('A'));
	    });
	    it('should return am or pm with lowercase format', function() {
	      expect(happen('a')).to.equal(moment().format('a'));
	    });
	  });
	  describe('TwentyFourHour', function() {
	    it('should return the hour in a 24hr format', function() {
	      expect(happen('H')).to.equal(moment().format('H'));
	    });
	  });
	  describe('TwelveHour', function() {
	    it('should return the hour as a 12hr format', function() {
	      expect(happen('h')).to.equal(moment().format('h'));
	    });
	  });

  });
 	describe('Minute', function() {
  	describe('Minute', function() {
  	  it('should return return the number of minutes', function() {
  	    expect(happen('m')).to.equal(moment().format('m'));
  	  });
	  });
    describe('Minute DblDigit', function() {
  	  it('should return all minutes as double digits', function() {
  	    expect(happen('mm')).to.equal(moment().format('mm'));
  	  });
	  });

  });
	describe('Second', function() {
  	describe('Second', function() {
    	  it('should return the number of seconds', function() {
    	    expect(happen('s')).to.equal(moment().format('s'));
    	  });
  	  });

      describe('Second DblDigit', function() {
    	  it('should return all seconds as double digits', function() {
    	    expect(happen('ss')).to.equal(moment().format('ss'));
    	  });
  	  });
  });
  	describe('TimeStamp', function() {
      describe('UnixTimestamp', function() {
        it('should return the unix timestamp to the second', function() {
          expect(happen('X')).to.equal(moment().format('X'));
        });
      });
      describe('UnixMillisecond', function() {
        it('should return the unix timestamp to the millisecond', function() {

          expect(Math.abs(moment().format('x') - happen('x'))).to.be.within(0, 1);
        });
      });

    });

  	describe('Local', function() {
      describe('Time, without Seconds', function() {
        it('should return the time ith seconds', function() {
          expect(happen('LT')).to.equal(moment().format('LT'));
        });
      });
      describe('Time, with seconds', function() {
        it('should return the time without seconds', function() {
          expect(happen('LTS')).to.equal(moment().format('LTS'));
        });
      });
      describe('MDY, Numeral', function() {
        it('should return the month/date/year as numerals', function() {
          expect(happen('l')).to.equal(moment().format('l'));
        });
      });
      describe('MDY, Name', function() {
        it('should return the month date, year where month is by name', function() {
          expect(happen('LL')).to.equal(moment().format('LL'));
        });
      });

  });
  	describe('Defaults', function() {

	  it('should return the date and time in the following format: year-month-dayThour:minute:second', function() {
      var defaults = moment().format().slice(0, 19);
	    expect(happen()).to.equal(defaults);
	  });
  });
});