// $(function() {
//     $("#anim").click(function() {
//         // 『jQuery』の代表的な処理1『アニメーション』
//         $(".box1").fadeOut();
//         $(".box1").fadeIn();
//     });
// });

$(function() {
    // 『colblink()』は、『jquery.colblink.js』で拡張したメソッド
    $("#target1").colblink(); // id『target1』の要素を色付き点滅
    $("#target3").colblink(); // id『target3』の要素を色付き点滅
});