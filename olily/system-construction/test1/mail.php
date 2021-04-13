<?php
// 解壓縮後的檔案位置
include("class.phpmailer.php");

    $C_company=$_POST['C_company'];
    $C_tel=$_POST['C_tel'];
    $C_name=$_POST['C_name'];
    $C_tel2=$_POST['C_tel2'];
    $C_ext=$_POST['C_ext'];
    $C_email=$_POST['C_email'];
    $C_exhibitionName=$_POST['C_exhibitionName'];
    $C_date=$_POST['C_date'];
    $C_area=$_POST['C_area'];
    // $date=date('Y/m/d H:i:s');
    //   $C_email=$_POST['C_email'];
 //   $C_message=$_POST['C_message'];
    // $C_filename =$_POST['C_file'];
    // $C_filetmp =$_POST['C_file']['tmp_name'];
    // $C_filetype =$_POST['C_file']['type'];
    // $C_filesize =$_POST['C_file']['size'];


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
$mail->FromName = "歐立利國際展覽設計集團-施工估價單";
$mail->Subject = "歐立利國際展覽設計集團-施工估價單"; 
$mail->Body    = 
                '<div>
                    管理者，您好<p>
                    有一則來自歐立利國際展覽設計集團-施工估價單通知<p>
                    公司名:'.$_POST['C_company'].'<p>
                    公司電話:&emsp;'.$_POST['C_tel'].'<p>
                    聯絡人姓名:&emsp;'.$_POST['C_name'].'<p>
                    聯絡人電話:&emsp;'.$_POST['C_tel2'].'<p>
                    分機:&emsp;'.$_POST['C_ext'].'<p>
                    信箱:'.$_POST['C_email'].'<p>
                    展覽名稱:'.$_POST['C_exhibitionName'].'<p>
                    展覽日期:'.$_POST['C_date'].'<p>
                    攤位大小:'.$_POST['C_area'].'<p>


                </div>';
// $email->AddAttachment( $C_filetmp ,  $C_filename);
// $mail->AddAttachment($_POST['C_file']);
$mail->IsHTML(true);

// 收件人
$mail->AddAddress("jean@olily.com", "irene");
// $mail->AddAddress("Rita@olily.com", "管理者");
// $mail->AddAddress("Claudia@olily.com", "管理者");

// 顯示訊息
if(!$mail->Send()) {     
    echo '{"success": false}';
} else {
    echo '{"success": true}';
} 
?>
