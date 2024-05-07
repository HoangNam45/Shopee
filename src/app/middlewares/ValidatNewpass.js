const validator = require('validator');
function validateUpdatePassword(password, old_password,new_password, renew_password) {
    const errors = {};        
    if (!validator.equals(password, old_password)) {
        errors.password_rewrite = 'Mật khẩu hiện tại không trùng khớp với mật khẩu';
    }
    if (!validator.isLength(new_password, { min: 6 })) {
        errors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
    }
    if (!validator.equals(new_password, renew_password)) {
        errors.password_rewrite = 'Mật khẩu xác nhận không trùng khớp với mật khẩu.';
    }
    return errors;
}

const valid_upass = (req,res,next) => {
    const { password, new_password, renew_password } = req.body;
    const data = {
        password:req.session.password,
    };
    const errors = validateUpdatePassword( password, data.password,new_password, renew_password);
    
    if (Object.keys(errors).length === 0) {
        next()
    } else {
        // Dữ liệu không hợp lệ, trả về lỗi cho client
        res.status(400).json({ errors });
    }    
}
module.exports= valid_upass
    
