/*==========================================================================
 NLM_BackSpriteColor.js
----------------------------------------------------------------------------
 (C)2026 NoLimits
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php
----------------------------------------------------------------------------
 Version
 1.0.0  2026/07/11 初稿
============================================================================*/

/*:
 * @target MZ
 * @plugindesc 選択項目の背景色プラグイン
 * @author ノリミツ (NoLimits)
 * @url https://github.com/nolimits-tukool
 * 
 * @param itemBackColor1
 * @text 背景色1
 * @desc 選択項目背景色1（スプライト上側）
 * 
 * @param red1
 * @parent itemBackColor1
 * @text 色1_Red
 * @desc 選択項目背景色1（スプライト上側）の「赤」を変更（0-255）（デフォルト：32）
 * @type number
 * @max 255
 * @default 32
 * 
 * @param green1
 * @parent itemBackColor1
 * @text 色1_Green
 * @desc 選択項目背景色1（スプライト上側）の「緑」を変更（0-255）（デフォルト：180、ツクールデフォ：32）
 * @type number
 * @max 255
 * @default 180
 * 
 * @param blue1
 * @parent itemBackColor1
 * @text 色1_Blue
 * @desc 選択項目背景色1（スプライト上側）の「青」を変更（0-255）（デフォルト：255、ツクールデフォ：32）
 * @type number
 * @max 255
 * @default 255
 * 
 * @param alpha1
 * @parent itemBackColor1
 * @text 色1_Alpha
 * @desc 選択項目背景色1（スプライト上側）のアルファ（不透明度）％を変更（0-100）(0だと消去、100だと不透明、デフォルト：50)
 * @type number
 * @max 100
 * @default 50
 * 
 * @param itemBackColor2
 * @text 背景色2
 * @desc 選択項目背景色2（スプライト下側）　　　　　　　　　　　（均一にしたい場合は背景色1と同じ値にする）
 * 
 * @param red2
 * @parent itemBackColor2
 * @text 色2_Red
 * @desc 選択項目背景色2（スプライト下側）の「赤」を変更（0-255）（デフォルト：0）
 * @type number
 * @max 255
 * @default 0
 * 
 * @param green2
 * @parent itemBackColor2
 * @text 色2_Green
 * @desc 選択項目背景色2（スプライト下側）の「緑」を変更（0-255）（デフォルト：0）
 * @type number
 * @max 255
 * @default 0
 * 
 * @param blue2
 * @parent itemBackColor2
 * @text 色2_Blue
 * @desc 選択項目背景色2（スプライト下側）の「青」を変更（0-255）（デフォルト：0）
 * @type number
 * @max 255
 * @default 0
 * 
 * @param alpha2
 * @parent itemBackColor2
 * @text 色2_Alpha
 * @desc 選択項目背景色2（スプライト下側）のアルファ（不透明度）％を変更（0-100）(0だと消去、100だと不透明、デフォルト：50)
 * @type number
 * @max 100
 * @default 50
 * 
 * @help
 * 
 * 【RPGツクールMZ専用プラグイン】（v1.0.0）
 * 　MZ特有の選択項目ごとの黒い背景スプライト色（itemBackColor）をパラメータで
 * 自由な色に変更します
 * 　背景色1（上側）と背景色2（下側）のグラデーション表示となるため、均一な色に
 * したい場合は、1と2の色を同じ値にして下さい
 * 
 * 　背景スプライト自体を消去したい場合は、1と2の両方の「Alpha」を「0」に設定して
 * 下さい
 * 
 * プラグインコマンドはありません
 * 利用規約はMITライセンスの通りです
 */

(() => {
    "use strict";

    const pluginName = "NLM_BackSpriteColor";
    const NBSCparam  = PluginManager.parameters(pluginName);

    ColorManager.itemBackColor1 = function() {
        return "rgba(" + NBSCparam.red1 + "," + NBSCparam.green1 + ","
                + NBSCparam.blue1 + "," + NBSCparam.alpha1 / 100 + ")";
    };

    ColorManager.itemBackColor2 = function() {
        return "rgba(" + NBSCparam.red2 + "," + NBSCparam.green2 + ","
                + NBSCparam.blue2 + "," + NBSCparam.alpha2 / 100 + ")";
    };
})();