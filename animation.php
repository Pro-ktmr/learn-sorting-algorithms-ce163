<?php
session_start();

if (!isset($_SESSION['id'])) {
  header('Location: index.php');
}
?>

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="js/main.js" type="module"></script>
    <title>アニメーション</title>
  </head>
  <body>
    <div class="bg_pattern Polka"></div>

    <div class="title_bar">
      <span class="btn_page_back" onclick="window.history.back()"></span>
      <span id="title">アニメーション</span>
    </div>

    <div class="container">

      <div class="col1">
        <div class="fitting_box">
          <canvas id="animation_canvas" class="top_round" width="1280px" height="720px">
            canvas タグをサポートしたブラウザを使用してください．
          </canvas>
    
          <div class="control animation">
            <div class="row">
              <input type="button" value="シャッフル" title="シャッフルする" onclick="animationShuffle()" />　
              <input type="button" value="最初に戻す" title="最初に戻す" onclick="animationBegin()" />　
              <input type="button" value="|◀" title="1 コマ戻す" onclick="animationBack()" />
              <input type="button" id="btn_play" value="▶" title="再生/停止する" onclick="animationPlay()" />
              <input type="button" value="▶|" title="1 コマ進める" onclick="animationAdvance()" />
            </div>
            <div class="row">
              <label for="checkbox_make_all_transparent">透かす: </label><input type="checkbox" id="checkbox_make_all_transparent" title="全てのカードを透かす" onclick="animationMakeAllTransparent()" />　
              <label for="animation_interval">スピード: </label><input type="range" id="animation_interval" value="3" min="1" max="5" />
            </div>
            <div class="row">
              <input type="text" id="animation_input" placeholder="パターンを選択 または コンマで区切って入力 (例: 5,3,1,4,2)" size="24" list="animation_input_example" />
              <datalist id="animation_input_example">
                <option value="パターン1-1"></option>
                <option value="パターン1-2"></option>
                <option value="パターン1-3"></option>
                <option value="パターン2-1"></option>
                <option value="パターン2-2"></option>
                <option value="パターン2-3"></option>
                <option value="パターン3-1"></option>
                <option value="パターン3-2"></option>
                <option value="パターン3-3"></option>
                <option value="パターン3-1(途中から)"></option>
                <option value="パターン3-2(途中から)"></option>
                <option value="パターン3-3(途中から)"></option>
              </datalist>
              <input type="button" value="入力セット" title="入力をセットする" onclick="animationSet('animation_input')" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </body>
</html>