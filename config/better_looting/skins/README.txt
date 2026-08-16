===== Better Looting 自定义皮肤说明 =====

本文件夹用于存放悬浮窗物品行的自定义背景皮肤。

【目录结构】
每个皮肤是一个独立的子文件夹，例如：
  skins/
    我的皮肤/
      skin.json
      row.png
      row_selected.png

子文件夹里必须有 skin.json 才会被识别为皮肤。
文件夹名就是皮肤标识，可用中文/大写/空格，并作为默认显示名。

【贴图要求】
- 必须是正方形 PNG，边长为 16 的倍数（如 16x16、32x32、64x64）。
- 采用横向三段九宫格渲染：左右边框按比例保留，中段横向拉伸。
- row.png        普通行背景
- row_selected.png 选中行背景

【skin.json 字段】(全部可选，缺省走默认值)
- displayName        界面显示名，缺省用文件夹名
- normalTexture      普通行贴图文件名，缺省 row.png
- selectedTexture    选中行贴图文件名，缺省 row_selected.png
- textColorNormal    普通行文字颜色，#RRGGBB 或 #AARRGGBB
- textColorSelected  选中行文字颜色，#RRGGBB 或 #AARRGGBB
- rarityBarGroove    是否显示稀有度条凹槽(true/false)，缺省 false
- newLabelColor      NEW 标签文字颜色，#RRGGBB 或 #AARRGGBB

【JSON 范例】
{
  "displayName": "我的皮肤",
  "normalTexture": "row.png",
  "selectedTexture": "row_selected.png",
  "textColorNormal": "#5A3A1E",
  "textColorSelected": "#3A2410",
  "rarityBarGroove": true,
  "newLabelColor": "#C38935"
}

【使用方法】
1. 在本文件夹下新建你的皮肤文件夹，按上面结构放入 skin.json 和贴图。
2. 进入游戏，打开模组配置界面（每次打开都会重新扫描）。
3. 在"其它设置"里循环切换皮肤即可。
4. 若皮肤格式有误，会在聊天栏和配置界面顶部提示原因，并自动回退默认皮肤。
