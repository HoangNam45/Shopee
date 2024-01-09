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