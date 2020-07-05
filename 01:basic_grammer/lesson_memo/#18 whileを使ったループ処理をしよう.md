# while文
例）  
let hp = 100;  
  
while (hp > 0) {  
　console.log(`残りHPは${hp}です`);  
　hp -= 15;  
}  
・無限ループにならないように気をつける  

# 一度は処理を行いたいときは「do while」をつかう
例）  
let hp = -50;  
  
do {  
　console.log(`残りHPは${hp}です`);  
　hp -= 15;  
} while (hp > 0)  