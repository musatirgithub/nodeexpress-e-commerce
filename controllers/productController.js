

const createProduct = async (req,res)=>{
    res.send('Create Product')
}
const getAllProducts = async (req,res)=>{
    res.send('Get all products')
}
const getSingleProduct = async (req,res)=>{
    res.send('Get single product')
}
const updateProduct = async (req,res)=>{
    res.send('Update Product')
}
const deleteProduct = async (req,res)=>{
    res.send('Delete Product')
}
const uploadImage = async (req,res)=>{
    res.send('Upload Image')
}
module.exports = {createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct, uploadImage}