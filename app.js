var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
//No need to change anything above this line.

function MainController() {
    var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier.

    vm.joe = new Guy("Joe", 100)
    vm.bob = new Guy("Bob", 150)
    vm.bank = 200;

    function Guy(name, startingCash) {
        this.name = name;
        this.cash = startingCash;
        this.giveCash = function (amount) {
            if (amount <= this.cash && amount > 0) {
                this.cash = this.cash - amount;
                return amount;
            } else {
                console.log("I don't have enough cash to give you " + amount + ". " + this.name + " says...");
                return 0;
            }
        };
        this.receiveCash = function (amount) {
            if (amount > 0) {
                this.cash = this.cash + amount;
                return amount;
            } else {
                console.log(amount + " isn't an amount I'll take " + this.name + " says...");
                return 0;
            }
        }
    }

    vm.giveMoneyToJoe = function () {
        if (vm.bank >= 10) {
            vm.bank -= vm.joe.receiveCash(10)
        } else {
            alert("The bank is out of money.")
        }
    }

    vm.receiveMoneyFromBob = function () {
        vm.bank += vm.bob.giveCash(5)
    }

   var finish = 88;

    vm.frogs = [
        { name: "Romsies", posX: 1 },
        { name: "Other Country", posX: 1 },
        { name: "Little Country", posX: 1 },
        { name: "Big Country", posX: 1 }
    ]

 var moveFrogs = function() {
        for(var i=0; i<vm.frogs.length; i++){
            var frog = vm.frogs[i]
           frog.posX += Math.random()* 10;
           if(frog.posX>=finish){
               alert("WINNER WINNER CHICKEN DINNER GOES TO " + frog.name + " !!!!")
           }
        }
    }
    
    vm.startRace = function(){
        moveFrogs();
    }
}