const validator = require('validator');
function validateLogin(account, password) {
    const errors = {};

    if (!validator.isAlphanumeric(account) || !validator.isLength(account, { min: 3, max: 30 })) {
        errors.account = 'Tên người dùng không hợp lệ. Tối thiểu 3 ký tự và tối đa 30 ký tự.';
    }
        
    if (!validator.isLength(password, { min: 6 })) {
        errors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
    }

    return errors;
}

const valid_log = (req,res,next) => {
    const { account, password} = req.body;
    const errors = validateLogin(account, password);
    if (Object.keys(errors).length === 0) {
        next()
    } else {
        // Dữ liệu không hợp lệ, trả về lỗi cho client
        res.status(400).json({ errors });
    }    
}
module.exports= valid_log
    
