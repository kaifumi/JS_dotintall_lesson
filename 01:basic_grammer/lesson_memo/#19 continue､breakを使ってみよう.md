# continueで処理をスキップできる
例）  
例ではiが4のときだけ、処理をスキップしている  
for (let i = 1; i <= 10; i++) {  
　if (i === 4) {  
　　continue;  
　}  
　console.log(i);  
}

# 3の倍数を表現するテクニック
・i % 3 === 0で3の倍数と分かる

# breakでそれ以降の処理を中断する
例）  
例ではiが4のときにループ処理を中断している  
for (let i = 1; i <= 10; i++) {  
　if (i === 4) {  
　　break;  
　}  
　console.log(i);  
}  
