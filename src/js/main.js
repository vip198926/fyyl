//=========================调试区开始====================================
// 初始化();
//
// var request = image.requestScreenCapture(10000,0);
// if (request){
//     toast("申请成功");
// }else {
//     toast("申请失败");
//     exit();
// }
//
// while(true) {
//     let sms = readResAutoImage("dragon.png");
//     let rest = image.findImageEx(sms, 1410, 790, 1450, 850, 1, 1);
//     logd(typeof (rest))
//     logd(rest);

// 初始化();
// 设置日志窗口(false);
// setLogText("双押:"+doubleBet+"运行模式:"+mode,"#ffffff",12)
// setLogText("双押:"+doubleBet+"运行模式:"+mode,"#ffffff",12)
// setLogText("双押:"+doubleBet+"运行模式:"+mode,"#ffffff",12)
// setLogText("双押:"+doubleBet+"运行模式:"+mode,"#00f000",12)
// sleep(10000)

// logd(threeConsecutive());
//
// exit();
//=========================调试区结束====================================



function sata() {
    初始化();
    设置日志窗口(false);
    networkVerification("fyyyrun")
    if (demo === 'true'){
        toast("演示模式：" + demo);
        mode ="演示"
        combatMode = false;
    }else if(combat === "true"){
        toast("实战模式：" + combat);
        mode = "实战"
        combatMode = true;
    }

    if(!debugMode){     //非演示模式
        tid =thread.execAsync(function() {
            msg();
            // while (true){
            //     sleep(5000);
            //     if(thread.isCancelled(tid)){
            //         break;
            //     }
            // }
        });
    }

    start()
}

sata();


