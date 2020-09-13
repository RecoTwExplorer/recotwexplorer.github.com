export const APP_NAME = "RecoTw Explorer";
export const APP_VERSION = "2.67";
export const APP_URL = `${location.protocol}//${location.host}${location.pathname}`;

export const INCORRECT_REGEX = "指定された正規表現は正しくありません";
export const FAILED_TO_GENERATE_STATUS_URL = "ツイートの URL を生成できません";
export const FAILED_TO_GENERATE_USER_URL = "ユーザーへの URL を生成できません";
export const FAILED_TO_GENERATE_PROFILE_IMAGE_URL = "プロフィール画像の URL を生成できません";
export const FAILED_TO_LOAD_EMBEDDED_TWEET = "Twitter 埋め込みツイートの読み込みに失敗しました";
export const SEARCH_HELP_HTML = "<dl><dt>ツイート検索</dt><dd><code>/</code> と <code>/</code> で囲むと正規表現検索</dd><dt>ユーザー名検索</dt><dd><code>from:</code> でユーザーを検索<br>カンマ区切りで複数入力</dd><dt>ID 検索</dt><dd><code>id:</code> で ID 検索</dd></dl>";
export const STATISTICS_TABLE_HTML = "<span class=\"statistics-table-header\" style=\"border-color: #{0:X6};\"><a href=\"{4}\">{1}</a> ({2})&nbsp;&nbsp;&ndash;&nbsp;&nbsp;{3:P1}</span><br>";
export const TWEET_TIME_HTML = "<a href=\"{0}\" target=\"_blank\"><time datetime=\"{2}\">{1:tth:mm} · {1:D}</time></a>";
export const TWEET_REMOVED_HTML = "<blockquote>ツイートは削除されたか、または非公開に設定されています。<hr><div><img src=\"{0}\"><span><a href=\"{1}\" target=\"_blank\">@{2}</a></span><p>{3}</p><p class=\"tweet-date\">{4}</p></div></blockquote>";
export const LINK_TO_URL_HTML = "<a href=\"{0}\" target=\"_blank\">{0}</a>";
export const URL_INPUT_REGEX = /^(?:(?:https?:\/\/(?:www\.|mobile\.)?)?twitter\.com\/(?:#!\/)?[a-zA-Z0-9_]+\/status(?:es)?\/(\d+)|(\d+))$/u;
export const USERNAME = "ユーザ名";
export const TWEETS_COUNT = "ツイート数";
export const NO_RESULT = "<p class=\"text-center\" style=\"margin-top: 200px;\">該当ユーザーなし</p>";
export const SEARCH_RESULT = "検索結果: {0}";
export const STATISTICS_COUNT = "({0:N0} 件)";
export const STATISTICS_COUNT_FILTERED = "({0:N0} / {1:N0} 件)";
export const PAGE_TITLE_SEARCH_RESULT = `検索結果: {0} - ${APP_NAME}`;
export const PAGE_TITLE_NORMAL = APP_NAME;
