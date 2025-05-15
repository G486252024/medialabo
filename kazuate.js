// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button#print');
b.addEventListener('click', hantei); 

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu=kaisu+1;
// テキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="yoso"]');
  yoso = i.value;
  n = Number(yoso);
  kaisuprint = document.querySelector('span#kaisu');
  kaisuprint.textContent = kaisu;

// 課題3-1: 正解判定する
// kotae と yoso が一致するかどうか調べて結果を出力
  let p = document.querySelector('span#answer');
  if(kaisu>=4){
    p.textContent = ("答えは "+kotae+" でした．すでにゲームは終わっています");
  }else if(kotae==n){
    p.textContent = ("正解です．おめでとう!");
  }else if(kaisu==3){
    p.textContent = ("まちがい．残念でした答えは "+kotae+" です．");
  }else if(kotae>n){
    p.textContent = ("まちがい．答えはもっと大きいですよ");
  }else{
    p.textContent = ("まちがい．答えはもっと小さいですよ");
  }
}