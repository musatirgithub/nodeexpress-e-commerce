

const createProduct = async (req,res)=>{
    send('Create Product')
}
const getAllProducts = async (req,res)=>{
    send('Get all products')
}
const getSingleProduct = async (req,res)=>{
    send('Get single products')
}
const updateProduct = async (req,res)=>{
    send('Update Product')
}
const deleteProduct = async (req,res)=>{
    send('Delete Product')
}
const uploadImage = async (req,res)=>{
    send('Upload Image')
}
module.exports = {createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct, uploadImage}