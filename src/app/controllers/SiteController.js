const User = require('./models/User')

class SiteController {
    // [GET] /
    home(req,res) {
        const data = {
            account: req.session.account || null
        };
        res.render('home', data)
    }
    // [POST] /store
    store(req,res) {
        const formData = req.body;
        const user = new User(formData)
        user.save()
            .then (() => res.redirect('/'))
            .catch(error => {

            })
        
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