// Q8: MovieTicket and OnlineTicket inheritance with prototype method

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Add the method to MovieTicket.prototype as requested.
MovieTicket.prototype.printTicket = function () {
    console.log(`Movie: ${this.movieName}`);
    console.log(`Seat: ${this.seatNo}`);
    console.log(`Ticket Price: ₹${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const onlineTicket1 = new OnlineTicket("The Adventure", "A12", 200, 25);
const onlineTicket2 = new OnlineTicket("Space Journey", "B08", 250, 30);

onlineTicket1.printTicket();
console.log("Convenience Fee: ₹" + onlineTicket1.convenienceFee);
console.log("Total Amount: ₹" + onlineTicket1.getTotalAmount());

console.log("\nSecond ticket:");
onlineTicket2.printTicket();
console.log("Total Amount: ₹" + onlineTicket2.getTotalAmount());

// OnlineTicket objects can access printTicket() through the prototype chain.
console.log(onlineTicket1 instanceof OnlineTicket); // true
console.log(onlineTicket1 instanceof MovieTicket);  // true
