$(function(){
  $('.tab li').on('click',function(){
    $('.tab li').removeClass('select');
    $(this).addClass('select');
    $('.content li').addClass('hide');
    let index = $('.tab li').index($(this));
    $('.content li').eq(index).removeClass('hide');
  });
});

  //<ul class="tab">内のすべてのliタグを取得し,取得したliタグにクリックイベントを設定
  // すべてのタブからselectクラスを取り除く
  //取得したタブにaddClassメソッドを使用し、クラスselectを設定しましょう。
  //取得したすべてのliタグにクラスhideを設定して非表示にします
  //indexメソッドは子要素を引数として渡すことにより、親要素内の何番目の子要素か(index値)を調べることができます。
  //例えば2番目の子要素を取得したい場合は以下のようになります。2番目の子要素なので、index値は1になります。$('.content li').eq(1);
  //最後に取得したliタグからクラスhideを取り除きます。