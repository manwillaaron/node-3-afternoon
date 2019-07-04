module.exports ={
    getAll(req,res){
       const db = req.app.get('db')
       db.read_products()
       .then(dbRes => res.status(200).send(dbRes))
       .catch(err => res.status(500).send(err))
    },

    getOne(req,res) {
    const db = req.app.get('db')
    const {product_id} = req.params
    console.log(product_id);
    db.read_product(product_id)
    .then(dbRes => res.status(200).send(dbRes)) 
    .catch(err => res.status(500).send(err))
    },
    
    update(req,res){
    const db = req.app.get('db')
    const {product_id} = req.params
    const {desc} = req.query
    db.update_product([product_id,desc])
    .then(dbRes => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
    },

    delete(req,res){
    const db = req.app.get('db')
    const {product_id} = req.params
    db.delete_product([product_id])
    .then(dbRes => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
    },

    create(req,res){
        console.log('hit');
    const db = req.app.get('db')
    const {name,description,price,image_url} = req.body
    console.log(req.body);
    db.create_product([name,description,price,image_url])
    .then(dbRes => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
    }
}




