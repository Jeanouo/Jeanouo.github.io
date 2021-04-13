<?php
// 解壓縮後的檔案位置
include("class.phpmailer.php");

    $C_company=$_POST['C_company'];
    $C_tel=$_POST['C_tel'];
    $C_name=$_POST['C_name'];
 //   $C_email=$_POST['C_email'];
 //   $C_message=$_POST['C_message'];
    $C_tel2=$_POST['C_tel2'];
    $C_ext=$_POST['C_ext'];
    $C_email=$_POST['C_email'];
    $C_exhibitionName=$_POST['C_exhibitionName'];
    $C_date=$_POST['C_date'];
    $C_area=$_POST['C_area'];
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
$mail->FromName = "歐立利國際展覽設計集團-顧客通知";
$mail->Subject = "歐立利國際展覽設計集團-顧客通知-MidiaLabService"; 
$mail->Body    = 
                '<div>
                    管理者，您好<p>
                    有一則來自歐立利國際展覽設計集團通知<p>
                    公司名:'.$_POST['C_company'].'<p>
                    公司電話:&emsp;'.$_POST['C_tel'].'<p>
                    姓名:&emsp;'.$_POST['C_name'].'<p>
                    聯絡人電話:&emsp;'.$_POST['C_tel2'].'<p>
                    分機:&emsp;'.$_POST['C_ext'].'<p>
                    信箱:'.$_POST['C_email'].'<p>
                    展覽名稱:'.$_POST['C_exhibitionName'].'<p>
                    展覽日期:'.$_POST['C_date'].'<p>
                    攤位面積:&emsp;'.$_POST['C_area'].'<p>
                </div>';
// $email->AddAttachment( $C_filetmp ,  $C_filename);

// 傳送附檔
// 取得上傳檔案數量
$fileCount = count($_FILES['C_file']['name']);

for($i = 0;$i < $fileCount; $i++) {
    // 檢查檔案是否上傳成功
    if($_FILES['C_file']['error'][$i] === UPLOAD_ERR_OK) {
        echo '檔案名稱: ' . $_FILES['C_file']['name'][$i] . '<br/>';
        echo '檔案類型: ' . $_FILES['C_file']['type'][$i] . '<br/>';
        echo '檔案大小: ' . ($_FILES['C_file']['size'][$i] / 1024) . 'KB<br/>';
        echo '暫存名稱: ' . $_FILES['C_file']['tmp_name'][$i] . '<br/>';

        // 檢查檔案是否已經存在
        if(file_exists('upload/' . $_FILES['C_file']['name'][$i])){
            echo '檔案已存在。<br/>';
        } else {
            $file = $_FILES['C_file']['tmp_name'][$i];
            $dest = 'upload/' . $_FILES['C_file']['name'][$i];

            // 將檔案移至指定位置
            move_uploaded_file($file, $dest);
        }
    } else {
        echo '錯誤代碼: ' . $_FILES['C_file']['error'] . '<br/>';
    }
}

// if(is_uploaded_file($_FILES['uploadfile']['tmp_name'])){
//     $AtF =$_FILES['uploadfile']['C_file'];
//     $mail ->AddAttachment($AtF);
// } else {

// }

$mail->IsHTML(true);

// 收件人
$mail->AddAddress("jean@olily.com", "jean");
// $mail->AddAddress("Rita@olily.com", "管理者");
// $mail->AddAddress("Claudia@olily.com", "管理者");

// 顯示訊息
if(!$mail->Send()) {     
    echo '{"success": false}';
} else {
    echo '{"success": true}';
} 
?>
