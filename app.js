let id = 1

class productManager {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.products = [];
    }

    addProducts(product) {
        
        if (product.title === '' || product.description === '' || product.price === '' || product.thumbnail === '' || product.code === '' || product.stock === ''){
        console.log('complete todos los campos')
    }
    

    const repetir = this.products.find(el => el.code === product.code);
    if (repetir){
        console.log('codigo repetido. no se puede repetir codigo')
    }

    this.products.push(product);
    id++;
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        const finded = this.products.find(el => el.id === id);
        if (finded) {
            return finded
        }
        return 'Error 404'

    }

}

const product = new productManager();
const newProduct0 = new productManager('Iphone 11', 'Experimenta un rendimiento excepcional y una cámara avanzada en el iPhone 11. ¡Descubre la potencia de la innovación', 200.999, './images/iphone11.png', 1, 9);
const newProduct1 = new productManager('Iphone 12', 'Un salto hacia el futuro con el iPhone 12. Diseño elegante, velocidad increíble y una experiencia revolucionaria', 299.999, './images/iphone12.png', 2, 9);
const newProduct2 = new productManager('Iphone 13', 'El iPhone 13 lleva la excelencia a otro nivel. Más potencia, fotografía impresionante y una pantalla asombrosa.', 349.999, './images/iphone13.png', 3, 9);
const newProduct3 = new productManager('Iphone 14','Descubre la próxima generación con el iPhone 14. Innovación sin límites, velocidad extrema y características sorprendentes.', 449.999, './images/iphone14.png', 4, 9);
const newProduct4 = new productManager('Iphone 14 Pro', 'Potencia ilimitada en el iPhone 14 Pro. Cámara profesional, pantalla ProMotion y desempeño excepcional.', 549.999, './images/iphone14-Pro.png', 5, 9);

product.addProducts({...newProduct0, id});
product.addProducts({...newProduct1, id});
product.addProducts({...newProduct2, id});
product.addProducts({...newProduct3, id});
product.addProducts({...newProduct4, id});

console.log(product.getProducts())

console.log(product.getProductById(4))



