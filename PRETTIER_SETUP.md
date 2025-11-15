# Prettier 安裝與設定說明文件

## 📋 目錄
1. [安裝過程總覽](#安裝過程總覽)
2. [作業流程](#作業流程)
3. [安裝步驟詳解](#安裝步驟詳解)
4. [安裝前後差異](#安裝前後差異)
5. [使用方式](#使用方式)

---

## 📦 安裝過程總覽

### 做了哪些事

#### 1. **安裝套件**
   - ✅ 安裝 `prettier@3.6.2`（核心格式化工具）
   - ✅ 安裝 `prettier-plugin-vue@1.1.6`（Vue 檔案格式化支援）

#### 2. **建立配置檔案**
   - ✅ 建立 `.prettierrc.cjs`（Prettier 設定檔，包含詳細中文註解）
   - ✅ 建立 `.prettierignore`（指定不需要格式化的檔案和目錄）

#### 3. **設定專案腳本**
   - ✅ 在 `package.json` 中添加 `format` 腳本（格式化所有檔案）
   - ✅ 在 `package.json` 中添加 `format:check` 腳本（檢查格式但不修改）

#### 4. **修正配置問題**
   - ✅ 將 `.prettierrc.js` 重新命名為 `.prettierrc.cjs`（解決 ES Module 衝突）

---

## 🔄 作業流程

```
┌─────────────────────────────────────────────────────────┐
│  1. 檢查專案現況                                        │
│     - 查看 package.json                                 │
│     - 確認專案類型（Vue 3 + TypeScript + Vite）        │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  2. 安裝 Prettier 套件                                  │
│     npm install --save-dev prettier prettier-plugin-vue │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  3. 建立配置檔案                                        │
│     - .prettierrc.cjs（格式化規則，含中文註解）        │
│     - .prettierignore（忽略檔案清單）                   │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  4. 設定 package.json 腳本                              │
│     - format: 格式化所有檔案                            │
│     - format:check: 檢查格式                            │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  5. 測試與驗證                                          │
│     - 測試配置檔案載入                                  │
│     - 測試格式化功能                                    │
│     - 修正 ES Module 衝突問題                          │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  6. 完成 ✅                                             │
│     - Prettier 已可正常使用                            │
│     - 所有功能驗證通過                                  │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 安裝步驟詳解

### 步驟 1: 安裝套件

```bash
npm install --save-dev prettier prettier-plugin-vue
```

**說明：**
- `prettier`: Prettier 核心套件，負責程式碼格式化
- `prettier-plugin-vue`: Vue 單文件組件（.vue）的格式化支援
- `--save-dev`: 安裝為開發依賴（devDependencies）

**安裝結果：**
```json
{
  "devDependencies": {
    "prettier": "^3.6.2",
    "prettier-plugin-vue": "^1.1.6"
  }
}
```

---

### 步驟 2: 建立配置檔案

#### 2.1 建立 `.prettierrc.cjs`

**為什麼使用 `.cjs` 而不是 `.js`？**
- 專案的 `package.json` 設定了 `"type": "module"`
- 這會讓所有 `.js` 檔案被視為 ES Module
- 但 Prettier 配置使用 CommonJS 語法（`module.exports`）
- 因此使用 `.cjs` 副檔名明確指定為 CommonJS 格式

**配置檔案包含：**
- ✅ 基本設定（插件、引號、行尾等）
- ✅ 縮排設定（空格數、Tab 等）
- ✅ 行寬設定
- ✅ 分號、逗號設定
- ✅ 括號、物件設定
- ✅ HTML/JSX/Vue 特定設定
- ✅ 檔案覆蓋設定（針對不同檔案類型）
- ✅ **每個選項都有詳細的中文註解說明**

#### 2.2 建立 `.prettierignore`

**目的：** 指定哪些檔案和目錄不需要被 Prettier 格式化

**包含的忽略項目：**
- `node_modules/` - 依賴套件
- `dist/`, `build/` - 建置輸出
- `*.log` - 日誌檔案
- `.env*` - 環境變數檔案
- `package-lock.json` - 鎖定檔案
- `auto-imports.d.ts`, `components.d.ts` - 自動生成的檔案

---

### 步驟 3: 設定 package.json 腳本

**添加的腳本：**

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.{js,ts,vue,json,css,scss,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,ts,vue,json,css,scss,md}\""
  }
}
```

**說明：**
- `format`: 格式化所有符合條件的檔案（會直接修改檔案）
- `format:check`: 檢查檔案格式是否符合規範（不修改檔案，適合 CI/CD）

**支援的檔案類型：**
- `.js` - JavaScript
- `.ts` - TypeScript
- `.vue` - Vue 單文件組件
- `.json` - JSON
- `.css` - CSS
- `.scss` - SCSS
- `.md` - Markdown

---

### 步驟 4: 測試與驗證

**執行的測試：**
1. ✅ 檢查套件安裝：`npm list prettier prettier-plugin-vue`
2. ✅ 檢查 Prettier 版本：`npx prettier --version`
3. ✅ 測試配置載入：驗證 `.prettierrc.cjs` 可正常載入
4. ✅ 測試格式化功能：實際格式化檔案測試
5. ✅ 修正 ES Module 衝突：將 `.prettierrc.js` 改為 `.prettierrc.cjs`

---

## 🔍 安裝前後差異

### 安裝前 ❌

#### 1. **沒有統一的程式碼風格**
```typescript
// 不同開發者可能有不同的寫法
const name = 'John'  // 單引號
const age = "25"     // 雙引號
const city=`Taipei`  // 反引號
```

#### 2. **手動調整格式**
- 需要手動調整縮排
- 需要手動調整換行
- 需要手動統一引號風格
- 耗時且容易出錯

#### 3. **沒有格式檢查工具**
- 無法自動檢查程式碼格式
- 無法在 CI/CD 中檢查格式
- 團隊協作時容易產生格式衝突

#### 4. **Git 提交時格式混亂**
```diff
- 不同開發者提交的程式碼格式不一致
- Git diff 會顯示很多無意義的格式變更
- 程式碼審查時需要關注格式問題
```

---

### 安裝後 ✅

#### 1. **統一的程式碼風格**
```typescript
// 所有程式碼自動統一格式
const name = "John";  // 統一使用雙引號
const age = "25";     // 統一使用雙引號
const city = "Taipei"; // 統一使用雙引號
```

#### 2. **自動格式化**
- ✅ 一鍵格式化整個專案：`npm run format`
- ✅ 自動調整縮排、換行、引號
- ✅ 節省時間，減少錯誤

#### 3. **格式檢查工具**
- ✅ 檢查格式：`npm run format:check`
- ✅ 可在 CI/CD 中自動檢查
- ✅ 團隊協作時格式一致

#### 4. **Git 提交更乾淨**
```diff
+ 所有開發者提交的程式碼格式一致
+ Git diff 只顯示實際的邏輯變更
+ 程式碼審查時專注於邏輯而非格式
```

---

## 📊 具體差異對比

| 項目 | 安裝前 | 安裝後 |
|------|--------|--------|
| **程式碼風格** | 不統一，因人而異 | 統一，符合設定規範 |
| **格式化方式** | 手動調整 | 自動格式化 |
| **格式檢查** | 無工具 | 有檢查工具 |
| **團隊協作** | 容易產生格式衝突 | 格式一致，減少衝突 |
| **開發效率** | 需要手動調整格式 | 一鍵格式化，節省時間 |
| **Git 提交** | 格式混亂，diff 不清晰 | 格式統一，diff 清晰 |
| **CI/CD 整合** | 無法檢查格式 | 可整合格式檢查 |
| **配置檔案** | 無 | 有詳細註解的配置檔 |

---

## 🚀 使用方式

### 基本使用

#### 1. 格式化整個專案
```bash
npm run format
```
**效果：** 自動格式化 `src/` 目錄下所有符合條件的檔案

#### 2. 檢查格式（不修改檔案）
```bash
npm run format:check
```
**效果：** 檢查檔案格式，如果有不符合規範的檔案會列出清單

#### 3. 格式化特定檔案
```bash
npx prettier --write src/router/index.ts
```

#### 4. 檢查特定檔案格式
```bash
npx prettier --check src/router/index.ts
```

### 進階使用

#### 1. 格式化特定目錄
```bash
npx prettier --write "src/components/**/*.{vue,ts}"
```

#### 2. 查看格式化後的結果（不寫入檔案）
```bash
npx prettier src/router/index.ts
```

#### 3. 在編輯器中自動格式化
大多數編輯器（VS Code、WebStorm 等）支援 Prettier 擴充功能：
- 儲存時自動格式化
- 手動觸發格式化快捷鍵

---

## 📁 建立的檔案清單

```
vue-pos/
├── .prettierrc.cjs          # Prettier 配置檔案（含詳細中文註解）
├── .prettierignore          # Prettier 忽略檔案清單
└── package.json             # 已添加 format 和 format:check 腳本
```

---

## ⚙️ 主要配置選項說明

### 核心設定
- **`singleQuote: false`** - 使用雙引號
- **`semi: true`** - 語句結尾添加分號
- **`tabWidth: 2`** - 使用 2 個空格縮排
- **`printWidth: 100`** - 每行最大 100 字元
- **`trailingComma: "es5"`** - ES5 相容的尾隨逗號
- **`endOfLine: "lf"`** - 使用 LF 行尾序列（Mac/Linux 風格）

### Vue 特定設定
- **`vueIndentScriptAndStyle: false`** - Vue 檔案中不縮排 script 和 style 標籤內容
- **`plugins: ["prettier-plugin-vue"]`** - 啟用 Vue 檔案格式化支援

---

## ✅ 驗證安裝成功

執行以下命令確認安裝成功：

```bash
# 1. 檢查 Prettier 版本
npx prettier --version
# 應該顯示: 3.6.2

# 2. 檢查配置檔案是否被識別
npx prettier --find-config-path src/router/index.ts
# 應該顯示: .prettierrc.cjs

# 3. 測試格式化功能
npm run format:check
# 會列出不符合格式的檔案（這是正常的）
```

---

## 🎯 總結

### 安裝 Prettier 帶來的好處

1. ✅ **統一程式碼風格** - 整個專案使用一致的格式
2. ✅ **提高開發效率** - 自動格式化，無需手動調整
3. ✅ **減少團隊衝突** - 格式一致，減少 Git 衝突
4. ✅ **提升程式碼品質** - 專注於邏輯而非格式
5. ✅ **CI/CD 整合** - 可在自動化流程中檢查格式

### 下一步建議

1. 執行 `npm run format` 格式化現有程式碼
2. 在編輯器中安裝 Prettier 擴充功能
3. 設定編輯器在儲存時自動格式化
4. 在 Git hooks 或 CI/CD 中加入格式檢查

---

**建立日期：** 2024  
**最後更新：** 2024

