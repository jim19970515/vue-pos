/**
 * Prettier 程式碼格式化設定檔
 *
 * Prettier 是一個程式碼格式化工具，可以自動統一專案的程式碼風格
 * 這個檔案定義了所有格式化規則
 */

module.exports = {
  // ==================== 基本設定 ====================

  // 指定要使用的 Prettier 插件
  // prettier-plugin-vue: 用於格式化 Vue 單文件組件 (.vue)
  plugins: ["prettier-plugin-vue"],

  // ==================== 字串相關設定 ====================

  // 使用單引號還是雙引號
  // true: 使用單引號 'hello'
  // false: 使用雙引號 "hello"
  singleQuote: false,

  // 在 JSX 中使用單引號還是雙引號
  // true: JSX 中使用單引號 <div className='test'>
  // false: JSX 中使用雙引號 <div className="test">
  jsxSingleQuote: false,

  // ==================== 行尾相關設定 ====================

  // 行尾序列
  // "lf": 使用 LF (Line Feed, \n) - Unix/Mac 風格
  // "crlf": 使用 CRLF (\r\n) - Windows 風格
  // "cr": 使用 CR (\r) - 舊版 Mac 風格
  // "auto": 自動偵測（不建議使用）
  endOfLine: "lf",

  // ==================== 縮排相關設定 ====================

  // 使用空格還是 Tab 來縮排
  // true: 使用 Tab
  // false: 使用空格
  useTabs: false,

  // 縮排的空格數（當 useTabs 為 false 時生效）
  // 2: 每個縮排層級使用 2 個空格（常見於 Vue/React 專案）
  // 4: 每個縮排層級使用 4 個空格（常見於 Python/Java 專案）
  tabWidth: 2,

  // ==================== 行寬相關設定 ====================

  // 每行的最大字元數
  // 超過這個長度會自動換行
  // 80: 傳統標準（適合閱讀）
  // 100: 較寬鬆（適合現代寬螢幕）
  // 120: 非常寬鬆
  printWidth: 100,

  // ==================== 分號相關設定 ====================

  // 是否在語句結尾添加分號
  // true: 添加分號 const a = 1;
  // false: 不添加分號 const a = 1
  semi: true,

  // ==================== 逗號相關設定 ====================

  // 是否在多行結構的最後一項後添加逗號（尾隨逗號）
  // "none": 不添加尾隨逗號
  // "es5": 在 ES5 有效的地方添加（物件、陣列等）
  // "all": 在所有可能的地方添加（包括函數參數等）
  trailingComma: "es5",

  // ==================== 括號相關設定 ====================

  // 是否在單個箭頭函數參數周圍添加括號
  // "always": 總是添加 (x) => x
  // "avoid": 避免添加（單參數時） x => x
  arrowParens: "always",

  // ==================== 物件相關設定 ====================

  // 物件字面量中的括號間距
  // true: { foo: bar } 有空格
  // false: {foo: bar} 無空格
  bracketSpacing: true,

  // ==================== HTML/JSX 相關設定 ====================

  // HTML 標籤的換行方式
  // true: 多行屬性時，將 > 放在最後一個屬性後
  // false: 多行屬性時，將 > 放在新的一行
  bracketSameLine: false,

  // HTML 空白字元的敏感度
  // "css": 遵循 CSS display 屬性的預設值
  // "strict": 所有空白字元都是敏感的
  // "ignore": 忽略所有空白字元
  htmlWhitespaceSensitivity: "css",

  // Vue 檔案中 script 和 style 標籤的縮排
  // true: 縮排 script 和 style 標籤內的內容
  // false: 不縮排
  vueIndentScriptAndStyle: false,

  // ==================== 其他設定 ====================

  // 是否格式化嵌入在檔案中的引用程式碼
  // "auto": 如果 Prettier 可以自動識別，則格式化
  // "off": 不格式化
  embeddedLanguageFormatting: "auto",

  // 是否在檔案開頭插入 @prettier 或 @format 標記
  // true: 插入標記
  // false: 不插入標記
  insertPragma: false,

  // 是否只格式化在檔案開頭有 @prettier 或 @format 標記的檔案
  // true: 只格式化有標記的檔案
  // false: 格式化所有檔案
  requirePragma: false,

  // 是否在檔案開頭插入 @prettier 或 @format 標記
  // 這個選項與 insertPragma 類似，但用於不同的場景
  // 通常保持預設值即可
  proseWrap: "preserve",

  // 是否在物件屬性周圍添加引號
  // "as-needed": 只在需要時添加引號
  // "consistent": 如果有一個屬性需要引號，則所有屬性都添加引號
  // "preserve": 保留原有的引號使用方式
  quoteProps: "as-needed",

  // ==================== 檔案覆蓋設定 ====================
  // 可以針對特定檔案類型設定不同的規則
  overrides: [
    {
      // 針對 JSON 檔案的設定
      files: "*.json",
      options: {
        // JSON 檔案使用 2 個空格縮排
        tabWidth: 2,
        // JSON 檔案使用雙引號
        singleQuote: false,
        // JSON 檔案不添加尾隨逗號（JSON 不支援）
        trailingComma: "none",
      },
    },
    {
      // 針對 Markdown 檔案的設定
      files: "*.md",
      options: {
        // Markdown 檔案使用較寬的行寬
        printWidth: 80,
        // Markdown 檔案保留換行
        proseWrap: "preserve",
      },
    },
  ],
};
