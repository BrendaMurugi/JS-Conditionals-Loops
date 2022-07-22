class Mkulima{
    constructor(){
    this.farm = [];
    this.groceryVendors = [];
    this.products = [];
    this.addFarm = (farmName, farmId, farmer, phone, address) => {
    this.farm.push({farmName, farmId,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let specific = this.farm.find(item => item.farmId ===farmId);
    let farmIndex = this.farm.indexOf(specific);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmersName,newPhone,newAddress){
    let specificFarm = this.farm.find(item => item.farmId ===farmId)
    specificFarm.farmId =newFarmId;
    specificFarm.farmName =newFarmName;
    specificFarm.farmer =newFarmersName;
    specificFarm.phone =newPhone;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    }
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for Kshs ${quantity*specificProduct.price}`);
    }
    }
    }
    let farmOne = new Mkulima();
    farmOne.addFarm("2A 0.34ha","Brenda","Murugi","+254 798 881 101", "054-123");
    farmOne.addFarm("3C 0.78ha","Chekko","Chep","+254 718 789 345", "045-567");
    farmOne.addFarm("9H 0.56ha","Esther","owiti","+254 724 434 897", "954-657")
    console.log(farmOne.farm);