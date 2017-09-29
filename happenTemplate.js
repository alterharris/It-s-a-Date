let library = (function () {
    let d = new Date();
    let dbl = function (num) {
        if (num < 10) {
            return String('0' + num);
        }
        return String(num);
    }
    let month = ["January", "February", 'March', "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]
    let sMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"]
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



    return {
        Format: (function () {
            return {
                Ordinal: function (num) {
                    let last = num.toString().substring(num.toString().length - 1);
                    if (num == 11 || num == 12 || num == 13) {
                        return num + "th";
                    }
                    switch (last) {
                        case '1':
                            return num + "st";
                        case '2':
                            return num + "nd";
                        case '3':
                            return num + "rd";
                        default:
                            return num + "th";
                    }
                }
            }
        })(),

        TimeStamp: (function () {

            return {
                UnixTimestamp: function () {
                    let time = d.getTime();
                    return String(time).substring(0, 10);
                },
                UnixMillisecond: function () {
                    let timeStamp = Math.floor(Date.now());
                    return timeStamp;
                }
            }
        })(),
        Local: (function () {
            return {
                Time: (function () {
                    return {
                        WithSeconds: function () {
                            let d = new Date();
                            let time = d.toLocaleTimeString();
                            return (time.toString());

                        },
                        WithOutSeconds: function () {
                            let d = new Date();
                            let time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                            return (time.toString());
                        }
                    }
                })(),
                MDY: (function () {
                    return {
                        Numeral: function () {
                            return d.getMonth() + 1 + "/" + dbl(d.getDate()) + "/" + d.getFullYear();
                        },
                        Name: function () {
                            return `${library.Month.CurrentMonth()} ${library.Month.DateOfMonth.Numeral()}`
                            + `, ${library.Year.YearFull()}`
                         }
                    }
                })(),
            }
        })(),
        Second: (function () {
            return {
                Second: function () {
                    return String(d.getSeconds());
                },
                DblDigit: function () {
                    return dbl(d.getSeconds());
                }
            }
        })(),
        Minute: (function () {
            return {
                Minute: function () {
                    return String(d.getMinutes());
                },
                DblDigit: function () {
                    return dbl(d.getMinutes());
                }
            }
        })(),
        Hour: (function () {
            return {
                TwentyFourHour: function () {
                    return String(d.getHours());
                },
                TwelveHour: function () {
                    if (d.getHours() % 12 === 0) {
                        return String(12)
                    }
                    return String(d.getHours() % 12);
                },
                AMPM: (function () {
                    return {
                        UpperCase: function () {
                            return d.getHours() >= 12 ? "PM" : "AM";
                         },
                        LowerCase: function () { 
                            return d.getHours() >= 12 ? "pm" : "am";
                        }
                    }
                })()
            }
        })(),
        Week: (function () {
            return {
                DayOfWeek: function () {
                    return weekday[d.getDay()];
                },
                AbrDayOfWeek: function () {
                    return weekday[d.getDay()].substring(0, 3);
                },
                FirstTwoOfWeek: function () {
                    return weekday[d.getDay()].substring(0, 2);
                },
                WeekOfYear: function () {
                    let date = new Date(d.getTime());
                    date.setHours(0, 0, 0, 0);
                   // Thursday in current week decides the year.
                   date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
                   // January 4 is always in week 1.
                   let week1 = new Date(date.getFullYear(), 0, 4);
                   // Adjust to Thursday in week 1 and count number of weeks from date to week1.
                   return String(1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                                         - 3 + (week1.getDay() + 6) % 7) / 7));

                }
            }
        })(),
        Month: (function () {

            return {
                DateOfMonth: (function () {
                    
                    return  {

                        Numeral: function () {
                            return String(d.getDate());

                        },
                        Ordinal: function () {
                            let day = d.getDate();
                            let last = String(day).substring(String(day).length - 1);
                            if (last === "1") {
                                return day + "st";
                            } else if (last === "2") {
                                return day + "nd"
                            } else if (last === "3") {
                                return day + "rd"
                            } else if (day >= 11 && day < 14) {
                                return day + "th";

                            } else {
                                return day + "th";
                            }

                        },
                        DateDblDigit: function () {
                            let day = d.getDate();
                            if (day < 10) {
                                return "0" + day;
                            } else return String(day);

                        }
                    }
                })(),
                MonthNumber: function () {
                    return String(d.getMonth() + 1);
                },
                MonthNumberDblDigit: function () {
                    let month = d.getMonth() + 1;
                    if (month < 10) {
                        return "0" + month;
                    } else
                        return dbl(month);


                },
                AbrOfCurrentMonth: function () {

                    return sMonth[d.getMonth()];
                },

                CurrentMonth: function () {
                    return month[d.getMonth()];
                }
            }
        })(),
        Year: (function () {
            return {
                DayOfYear: (function () {
                    let now = new Date();
                    let start = new Date(now.getFullYear(), 0, 0);
                    let diff = now - start;
                    let oneDay = 1000 * 60 * 60 * 24;
                    let day = Math.floor(diff / oneDay);
                    return {
                        Numeral: function () {
                            return String(day);
                        },
                        Ordinal: function () {
                            return library.Format.Ordinal(String(day))
                        }
                    }
                })(),
                YearFull: function () {
                    return String(d.getFullYear());
                },
                YearAbr: function () {

                    return String(d.getFullYear().toString(10).substring(2, 4));

                }
            }
        })(),
        Defaults: function () {

            return d.getFullYear() + '-' + dbl(d.getMonth() + 1) + '-' + dbl(d.getDate()) + "T" + dbl(d.getHours()) + ":" + dbl(d.getMinutes()) + ":" + dbl(Math.ceil(d.getSeconds()));


        }
    }
})();
