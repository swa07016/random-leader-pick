/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";

ScriptApp.onJoinPlayer.Add(function () {
  ScriptApp.showCenterLabel(`조장을 뽑으려면 채팅에 LEADER를 입력하세요!`);
})

ScriptApp.onSay.Add(function (player, text) {
  if(text == 'LEADER') {
    const players = ScriptApp.players;
    const randomIndex = Math.floor(Math.random() * players.length);

    ScriptApp.showCenterLabel(`우리의 조장은 ${players[randomIndex].name}!!`);
  }
});