class Product{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}
// productInfom(){

// }
var myproduct=new Product('RICE',1000,'10kg')
console.log(`productName:${myproduct.name} \n Price: ${myproduct.price}\n Quantity: ${myproduct.quantity}`);