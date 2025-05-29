// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for (let n of data.list.g1) {
    console.log(n.start_time);
    console.log(n.end_time);
    console.log(n.service.name);
    console.log(n.title);
    console.log(n.subtitle);
    console.log(n.content);
    console.log(n.act);
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
let h;
function printDom(data) {
  let k = document.querySelector('div#result'); 
  if (k != null){ 
  k.remove();
  }

  k = document.querySelector('p#message'); 
  if (k != null){ 
  k.remove();
  }

  let u = document.querySelector('body');
  let l = document.createElement('div'); 
  l.setAttribute('id', 'result');
  u.insertAdjacentElement('beforeend',l); 
  u = document.querySelector('div#result'); 

  if(a === "g1"){
    h = data.list.g1;
  }else{
    h = data.list.e1;
  }
  for (let n of h) { 
    l = document.createElement('div'); 
    u.insertAdjacentElement('beforeend',l);
    l.textContent = n.start_time; 
    l = document.createElement('div'); 
    u.insertAdjacentElement('beforeend',l); 
    l.textContent = n.end_time; 
    l = document.createElement('div'); 
    u.insertAdjacentElement('beforeend',l);
    l.textContent = n.service.name;
    l = document.createElement('div'); 
    u.insertAdjacentElement('beforeend',l);
    l.textContent = n.title;
    l = document.createElement('div');  
    u.insertAdjacentElement('beforeend',l);
    l.textContent = n.subtitle;
    l = document.createElement('div'); 
    u.insertAdjacentElement('beforeend',l);
    l.textContent = n.content;
    l = document.createElement('div'); 
    u.insertAdjacentElement('beforeend',l);
    l.textContent = n.act;
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let c = document.querySelector('button#print');
c.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
let r,a,s,idx,os,o;
function sendRequest() {
  let gen = document.querySelectorAll('input[name="genre"]');
  for (r of gen) {
    if (r.checked) {
      console.log('チャンネル: '+r.value);
      a = r.value;
    }
  }
  s = document.querySelector('select#kensaku');
  idx = s.selectedIndex;
  os = s.querySelectorAll('option');
  o = os.item(idx);
  console.log('ジャンル: ' + o.getAttribute('value') + ' ' + o.textContent);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+a+'-'+o.getAttribute('value')+'-j.json';

	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
	let data = resp.data;
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
    u = document.querySelector('button');
    l = document.createElement('p'); 
    l.setAttribute('id', 'message');
    u.insertAdjacentElement('afterend',l); 
    l.textContent = '検索結果なし'; 
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること