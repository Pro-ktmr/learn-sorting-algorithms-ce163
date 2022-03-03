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
    <title>ソートアルゴリズムオンライン学習教材</title>
  </head>
  <body>
    <div class="width_adjust">
      <h1>ソートアルゴリズムオンライン学習教材</h1>
      <h2>モードを選んでください</h2>

      <h3>カードを並び替えて学ぶ</h3>

      <a class="selection_box practice" href="practice.php?algorithm=array_sort"><span class="title">フリー (配列)</span><span class="body">演習</span></a>
      <a class="selection_box practice" href="practice.php?algorithm=tree_sort"><span class="title">フリー (木)</span><span class="body">演習</span></a>

      <br />

      <a class="selection_box card animation" href="animation.php?algorithm=bubble_sort"><span class="title">バブルソート</span><span class="body">アニメーション</span></a>
      <a class="selection_box card practice" href="practice.php?algorithm=bubble_sort"><span class="title">バブルソート</span><span class="body">演習</span></a>
      <a class="selection_box card animation_practice" href="animation_practice.php?algorithm=bubble_sort"><span class="title">バブルソート</span><span class="body">アニメーション＋演習</span></a>

      <br />

      <a class="selection_box card animation" href="animation.php?algorithm=selection_sort"><span class="title">選択ソート</span><span class="body">アニメーション</span></a>
      <a class="selection_box card practice" href="practice.php?algorithm=selection_sort"><span class="title">選択ソート</span><span class="body">演習</span></a>
      <a class="selection_box card animation_practice" href="animation_practice.php?algorithm=selection_sort"><span class="title">選択ソート</span><span class="body">アニメーション＋演習</span></a>

      <br />

      <a class="selection_box card animation" href="animation.php?algorithm=selection_sort_slow"><span class="title">選択ソート (遅)</span><span class="body">アニメーション</span></a>
      <a class="selection_box card practice" href="practice.php?algorithm=selection_sort_slow"><span class="title">選択ソート (遅)</span><span class="body">演習</span></a>
      <a class="selection_box card animation_practice" href="animation_practice.php?algorithm=selection_sort_slow"><span class="title">選択ソート (遅)</span><span class="body">アニメーション＋演習</span></a>

      <br />
      
      <a class="selection_box card animation" href="animation.php?algorithm=heap_sort"><span class="title">ヒープソート</span><span class="body">アニメーション</span></a>
      <a class="selection_box card practice" href="practice.php?algorithm=heap_sort"><span class="title">ヒープソート</span><span class="body">演習</span></a>
      <a class="selection_box card animation_practice" href="animation_practice.php?algorithm=heap_sort"><span class="title">ヒープソート</span><span class="body">アニメーション＋演習</span></a>

      <h3>多くの要素を並び替えて比べる</h3>

      <a class="selection_box large" href="large/bubble_selection.php">バブルソート<br />vs 選択ソート</a>
      <a class="selection_box large" href="large/bubble_selection_heap.php">バブルソート<br />vs 選択ソート<br />vs ヒープソート</a>
      <a class="selection_box large" href="large/bubble_selection2_heap.php">バブルソート<br />vs 選択ソート (遅)<br />vs ヒープソート</a>

    </div>
  </body>
</html>