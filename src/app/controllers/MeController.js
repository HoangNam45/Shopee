const User = require('./models/User');

class MeController {
    //[GET] update UI
    update(req, res) {
        const data = {
            account: req.session.account || null,
            id: req.session.userId
        };
        res.render('update', data);
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
}

module.exports = new MeController();