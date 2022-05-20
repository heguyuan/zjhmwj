/* 代码整理：懒人之家 www.lanrenzhijia.com */



$(function () {

  menus()
  chanpanfenleiFun()

  var _userAgent = window.navigator.userAgent.toLowerCase();
  if (_userAgent.indexOf('android') < 0 && _userAgent.indexOf('iphone') < 0 && _userAgent.indexOf('ipad') < 0) {

    if ($.cookie("onlineSP") == null || $.cookie("onlineSP") == "0" || $.cookie("onlineSP") == "") {
      $('.onlineService').show();
      $('.box_os').hide();
    }
    else if ($.cookie("onlineSP") == "1") {
      $('.onlineService').hide();
      $('.box_os').show();
    }

  }
  else {
    $('.onlineService').show();
    $('.box_os').show();

  }

  $('.onlineService .ico_os').click(function () {
    $('.onlineService').hide();
    $('.box_os').show();
    $.cookie("onlineSP", "0", { expires: 1, path: "/", domain: "lanrenzhijia.com" });
  });
  $('.os_x').click(function () {
    $('.box_os').hide();
    $('.onlineService').show();
    $.cookie("onlineSP", "1", { expires: 2100000000, path: "/", domain: "lanrenzhijia.com" });
  });
  $boxOsFun = function () { var st = $(document).scrollTop(); if (!window.XMLHttpRequest) { $('.box_os').css('top', st + 44); $('.onlineService').css('top', st + 44); } };
  $(window).bind('scroll', $boxOsFun);
  $boxOsFun();

  var feedback_url = 'http://www.lanrenzhijia.com';

  $('.acbox .ico_pp').hover(function () {
    $(this).stop().animate({ height: '52px' }, 'fast');
  }, function () {
    $(this).stop().animate({ height: '33px' }, 'fast');
  }
  );
  $('.acbox .ico_gt').hover(function () {
    $(this).stop().animate({ height: '52px' }, 'fast');
  }, function () {
    $(this).stop().animate({ height: '33px' }, 'fast');
  }
  );

  $('.onlineService .ico_pp').hover(function () {
    $(this).stop().animate({ width: '87px' }, 'fast');
  }, function () {
    $(this).stop().animate({ width: '39px' }, 'fast');
  }
  );
  $('.onlineService .ico_gt').hover(function () {
    $(this).stop().animate({ width: '97px' }, 'fast');
  }, function () {
    $(this).stop().animate({ width: '39px' }, 'fast');
  }
  );

  $('.ico_gt').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1);
  })


  //分辨率
  if ($(window).width() < 1200 || screen.width < 1200) {
    $('.hydp950,.w_950,.sdmain,.main').css('overflow', 'hidden');
    $('.top_bg').css({ 'overflow': 'hidden', 'width': '950px', 'margin': '0 auto' });
    $('.db_bg2').addClass('db_bg2_s');
    $('.jstd_c .bg_l,.jstd_c .bg_r').css('display', 'none');
    $('#js_play .prev').css('left', '0');
    $('#js_play .next').css('right', '0');
    $('#videoplay .prev, #videoplay2 .prev').addClass('prev_s');
    $('#videoplay .next, #videoplay2 .next').addClass('next_s');
  } else {
    $('.hydp950,.w_950,.sdmain,.main').removeAttr('style');
    $('.top_bg').removeAttr('style');
    $('.db_bg2').removeClass('db_bg2_s');
    $('.jstd_c .bg_l,.jstd_c .bg_r').removeAttr('style');
    $('#js_play .prev').removeAttr('style');
    $('#js_play .next').removeAttr('style');
    $('#videoplay .prev, #videoplay2 .prev').removeClass('prev_s');
    $('#videoplay .next, #videoplay2 .next').removeClass('next_s');
  }

});




