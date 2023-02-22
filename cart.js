
const cart = {
    items : [],
    totalPrice : 0,
    count : 0,

    getTotalPrice() {
    return this.calculateItemPrice();
    },

    add(item, price , itemCount = 1){
    const addItems = {
        item,
        price,
        itemCount
    }

    this.items.push(addItems);
    this.increaseCount(itemCount);
    },

    print() {
        console.log(JSON.stringify(this.items))
        console.log( `total : ${this.getTotalPrice()} $`)
        
    },

    calculateItemPrice(){
    return this.items.reduce((acc,items) => {return acc + (items.price*items.itemCount)},0)
    },

    increaseCount(itemCount){
    return this.count += itemCount
    },
    
    clear(){
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },
}



cart.add('jeans',120,2);
cart.add('skirts',120,3);
cart.add('jackets',120,4);

cart.print();
