const User = require('./models/User');
class MeController {
    //[GET] update UI
    update_password(req, res) {
        const data = {
            account: req.session.account || null,
            id: req.session.userId
        };
        res.render('update_password', data);
    }

    //[PATCH]
    edit(req, res) {
        const data = {
            account: req.session.account || null,
            id: req.session.userId
        };

        User.updateOne({_id:data.id}, req.body)
            .then(() => res.redirect('/'))
            .catch(err => res.status(500).json({ message: 'Có lỗi xảy ra khi đổi mật khẩu', error: err }));
    }
    update_avatar(req, res) {
        const data = {
            account: req.session.account || null,
            id: req.session.userId,
            avatar: req.session.avatar
        };
        
        res.render('update_avatar', data);
    }
    //[POST] /me/update/avatar/edit
    edit_avatar(req,res) {
        const path = require('path');
        const data = {
            account: req.session.account || null,
            id: req.session.userId,
            
        };
        function extractFileName(filePath) {
            return path.basename(filePath);
        }
        const imagePath = req.file.path;
        const fileName = extractFileName(imagePath);
        User.updateOne({_id:data.id}, { avatar: fileName  })
            .then(() => {
                req.session.avatar = fileName;
                res.redirect('/me/update/avatar')})
            .catch(err => res.status(500).json({ message: 'Có lỗi xảy ra khi đổi mật khẩu', error: err }));
        
        
    }
}

module.exports = new MeController();