// --  产品列表
var chan_pin_map = new Map([
  ["1134", {
    "img": "53461.jpg",
    "name": "5346",
    "fen_lei": "88"
  }], //1134
  ["1135", {
    "img": "77421.jpg",
    "name": "7742",
    "fen_lei": "88"
  }], //1135
  ["1136", {
    "img": "79441.jpg",
    "name": "7944",
    "fen_lei": "88"
  }],//1136

  ["1137", {
    "img": "83491.jpg",
    "name": "8349",
    "fen_lei": "88"
  }],//1137
  ["1138", {
    "img": "84511.jpg",
    "name": "8451",
    "fen_lei": "88"
  }],//1138
  ["1139", {
    "img": "90461.jpg",
    "name": "9046",
    "fen_lei": "88"
  }],//1139
  ["1140", {
    "img": "11401.jpg",
    "name": "B款蒸汽炉",
    "fen_lei": "87"
  }],//1140
  ["1141", {
    "img": "11411.jpg",
    "name": "A款蒸汽炉（感应）",
    "fen_lei": "87"
  }],//1141
  ["1142", {
    "img": "0901.jpg",
    "name": "090",
    "fen_lei": "87"
  }],//1142
  ["1143", {
    "img": "11431.jpg",
    "name": "020A烤箱",
    "fen_lei": "87"
  }],//1143
  ["1144", {
    "img": "11441.jpg",
    "name": "JZ-D100-03酒红-黑-镜面",
    "fen_lei": "86"
  }],//1144
  ["1145", {
    "img": "11451.jpg",
    "name": "JZ-B100-01黑-红-镜面-黑金",
    "fen_lei": "85"
  }],//1145
  ["1446", {
    "img": "14461.jpg",
    "name": "JZ-B95-03红-黑-镜面",
    "fen_lei": "85"
  }],//1146
  ["1147", {
    "img": "11471.jpg",
    "name": "JZ-B90-05红-黑-镜面",
    "fen_lei": "85"
  }],//1147
  ["1148", {
    "img": "11481.jpg",
    "name": "JZ-C100-15红-黑-镜面",
    "fen_lei": "67"
  }],//1148
  ["1149", {
    "img": "11491.jpg",
    "name": "JZ-C100-13红-黑-镜面",
    "fen_lei": "67"
  }],//1149
  ["1150", {
    "img": "11501.jpg",
    "name": "JZ-C100-12红-黑-镜面",
    "fen_lei": "67"
  }],//1150
  ["1151", {
    "img": "11511.jpg",
    "name": "JZ-C95-10红-黑-镜面",
    "fen_lei": "67"
  }],//1151
  ["1152", {
    "img": "11521.jpg",
    "name": "JZ-C90-18黑色",
    "fen_lei": "67"
  }],//1152
  ["1153", {
    "img": "11531.jpg",
    "name": "JZ-C90-05红-黑-镜面",
    "fen_lei": "67"
  }],//1153
  ["1154", {
    "img": "11541.jpg",
    "name": "JZ-A90-20黑-红-镜面",
    "fen_lei": "84"
  }],//1154
  ["1155", {
    "img": "11551.jpg",
    "name": "JZ-A90-8新款黑-镜面",
    "fen_lei": "84"
  }],//1155
  ["1156", {
    "img": "11561.jpg",
    "name": "JZ-A90-5红-黑-镜面-气泡-黑花",
    "fen_lei": "84"
  }],//1156
  ["1157", {
    "img": "JZ-A100-X71.jpg",
    "name": "JZ-A100-X7",
    "fen_lei": "84"
  }],//1157
  ["1158", {
    "img": "JZ-A90-161.jpg",
    "name": "JZ-A90-16",
    "fen_lei": "84"
  }],//1158
  ["1159", {
    "img": "JZ-A90-121.jpg",
    "name": "JZ-A90-12",
    "fen_lei": "84"
  }],//1159
  ["1160", {
    "img": "JZ-A80-31.jpg",
    "name": "JZ-A80-3",
    "fen_lei": "84"
  }],//1160
  ["1161", {
    "img": "JZ-A75-O71.jpg",
    "name": "JZ-A75-O7",
    "fen_lei": "84"
  }],//1161
  ["1162", {
    "img": "CX-L91.jpg",
    "name": "CX-L9",
    "fen_lei": "65"
  }],//1162
  ["1163", {
    "img": "CX-L121.jpg",
    "name": "CX-L12",
    "fen_lei": "65"
  }],//1163
  ["1164", {
    "img": "CX-L111.jpg",
    "name": "CX-L11",
    "fen_lei": "65"
  }],//1164
  ["1165", {
    "img": "CX-L101.jpg",
    "name": "CX-L10",
    "fen_lei": "65"
  }],//1165
  ["1166", {
    "img": "CX-L71.jpg",
    "name": "CX-L7",
    "fen_lei": "65"
  }],//1166
  ["1167", {
    "img": "CX-L31.jpg",
    "name": "CX-L3",
    "fen_lei": "65"
  }],//1167
  ["1168", {
    "img": "CX-L21.jpg",
    "name": "CX-L2",
    "fen_lei": "65"
  }],//1168
  ["1169", {
    "img": "CX-L131.jpg",
    "name": "CX-L1",
    "fen_lei": "65"
  }],//1169
  ["1170", {
    "img": "JZ-CO91.jpg",
    "name": "JZ-CO9",
    "fen_lei": "64"
  }],//1170

  ["1171", {
    "img": "11711.jpg",
    "name": "JZ-CO8方太款",
    "fen_lei": "64"
  }],//1171
  ["1172", {
    "img": "JZ-CO21.jpg",
    "name": "JZ-CO2",
    "fen_lei": "64"
  }],//1172
  ["1173", {
    "img": "JZ-C251.jpg",
    "name": "JZ-C25",
    "fen_lei": "64"
  }],//1173
  ["1174", {
    "img": "11741.jpg",
    "name": "JZ-C23(陶瓷）",
    "fen_lei": "64"
  }],//1174
  ["1175", {
    "img": "11751.jpg",
    "name": "JZ-C22陶瓷",
    "fen_lei": "64"
  }],//1175
  ["1176", {
    "img": "11761.jpg",
    "name": "JZ-C21线外线",
    "fen_lei": "64"
  }],//1176
  ["1177", {
    "img": "JZ-C201.jpg",
    "name": "JZ-C20",
    "fen_lei": "64"
  }],//1177
  ["1178", {
    "img": "JZ-C191.jpg",
    "name": "JZ-C19",
    "fen_lei": "64"
  }],//1178
  ["1179", {
    "img": "JZ-C161.jpg",
    "name": "JZ-C16",
    "fen_lei": "64"
  }],//1179
  ["1180", {
    "img": "JZ-C151.jpg",
    "name": "JZ-C15",
    "fen_lei": "64"
  }],//1180
  ["1181", {
    "img": "JZ-C101.jpg",
    "name": "JZ-C10",
    "fen_lei": "64"
  }],//1181
  ["1182", {
    "img": "JZ-C071.jpg",
    "name": "JZ-C07",
    "fen_lei": "64"
  }],//1182
  ["1183", {
    "img": "JZ-C061.jpg",
    "name": "JZ-C06",
    "fen_lei": "64"
  }],//1183
  ["1184", {
    "img": "11841.jpg",
    "name": "JZ-C03一气一电",
    "fen_lei": "64"
  }],//1184
  ["1185", {
    "img": "CXW-238-A701.jpg",
    "name": "CXW-238-A70",
    "fen_lei": "63"
  }],//1185
  ["1186", {
    "img": "CXW-238-A691.jpg",
    "name": "CXW-238-A69",
    "fen_lei": "63"
  }],//1186
  ["1187", {
    "img": "CXW-238-A661.jpg",
    "name": "CXW-238-A66",
    "fen_lei": "63"
  }],//1187
  ["1188", {
    "img": "CXW-238-A651.jpg",
    "name": "CXW-238-A65",
    "fen_lei": "63"
  }],//1188
  ["1189", {
    "img": "CXW-238-A391.jpg",
    "name": "CXW-238-A39",
    "fen_lei": "63"
  }],//1189
  ["1190", {
    "img": "11901.jpg",
    "name": "CXW-238-A38双电机四风轮",
    "fen_lei": "63"
  }],//1190
  ["1191", {
    "img": "CXW-238-A161.jpg",
    "name": "CXW-238-A16",
    "fen_lei": "63"
  }],//1191
  ["1192", {
    "img": "CXW-238-A81.jpg",
    "name": "CXW-238-A8",
    "fen_lei": "63"
  }],//1192


  ["1193", {
    "img": "CXW-238-A61.jpg",
    "name": "CXW-238-A6",
    "fen_lei": "63"
  }],//1193
  ["1194", {
    "img": "CXW-238-70B1.jpg",
    "name": "CXW-238-70B",
    "fen_lei": "63"
  }],//1194
  ["1195", {
    "img": "CXW-218-A681.jpg",
    "name": "CXW-218-A68",
    "fen_lei": "63"
  }],//1195
  ["1196", {
    "img": "11961.jpg",
    "name": "CXW-218-A33智能自动升降",
    "fen_lei": "63"
  }],//1196
  ["1197", {
    "img": "11971.jpg",
    "name": "CXW-218-A32款",
    "fen_lei": "63"
  }],//1197
  ["1198", {
    "img": "CXW-218-A211.jpg",
    "name": "CXW-218-A21",
    "fen_lei": "63"
  }],//1198
  ["1199", {
    "img": "CXW-218-A21-11.jpg",
    "name": "CXW-218-A21-1",
    "fen_lei": "63"
  }],//1199
  ["1200", {
    "img": "CXW-218-A201.jpg",
    "name": "CXW-218-A20",
    "fen_lei": "63"
  }],//1200
  ["1201", {
    "img": "12011.jpg",
    "name": "CXW-218-A15双电机",
    "fen_lei": "63"
  }],//1201
  ["1202", {
    "img": "12021.jpg",
    "name": "CXW-218-A3-1蒸汽",
    "fen_lei": "63"
  }],//1202
  ["1203", {
    "img": "CXW-218-A22.jpg",
    "name": "CXW-218-A2",
    "fen_lei": "63"
  }],//1203
  ["1204", {
    "img": "12041.jpg",
    "name": "CXW-218-A1莲花",
    "fen_lei": "63"
  }],//1204
  ["1205", {
    "img": "2020726958426223.jpg",
    "name": "燃气灶系列",
    "fen_lei": "64"
  }],//1205
  ["1206", {
    "img": "202072610022767.jpg",
    "name": "油烟机系列",
    "fen_lei": "63"
  }],//1206
  ["1207", {
    "img": "2020726100182841.jpg",
    "name": "油烟机系列",
    "fen_lei": "63"
  }],//1207

  ["1208", {
    "img": "2020726100383779.jpg",
    "name": "油烟机系列",
    "fen_lei": "63"
  }],
  ["1209", {
    "img": "202072610247960.jpg",
    "name": "侧吸式集成灶",
    "fen_lei": "84"
  }],
  // ["1210", {
  //   "img": "2020726102316867.jpg",
  //   "name": "侧吸式集成灶",
  //   "fen_lei": "84"
  // }],
  ["1211", {
    "img": "2020726102445919.jpg",
    "name": "侧吸式集成灶",
    "fen_lei": "84"
  }],
  ["1212", {
    "img": "2020726102599253.jpg",
    "name": "侧吸式集成灶",
    "fen_lei": "84"
  }],
  ["1213", {
    "img": "19.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
  ["1214", {
    "img": "221.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
  ["1215", {
    "img": "31.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
  ["1216", {
    "img": "41.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
  // ["1217", {
  //   "img": "51.jpg",
  //   "name": "集成灶",
  //   "fen_lei": "84"
  // }],
  ["1218", {
    "img": "61.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
  ["1219", {
    "img": "71.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
  ["1220", {
    "img": "81.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
  ["1221", {
    "img": "91.jpg",
    "name": "集成水槽",
    "fen_lei": "88"
  }],
  ["1222", {
    "img": "101.jpg",
    "name": "集成水槽",
    "fen_lei": "88"
  }],
  ["1223", {
    "img": "111.jpg",
    "name": "集成水槽",
    "fen_lei": "88"
  }],
  ["1224", {
    "img": "121.jpg",
    "name": "油烟机",
    "fen_lei": "63"
  }],
  ["1225", {
    "img": "131.jpg",
    "name": "油烟机",
    "fen_lei": "63"
  }],
  ["1226", {
    "img": "141.jpg",
    "name": "油烟机",
    "fen_lei": "63"
  }],
  ["1227", {
    "img": "151.jpg",
    "name": "油烟机",
    "fen_lei": "63"
  }],
  ["1228", {
    "img": "161.jpg",
    "name": "煤气灶",
    "fen_lei": "64"
  }],
  ["1229", {
    "img": "171.jpg",
    "name": "煤气灶",
    "fen_lei": "64"
  }],
  ["1230", {
    "img": "1230.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
  ["1232", {
    "img": "1232.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
  ["1233", {
    "img": "1233.jpg",
    "name": "集成灶",
    "fen_lei": "84"
  }],
])


// ---  产品分类 ----- 
var chan_pin_fen_lei_map = new Map([
  ["63", {
    "fen_lei_id": "63",
    "chan_pin": ["1224", "1225", "1226", "1227", "1206", "1207", "1208", "1185", "1186", "1187", "1188", "1189"],
    "url": "products_63_1.html",
    "name": "天净系列 油烟机"

  }],
  ["64", {
    "fen_lei_id": "64",
    "chan_pin": ["1229", "1205", "1228", "1170", "1171", "1172", "1173", "1174", "1175", "1176", "1177", "1178"],
    "url": "products_64_1.html",
    "name": "天旺系列 燃气灶"
  }],
  ["65", {
    "fen_lei_id": "65",
    "chan_pin": ["1162", "1163", "1164", "1165", "1166", "1167", "1168", "1169"],
    "url": "products_65_1.html",
    "name": "天洁系列 消毒柜"
  }],

  ["84", {
    "fen_lei_id": "84",
    "chan_pin": ["1233","1232","1230","1214", "1215", "1216", "1218", "1219", "1220", "1209"],
    "url": "products_84_1.html",
    "name": "侧吸式集成灶"
  }],
  ["67", {
    "fen_lei_id": "67",
    "chan_pin": ["1148", "1149", "1150", "1151", "1152", "1153"],
    "url": "products_67_1.html",
    "name": "翻盖式集成灶"
  }],
  ["85", {
    "fen_lei_id": "85",
    "chan_pin": ["1145", "1146", "1147"],
    "url": "products_85_1.html",
    "name": "环吸式集成灶"
  }],
  ["86", {
    "fen_lei_id": "86",
    "chan_pin": ["1144"],
    "url": "products_86_1.html",
    "name": "三面吸集成灶"
  }],
  ["87", {
    "fen_lei_id": "87",
    "chan_pin": ["1140", "1141", "1142", "1143"],
    "url": "products_87_1.html",
    "name": "烤箱、电蒸炉"
  }],
  ["88", {
    "fen_lei_id": "88",
    "chan_pin": ["1221", "1222", "1223", "1134", "1135", "1136", "1137", "1138", "1139"],
    "url": "products_88_1.html",
    "name": "水槽"
  }],
]);


function chanpanfenleiFun() {
  // $("#chan_pin_fen_lei").append(
    let chan_pin_fen_lei_html = '<table width="252" border="0" cellspacing="0" cellpadding="0" >' +
    '<tr>' +
    '  <td><img src="static/picture/list.jpg" width="252" height="34"></td>' +
    '</tr>' +
    '</table>'
    // )

  chan_pin_fen_lei_map.forEach(function (cpfl, key) {
    // $("#chan_pin_fen_lei").append(
      chan_pin_fen_lei_html += '<table width="214" border="0" cellspacing="0" cellpadding="0">' +
      '   <tr>' +
      '     <td height="32" valign="middle" background="static/image/listbg.jpg">' +
      '       <table width="214" border="0" cellspacing="0" cellpadding="0">' +
      '         <tr>' +
      '           <td width="42"></td>' +
      '           <td width="172" align="left" class="more"><a href="products.html?id=' + key + '" target="">' + cpfl.name + '</a></td>' +
      '         </tr>' +
      '       </table>' +
      '     </td>' +
      '   </tr>' +
      ' </table>' +
      '  <table width="214" border="0" cellspacing="0" cellpadding="0">' +
      '     <tr>' +
      '       <td height="8"></td>' +
      '     </tr>' +
      '   </table>'
      // )
  });

  // $("#chan_pin_fen_lei").append(
    chan_pin_fen_lei_html +='<table width="252" border="0" cellspacing="0" cellpadding="0">' +
    '	<tr>' +
    '	  <td height="12"></td>' +
    '	</tr>' +
    '  </table>' +
    '  <table width="252" border="0" cellspacing="0" cellpadding="0">' +
    '	<tr>' +
    '	  <td height="12" bgcolor="#000000">&nbsp;</td>' +
    '	</tr>' +
    '  </table>' +
    '  <table width="214" border="0" cellspacing="0" cellpadding="0">' +
    '	<tr>' +
    '	  <td height="32" align="left" class="bottom_link1">联系我们</td>' +
    '	</tr>' +
    '  </table>' +
    '  <table width="214" border="0" cellspacing="0" cellpadding="0">' +
    '	<tr>' +
    '	  <td height="12" align="left" valign="top" class="bottom_link"><strong>驻温办事处：</strong></td>' +
    '	</tr>' +
    '  </table>' +
    '  <table width="214" border="0" cellspacing="0" cellpadding="0">' +
    '	<tr>' +
    '	  <td height="12" align="left" valign="top" class="more"> 瑞安五洲国际商贸城7幢4楼<br>' +
    '		联系人：金珍锁 13958883862<br>' +
    '		传真：0577-66800756<br>' +
    '		微信号：hm18606638977 <br>' +
    '		邮箱：<a href="mailto:1612229263@qq.com">1612229263@qq.com<br></a>' +
    '		地址：浙江省嵊州市经济开发区仙湖路406号<br>' +
    '		传真：0575-83020036<br>' +
    '		招商部：13075780288 18606638977<br>' +
    '		网址：www.zjhmwj.com<br>' +
    '		全国服务热线：400-870-8977</td>' +
    '	</tr>' +
    '  </table>' +
    '  <table width="214" border="0" cellspacing="0" cellpadding="0">' +
    '	<tr>' +
    '	  <td height="15"></td>' +
    '	</tr>' +
    '  </table>'
    // )

    $("#chan_pin_fen_lei").html(chan_pin_fen_lei_html)
}

function menus() {
  $(".menu").html(
    '<ul>' +
    '<li><a href="index.html">网站首页</a></li>' +
    '<li><a href="us_8.html">企业简介</a></li>' +
    '<li><a href="products.html">产品中心</a></li>' +
    '<li><a href="sample_1.html">荣誉资质</a></li>' +
    '<li><a href="news_1.html">新闻动态</a> </li>' +
    '<li><a href="us_24.html">销售网络</a> </li>' +
    '<li><a href="feedback.html">信息反馈</a></li>' +
    '<li><a href="us_13.html">联系我们</a> </li>' +
    '</ul>')
}
