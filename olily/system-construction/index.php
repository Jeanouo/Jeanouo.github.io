<?php session_start();?>
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>歐立利影音服務EDM</title>

	<!-- line FB  -->
	<meta property="og:title" content="歐立利影音服務EDM" />
	<meta property="og:description" content="用動態影像傳遞專屬你的故事" />
	<meta property="og:image" content="https://www.o-plus.com.tw/MidiaLabService/images/share.jpg" />
	<meta property="og:url" content="https://www.o-plus.com.tw/MidiaLabService/" />
    <meta property="og:image:width" content="1000" />
    <meta property="og:image:height" content="525" />
    <meta name="twitter:title" content="歐立利影音服務EDM">
    
    <!-- CSS  -->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
	<link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    
</head>
<body>
    <header>
        <div class="video_bg">
            <div class="video_box">
                <video id="myVideo_pad" loop playsinline  muted >
                    <source src="videos/s1_video.mp4" type="video/mp4">
                </video>
            </div>
            <div class="logo_bar">
                <a href="https://www.olily.com/" target="_blank" alt="歐立利國際設計集團" title="歐立利國際設計集團">
                    <img src="images/logo_olily_w.png" alt="歐立利國際設計集團"></a>
                <a href="tel:02-26551989"><img src="images/icon_phone.svg" alt="電話" title="電話"></a>
                <a href="https://www.youtube.com/user/odesigner" target="_blank"><img src="images/icon_yt.svg" alt="Youtube" title="Youtube"></a>
                <a href="https://www.facebook.com/Olily.Design" target="_blank"><img src="images/icon_fb.svg" alt="Facebook" title="Facebook"></a>
            </div>
            <h1>
                <span class="top_title fz_xl">用動態影像傳遞<br>專屬你的故事</span>
                <span class="top_sub fz_m">透過視覺設計、動畫製作和影像拍攝<br>說出你的品牌故事!</span>
            </h1>
        </div>
    </header>
    <main>
        <section class="first_sec" id="first_sec">
			<div class="container">
                <h2 class="fz_l">數位時代  <br>影音內容正在流行!</h2>
                <p class="first_text fz_s">
                    醫學研究顯示，人類對影音印象特別深刻<br>
                    受訪者分別接受「純文字」和「影音」的相同訊息，三天後，對純文字訊息的
                </p>
                <p class="first_text fz_m">
                    <span>殘存記憶僅<i>10％</i></span>
                    <span>影音訊息記憶則高達<i>65%</i></span>
                </p>
                <div class="video_box s2_video">
                    <video id="myVideo_s2" loop playsinline controls muted >
                        <source src="videos/s2_video.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="list">
                    <div class="numberBox">
                        <p class="num mins">
                            <span class="counter" data-count="205">0</span><em>mins</em>
                        </p>
                        <p class="text">人們每天平均花在滑手機的時間。</p>
                    </div>
                    <div class="numberBox">
                        <p class="num"><span class="counter" data-count="65">0</span>%</p>
                        <p class="text">觀看企業品牌影片後，接著點擊官網連結的比例。 </p>
                    </div>
                    <div class="numberBox">
                        <p class="num"><span class="counter" data-count="71">0</span>%</p>
                        <p class="text">選擇手機作為觀看影音的平台比例。</p>
                    </div>
                    <div class="numberBox">
                        <p class="num"><span class="counter" data-count="86">0</span>%</p>
                        <p class="text">觀看產品廣告影片後，會進一步訂購相關商品的比例。</p>
                    </div>
                </div>
                <div class="slogan"></div>
            </div>
        </section>

        <section class="second_sec" id="second_sec">
            <div class="container">
                <h2 class="fz_l">歐立利提供個性化影音服務</h2>
                <ul class="service_list">
                    <li>
                        <div class="video">
                            <video id="myVideo_s3" controls controls loop muted poster="images/poster_3.jpg">
                                <source src="videos/s3_video.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="info">
                            <p class="title">企業品牌影音製作</p>
                            <p class="text">
                                故事化品牌精神<br>
                                傳達公司服務項目與願景<br>
                                快速認識企業服務
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="video">
                            <video id="myVideo_s4" controls loop muted poster="images/poster_4.jpg">
                                <source src="videos/s4_video.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="info">
                            <p class="title">產品形象影片製作</p>
                            <p class="text">
                                影像化產品特性<br>
                                傳遞質感與功能<br>
                                使用情境演示
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="video">
                            <video id="myVideo_s5" controls loop muted poster="images/poster_5.jpg">
                                <source src="videos/s5_video.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="info">
                            <p class="title">數位動畫製作</p>
                            <p class="text">
                                圖像化解析產品細節<br>
                                優化企業品牌形象<br>
                                強化觀眾記憶點
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="video">
                            <video id="myVideo_s6" controls loop muted poster="images/poster_6.jpg">
                                <source src="videos/s6_video.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="info">
                            <p class="title">活動記錄專訪</p>
                            <p class="text">
                                現場紀錄拍攝<br>
                                專訪人物談話<br>
                                影片後製剪輯
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        
        <section class="third_sec" id="third_sec">
            <div class="container">
                <h2 class="fz_l">多樣影音服務 <br>輕鬆提升品牌競爭力
                </h2>
                <div class="info">
                    <div class="video">
                        <video id="myVideo_s7" controls loop muted poster="images/poster_7.jpg">
                            <source src="videos/s7_video.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="list">
                        <ul>
                            <li>
                                <p class="img"><img src="images/icon_7.png" alt=""></p>
                                <p class="text"><span>4K影像體驗</span><i>絕佳的質感畫面<br>打造品牌第一印象</i></p>
                            </li>
                            <li>
                                <p class="img"><img src="images/icon_8.png" alt=""></p>
                                <p class="text"><span>動態形象LOGO</span><i>透過動畫製作<br>展現企業無窮生命力</i></p>
                            </li>
                            <li>
                                <p class="img"><img src="images/icon_9.png" alt=""></p>
                                <p class="text"><span>原始拍帶提供</span><i>完整拍攝素材<br>隨時可再製或擴增影像</i></p>
                            </li>
                            <li>
                                <p class="img"><img src="images/icon_10.png" alt=""></p>
                                <p class="text"><span>數位內容廣宣圖</span><i>客製化影音封面<br>在社群媒體上即時行銷</i></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="four_sec" id="four_sec">
            <div class="container">
                <h2 class="fz_l">用影音內容<br>一起創造品牌生命力
                    <span class="fz_m">標準化製作流程和專業影像團隊 量身打造專屬影音內容</span>
                </h2>
                <div class="info">
                    <ul>
                        <li><i class="icon_1"></i><p>需求了解</p></li>
                        <li><i class="icon_2"></i><p>企劃提案</p></li>
                        <li><i class="icon_3"></i><p>前期製作</p></li>
                        <li><i class="icon_4"></i><p>執行拍攝</p></li>
                        <li><i class="icon_5"></i><p>後期製作</p></li>
                        <li><i class="icon_6"></i><p>交片結案</p></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="contact_us">
			<div class="container">
                <h2 class="fz_l">聯絡我們
                    <span class="fz_m">留下訊息，一起影音化你的故事吧！</span>
                </h2>
                <div class="contact_info">
                    <div class="contact_box">
                        <form method="post" action="mail.php">
                            <div class="formbox">
                                <div class="tfbar">
                                    <label>
                                        <b>公司名稱 / <em>Company</em>
                                            <span class="error"><?php if(!empty($_GET['company'])){echo "必填欄位";}?></span>
                                        </b>
                                        <input type="text" class="tf" name="C_company"  placeholder="請輸入公司名稱" required>
                                    </label>
                                </div>
                                <div class="tfbar">
                                    <label>
                                        <b>姓名 / <em>Name</em>
                                            <span class="error"><?php if(!empty($_GET['name'])){echo "必填欄位";}?></span>
                                        </b>
                                        <input type="text" class="tf" name="C_name"  placeholder="請輸入姓名" required>
                                    </label>
                                </div>
                                <div class="tfbar">
                                    <label class="tel">
                                        <b>公司電話 / <em>Telephone</em><span class="error"><?php if(!empty($_GET['tel'])){if($_GET['tel']=='1'){echo "必填欄位";}else{echo "格式錯誤";}}?></span>
                                        </b>
                                        <input type="tel" class="tf" name="C_tel"  maxlength="12" pattern="[0]{1}[2-8]{1}-[0-9]{3,4}-[0-9]{4}" placeholder="請輸入02-8888-8888..." required>
                                    </label>
                                    <label class="ext">
                                        <b>分機 / <em>Extension</em></span>
                                        </b>
                                        <input type="num" class="tf" name="C_ext" placeholder="請輸入分機">
                                    </label>
                                </div>
                                <div class="tfbar">
                                    <label>
                                        <b>手機 / <em>Cell</em>
                                            <span class="error"><?php if(!empty($_GET['cell'])){if($_GET['cell']=='1'){echo "必填欄位";}else{echo "格式錯誤";}}?></span>
                                        </b>
                                        <input type="tel" class="tf" name="C_cell"  maxlength="12" pattern="[0]{1}[9]{1}[0-9]{2}-[0-9]{3}-[0-9]{3}" placeholder="請輸入手機0988-888-888..." required>
                                    </label>
                                </div>
                                <div class="tfbar">
                                    <label>
                                        <b>信箱 / <em>Email</em>
                                            <span class="error"><?php if(!empty($_GET['email'])){if($_GET['email']=='1'){echo "必填欄位";}else{echo "格式錯誤";}}?></span>
                                        </b>
                                        <input type="email" class="tf" name="C_email"  maxlength="60"  placeholder="請輸入信箱" required>
                                    </label>
                                </div>
                            </div>
                            <div class="tfbtn"><button type="submit" class="submit_btn">送出洽詢 / Submit</button></div>
                        </form>
                    </div>
                </div>
			</div>
        </section>
    </main>
    <footer>
        <div class="ftcopy"><p>The copyright of the design belongs to Olily Exhibition International Co., Ltd.</p></div>
        <div class="icon_list">
            <a href="tel:02-26551989"><img src="images/icon_phone.svg" alt="電話" title="電話"></a>
            <a href="https://www.youtube.com/user/odesigner" target="_blank"><img src="images/icon_yt.svg" alt="Youtube" title="Youtube"></a>
            <a href="https://www.facebook.com/Olily.Design" target="_blank"><img src="images/icon_fb.svg" alt="Facebook" title="Facebook"></a>
        </div>
    </footer>
    <div class="gotop"><a href="javascript: void(0)">Top</a></div>

	<!-- JS  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="js/parallax.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/venobox/1.8.6/venobox.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.js"></script>
    <script src="js/main.js"></script>
    <script>
        const observer = lozad('.lozad',{
        rootMargin: '100px 0px',
        threshold: 0.1
        });
        observer.observe();
    </script>
    <script>
        $('form').on('submit', function(){
            $('input[type="submit"]').text('傳送中......');
            $.ajax({
                url: 'mail.php',
                method: 'POST',
                dataType: 'json',
                data: $('form').serialize(),
                success: function(res){
                    if(res.success === true){
                        alert('傳送成功');
                    }else{
                        alert('傳送失敗');
                    }
                },
            });
            return false;
        });
        </script>
</body>
</html>