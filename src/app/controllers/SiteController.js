const User = require('../models/User')

class SiteController {
    // [GET] /
    home(req,res) {
        const data = {
            account: req.session.account || null,
            avatar: req.session.avatar
        };
        res.render('home', data)
    }


    // [POST] /store
    store(req,res) {
        const validator = require('validator');

        function validateRegistration(account, password, password_rewrite) {
            const errors = {};
        
            if (!validator.isAlphanumeric(account) || !validator.isLength(account, { min: 3, max: 30 })) {
                errors.account = 'Tên người dùng không hợp lệ. Tối thiểu 3 ký tự và tối đa 30 ký tự.';
            }
                
            if (!validator.isLength(password, { min: 6 })) {
                errors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
            }
        
            if (!validator.equals(password, password_rewrite)) {
                errors.password_rewrite = 'Mật khẩu xác nhận không trùng khớp với mật khẩu.';
            }
        
            return errors;
        }
        
        const { account, password, password_rewrite } = req.body;

        const errors = validateRegistration(account, password, password_rewrite);

        if (Object.keys(errors).length === 0) {
            // Dữ liệu hợp lệ, xử lý đăng ký ở đây
            const formData = req.body;
            const user = new User(formData)
            user.save()
                .then (() => res.redirect('/'))
                .catch(error => {
                })
            console.log(user)
            res.send('Dữ liệu hợp lệ, tiến hành đăng ký...');
        } else {
            // Dữ liệu không hợp lệ, trả về lỗi cho client
            res.status(400).json({ errors });
        }        
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
    
}
module.exports = new SiteController