/* 人物浮動效果 */
    actorMove();
        
    function actorMove(){
        setTimeout(function() {
        var scene = document.getElementById('worldView');
        var parallaxInstance = new Parallax(scene); // 哪些物件要有效果
        parallaxInstance.friction(0.02, 0.02); // friction(X 圖層之間的麼擦力, Y 圖層之間的麼擦力) 數字越大幅度越大
        parallaxInstance.scalar(3, 3); // 移動幅度
        }, 0);
    }
/* 人物浮動效果 */
