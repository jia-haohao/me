$(function() {
  $('#accordion dd').hide();
  $('#accordion dt').on('click', function(){
    $(this).next('dd').slideToggle('fast');
  });
});


//仕組みとしては <dt> 部分をアコーディオンのタブ部分(クリックする部分)、 <dd> 部分をパネル部分として、CSSでデザインを調整しています。
//パネル部分（ <dd> ）を取得し,取得したddタグを hide() を使用して非表示にします
//パネルの開閉のトリガーになるのはタブ部分(dtタグ)なので、 <dt> にクリックイベントを設定します
//next() は指定された各要素の直後の兄弟要素を取得できます。
//最後に開閉の処理を実装します。
//今回は開閉の処理には slideToggle() を利用します。
//slideToggle() は各要素の高さを操作して、 slideDown() と slideUp() の動作を交互に行います。
//slideToggle() のアニメーションを設定する方法について記述します。
// slideDown() と slideUp() の動作を遅くする    slideToggle('slow') 
//slideDown() と slideUp() の動作を速くする.  slideToggle('fast')