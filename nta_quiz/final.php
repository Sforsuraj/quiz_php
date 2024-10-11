<?php
$server="localhost";
$username="root";
$password="suraj7261";
$con=mysqli_connect($server,$username,$password);
$sql1="create database if not exists quiz";
mysqli_query($con,$sql1);

$sql2="use quiz";
mysqli_query($con,$sql2);


$sql3="create table if not exists reg
(candidate_name varchar(25) not null,
father_name varchar(25) not null,
mother_name varchar(25) not null,
email_id varchar(30) not null primary key,
phone varchar(11) not null unique,
gender varchar(30) not null,
dateofbirth varchar(10) not null,
address varchar(30) not null,
image_uploads BLOB not null,
Marksheet BLOB not null,
Caste_Certificate BLOB not null,
Residence_Certificate BLOB not null,
Upload_Signature BLOB not null
)";
mysqli_query($con,$sql3);

$sql="select*from reg;";
$result=mysqli_query($con,$sql);
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        $photo=$row['image_uploads'];
    }
}


function call1(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="1"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call2(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="2"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call3(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="3"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call4(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="4"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call5(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="5"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call6(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="6"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call7(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="7"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call8(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="8"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call9(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="9"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call10(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="10"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call11(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="11"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call12(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="12"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call13(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="13"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call14(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="14"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call15(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="15"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call16(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="16"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call17(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="17"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call18(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="18"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call19(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="19"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call20(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="20"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call21(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="21"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call22(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="22"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call23(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="23"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call24(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="24"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}

function call25(){
	$server="localhost";
	$username="root";
	$password="suraj7261";
	$con=mysqli_connect($server,$username,$password);
	$sql1="create database if not exists quiz";
	mysqli_query($con,$sql1);

	$sql2="use quiz";
	mysqli_query($con,$sql2);

	$sql2="select*from question;";
	$result2=mysqli_query($con,$sql2);
	if(mysqli_num_rows($result2)>0){
		while($row=mysqli_fetch_assoc($result2)){
			if($row['queno']=="25"){
			$quest=$row['quest'];
			$op1=$row['op1'];
			$op2=$row['op2'];
			$op3=$row['op3'];
			$op4=$row['op4'];
			$result=array($quest,$op1,$op2,$op3,$op4);
			return $result;
			}
		}
	}
}
mysqli_close($con);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="final.css">
    <title>Document</title>
</head>
<body>
    <header>
        <div class="navbar">
            <div class="logo">
            </div>
                <div class="photo">
                    <img style="width: 80px; height:80px; background-size:cover;" src=<?php echo $photo ?> >
                </div>
                <div class="info">
                    <p id="c_name">Candidate Name:</p>
                    <p id="c_roll">Roll Number:</p>
                    <p>Time remaning:</p>
                </div>
                <div class="fill_info">
                    <p id="name">Suraj Sharma</p>
                    <p id="roll">BR20230001</p>
                    <p id="time" >03:00:00</p>
                </div>
            </div>
        </div>
        <div class="navbar2">
            <p id="exam">JEE MAIN</p>
            <div class="subject">
                <button id="physics">PHYSICS</button>
                <button id="chemistry">CHEMISTRY</button>
                <button id="mathematics">MATHEMATICS</button>
            </div>

            <div id="download">
                <p id="dow">DOWNLOAD PAPAER IN:</p>
                <button id="btn_down">&DownArrowBar; DOWNLOAD</button>
            </div>
            <div class="lang">
                <p>Paper Language:</p>
                <select id="language" name="lang" >
                    <option selected>English</option>
                    <option >Hindi</option>

                  </select>
            </div>
        </div>
    </header>
    <main>

        <div style="display:block" id="page01">
            <h4 class="que" id="que_page01"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page01"></p><br>
    
                <input type="radio"  name="op_page01" value="1" id="v1_page01">
                <label for="op_page01">A:</label>
                <label for="op_page01" id="op1_page01"></label><br><br>
    
                <input type="radio"  name="op_page01" value="2" id="v2_page01">
                <label for="op_page01">B:</label>
                <label for="op_page01" id="op2_page01"></label><br><br>
    
                <input type="radio"  name="op_page01" value="3" id="v3_page01">
                <label for="op_page01">C:</label>
                <label for="op_page01" id="op3_page01"></label><br><br>
    
                <input type="radio"  name="op_page01" value="4" id="v4_page01">
                <label for="op_page01">D:</label>
                <label for="op_page01" id="op4_page01"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page01">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page01">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page01">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page01">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page02">
            <h4 class="que" id="que_page02"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page02"></p><br>
    
                <input type="radio"  name="op_page02" value="1" id="v1_page02">
                <label for="op_page02">A:</label>
                <label for="op_page02" id="op1_page02"></label><br><br>
    
                <input type="radio"  name="op_page02" value="2" id="v2_page02">
                <label for="op_page02">B:</label>
                <label for="op_page02" id="op2_page02"></label><br><br>
    
                <input type="radio"  name="op_page02" value="3" id="v3_page02">
                <label for="op_page02">C:</label>
                <label for="op_page02" id="op3_page02"></label><br><br>
    
                <input type="radio"  name="op_page02" value="4" id="v4_page02">
                <label for="op_page02">D:</label>
                <label for="op_page02" id="op4_page02"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page02">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page02">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page02">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page02">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page03">
            <h4 class="que" id="que_page03"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page03"></p><br>
    
                <input type="radio"  name="op_page03" value="1" id="v1_page03">
                <label for="op_page03">A:</label>
                <label for="op_page03" id="op1_page03"></label><br><br>
    
                <input type="radio"  name="op_page03" value="2" id="v2_page03">
                <label for="op_page03">B:</label>
                <label for="op_page03" id="op2_page03"></label><br><br>
    
                <input type="radio"  name="op_page03" value="3" id="v3_page03">
                <label for="op_page03">C:</label>
                <label for="op_page03" id="op3_page03"></label><br><br>
    
                <input type="radio"  name="op_page03" value="4" id="v4_page03">
                <label for="op_page03">D:</label>
                <label for="op_page03" id="op4_page03"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page03">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page03">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page03">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page03">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page04">
            <h4 class="que" id="que_page04"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page04"></p><br>
    
                <input type="radio"  name="op_page04" value="1" id="v1_page04">
                <label for="op_page04">A:</label>
                <label for="op_page04" id="op1_page04"></label><br><br>
    
                <input type="radio"  name="op_page04" value="2" id="v2_page04">
                <label for="op_page04">B:</label>
                <label for="op_page04" id="op2_page04"></label><br><br>
    
                <input type="radio"  name="op_page04" value="3" id="v3_page04">
                <label for="op_page04">C:</label>
                <label for="op_page04" id="op3_page04"></label><br><br>
    
                <input type="radio"  name="op_page04" value="4" id="v4_page04">
                <label for="op_page04">D:</label>
                <label for="op_page04" id="op4_page04"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page04">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page04">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page04">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page04">MARK FOR REVIEW & NEXT</button>

        </div>

        <div style="display: none;" id="page05">
            <h4 class="que" id="que_page05"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page05"></p><br>
    
                <input type="radio"  name="op_page05" value="1" id="v1_page05">
                <label for="op_page05">A:</label>
                <label for="op_page05" id="op1_page05"></label><br><br>
    
                <input type="radio"  name="op_page05" value="2" id="v2_page05">
                <label for="op_page05">B:</label>
                <label for="op_page05" id="op2_page05"></label><br><br>
    
                <input type="radio"  name="op_page05" value="3" id="v3_page05">
                <label for="op_page05">C:</label>
                <label for="op_page05" id="op3_page05"></label><br><br>
    
                <input type="radio"  name="op_page05" value="4" id="v4_page05">
                <label for="op_page05">D:</label>
                <label for="op_page05" id="op4_page05"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page05">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page05">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page05">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page05">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page06">
            <h4 class="que" id="que_page06"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page06"></p><br>
    
                <input type="radio"  name="op_page06" value="1" id="v1_page06">
                <label for="op_page06">A:</label>
                <label for="op_page06" id="op1_page06"></label><br><br>
    
                <input type="radio"  name="op_page06" value="2" id="v2_page06">
                <label for="op_page06">B:</label>
                <label for="op_page06" id="op2_page06"></label><br><br>
    
                <input type="radio"  name="op_page06" value="3" id="v3_page06">
                <label for="op_page06">C:</label>
                <label for="op_page06" id="op3_page06"></label><br><br>
    
                <input type="radio"  name="op_page06" value="4" id="v4_page06">
                <label for="op_page06">D:</label>
                <label for="op_page06" id="op4_page06"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page06">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page06">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page06">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page06">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page07">
            <h4 class="que" id="que_page07"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page07"></p><br>
    
                <input type="radio"  name="op_page07" value="1" id="v1_page07">
                <label for="op_page07">A:</label>
                <label for="op_page07" id="op1_page07"></label><br><br>
    
                <input type="radio"  name="op_page07" value="2" id="v2_page07">
                <label for="op_page07">B:</label>
                <label for="op_page07" id="op2_page07"></label><br><br>
    
                <input type="radio"  name="op_page07" value="3" id="v3_page07">
                <label for="op_page07">C:</label>
                <label for="op_page07" id="op3_page07"></label><br><br>
    
                <input type="radio"  name="op_page07" value="4" id="v4_page07">
                <label for="op_page07">D:</label>
                <label for="op_page07" id="op4_page07"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page07">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page07">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page07">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page07">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page08">
            <h4 class="que" id="que_page08"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page08"></p><br>
    
                <input type="radio"  name="op_page08" value="1" id="v1_page08">
                <label for="op_page08">A:</label>
                <label for="op_page08" id="op1_page08"></label><br><br>
    
                <input type="radio"  name="op_page08" value="2" id="v2_page08">
                <label for="op_page08">B:</label>
                <label for="op_page08" id="op2_page08"></label><br><br>
    
                <input type="radio"  name="op_page08" value="3" id="v3_page08">
                <label for="op_page08">C:</label>
                <label for="op_page08" id="op3_page08"></label><br><br>
    
                <input type="radio"  name="op_page08" value="4" id="v4_page08">
                <label for="op_page08">D:</label>
                <label for="op_page08" id="op4_page08"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page08">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page08">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page08">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page08">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page09">
            <h4 class="que" id="que_page09"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page09"></p><br>
    
                <input type="radio"  name="op_page09" value="1" id="v1_page09">
                <label for="op_page09">A:</label>
                <label for="op_page09" id="op1_page09"></label><br><br>
    
                <input type="radio"  name="op_page09" value="2" id="v2_page09">
                <label for="op_page09">B:</label>
                <label for="op_page09" id="op2_page09"></label><br><br>
    
                <input type="radio"  name="op_page09" value="3" id="v3_page09">
                <label for="op_page09">C:</label>
                <label for="op_page09" id="op3_page09"></label><br><br>
    
                <input type="radio"  name="op_page09" value="4" id="v4_page09">
                <label for="op_page09">D:</label>
                <label for="op_page09" id="op4_page09"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page09">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page09">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page09">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page09">MARK FOR REVIEW & NEXT</button>
        </div>
        
        <div style="display: none;" id="page10">
            <h4 class="que" id="que_page10"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page10"></p><br>
    
                <input type="radio"  name="op_page10" value="1" id="v1_page10">
                <label for="op_page10">A:</label>
                <label for="op_page10" id="op1_page10"></label><br><br>
    
                <input type="radio"  name="op_page10" value="2" id="v2_page10">
                <label for="op_page10">B:</label>
                <label for="op_page10" id="op2_page10"></label><br><br>
    
                <input type="radio"  name="op_page10" value="3" id="v3_page10">
                <label for="op_page10">C:</label>
                <label for="op_page10" id="op3_page10"></label><br><br>
    
                <input type="radio"  name="op_page10" value="4" id="v4_page10">
                <label for="op_page10">D:</label>
                <label for="op_page10" id="op4_page10"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page10">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page10">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page10">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page10">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page11">
        <h4 class="que" id="que_page11"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page11"></p><br>
    
                <input type="radio"  name="op_page11" value="1" id="v1_page11">
                <label for="op_page11">A:</label>
                <label for="op_page11" id="op1_page11"></label><br><br>
    
                <input type="radio"  name="op_page11" value="2" id="v2_page11">
                <label for="op_page11">B:</label>
                <label for="op_page11" id="op2_page11"></label><br><br>
    
                <input type="radio"  name="op_page11" value="3" id="v3_page11">
                <label for="op_page11">C:</label>
                <label for="op_page11" id="op3_page11"></label><br><br>
    
                <input type="radio"  name="op_page11" value="4" id="v4_page11">
                <label for="op_page11">D:</label>
                <label for="op_page11" id="op4_page11"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page11">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page11">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page11">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page11">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page12">
        <h4 class="que" id="que_page12"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page12"></p><br>
    
                <input type="radio"  name="op_page12" value="1" id="v1_page12">
                <label for="op_page12">A:</label>
                <label for="op_page12" id="op1_page12"></label><br><br>
    
                <input type="radio"  name="op_page12" value="2" id="v2_page12">
                <label for="op_page12">B:</label>
                <label for="op_page12" id="op2_page12"></label><br><br>
    
                <input type="radio"  name="op_page12" value="3" id="v3_page12">
                <label for="op_page12">C:</label>
                <label for="op_page12" id="op3_page12"></label><br><br>
    
                <input type="radio"  name="op_page12" value="4" id="v4_page12">
                <label for="op_page12">D:</label>
                <label for="op_page12" id="op4_page12"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page12">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page12">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page12">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page12">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page13">
        <h4 class="que" id="que_page13"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page13"></p><br>
    
                <input type="radio"  name="op_page13" value="1" id="v1_page13">
                <label for="op_page13">A:</label>
                <label for="op_page13" id="op1_page13"></label><br><br>
    
                <input type="radio"  name="op_page13" value="2" id="v2_page13">
                <label for="op_page13">B:</label>
                <label for="op_page13" id="op2_page13"></label><br><br>
    
                <input type="radio"  name="op_page13" value="3" id="v3_page13">
                <label for="op_page13">C:</label>
                <label for="op_page13" id="op3_page13"></label><br><br>
    
                <input type="radio"  name="op_page13" value="4" id="v4_page13">
                <label for="op_page13">D:</label>
                <label for="op_page13" id="op4_page13"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page13">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page13">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page13">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page13">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page14">
        <h4 class="que" id="que_page14"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page14"></p><br>
    
                <input type="radio"  name="op_page14" value="1" id="v1_page14">
                <label for="op_page14">A:</label>
                <label for="op_page14" id="op1_page14"></label><br><br>
    
                <input type="radio"  name="op_page14" value="2" id="v2_page14">
                <label for="op_page14">B:</label>
                <label for="op_page14" id="op2_page14"></label><br><br>
    
                <input type="radio"  name="op_page14" value="3" id="v3_page14">
                <label for="op_page14">C:</label>
                <label for="op_page14" id="op3_page14"></label><br><br>
    
                <input type="radio"  name="op_page14" value="4" id="v4_page14">
                <label for="op_page14">D:</label>
                <label for="op_page14" id="op4_page14"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page14">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page14">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page14">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page14">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page15">
        <h4 class="que" id="que_page15"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page15"></p><br>
    
                <input type="radio"  name="op_page15" value="1" id="v1_page15">
                <label for="op_page15">A:</label>
                <label for="op_page15" id="op1_page15"></label><br><br>
    
                <input type="radio"  name="op_page15" value="2" id="v2_page15">
                <label for="op_page15">B:</label>
                <label for="op_page15" id="op2_page15"></label><br><br>
    
                <input type="radio"  name="op_page15" value="3" id="v3_page15">
                <label for="op_page15">C:</label>
                <label for="op_page15" id="op3_page15"></label><br><br>
    
                <input type="radio"  name="op_page15" value="4" id="v4_page15">
                <label for="op_page15">D:</label>
                <label for="op_page15" id="op4_page15"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page15">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page15">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page15">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page15">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page16">
        <h4 class="que" id="que_page16"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page16"></p><br>
    
                <input type="radio"  name="op_page16" value="1" id="v1_page16">
                <label for="op_page16">A:</label>
                <label for="op_page16" id="op1_page16"></label><br><br>
    
                <input type="radio"  name="op_page16" value="2" id="v2_page16">
                <label for="op_page16">B:</label>
                <label for="op_page16" id="op2_page16"></label><br><br>
    
                <input type="radio"  name="op_page16" value="3" id="v3_page16">
                <label for="op_page16">C:</label>
                <label for="op_page16" id="op3_page16"></label><br><br>
    
                <input type="radio"  name="op_page16" value="4" id="v4_page16">
                <label for="op_page16">D:</label>
                <label for="op_page16" id="op4_page16"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page16">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page16">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page16">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page16">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page17">
        <h4 class="que" id="que_page17"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page17"></p><br>
    
                <input type="radio"  name="op_page17" value="1" id="v1_page17">
                <label for="op_page17">A:</label>
                <label for="op_page17" id="op1_page17"></label><br><br>
    
                <input type="radio"  name="op_page17" value="2" id="v2_page17">
                <label for="op_page17">B:</label>
                <label for="op_page17" id="op2_page17"></label><br><br>
    
                <input type="radio"  name="op_page17" value="3" id="v3_page17">
                <label for="op_page17">C:</label>
                <label for="op_page17" id="op3_page17"></label><br><br>
    
                <input type="radio"  name="op_page17" value="4" id="v4_page17">
                <label for="op_page17">D:</label>
                <label for="op_page17" id="op4_page17"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page17">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page17">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page17">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page17">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page18">
        <h4 class="que" id="que_page18"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page18"></p><br>
    
                <input type="radio"  name="op_page18" value="1" id="v1_page18">
                <label for="op_page18">A:</label>
                <label for="op_page18" id="op1_page18"></label><br><br>
    
                <input type="radio"  name="op_page18" value="2" id="v2_page18">
                <label for="op_page18">B:</label>
                <label for="op_page18" id="op2_page18"></label><br><br>
    
                <input type="radio"  name="op_page18" value="3" id="v3_page18">
                <label for="op_page18">C:</label>
                <label for="op_page18" id="op3_page18"></label><br><br>
    
                <input type="radio"  name="op_page18" value="4" id="v4_page18">
                <label for="op_page18">D:</label>
                <label for="op_page18" id="op4_page18"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page18">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page18">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page18">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page18">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page19">
        <h4 class="que" id="que_page19"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page19"></p><br>
    
                <input type="radio"  name="op_page19" value="1" id="v1_page19">
                <label for="op_page19">A:</label>
                <label for="op_page19" id="op1_page19"></label><br><br>
    
                <input type="radio"  name="op_page19" value="2" id="v2_page19">
                <label for="op_page19">B:</label>
                <label for="op_page19" id="op2_page19"></label><br><br>
    
                <input type="radio"  name="op_page19" value="3" id="v3_page19">
                <label for="op_page19">C:</label>
                <label for="op_page19" id="op3_page19"></label><br><br>
    
                <input type="radio"  name="op_page19" value="4" id="v4_page19">
                <label for="op_page19">D:</label>
                <label for="op_page19" id="op4_page19"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page19">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page19">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page19">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page19">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page20">
        <h4 class="que" id="que_page20"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page20"></p><br>
    
                <input type="radio"  name="op_page20" value="1" id="v1_page20">
                <label for="op_page20">A:</label>
                <label for="op_page20" id="op1_page20"></label><br><br>
    
                <input type="radio"  name="op_page20" value="2" id="v2_page20">
                <label for="op_page20">B:</label>
                <label for="op_page20" id="op2_page20"></label><br><br>
    
                <input type="radio"  name="op_page20" value="3" id="v3_page20">
                <label for="op_page20">C:</label>
                <label for="op_page20" id="op3_page20"></label><br><br>
    
                <input type="radio"  name="op_page20" value="4" id="v4_page20">
                <label for="op_page20">D:</label>
                <label for="op_page20" id="op4_page20"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page20">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page20">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page20">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page20" >MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page21">
        <h4 class="que" id="que_page21"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page21"></p><br>
    
                <input type="radio"  name="op_page21" value="1" id="v1_page21">
                <label for="op_page21">A:</label>
                <label for="op_page21" id="op1_page21"></label><br><br>
    
                <input type="radio"  name="op_page21" value="2" id="v2_page21">
                <label for="op_page21">B:</label>
                <label for="op_page21" id="op2_page21"></label><br><br>
    
                <input type="radio"  name="op_page21" value="3" id="v3_page21">
                <label for="op_page21">C:</label>
                <label for="op_page21" id="op3_page21"></label><br><br>
    
                <input type="radio"  name="op_page21" value="4" id="v4_page21">
                <label for="op_page21">D:</label>
                <label for="op_page21" id="op4_page21"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page21">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page21">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page21">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page21">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page22">
        <h4 class="que" id="que_page22"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page22"></p><br>
    
                <input type="radio"  name="op_page22" value="1" id="v1_page22">
                <label for="op_page22">A:</label>
                <label for="op_page22" id="op1_page22"></label><br><br>
    
                <input type="radio"  name="op_page22" value="2" id="v2_page22">
                <label for="op_page22">B:</label>
                <label for="op_page22" id="op2_page22"></label><br><br>
    
                <input type="radio"  name="op_page22" value="3" id="v3_page22">
                <label for="op_page22">C:</label>
                <label for="op_page22" id="op3_page22"></label><br><br>
    
                <input type="radio"  name="op_page22" value="4" id="v4_page22">
                <label for="op_page22">D:</label>
                <label for="op_page22" id="op4_page22"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page22">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page22">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page22">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page22">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page23">
        <h4 class="que" id="que_page23"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page23"></p><br>
    
                <input type="radio"  name="op_page23" value="1" id="v1_page23">
                <label for="op_page23">A:</label>
                <label for="op_page23" id="op1_page23"></label><br><br>
    
                <input type="radio"  name="op_page23" value="2" id="v2_page23">
                <label for="op_page23">B:</label>
                <label for="op_page23" id="op2_page23"></label><br><br>
    
                <input type="radio"  name="op_page23" value="3" id="v3_page23">
                <label for="op_page23">C:</label>
                <label for="op_page23" id="op3_page23"></label><br><br>
    
                <input type="radio"  name="op_page23" value="4" id="v4_page23">
                <label for="op_page23">D:</label>
                <label for="op_page23" id="op4_page23"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page23">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page23">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page23">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page23">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page24">
        <h4 class="que" id="que_page24"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page24"></p><br>
    
                <input type="radio"  name="op_page24" value="1" id="v1_page24">
                <label for="op_page24">A:</label>
                <label for="op_page24" id="op1_page24"></label><br><br>
    
                <input type="radio"  name="op_page24" value="2" id="v2_page24">
                <label for="op_page24">B:</label>
                <label for="op_page24" id="op2_page24"></label><br><br>
    
                <input type="radio"  name="op_page24" value="3" id="v3_page24">
                <label for="op_page24">C:</label>
                <label for="op_page24" id="op3_page24"></label><br><br>
    
                <input type="radio"  name="op_page24" value="4" id="v4_page24">
                <label for="op_page24">D:</label>
                <label for="op_page24" id="op4_page24"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page24">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page24">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page24">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page24">MARK FOR REVIEW & NEXT</button>
        </div>

        <div style="display: none;" id="page25">
        <h4 class="que" id="que_page25"></h4><hr class="hr1">
            <div class="question">
                <p id="quest_page25"></p><br>
    
                <input type="radio"  name="op_page25" value="1" id="v1_page25">
                <label for="op_page25">A:</label>
                <label for="op_page25" id="op1_page25"></label><br><br>
    
                <input type="radio"  name="op_page25" value="2" id="v2_page25">
                <label for="op_page25">B:</label>
                <label for="op_page25" id="op2_page25"></label><br><br>
    
                <input type="radio"  name="op_page25" value="3" id="v3_page25">
                <label for="op_page25">C:</label>
                <label for="op_page25" id="op3_page25"></label><br><br>
    
                <input type="radio"  name="op_page25" value="4" id="v4_page25">
                <label for="op_page25">D:</label>
                <label for="op_page25" id="op4_page25"></label>
            </div>
            <hr class="hr2">
            <button class="save_next" id="save_next_page25">SAVE & NEXT</button>
            <button class="save_mark" id="save_mark_page25">SAVE & MARK FOR REVIEW</button>
            <button class="clear" id="clear_page25">CLEAR RESPONSE</button>
            <button class="mark_next" id="mark_next_page25">MARK FOR REVIEW & NEXT</button>
        </div>



        <div class="qu_btn">
            <button class="button"  id="btn1" class="btn1" onclick="page01()">01</button>
            <button class="button" id="btn2" onclick="page02()">02</button>
            <button class="button" id="btn3" onclick="page03()">03</button>
            <button class="button" id="btn4" onclick="page04()">04</button>
            <button class="button" id="btn5" onclick="page05()">05</button>
            <button class="button" id="btn6" onclick="page06()">06</button>
            <button class="button" id="btn7" onclick="page07()">07</button>
            <button class="button" id="btn8" onclick="page08()">08</button>
            <button class="button" id="btn9" onclick="page09()">09</button>
            <button class="button" id="btn10" onclick="page10()">10</button>
            <button class="button" id="btn11" onclick="page11()">11</button>
            <button class="button" id="btn12" onclick="page12()">12</button>
            <button class="button" id="btn13" onclick="page13()">13</button>
            <button class="button" id="btn14" onclick="page14()">14</button>
            <button class="button" id="btn15" onclick="page15()">15</button>
            <button class="button" id="btn16" onclick="page16()">16</button>
            <button class="button" id="btn17" onclick="page17()">17</button>
            <button class="button" id="btn18" onclick="page18()">18</button>
            <button class="button" id="btn19" onclick="page19()">19</button>
            <button class="button" id="btn20" onclick="page20()">20</button>
            <button class="button" id="btn21" onclick="page21()">21</button>
            <button class="button" id="btn22" onclick="page22()">22</button>
            <button class="button" id="btn23" onclick="page23()">23</button>
            <button class="button" id="btn24" onclick="page24()">24</button>
            <button class="button" id="btn25" onclick="page25()">25</button>
            <script>
                var not_visited=25;
                var not_answered=25;
                var answered=0;
                var markforreview=0;
                var ans_mark=0;
                function onload(){
                    var result1="<?php echo call1()[0];?>";
                    var result2="<?php echo call1()[1];?>";
                    var result3="<?php echo call1()[2];?>";
                    var result4="<?php echo call1()[3];?>";
                    var result5="<?php echo call1()[4];?>";
                    document.getElementById("page01").style.display='block';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page01").innerHTML="Question 1:";
                    document.getElementById("quest_page01").innerHTML=result1;
                    document.getElementById("op1_page01").innerHTML=result2;
                    document.getElementById("op2_page01").innerHTML=result3;
                    document.getElementById("op3_page01").innerHTML=result4;
                    document.getElementById("op4_page01").innerHTML=result5;
                    document.getElementById("btn1").style.backgroundImage='url("logo2.png")';
                    document.getElementById("btn1").style.color='white';
                }
                onload()
                function page01(){
                    var result1="<?php echo call1()[0];?>";
                    var result2="<?php echo call1()[1];?>";
                    var result3="<?php echo call1()[2];?>";
                    var result4="<?php echo call1()[3];?>";
                    var result5="<?php echo call1()[4];?>";
                    document.getElementById("page01").style.display='block';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page01").innerHTML="Question 1:";
                    document.getElementById("quest_page01").innerHTML=result1;
                    document.getElementById("op1_page01").innerHTML=result2;
                    document.getElementById("op2_page01").innerHTML=result3;
                    document.getElementById("op3_page01").innerHTML=result4;
                    document.getElementById("op4_page01").innerHTML=result5;
                    //document.getElementById("btn1").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn1").style.color='white';
                }
                function page02(){
                    var result1="<?php echo call2()[0];?>";
                    var result2="<?php echo call2()[1];?>";
                    var result3="<?php echo call2()[2];?>";
                    var result4="<?php echo call2()[3];?>";
                    var result5="<?php echo call2()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='block';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page02").innerHTML="Question 2:";
                    document.getElementById("quest_page02").innerHTML=result1;
                    document.getElementById("op1_page02").innerHTML=result2;
                    document.getElementById("op2_page02").innerHTML=result3;
                    document.getElementById("op3_page02").innerHTML=result4;
                    document.getElementById("op4_page02").innerHTML=result5;
                    //document.getElementById("btn2").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn2").style.color='white';
                }
                function page03(){
                    var result1="<?php echo call3()[0];?>";
                    var result2="<?php echo call3()[1];?>";
                    var result3="<?php echo call3()[2];?>";
                    var result4="<?php echo call3()[3];?>";
                    var result5="<?php echo call3()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='block';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page03").innerHTML="Question 3:";
                    document.getElementById("quest_page03").innerHTML=result1;
                    document.getElementById("op1_page03").innerHTML=result2;
                    document.getElementById("op2_page03").innerHTML=result3;
                    document.getElementById("op3_page03").innerHTML=result4;
                    document.getElementById("op4_page03").innerHTML=result5;
                    //document.getElementById("btn3").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn3").style.color='white';
                }
                function page04(){
                    var result1="<?php echo call4()[0];?>";
                    var result2="<?php echo call4()[1];?>";
                    var result3="<?php echo call4()[2];?>";
                    var result4="<?php echo call4()[3];?>";
                    var result5="<?php echo call4()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='block';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page04").innerHTML="Question 4:";
                    document.getElementById("quest_page04").innerHTML=result1;
                    document.getElementById("op1_page04").innerHTML=result2;
                    document.getElementById("op2_page04").innerHTML=result3;
                    document.getElementById("op3_page04").innerHTML=result4;
                    document.getElementById("op4_page04").innerHTML=result5;
                    //document.getElementById("btn4").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn4").style.color='white';
                }
                function page05(){
                    var result1="<?php echo call5()[0];?>";
                    var result2="<?php echo call5()[1];?>";
                    var result3="<?php echo call5()[2];?>";
                    var result4="<?php echo call5()[3];?>";
                    var result5="<?php echo call5()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='block';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page05").innerHTML="Question 5:";
                    document.getElementById("quest_page05").innerHTML=result1;
                    document.getElementById("op1_page05").innerHTML=result2;
                    document.getElementById("op2_page05").innerHTML=result3;
                    document.getElementById("op3_page05").innerHTML=result4;
                    document.getElementById("op4_page05").innerHTML=result5;
                    //document.getElementById("btn5").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn5").style.color='white';
                }
                function page06(){
                    var result1="<?php echo call6()[0];?>";
                    var result2="<?php echo call6()[1];?>";
                    var result3="<?php echo call6()[2];?>";
                    var result4="<?php echo call6()[3];?>";
                    var result5="<?php echo call6()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='block';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page06").innerHTML="Question 6:";
                    document.getElementById("quest_page06").innerHTML=result1;
                    document.getElementById("op1_page06").innerHTML=result2;
                    document.getElementById("op2_page06").innerHTML=result3;
                    document.getElementById("op3_page06").innerHTML=result4;
                    document.getElementById("op4_page06").innerHTML=result5;
                    //document.getElementById("btn6").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn6").style.color='white';
                }
                function page07(){
                    var result1="<?php echo call7()[0];?>";
                    var result2="<?php echo call7()[1];?>";
                    var result3="<?php echo call7()[2];?>";
                    var result4="<?php echo call7()[3];?>";
                    var result5="<?php echo call7()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='block';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page07").innerHTML="Question 7:";
                    document.getElementById("quest_page07").innerHTML=result1;
                    document.getElementById("op1_page07").innerHTML=result2;
                    document.getElementById("op2_page07").innerHTML=result3;
                    document.getElementById("op3_page07").innerHTML=result4;
                    document.getElementById("op4_page07").innerHTML=result5;
                    //document.getElementById("btn7").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn7").style.color='white';
                }
                function page08(){
                    var result1="<?php echo call8()[0];?>";
                    var result2="<?php echo call8()[1];?>";
                    var result3="<?php echo call8()[2];?>";
                    var result4="<?php echo call8()[3];?>";
                    var result5="<?php echo call8()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='block';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page08").innerHTML="Question 8:";
                    document.getElementById("quest_page08").innerHTML=result1;
                    document.getElementById("op1_page08").innerHTML=result2;
                    document.getElementById("op2_page08").innerHTML=result3;
                    document.getElementById("op3_page08").innerHTML=result4;
                    document.getElementById("op4_page08").innerHTML=result5;
                    //document.getElementById("btn8").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn8").style.color='white';
                }
                function page09(){
                    var result1="<?php echo call9()[0];?>";
                    var result2="<?php echo call9()[1];?>";
                    var result3="<?php echo call9()[2];?>";
                    var result4="<?php echo call9()[3];?>";
                    var result5="<?php echo call9()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='block';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page09").innerHTML="Question 9:";
                    document.getElementById("quest_page09").innerHTML=result1;
                    document.getElementById("op1_page09").innerHTML=result2;
                    document.getElementById("op2_page09").innerHTML=result3;
                    document.getElementById("op3_page09").innerHTML=result4;
                    document.getElementById("op4_page09").innerHTML=result5;
                    //document.getElementById("btn9").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn9").style.color='white';
                }
                function page10(){
                    var result1="<?php echo call10()[0];?>";
                    var result2="<?php echo call10()[1];?>";
                    var result3="<?php echo call10()[2];?>";
                    var result4="<?php echo call10()[3];?>";
                    var result5="<?php echo call10()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='block';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page10").innerHTML="Question 10:";
                    document.getElementById("quest_page10").innerHTML=result1;
                    document.getElementById("op1_page10").innerHTML=result2;
                    document.getElementById("op2_page10").innerHTML=result3;
                    document.getElementById("op3_page10").innerHTML=result4;
                    document.getElementById("op4_page10").innerHTML=result5;
                    //document.getElementById("btn10").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn10").style.color='white';
                }
                function page11(){
                    var result1="<?php echo call11()[0];?>";
                    var result2="<?php echo call11()[1];?>";
                    var result3="<?php echo call11()[2];?>";
                    var result4="<?php echo call11()[3];?>";
                    var result5="<?php echo call11()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='block';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page11").innerHTML="Question 11:";
                    document.getElementById("quest_page11").innerHTML=result1;
                    document.getElementById("op1_page11").innerHTML=result2;
                    document.getElementById("op2_page11").innerHTML=result3;
                    document.getElementById("op3_page11").innerHTML=result4;
                    document.getElementById("op4_page11").innerHTML=result5;
                    //document.getElementById("btn11").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn11").style.color='white';
                }
                function page12(){
                    var result1="<?php echo call12()[0];?>";
                    var result2="<?php echo call12()[1];?>";
                    var result3="<?php echo call12()[2];?>";
                    var result4="<?php echo call12()[3];?>";
                    var result5="<?php echo call12()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='block';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page12").innerHTML="Question 12:";
                    document.getElementById("quest_page12").innerHTML=result1;
                    document.getElementById("op1_page12").innerHTML=result2;
                    document.getElementById("op2_page12").innerHTML=result3;
                    document.getElementById("op3_page12").innerHTML=result4;
                    document.getElementById("op4_page12").innerHTML=result5;
                    //document.getElementById("btn12").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn12").style.color='white';
                }
                function page13(){
                    var result1="<?php echo call13()[0];?>";
                    var result2="<?php echo call13()[1];?>";
                    var result3="<?php echo call13()[2];?>";
                    var result4="<?php echo call13()[3];?>";
                    var result5="<?php echo call13()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='block';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page13").innerHTML="Question 13:";
                    document.getElementById("quest_page13").innerHTML=result1;
                    document.getElementById("op1_page13").innerHTML=result2;
                    document.getElementById("op2_page13").innerHTML=result3;
                    document.getElementById("op3_page13").innerHTML=result4;
                    document.getElementById("op4_page13").innerHTML=result5;
                    //document.getElementById("btn13").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn13").style.color='white';
                }
                function page14(){
                    var result1="<?php echo call14()[0];?>";
                    var result2="<?php echo call14()[1];?>";
                    var result3="<?php echo call14()[2];?>";
                    var result4="<?php echo call14()[3];?>";
                    var result5="<?php echo call14()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='block';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page14").innerHTML="Question 14:";
                    document.getElementById("quest_page14").innerHTML=result1;
                    document.getElementById("op1_page14").innerHTML=result2;
                    document.getElementById("op2_page14").innerHTML=result3;
                    document.getElementById("op3_page14").innerHTML=result4;
                    document.getElementById("op4_page14").innerHTML=result5;
                    //document.getElementById("btn14").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn14").style.color='white';
                }
                function page15(){
                    var result1="<?php echo call15()[0];?>";
                    var result2="<?php echo call15()[1];?>";
                    var result3="<?php echo call15()[2];?>";
                    var result4="<?php echo call15()[3];?>";
                    var result5="<?php echo call15()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='block';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page15").innerHTML="Question 15:";
                    document.getElementById("quest_page15").innerHTML=result1;
                    document.getElementById("op1_page15").innerHTML=result2;
                    document.getElementById("op2_page15").innerHTML=result3;
                    document.getElementById("op3_page15").innerHTML=result4;
                    document.getElementById("op4_page15").innerHTML=result5;
                    //document.getElementById("btn15").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn15").style.color='white';
                }
                function page16(){
                    var result1="<?php echo call16()[0];?>";
                    var result2="<?php echo call16()[1];?>";
                    var result3="<?php echo call16()[2];?>";
                    var result4="<?php echo call16()[3];?>";
                    var result5="<?php echo call16()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='block';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page16").innerHTML="Question 16:";
                    document.getElementById("quest_page16").innerHTML=result1;
                    document.getElementById("op1_page16").innerHTML=result2;
                    document.getElementById("op2_page16").innerHTML=result3;
                    document.getElementById("op3_page16").innerHTML=result4;
                    document.getElementById("op4_page16").innerHTML=result5;
                    //document.getElementById("btn16").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn16").style.color='white';
                }
                function page17(){
                    var result1="<?php echo call17()[0];?>";
                    var result2="<?php echo call17()[1];?>";
                    var result3="<?php echo call17()[2];?>";
                    var result4="<?php echo call17()[3];?>";
                    var result5="<?php echo call17()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='block';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page17").innerHTML="Question 17:";
                    document.getElementById("quest_page17").innerHTML=result1;
                    document.getElementById("op1_page17").innerHTML=result2;
                    document.getElementById("op2_page17").innerHTML=result3;
                    document.getElementById("op3_page17").innerHTML=result4;
                    document.getElementById("op4_page17").innerHTML=result5;
                    //document.getElementById("btn17").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn17").style.color='white';
                }
                function page18(){
                    var result1="<?php echo call18()[0];?>";
                    var result2="<?php echo call18()[1];?>";
                    var result3="<?php echo call18()[2];?>";
                    var result4="<?php echo call18()[3];?>";
                    var result5="<?php echo call18()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='block';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page18").innerHTML="Question 18:";
                    document.getElementById("quest_page18").innerHTML=result1;
                    document.getElementById("op1_page18").innerHTML=result2;
                    document.getElementById("op2_page18").innerHTML=result3;
                    document.getElementById("op3_page18").innerHTML=result4;
                    document.getElementById("op4_page18").innerHTML=result5;
                    //document.getElementById("btn18").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn18").style.color='white';
                }
                function page19(){
                    var result1="<?php echo call19()[0];?>";
                    var result2="<?php echo call19()[1];?>";
                    var result3="<?php echo call19()[2];?>";
                    var result4="<?php echo call19()[3];?>";
                    var result5="<?php echo call19()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='block';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page19").innerHTML="Question 19:";
                    document.getElementById("quest_page19").innerHTML=result1;
                    document.getElementById("op1_page19").innerHTML=result2;
                    document.getElementById("op2_page19").innerHTML=result3;
                    document.getElementById("op3_page19").innerHTML=result4;
                    document.getElementById("op4_page19").innerHTML=result5;
                    //document.getElementById("btn19").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn19").style.color='white';
                }
                function page20(){
                    var result1="<?php echo call20()[0];?>";
                    var result2="<?php echo call20()[1];?>";
                    var result3="<?php echo call20()[2];?>";
                    var result4="<?php echo call20()[3];?>";
                    var result5="<?php echo call20()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='block';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page20").innerHTML="Question 20:";
                    document.getElementById("quest_page20").innerHTML=result1;
                    document.getElementById("op1_page20").innerHTML=result2;
                    document.getElementById("op2_page20").innerHTML=result3;
                    document.getElementById("op3_page20").innerHTML=result4;
                    document.getElementById("op4_page20").innerHTML=result5;
                    //document.getElementById("btn20").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn20").style.color='white';
                }
                function page21(){
                    var result1="<?php echo call21()[0];?>";
                    var result2="<?php echo call21()[1];?>";
                    var result3="<?php echo call21()[2];?>";
                    var result4="<?php echo call21()[3];?>";
                    var result5="<?php echo call21()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='block';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page21").innerHTML="Question 21:";
                    document.getElementById("quest_page21").innerHTML=result1;
                    document.getElementById("op1_page21").innerHTML=result2;
                    document.getElementById("op2_page21").innerHTML=result3;
                    document.getElementById("op3_page21").innerHTML=result4;
                    document.getElementById("op4_page21").innerHTML=result5;
                    //document.getElementById("btn21").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn21").style.color='white';
                }
                function page22(){
                    var result1="<?php echo call22()[0];?>";
                    var result2="<?php echo call22()[1];?>";
                    var result3="<?php echo call22()[2];?>";
                    var result4="<?php echo call22()[3];?>";
                    var result5="<?php echo call22()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='block';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page22").innerHTML="Question 22:";
                    document.getElementById("quest_page22").innerHTML=result1;
                    document.getElementById("op1_page22").innerHTML=result2;
                    document.getElementById("op2_page22").innerHTML=result3;
                    document.getElementById("op3_page22").innerHTML=result4;
                    document.getElementById("op4_page22").innerHTML=result5;
                    //document.getElementById("btn22").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn22").style.color='white';
                }
                function page23(){
                    var result1="<?php echo call23()[0];?>";
                    var result2="<?php echo call23()[1];?>";
                    var result3="<?php echo call23()[2];?>";
                    var result4="<?php echo call23()[3];?>";
                    var result5="<?php echo call23()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='block';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page23").innerHTML="Question 23:";
                    document.getElementById("quest_page23").innerHTML=result1;
                    document.getElementById("op1_page23").innerHTML=result2;
                    document.getElementById("op2_page23").innerHTML=result3;
                    document.getElementById("op3_page23").innerHTML=result4;
                    document.getElementById("op4_page23").innerHTML=result5;
                    //document.getElementById("btn23").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn23").style.color='white';
                }
                function page24(){
                    var result1="<?php echo call24()[0];?>";
                    var result2="<?php echo call24()[1];?>";
                    var result3="<?php echo call24()[2];?>";
                    var result4="<?php echo call24()[3];?>";
                    var result5="<?php echo call24()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='block';
                    document.getElementById("page25").style.display='none';
                    document.getElementById("que_page24").innerHTML="Question 24:";
                    document.getElementById("quest_page24").innerHTML=result1;
                    document.getElementById("op1_page24").innerHTML=result2;
                    document.getElementById("op2_page24").innerHTML=result3;
                    document.getElementById("op3_page24").innerHTML=result4;
                    document.getElementById("op4_page24").innerHTML=result5;
                    //document.getElementById("btn24").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn24").style.color='white';
                }
                function page25(){
                    var result1="<?php echo call25()[0];?>";
                    var result2="<?php echo call25()[1];?>";
                    var result3="<?php echo call25()[2];?>";
                    var result4="<?php echo call25()[3];?>";
                    var result5="<?php echo call25()[4];?>";
                    document.getElementById("page01").style.display='none';
                    document.getElementById("page02").style.display='none';
                    document.getElementById("page03").style.display='none';
                    document.getElementById("page04").style.display='none';
                    document.getElementById("page05").style.display='none';
                    document.getElementById("page06").style.display='none';
                    document.getElementById("page07").style.display='none';
                    document.getElementById("page08").style.display='none';
                    document.getElementById("page09").style.display='none';
                    document.getElementById("page10").style.display='none';
                    document.getElementById("page11").style.display='none';
                    document.getElementById("page12").style.display='none';
                    document.getElementById("page13").style.display='none';
                    document.getElementById("page14").style.display='none';
                    document.getElementById("page15").style.display='none';
                    document.getElementById("page16").style.display='none';
                    document.getElementById("page17").style.display='none';
                    document.getElementById("page18").style.display='none';
                    document.getElementById("page19").style.display='none';
                    document.getElementById("page20").style.display='none';
                    document.getElementById("page21").style.display='none';
                    document.getElementById("page22").style.display='none';
                    document.getElementById("page23").style.display='none';
                    document.getElementById("page24").style.display='none';
                    document.getElementById("page25").style.display='block';
                    document.getElementById("que_page25").innerHTML="Question 25:";
                    document.getElementById("quest_page25").innerHTML=result1;
                    document.getElementById("op1_page25").innerHTML=result2;
                    document.getElementById("op2_page25").innerHTML=result3;
                    document.getElementById("op3_page25").innerHTML=result4;
                    document.getElementById("op4_page25").innerHTML=result5;
                    //document.getElementById("btn25").style.backgroundImage='url("logo2.png")';
                    //document.getElementById("btn25").style.color='white';
                }      
            </script>           

        </div>
        <div class="info_btn">
            <div id="not_visited">
                <p id="notvisited">24</p>
            </div>
            <label for="not_visited" class="novis">Not Visited</label>

            <div id="not_answered">
                <p id="notanswered">25</p>
            </div>
            <label for="not_answered" class="noans">Not Answered</label>

            <div id="answered">
                <p id="answer">0</p>
            </div>
            <label for="answered" class="ans">Answered</label>

            <div id="mark_for_review">
                <p id="markforreview">0</p>
            </div>
            <label for="mark_for_review" class="mark">Mark for Review</label>

            <div id="answer_marked">
                <p id="answermarked">0</p>
            </div>
            <label for="answer_marked" class="ansmark">Answer & Marked for Rewview(will be considered for evaluation)</label>
        </div>
    </main>

    <footer>
        <div class="lastbtn">
            <button class="back" id="p_back">&#x226A; BACK</button>
            <button class="next" id="p_next">NEXT &#x226B;</button>
            <button class="submit" id="submit" disabled>SUBMIT</button>
        </div>
    </footer>
    <script src="final.js"> </script>
</body>
</html>