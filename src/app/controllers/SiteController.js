const User = require('./models/User')
class SiteController {
    // [GET] /
    home(req,res) {
        res.render('home')
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
            req.session.username = user.account;
            res.json({ message: 'Đăng nhập thành công' });
            console.log(req.session)
        }
        
    }
}
module.exports = new SiteController