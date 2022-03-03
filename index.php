<?php
session_start();

if (isset($_POST['id']) && $_POST['id'] != "") {
  $id = $_POST['id'];
  $id_list = file(__DIR__ . '/secure/id_list.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

  if (in_array($id, $id_list, true)) {
    $_SESSION['id'] = $id;
    header('Location: list.php');
    $msg = 'ログインに成功しました．';
  }
  else {
    $msg = 'ID が間違っています．';
  }
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
      <h2>ログインしてください</h2>

      <div>
        <?php echo $msg; ?>
      </div>

      <form action="index.php" method="post">
        <div>
          ID: <input type="text" name="id" required />
        </div>
        <div>
          <input type="submit" value="ログイン" />
        </div>
      </form>

    </div>
  </body>
</html>