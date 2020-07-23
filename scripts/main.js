const viewField = $("#viewField");

const autoButton = $("#autoButton");
const resetButton = $("#resetButton");

/** ボタンに関数を割り当てる */
function setButtonFunction(){
    autoButton.click(autoSolve);
    resetButton.click(resetDataMasu);
}

/** 実行 */

for(var i=0; i<81; i++){
    data[i] = new np(np_reset);
}

printMasu();
setButtonFunction();
$("#box0").focus();