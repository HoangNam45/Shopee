
// XỬ LÝ ICON CLASS
var checkbox1 = document.getElementById("mobile-search-checkbox");
var checkbox2 = document.getElementById("mobile-search-close");
// Thêm sự kiện "change" vào checkbox1
checkbox1.addEventListener("change", function() {
    // Kiểm tra trạng thái của checkbox1 và cập nhật checkbox2
    checkbox2.checked = !checkbox1.checked;
});

// Thêm sự kiện "change" vào checkbox2
checkbox2.addEventListener("change", function() {
    // Kiểm tra trạng thái của checkbox2 và cập nhật checkbox1
    checkbox1.checked = !checkbox2.checked;
});


// XỬ LÝ ICON MENU
// document.addEventListener("DOMContentLoaded", function () {
//     var menuIcon = document.getElementById("menuIcon");
//     var menu = document.getElementById("category");

//     // Hiển thị hoặc ẩn menu khi bấm vào icon
//     menuIcon.addEventListener("click", function () {
//         menu.classList.toggle("hidden");
//     });

//     // Ẩn menu khi bấm ra ngoài menu
//     document.addEventListener("click", function (event) {
//         if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
//             menu.classList.add("hidden");
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('nav-mobile-input');
    var overlay = document.querySelector('.nav_overlay');
    var caytimdai= document.getElementById('jajaa')

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            overlay.style.display = 'block';
            caytimdai.style.transform = 'translateX(0%)';
            caytimdai.style.opacity = '1';
        } else {
            overlay.style.display = 'none';
            caytimdai.style.transform = 'translateX(-100%)'
        }
    });
});
// Xử lý form login

var modal= document.getElementById("tuilamodal");
var modal_overlay = document.getElementById("tuilamodal_overlay");
var login_btn=document.getElementById("tuilanam");
var login = document.getElementById("login");
var back_login=document.getElementById("tuiladeback_login");
var change_to_reg=document.getElementById("change_to_reg");

if(login_btn) {
    login_btn.addEventListener("click", function() {
        modal.style.display = "flex";
        login.style.display = "block";
        
    })
    
    change_to_reg.addEventListener("click", function() {
        login.style.display = "none";
        register.style.display = "block";
    })
    
    back_login.addEventListener("click", function() {
        modal.style.display = "none";
        login.style.display = "none";
    })
}


// Xử lý form register
var register_btn=document.getElementById("tuicunglanam");
var register = document.getElementById("register");
var change_to_log = document.getElementById("change_to_log");
var back_register = document.getElementById("tuiladeback_register")

if(register_btn){
    register_btn.addEventListener("click", function() {
        modal.style.display = "flex";
        register.style.display = "block";
        
    })
    
    change_to_log.addEventListener("click", function() {
        register.style.display = "none";
        login.style.display = "block";
    })
    
    back_register.addEventListener("click", function() {
        modal.style.display = "none";
        register.style.display = "none";
    })
}
// Validate form register
// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const account = document.getElementById('account').value;
//     const password = document.getElementById('password').value;
//     const re_password = document.getElementById('password_rewrite').value;
    
//     if (!validator.isAlphanumeric(account) || !validator.isLength(account, { min: 3, max: 30 })) {
//         alert('Tài khoản gồm tối thiểu 3 ký tự và tối đa 30 ký tự.');
//         return;
//     }

//     if (!validator.isLength(password, { min: 6 })) {
//         alert('Mật khẩu phải có ít nhất 6 ký tự.');
//         return;
//     }
//     if (re_password!=password) {
//         alert('Mật khẩu nhập không chính xác.');
//         return;
//     }
//     // Tạo một đối tượng XMLHttpRequest
//     const xhr = new XMLHttpRequest();

//     // Thiết lập phương thức và URL
//     xhr.open('POST', '/store', true);

//     // Thiết lập tiêu đề yêu cầu
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     // Xử lý phản hồi từ máy chủ
//     xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             // Đăng ký thành công
//             alert('Đăng ký thành công!');
//         } else {
//             // Đăng ký thất bại
//             alert('Đã xảy ra lỗi khi đăng ký.');
//         }
//     };

//     // Xử lý lỗi
//     xhr.onerror = function () {
//         alert('Đã xảy ra lỗi khi đăng ký.');
//     };

//     // Gửi dữ liệu biểu mẫu dưới dạng JSON
//     xhr.send(JSON.stringify({ account: account, password: password }));
//     console.log(JSON.stringify({ account: account, password: password }))
// });
console.log(document.getElementById('registrationForm'))
// Xử lý nhấp ra ngoài form
window.addEventListener("click", function (event) {
    if (event.target == modal_overlay ) {
       modal.style.display = "none";
       register.style.display = "none";
       login.style.display = "none";
    }
});
// Xử lý avatar
    const file_input = document.getElementById('avt_input')
    if(file_input){
        file_input.addEventListener('change', function(event) {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
              document.getElementById('avatarr').style.backgroundImage = "url(" + e.target.result + ")";
            };
            reader.readAsDataURL(file);
          });
          document.getElementById('select_img').addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn form được gửi
            file_input.click();
          });
          console.log(file_input)
    }
   