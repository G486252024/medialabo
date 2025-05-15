// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  kaisu=kaisu+1;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  let i = document.querySelector('input[name="yoso"]');
  yoso = i.value;
  n = Number(yoso);
  
  // 課題3-1における出力先はコンソール
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

let b = document.querySelector('button#print');
b.addEventListener('click', hantei); 