const validator = require('validator');
function validateUpdatePassword(password, old_password) {
    const errors = {};        
    if (!validator.equals(password, old_password)) {
        errors.password = 'Mật khẩu hiện tại không trùng khớp với mật khẩu';
    }

}

const valid_upass = (req,res,next) => {
    const { password } = req.body;
    const data = {
        password:req.session.password,
    };
    const errors = validateUpdatePassword( password, data.password);
    
    if (Object.keys(errors).length === 0) {
        next()
    } else {
        // Dữ liệu không hợp lệ, trả về lỗi cho client
        res.render("wrong_password")
    }    
}
module.exports= valid_upass
    
