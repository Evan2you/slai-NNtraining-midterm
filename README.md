# SLAI NN Training · Midterm

手机和电脑适配的中英双语神经网络训练刷题网页。纯 HTML/CSS/JavaScript，无构建步骤，无 CDN，无后端，无登录。

## 使用

直接双击 `index.html`，也可以用静态服务器或 GitHub Pages 打开。题目、选项和讲解均支持中英切换。选择答案后立即判题；下一题由用户主动点击。支持章节和 Quiz 筛选、顺序练习、无重复的随机练习、错题复习、结果统计。

浏览器 localStorage 保存最近一次答题结果和当前练习位置。不同设备、浏览器和网站地址的进度不会自动同步；可通过页面的“导出进度 / 导入进度”合并记录。重新练习不删除历史结果；答对的错题从下一轮错题列表移除。

## GitHub Pages 发布

建议仓库名：`slai-NNtraining-midterm`，网页标题保留原名称。

1. 在 GitHub 创建该仓库。普通免费账号可使用公开仓库托管 Pages。
2. 将部署压缩包解压，把 `index.html`、`style.css`、`app.js`、`questions.js`、`.nojekyll` 和本说明上传到仓库根目录，提交到 `main`。不要只上传 ZIP，也不要让入口文件多嵌套一层文件夹。
3. 打开仓库 **Settings → Pages → Build and deployment**，Source 选择 **Deploy from a branch**，Branch 选择 **main** 和 **/(root)**，保存。
4. 等待 GitHub 部署成功，打开 Pages 页面提供的网址。手机、电脑均可访问该网址。

官方步骤：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

部署地址：`https://Evan2you.github.io/slai-NNtraining-midterm/`。

## 题库与勘误

共 122 题、119 道计分题，来源为用户提供的 13 份 Quiz PDF。保留章节、Quiz、原题号和来源文件名。中文由原文翻译；数学公式重新排版；解释补充必要推导。原 PDF 和课程全文不随网页上传。

|章节|题数|
|---|---:|
|1|25|
|2|21|
|3|18|
|4|17|
|5|17|
|6|15|
|7|9|

- Week 1 Quiz 2 Q3：原文“necessarily”与解释不完全一致；B 为原讲解意图，D 为严格字面解释，两者均接受。
- Week 1 Quiz 2 Q9：增大样本或重复划分减少抽样波动，但不保证泛化差距必定为正。
- Week 2 Quiz 1：标题写 12 题，正文仅 11 题，未凭空补题。Q4 按课程线性网络不显式写激活导数矩阵的约定判 B，并说明若 D_l=I 则等价。
- Week 2 Quiz 2 Q9：原文件重复上一题讲解，已修正为“不要求高斯分布”。
- Week 3 Quiz 1 Q2：Quiz 的 10 层与典型值 10⁻²⁷ 不一致；Lecture 3 课件对应的是 100 层。保留原题，解释修正，不计分。
- Week 3 Quiz 2 Q7–Q8：原文件明确未给答案。提供补充参考解释，不计分。
- Week 3 Quiz 2 Q9：保留原答案 A，并说明原解释提到未列入选项的“改变原最优解”问题。
- Week 5 Quiz 2 Q4：2ZZᵀ 是按输出行的 Hessian 块；完整向量化 Hessian 包含 Kronecker 恒等结构。
- Week 6 Quiz 2 Q8：原 A/B 实质重复，均接受。
- Week 7 Quiz 2：原文件仅 Q2–Q5，未补造已排除的 Q1。

## 开发验证

开发目录中的 `node test.cjs` 检查 122 道题的答案映射、双语字段、重复提交保护、进度恢复、语言切换、章节筛选、随机队列、错题移除、结果统计、不计分题和导入验证。`node --check app.js` 检查语法。

这些检查已通过。已在浏览器中检查桌面与窄屏布局、公式排版、答题与语言切换。复杂公式使用离线 MathML 排版，无需外部公式服务；窄屏中的长公式可横向滚动。

`questions.js` 是可直接维护的完整题库。`build_bank.py` 与 `repair_bank.py` 是本次原 PDF 文本整理工具；重新生成需保留工作区的 `tmp/quiz-text` 原始提取文件，依次执行两脚本，再运行 `node format_math.cjs` 和 `node enrich_explanations.cjs`。发布只需网页文件。

每题保留针对选项的讲解，并附双语专题复习卡：概念、原因、核心公式、实例、记忆要点和易错点。复习卡属于补充教学内容，不是原 Quiz 的逐字原文。
