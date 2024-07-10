const fs = require("fs");
const path = require("path");

// ログを出力する関数
function logMessage(message) {
  const logDir = path.join(__dirname, "log"); // __dirnameは現在のスクリプトのディレクトリパスを表す
  const logFile = path.join(logDir, "app.log");

  // ログフォルダが存在しない場合は作成する
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  // ログファイルにメッセージを追記する
  fs.appendFileSync(logFile, `${new Date().toISOString()} - ${message}\n`);
}

// テスト用にログ出力
logMessage("アプリケーションが起動しました。");
logMessage("データベースに接続しました。");
