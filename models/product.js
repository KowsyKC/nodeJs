//const products =[];
const fs= require('fs')
const path= require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile= (cb)=>{
    //async code
    fs.readFile(p,(err, fileContent)=>{
        if(err){
           return cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports= class Product{
    constructor(t){
        this.title= t;
    }
//storing data in file
    save(){
        getProductsFromFile(products =>{
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        })
    }
//fetching data from file
    static fetchAll(cb){
       getProductsFromFile(cb)
    }
}