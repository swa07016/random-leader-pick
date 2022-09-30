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
    for(let i=0; i<players.length; i++) {
      if(i == randomIndex) {
        player.title = '😂';
      }  else {
        player.title = '👏';
      }
    }

    setTimeout(function () {
      const players = ScriptApp.players;
      players.forEach(function (player) {
        player.title = '';
      })
    }, 2500);

  }
});