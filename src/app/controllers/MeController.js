const User = require('../models/User');
const Product = require('../models/Product')
const path = require('path');
class MeController {
    //[GET] update UI
    update_password(req, res) {
        const data = {
            account: req.session.account || null,
            id: req.session.userId,
            avatar: req.session.avatar
        };
        res.render('update_password', { data });
        
    }

    //[PATCH]
    edit(req, res) {
        const data = {
            account: req.session.account || null,
            id: req.session.userId
        };
        User.updateOne({_id:data.id}, {password:req.body.new_password})
            .then(() => res.redirect('/'))
            .catch(err => res.status(500).json({ message: 'Có lỗi xảy ra khi đổi mật khẩu', error: err }));
    }


    update_avatar(req, res) {
        const data = {
            account: req.session.account || null,
            id: req.session.userId,
            avatar: req.session.avatar
        };
        
        res.render('update_avatar', { data });
    }



    //[POST] /me/update/avatar/edit
    edit_avatar=  function(req,res) {
        const fs = require('fs');
        
        const data = {
            account: req.session.account || null,
            id: req.session.userId,
            avatar: req.session.avatar
        };

        if(data.avatar!='/img/0921fc87aa989330b8d403014bf4f340.jpg'){
            const filePathToDelete = path.join(__dirname, '../../public', `${data.avatar}`);
            console.log(filePathToDelete)
            fs.unlink(filePathToDelete, (err) => {
                if (err) {
                    console.error('Đã xảy ra lỗi khi xóa file:', err);
                    return;
                }
                console.log('File đã được xóa thành công.');
                
            });
        }
 

        function extractFileName(filePath) {
            return path.basename(filePath);
        }
        const fileName = `/users_img/${extractFileName(req.file.path)}`;
        User.updateOne({_id:data.id}, { avatar: fileName  })
            .then(() => {
                req.session.avatar = fileName;
                res.redirect('/me/update/avatar')})
            .catch(err => res.status(500).json({ message: 'Có lỗi xảy ra ', error: err }));
    }


    //[GET] /me/add/product
    add_product(req, res) {
        const data = {
            account: req.session.account || null,
            id: req.session.userId,
            avatar: req.session.avatar
        };
        res.render('add_product', { data });
        
    }

    //[POST] /me/add/product/store
    store_product(req,res) {
        // Dữ liệu hợp lệ, xử lý đăng ký ở đây
        function extractFileName(filePath) {
            return path.basename(filePath);
        }

        const fileName = `/products_img/${extractFileName(req.file.path)}`;
        req.body.product_img=fileName;
        req.body.seller_id=req.session.userId
        const productData = req.body;
        const product = new Product(productData)
        product.save()
            .then (() => res.redirect("/"))
            .catch(error => {
            })
}

}

module.exports = new MeController();