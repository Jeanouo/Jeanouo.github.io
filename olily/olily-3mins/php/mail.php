<?php
// 解壓縮後的檔案位置
include("class.phpmailer.php");

    $C_company=$_POST['C_company'];
    $C_company=$_POST['C_name'];
    $C_cell=$_POST['C_cell'];
    $C_email=$_POST['C_email'];
    // $C_ext=$_POST['C_ext'];
    // $C_ext=$_POST['C_comment'];
    // $C_name=$_POST['C_name'];
 //   $C_email=$_POST['C_email'];
    // $C_tel=$_POST['C_tel'];
 //   $C_message=$_POST['C_message'];
    // $date=date('Y/m/d H:i:s');

// 產生 Mailer 實體
$mail = new PHPMailer();

// 設定為 SMTP 方式寄信
$mail->IsSMTP();

// SMTP 伺服器的設定，以及驗證資訊
$mail->SMTPAuth = true;      
$mail->SMTPSecure = "ssl";    
$mail->Host = "mail.olily.com";
$mail->Port = 465;

// 信件內容的編碼方式       
$mail->CharSet = "utf-8";

// 信件處理的編碼方式
$mail->Encoding = "base64";

// SMTP 驗證的使用者資訊
$mail->Username = "web-edm-5";
$mail->Password = "d6rbg84vds4543534";     

// 信件內容設定  
$mail->From = "web-edm-5@olily.com";
$mail->FromName = "歐立利國際展覽設計集團-顧客通知";
$mail->Subject = "歐立利國際展覽設計集團-顧客通知-MidiaLabService"; 
$mail->Body    = 
                '<div>
                    管理者，您好<p>
                    有一則來自歐立利國際展覽設計集團通知<p>
                    公司名:'.$_POST['C_company'].'<p>
                    姓名:'.$_POST['C_name'].'<p>
                    電話:&emsp;'.$_POST['C_cell'].'<p>
                    信箱:&emsp;'.$_POST['C_email'].'<p>
                </div>';


$mail->IsHTML(true);

// 收件人
// $mail->AddAddress("irene@olily.com", "irene");
$mail->AddAddress("jean@olily.com", "管理者");
// $mail->AddAddress("Rita@olily.com", "管理者");
// $mail->AddAddress("Claudia@olily.com", "管理者");

// 顯示訊息
if(!$mail->Send()) {     
    echo '{"success": false}';
} else {
    echo '{"success": true}';
} 
?>
