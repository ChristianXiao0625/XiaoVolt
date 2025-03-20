document.addEventListener("DOMContentLoaded", function () {
    // 获取导航链接
    const navLinks = document.querySelectorAll(".nav-menu a");
    
    // 监听滚动事件，改变当前导航项的高亮
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY + 100;

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });

    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // 表单验证
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("请填写完整信息！");
        } else {
            alert("表单提交成功！");
            this.reset();
        }
    });

    window.onload = function() {
        showCustomAlert();
    };
    
    function showCustomAlert() {
        let alertBox = document.createElement("div");
        alertBox.classList.add("alert-box");
        alertBox.innerHTML = "XiaoVolt, Tu Mejor Opción ¡Económico!";
        
        document.body.appendChild(alertBox);
    
        // 3秒后渐隐消失
        setTimeout(() => {
            alertBox.style.opacity = "0";
            setTimeout(() => document.body.removeChild(alertBox), 500);
        }, 3000);
    }
    
});