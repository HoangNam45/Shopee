const User = require('../models/User')
const Product = require('../models/Product')

class SiteController {
    // [GET] /
    home = async function(req,res, next) {
        const data = {
            account: req.session.account || null,
            avatar: req.session.avatar
        };
        // Product.find({}
        //     .then(products => {
        //         products = products.map(product => product.toObject())
        //         res.render('home', { products, data })
        //     })
        //     .catch(next)
    const perPage = 5; // Số lượng sản phẩm trên mỗi trang
    const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1

    try {
        const products = await Product.find({})
            .skip((perPage * page) - perPage)
            .limit(perPage);

        const count = await Product.countDocuments();

        res.render('home', {
            data,
            products,
            current: page,
            pagination_path:'/',
            pages: Math.ceil(count / perPage)
        });
    } catch (err) {
        res.status(500).send(err);
    }
        
    }


    // [POST] store user
    store(req,res) {

        
            // Dữ liệu hợp lệ, xử lý đăng ký ở đây
            const formData = req.body;
            const user = new User(formData)
            user.save()
                .then (() => res.redirect('/'))
                .catch(error => {
                })
            res.redirect('/')
    }



    // [POST] / login
    login = async function (req,res) {

        const { account, password } = req.body;
        
             // Tìm người dùng trong MongoDB dựa trên username
            const user = await User.findOne({ account });
        
            if (!user) {
                return res.status(400).json({ message: 'Người dùng không tồn tại' });
            }
        
            // So sánh mật khẩu
            if (password!=user.password){
                return res.status(400).json({ message: 'Sai mật khẩu' });
            }
            else{
                req.session.userId = user._id;
                req.session.account = user.account;
                req.session.password = user.password;
                req.session.avatar = user.avatar;
                res.redirect('/')
                console.log(account)
            }
        }    
    
    logout(req,res) {
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    console.error('Lỗi khi đăng xuất:', err);
                    res.status(500).json({ message: 'Có lỗi xảy ra khi đăng xuất' });
                    return;
                }
                res.redirect('/')
            });
            
        } 
    }

    search = async function(req,res) {
        try {
            const searchTerm = req.query.q;
            if (!searchTerm) {
                return res.status(400).send('Query parameter q is required');
            }
    
            // Tìm kiếm sản phẩm dựa trên tên (case-insensitive)
            const products = await Product.find({ product_name: { $regex: searchTerm, $options: 'i' } });
            res.json(products);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    search_product = async function(req,res){
        try {
            const data = {
                account: req.session.account || null,
                avatar: req.session.avatar
            };
            const searchTerm = req.query.q;
            if (!searchTerm) {
                return res.status(400).send('Query parameter q is required');
            }

            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const perPage = 5; // Số lượng sản phẩm trên mỗi trang
            // Tìm kiếm sản phẩm dựa trên tên (case-insensitive)
            const products = await Product.find({ product_name: { $regex: searchTerm, $options: 'i' } })
                .skip((perPage * page) - perPage)
                .limit(perPage);
            
            
            const count = await Product.countDocuments({ product_name: { $regex: searchTerm, $options: 'i' } });
            res.render('home', {
                data,
                products,
                pagination_path:'/search_product/',
                searchTerm,
                current: page,
                pages: Math.ceil(count / perPage)
            });
        } catch (error) {
            res.status(500).send(error.message);
        }



       
        // Product.find({}
        //     .then(products => {
        //         products = products.map(product => product.toObject())
        //         res.render('home', { products, data })
        //     })
        //     .catch(next)
    

  
        
    }    
}
module.exports = new SiteController