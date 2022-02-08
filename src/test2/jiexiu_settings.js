let data = [
  {"ID":"HS1","Name":"首站换执站1","Parent_ID":"P46","Type":"H","Length":"10","Diameter":"500","Cid":"1","Circuit":"S2/P92/HS1","Standard_Uid":"sm_a0223d12-469c-42e5-91ff-c2308469c0e7","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H1","Name":"六中换热站","Parent_ID":"P94","Type":"H","Length":"586","Diameter":"250","Cid":"2","Parent_V_ID":"HD","Circuit":"H3/P2/P1-A/P1/P94/H1","Standard_Uid":"b42529ad-1e38-44ba-a970-2dffaac0e989","Parent_Tree":"HD","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H2","Name":"金华苑换热站","Parent_ID":"P1","Type":"H","Length":"276","Diameter":"250","Cid":"2","Parent_V_ID":"HD","Circuit":"H2/P1/P94/H1","Standard_Uid":"266cf4b6-4028-4b75-9d48-251aa1ed811f","Parent_Tree":"HD","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H3","Name":"御龙湾换热站","Parent_ID":"P2","Type":"H","Length":"178","Diameter":"250","Cid":"2","Parent_V_ID":"HD","Circuit":"H3/P2/P1-A/P1/H2","Standard_Uid":"a3a6ca91-913c-45ac-bd3e-71fbb3c6c402","Parent_Tree":"HD","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H4","Name":"闫冀堡树换热站","Parent_ID":"P3","Type":"H","Length":"305","Diameter":"250","Cid":"2","Parent_V_ID":"HD","Circuit":"H7/P4/P5/P3/H4","Standard_Uid":"f30b9873-3cc4-4de2-afd7-20938b2e05fd","Parent_Tree":"HD","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H5","Name":"棚户区B区换热站","Parent_ID":"P82","Type":"H","Length":"110","Diameter":"250","Cid":"1","Circuit":"H6/P82/H5","Standard_Uid":"4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H6","Name":"棚户区一期(沉陷区)换热站","Parent_ID":"P82","Type":"H","Length":"112","Diameter":"250","Cid":"1","Circuit":"H7/P4/P82/H6","Standard_Uid":"ce01bdbc-5e43-44b7-b6fc-2576732455d2","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H7","Name":"安益换热站","Parent_ID":"P4","Type":"H","Length":"54","Diameter":"250","Cid":"1","Circuit":"H8/P6/P5/P4/H7","Standard_Uid":"73b46daf-d42d-48c3-9488-2cee279fec41","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H8","Name":"梁吉村换热站","Parent_ID":"P6","Type":"H","Length":"173","Diameter":"250","Cid":"1","Circuit":"H19/P7/P6/H8","Standard_Uid":"46104474-a8e5-4b32-b69f-f8758774b784","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H9","Name":"绿都二期换热站","Parent_ID":"P7","Type":"H","Length":"382","Diameter":"250","Cid":"1","Circuit":"H10/P8/P7/H9","Standard_Uid":"409e2b31-8d6d-4733-8004-6089a5dda855","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H10","Name":"梁吉村东换热站","Parent_ID":"P8","Type":"H","Length":"220","Diameter":"250","Cid":"1","Circuit":"H11/P9/P8/H10","Standard_Uid":"4d94f835-7c59-4ad0-a39d-2a90f1f80d79","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H11","Name":"李家堡纬四路经适房","Parent_ID":"P9","Type":"H","Length":"39","Diameter":"250","Cid":"1","Circuit":"H12/P11/P10/P9/H11","Standard_Uid":"ac0d9010-bba2-4d53-91b3-029ae5207345","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H12","Name":"赵家堡村换热站","Parent_ID":"P11","Type":"H","Length":"165","Diameter":"250","Cid":"2","Parent_V_ID":"HC","Circuit":"H13/P12/P11/H12","Standard_Uid":"ab7885ae-099d-4b00-a3ae-19897462f77a","Parent_Tree":"HC","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H13","Name":"李家堡村换热站(纬三路)","Parent_ID":"P12","Type":"H","Length":"259","Diameter":"250","Cid":"2","Parent_V_ID":"HC","Circuit":"H13/P12/P11/H12","Standard_Uid":"e1f35436-a1ae-41d0-bd29-b893afd318f2","Parent_Tree":"HC","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H15","Name":"韩屯村南换热站","Parent_ID":"P14","Type":"H","Length":"25","Diameter":"250","Cid":"2","Parent_V_ID":"HC","Circuit":"H15/P14/P13/P12/H13","Standard_Uid":"096715ab-702c-44b1-8989-0317178c48f1","Parent_Tree":"HC","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H16","Name":"韩屯村北换热站","Parent_ID":"P14","Type":"H","Length":"330","Diameter":"250","Cid":"2","Parent_V_ID":"HC","Circuit":"H16/P14/H15","Standard_Uid":"747ed9de-4caa-494e-aa1d-8008d501f8e0","Parent_Tree":"HC","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H17","Name":"亚泰苑换热站","Parent_ID":"P15","Type":"H","Length":"32","Diameter":"300","Cid":"1","Circuit":"H18/P16/P15/H17","Standard_Uid":"ef1757e3-06cd-43b1-8cc3-d088b50065e7","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H18","Name":"会计事务所换热站","Parent_ID":"P17","Type":"H","Length":"50","Diameter":"250","Cid":"2","Parent_V_ID":"HB","Circuit":"H21/P20/P19/P16/P17/H18","Standard_Uid":"0a3e11a5-dca8-461f-b168-7ca7c2aa3122","Parent_Tree":"HB","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H19","Name":"嘉和园换热站","Parent_ID":"P18","Type":"H","Length":"214","Diameter":"250","Cid":"2","Parent_V_ID":"HB","Circuit":"H19/P17/H18","Standard_Uid":"441aabd9-43a9-4395-b596-f94ee371c9a5","Parent_Tree":"HB","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H20","Name":"安居苑换热站","Parent_ID":"P18","Type":"H","Length":"480","Diameter":"250","Cid":"2","Parent_V_ID":"HB","Circuit":"H20/P18/H19","Standard_Uid":"a58ad4ff-7488-44de-aeda-7056c6bb667a","Parent_Tree":"HB","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H21","Name":"安泰换热站","Parent_ID":"P20","Type":"H","Length":"155","Diameter":"250","Cid":"2","Parent_V_ID":"HA","Circuit":"H26/P24/P19/H21","Standard_Uid":"c5b9bb35-6deb-4066-b638-df1920064a40","Parent_Tree":"HA","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H22","Name":"安康嘉园换热站","Parent_ID":"P21","Type":"H","Length":"52","Diameter":"250","Cid":"2","Parent_V_ID":"HA","Circuit":"H22/P20/H21","Standard_Uid":"0946f809-6e40-4d0f-bd98-032ce57b105d","Parent_Tree":"HA","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H23","Name":"上站村换热站","Parent_ID":"P22","Type":"H","Length":"500","Diameter":"250","Cid":"2","Parent_V_ID":"HA","Circuit":"H23/P21/H22","Standard_Uid":"cc36c170-a62b-4d58-a53d-df4e8b628809","Parent_Tree":"HA","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H24","Name":"顺康换热站","Parent_ID":"P23","Type":"H","Length":"12","Diameter":"250","Cid":"2","Parent_V_ID":"HA","Circuit":"H24/P22/H23","Standard_Uid":"7117c79a-b3b9-450a-8b82-fbbf3af271da","Parent_Tree":"HA","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H25","Name":"公安局换热站","Parent_ID":"P23","Type":"H","Length":"830","Diameter":"150","Cid":"2","Parent_V_ID":"HA","Circuit":"H25/P23/H24","Standard_Uid":"fe5e3396-9059-417c-88d7-4aa6448c641e","Parent_Tree":"HA","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H26","Name":"蓉和菀换热站","Parent_ID":"P24","Type":"H","Length":"86","Diameter":"250","Cid":"1","Circuit":"H27/P25/P24/H26","Standard_Uid":"ee8daff2-5a52-443d-bfb3-6b9786b91894","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H27","Name":"气象局换热站","Parent_ID":"P25","Type":"H","Length":"33","Diameter":"250","Cid":"1","Circuit":"H28_H/PH28/P38/P25/H27","Standard_Uid":"e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H28_H","Name":"嘉欣苑高区换热站","Parent_ID":"PH28","Type":"H","Length":"1","Diameter":"250","Cid":"1","Circuit":"H29/P39/P38/PH28/H28_H","Standard_Uid":"b15bb406-e07f-41ef-9994-9d94acbad115","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H28_M","Name":"嘉欣苑中区换热站","Parent_ID":"PH28","Type":"H","Length":"1","Diameter":"250","Cid":"1","Circuit":"H28_H/PH28/H28_M","Standard_Uid":"7a7fe618-214c-477d-bcae-1fd003fd47a0","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H28_L","Name":"嘉欣苑低区换热站","Parent_ID":"PH28","Type":"H","Length":"1","Diameter":"250","Cid":"1","Circuit":"H28_M/PH28/H28_L","Standard_Uid":"18fe049d-76ee-40f9-b0a9-00a47f2e1fd3","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H29","Name":"三道河(信河苑)换热站","Parent_ID":"P39","Type":"H","Length":"165","Diameter":"250","Cid":"1","Circuit":"H31/P41/P89/P40/P39/H29","Standard_Uid":"4f1e3458-8f71-4544-ad28-368a35bf55d2","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H31","Name":"宋古换热站","Parent_ID":"P41","Type":"H","Length":"25","Diameter":"250","Cid":"1","Circuit":"H34/P44/P42/P41/H31","Standard_Uid":"151f37ea-b0cf-4d33-8c23-8ecf8a4950dd","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H33","Name":"宋古村东换热站","Parent_ID":"P43","Type":"H","Length":"490","Diameter":"250","Cid":"2","Parent_V_ID":"HJ","Circuit":"H33/P43/P91-A/P91/H105","Standard_Uid":"b479cee0-f702-462c-afcc-dde60e1dae26","Parent_Tree":"HJ","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H34","Name":"宋古驾校换热站","Parent_ID":"P44","Type":"H","Length":"47","Diameter":"200","Cid":"1","Circuit":"H35/P45/P44/H34","Standard_Uid":"38d25e5f-37c9-472d-9a91-ddb7ae0229ee","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H35","Name":"马女村换热站","Parent_ID":"P45","Type":"H","Length":"197","Diameter":"250","Cid":"1","Circuit":"HS1/P46/P45/H35","Standard_Uid":"7a6c83a1-6668-45a8-994c-98ccc523fc85","Parent_Tree":"S2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H36","Name":"绵山一中换热站","Parent_ID":"P57","Type":"H","Length":"26","Diameter":"250","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H38/P56/P110/P57/H36","Standard_Uid":"94768ab2-55bd-44e7-a66f-3bad8e7ca0cd","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H37","Name":"南靳屯村换热站","Parent_ID":"P57","Type":"H","Length":"540","Diameter":"150","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H37/P57/H36","Standard_Uid":"c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H38","Name":"交警队换热站","Parent_ID":"P56","Type":"H","Length":"75","Diameter":"250","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H39/P108/P55/P56/H38","Standard_Uid":"a274d704-5bbd-498d-8c3b-f34d0c94a312","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H39","Name":"后党峪小区换热站","Parent_ID":"P108","Type":"H","Length":"47","Diameter":"250","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H40/P54/P55/P108/H39","Standard_Uid":"5780ca0f-8314-4ccc-adc5-6aae77a96678","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H40","Name":"粮食局直属库换热站","Parent_ID":"P54","Type":"H","Length":"90","Diameter":"250","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H41/P53/P54/H40","Standard_Uid":"2d69300e-c87b-41c9-af27-9db83c13124a","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H41","Name":"东南办事处换热站","Parent_ID":"P53","Type":"H","Length":"179","Diameter":"250","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H42/P52/P53/H41","Standard_Uid":"be18e6c9-f444-45df-afb0-f97ba60d8021","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H42","Name":"定阳路南迎翠街换热站","Parent_ID":"P52","Type":"H","Length":"150","Diameter":"250","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H43/P51/P52/H42","Standard_Uid":"75ba66df-ed3f-41ae-9a8f-67986595172c","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H43","Name":"石油公司换热站","Parent_ID":"P51","Type":"H","Length":"228","Diameter":"250","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H44/P50/P49/P51/H43","Standard_Uid":"500deff6-cd87-44fb-86e6-c1fc418afb30","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H44","Name":"电碳厂（一区）换热站","Parent_ID":"P50","Type":"H","Length":"4","Diameter":"250","Cid":"3","Parent_V_ID":"HI-2","Circuit":"H46/P48/P49/P50/H44","Standard_Uid":"dfaa38e4-b56e-408f-8eeb-cf62044ad4e5","Parent_Tree":"HI-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H45","Name":"石河村换热站","Parent_ID":"P50","Type":"H","Length":"590","Diameter":"250","Cid":"3","Parent_V_ID":"HI-2","Circuit":"H45/P50/H44","Standard_Uid":"b6f29c99-45ab-45f6-a96d-35043e596ebf","Parent_Tree":"HI-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H46","Name":"电杆厂换热站","Parent_ID":"P48","Type":"H","Length":"205","Diameter":"250","Cid":"3","Parent_V_ID":"HI-1","Circuit":"H47/P47/P48/H46","Standard_Uid":"f4f44852-3895-4138-a860-fadf602486b7","Parent_Tree":"HI-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H47","Name":"朝阳路换热站","Parent_ID":"P47","Type":"H","Length":"224","Diameter":"250","Cid":"3","Parent_V_ID":"HI-1","Circuit":"HS1/P92/P46/P47/H47","Standard_Uid":"6e704d46-8f69-4a08-a2e9-54878ac543e9","Parent_Tree":"HI-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H48","Name":"永康换热站","Parent_ID":"P58","Type":"H","Length":"270","Diameter":"250","Cid":"1","Circuit":"S1/P58/H48","Standard_Uid":"f0468692-ae50-44a0-a0c5-3f6aec9d7f27","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H49","Name":"顺城关换热站","Parent_ID":"P26","Type":"H","Length":"877","Diameter":"250","Cid":"2","Parent_V_ID":"HH","Circuit":"H48/P58/P27/P26/H48","Standard_Uid":"324f589d-f646-446b-98c2-c2aca2ee97fc","Parent_Tree":"HH","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H50","Name":"彦泰换热站","Parent_ID":"P30","Type":"H","Length":"75","Diameter":"250","Cid":"2","Parent_V_ID":"HH","Circuit":"H49/P26/P30/H50","Standard_Uid":"32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b","Parent_Tree":"HH","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H51","Name":"介休一中换热站","Parent_ID":"H51-A","Type":"H","Length":"814","Diameter":"250","Cid":"3","Parent_V_ID":"HH-1","Circuit":"H51/H51-A/H51-B/H51-C/P28/P112/H52","Standard_Uid":"9dee2c27-b1c6-4950-ba24-d9408fa50366","Parent_Tree":"HH-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H52","Name":"泓达小区换热站","Parent_ID":"P112","Type":"H","Length":"1","Diameter":"250","Cid":"3","Parent_V_ID":"HH-1","Circuit":"H50/P30/P29/P28/P112/H52","Standard_Uid":"f7cd7edf-3513-445e-b072-6688f22889f0","Parent_Tree":"HH-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H53_H","Name":"二中C区（高区）换热站","Parent_ID":"PH53","Type":"H","Length":"1","Diameter":"250","Cid":"3","Parent_V_ID":"HH-2","Circuit":"H53_H/PH53/H53_L","Standard_Uid":"ec327a73-703f-4b7d-a4db-b9dc7d7a007c","Parent_Tree":"HH-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H53_L","Name":"二中（低区）换热站","Parent_ID":"PH53","Type":"H","Length":"1","Diameter":"250","Cid":"3","Parent_V_ID":"HH-2","Circuit":"H52/P112/P28/P29/P31/PH53/H53_L","Standard_Uid":"7c991498-0bbe-44ea-8462-86ad11cccd61","Parent_Tree":"HH-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H54","Name":"馨园小区换热站","Parent_ID":"P33","Type":"H","Length":"215","Diameter":"300","Cid":"3","Parent_V_ID":"HH-2","Circuit":"H54/P33/H55","Standard_Uid":"88a89d45-0831-4c06-81ae-9033440f9e0d","Parent_Tree":"HH-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H55","Name":"邮政局换热站","Parent_ID":"P33","Type":"H","Length":"295","Diameter":"300","Cid":"3","Parent_V_ID":"HH-2","Circuit":"H53_L/PH53/P31/P32/P33/H55","Standard_Uid":"4ffcdaed-d332-498d-8309-e0a26341ca46","Parent_Tree":"HH-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H56","Name":"盛华丽苑换热站","Parent_ID":"P35","Type":"H","Length":"204","Diameter":"250","Cid":"3","Parent_V_ID":"HH-2","Circuit":"H56/P35/H57","Standard_Uid":"4fdfa4cf-3d74-47a7-a327-d90976e19af9","Parent_Tree":"HH-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H57","Name":"人民医院换热站","Parent_ID":"P35","Type":"H","Length":"19","Diameter":"250","Cid":"3","Parent_V_ID":"HH-2","Circuit":"H55/P33/P32/P34/P35/H57","Standard_Uid":"dc3f2349-6bbc-4161-ac54-89de73ba2999","Parent_Tree":"HH-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H58","Name":"环保局换热站","Parent_ID":"P36","Type":"H","Length":"145","Diameter":"250","Cid":"3","Parent_V_ID":"HH-2","Circuit":"H57/P35/P34/P36/H58","Standard_Uid":"9f34e840-dd46-4ba8-83c2-22f0a9df2205","Parent_Tree":"HH-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H59","Name":"城建局换热站","Parent_ID":"P37","Type":"H","Length":"129","Diameter":"250","Cid":"3","Parent_V_ID":"HH-2","Circuit":"H58/P36/P37/H59","Standard_Uid":"80c1ed83-8d91-42e9-bfa7-97ab229587c3","Parent_Tree":"HH-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H60","Name":"北坛小学换热站","Parent_ID":"P37","Type":"H","Length":"287","Diameter":"250","Cid":"3","Parent_V_ID":"HH-2","Circuit":"H59/P37/H60","Standard_Uid":"0054fd1f-7df7-4c0f-b788-40bae223920c","Parent_Tree":"HH-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H61","Name":"药材公司换热站","Parent_ID":"P60","Type":"H","Length":"32","Diameter":"250","Cid":"2","Parent_V_ID":"HG","Circuit":"H49/P26/P27/P59/P60/H61","Standard_Uid":"19ed6586-2e9b-47c6-bb36-76c1fa54d4e3","Parent_Tree":"HG","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H62","Name":"城关一院换热站","Parent_ID":"P61","Type":"H","Length":"36","Diameter":"250","Cid":"2","Parent_V_ID":"HG","Circuit":"H61/P60/P61/H62","Standard_Uid":"8f8ba1df-0fc1-42ac-aa10-f874f9d168eb","Parent_Tree":"HG","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H63","Name":"秀南怡苑换热站","Parent_ID":"P62","Type":"H","Length":"294","Diameter":"250","Cid":"2","Parent_V_ID":"HG","Circuit":"H62/P61/P62/H63","Standard_Uid":"08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2","Parent_Tree":"HG","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H64","Name":"物资机关换热站","Parent_ID":"P63","Type":"H","Length":"145","Diameter":"250","Cid":"2","Parent_V_ID":"HG","Circuit":"H63/P62/P63/H64","Standard_Uid":"fb8877c7-ec5c-46d2-91af-dde97eb81ef2","Parent_Tree":"HG","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H65","Name":"中仁(成功)热站","Parent_ID":"P64","Type":"H","Length":"92","Diameter":"250","Cid":"2","Parent_V_ID":"HG","Circuit":"H64/P63/P64/H65","Standard_Uid":"246fa455-8dcc-4cbe-8286-26439feb7d7a","Parent_Tree":"HG","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H66","Name":"一品天下换热站","Parent_ID":"P65","Type":"H","Length":"465","Diameter":"250","Cid":"2","Parent_V_ID":"HG","Circuit":"H65/P64/P65/H66","Standard_Uid":"13565321-edf0-4c73-a6fd-b96db89be16f","Parent_Tree":"HG","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H67","Name":"矿务局供应总库换热站","Parent_ID":"P66","Type":"H","Length":"38","Diameter":"250","Cid":"2","Parent_V_ID":"HG","Circuit":"H66/P65/P66/H67","Standard_Uid":"92d56709-b24e-4bcd-87a8-d21224221cf7","Parent_Tree":"HG","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H68","Name":"铁亮大厦(铁南)换热站","Parent_ID":"P68","Type":"H","Length":"212","Diameter":"250","Cid":"3","Parent_V_ID":"HG-1","Circuit":"H67/P66/P67/P68/H68","Standard_Uid":"3b4ec881-6dfa-496c-80c0-d614d40fb4c7","Parent_Tree":"HG-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H69","Name":"车站二区(和谐苑)换热站","Parent_ID":"P68","Type":"H","Length":"240","Diameter":"250","Cid":"3","Parent_V_ID":"HG-1","Circuit":"H68/P68/H69","Standard_Uid":"2929b3ad-9170-45be-bc14-77ad3f0d656b","Parent_Tree":"HG-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H70","Name":"二运换热站","Parent_ID":"P69","Type":"H","Length":"145","Diameter":"250","Cid":"3","Parent_V_ID":"HG-2","Circuit":"H68/P68/P67/P69/H70","Standard_Uid":"05a5d05e-fc3d-4557-afba-dceffc0bb5f1","Parent_Tree":"HG-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H71","Name":"矿务局医院换热站","Parent_ID":"P70","Type":"H","Length":"133","Diameter":"250","Cid":"3","Parent_V_ID":"HG-2","Circuit":"H70/P69/P70","Standard_Uid":"bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033","Parent_Tree":"HG-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H72","Name":"富康苑换热站","Parent_ID":"P70","Type":"H","Length":"167","Diameter":"250","Cid":"3","Parent_V_ID":"HG-2","Circuit":"H71/P70/H72","Standard_Uid":"33bbc8b8-e2d3-4e42-807d-ea8513621642","Parent_Tree":"HG-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H73","Name":"电碳厂换热站(宿舍)","Parent_ID":"P71","Type":"H","Length":"90","Diameter":"250","Cid":"1","Circuit":"H61/P60/P59/P71/H73","Standard_Uid":"e8c17621-8906-451c-b196-26e4cfe5fe0f","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H74","Name":"城隍庙换热站","Parent_ID":"P72","Type":"H","Length":"314","Diameter":"250","Cid":"1","Circuit":"H73/P71/P72/H74","Standard_Uid":"b986e515-d4d5-48f4-b67b-a39fea6fd9f2","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H75","Name":"南大街换热站","Parent_ID":"P73","Type":"H","Length":"650","Diameter":"250","Cid":"1","Circuit":"H74/P72/P73/H75","Standard_Uid":"939e2f11-92b3-4a3a-81aa-39b8078500fd","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H76","Name":"党校换热站","Parent_ID":"P74","Type":"H","Length":"48","Diameter":"250","Cid":"1","Circuit":"H75/P73/P74/H76","Standard_Uid":"6b2a0c3a-30db-4886-a8da-65c0753aa30a","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H77","Name":"体委换热站","Parent_ID":"P75","Type":"H","Length":"45","Diameter":"250","Cid":"1","Circuit":"H76/P74/P75/H77","Standard_Uid":"52cecd73-bf64-4efd-95bf-e1f22362fc3b","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H78","Name":"中行换热站","Parent_ID":"P76","Type":"H","Length":"91","Diameter":"250","Cid":"1","Circuit":"H77/P75/P76/H78","Standard_Uid":"b113143c-8e53-459e-a533-06dcb55df3fc","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H79","Name":"矿务局(汾矿)机关换热站","Parent_ID":"P78","Type":"H","Length":"148","Diameter":"200","Cid":"2","Parent_V_ID":"HF","Circuit":"H79/P78/H80/","Standard_Uid":"addf3e51-f873-41cf-b6db-7e7122f4b3b9","Parent_Tree":"HF","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H80","Name":"矿务局技校换热站","Parent_ID":"P78","Type":"H","Length":"59","Diameter":"200","Cid":"2","Parent_V_ID":"HF","Circuit":"H78/P76/P77/P78/H80","Standard_Uid":"d11c3995-9c4e-4723-8056-9c66bc0faeb0","Parent_Tree":"HF","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H81","Name":"农发行换热站","Parent_ID":"P79","Type":"H","Length":"115","Diameter":"250","Cid":"1","Circuit":"H80/P78/P77/P79/H81","Standard_Uid":"8f6e3431-e8e1-44c3-945e-da4915cefe73","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H82","Name":"景泰换热站","Parent_ID":"P80","Type":"H","Length":"100","Diameter":"250","Cid":"1","Circuit":"H81/P79/P80/H82","Standard_Uid":"7cb048be-f7c5-4555-8718-5b23b02b0333","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H83","Name":"水泵厂换热站","Parent_ID":"P81","Type":"H","Length":"87","Diameter":"250","Cid":"1","Circuit":"H82/P80/P81/H83","Standard_Uid":"296bd631-fb9d-49ec-a8e8-e93139f0c713","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H84","Name":"无机盐厂(西关)换热站","Parent_ID":"P83","Type":"H","Length":"142","Diameter":"250","Cid":"2","Parent_V_ID":"HE","Circuit":"H83/P81/P83/H84","Standard_Uid":"73826f02-776d-4267-83ef-0fa34464b19d","Parent_Tree":"HE","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H85_H","Name":"棚户区二期高区换热站","Parent_ID":"P87","Type":"H","Length":"1","Diameter":"250","Cid":"2","Parent_V_ID":"HE","Circuit":"H84/P83/P84/P87/H85_H","Standard_Uid":"3249afaf-82a1-459c-919b-dbc4a995cb4b","Parent_Tree":"HE","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H85_L","Name":"棚户区二期低区换热站","Parent_ID":"P87","Type":"H","Length":"1","Diameter":"250","Cid":"2","Parent_V_ID":"HE","Circuit":"H85_H/P87/H85_L","Standard_Uid":"f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159","Parent_Tree":"HE","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H86","Name":"消防队换热站","Parent_ID":"P85","Type":"H","Length":"129","Diameter":"250","Cid":"2","Parent_V_ID":"HE","Circuit":"H85_H/PH85/P84/P85/H86","Standard_Uid":"74324b6a-cabe-4b37-886b-59e1874fb764","Parent_Tree":"HE","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H87_H","Name":"绵山墅高区换热站","Parent_ID":"PH87","Type":"H","Length":"1","Diameter":"250","Cid":"2","Parent_V_ID":"HE","Circuit":"H87_H/PH87/P86/H88","Standard_Uid":"408e509b-e95f-4f60-9f81-b18cb421f58d","Parent_Tree":"HE","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H88","Name":"纸厂换热站","Parent_ID":"P86","Type":"H","Length":"898","Diameter":"300","Cid":"2","Parent_V_ID":"HE","Circuit":"H95/P101/P100/P86/H88","Standard_Uid":"424f2b3c-3602-4907-ac6a-5718f600e61d","Parent_Tree":"HE","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H90","Name":"北村东换热站","Parent_ID":"P97","Type":"H","Length":"74","Diameter":"200","Cid":"3","Parent_V_ID":"HD-1","Circuit":"H90/P97/H91","Standard_Uid":"3301c33a-5fb6-48a1-bb18-5a2421aaacea","Parent_Tree":"HD-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H91","Name":"北村西换热站","Parent_ID":"P97","Type":"H","Length":"973","Diameter":"200","Cid":"3","Parent_V_ID":"HD-1","Circuit":"H91/P97/P96/P98/H92","Standard_Uid":"a66fe5ad-7556-46b9-84c9-f2283977379a","Parent_Tree":"HD-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H92","Name":"小宋曲换热站","Parent_ID":"P98","Type":"H","Length":"21","Diameter":"250","Cid":"3","Parent_V_ID":"HD-1","Circuit":"H92/P98/P99/H93","Standard_Uid":"f6830324-db08-4d18-87b6-17142a9ba261","Parent_Tree":"HD-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H93","Name":"钦屯小区换热站","Parent_ID":"P99","Type":"H","Length":"51","Diameter":"200","Cid":"3","Parent_V_ID":"HD-1","Circuit":"H93/P99/H94","Standard_Uid":"d215d902-db94-4e6b-b1d2-76924f8585d1","Parent_Tree":"HD-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H94","Name":"滨河小区换热站","Parent_ID":"P99","Type":"H","Length":"179","Diameter":"200","Cid":"3","Parent_V_ID":"HD-1","Circuit":"H92/P98/P99/H94","Standard_Uid":"6b82ff48-f998-4df8-96e9-04f4a04593d2","Parent_Tree":"HD-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H95","Name":"东内封换热站","Parent_ID":"P101","Type":"H","Length":"20","Diameter":"200","Cid":"2","Parent_V_ID":"HE","Circuit":"H86/P85/P100/P101/H95","Standard_Uid":"207d8659-160e-471f-b8bc-5068863873ec","Parent_Tree":"HE","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H96","Name":"西内封换热站","Parent_ID":"P101","Type":"H","Length":"1001","Diameter":"200","Cid":"2","Parent_V_ID":"HE","Circuit":"H95/P101/H96","Standard_Uid":"3f6370d5-66c0-40f0-b054-96833ad57867","Parent_Tree":"HE","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H97","Name":"上城南村换热站","Parent_ID":"P108","Type":"H","Length":"840","Diameter":"250","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H39/P108/H97","Standard_Uid":"bce82b14-4ba0-4dfd-9c3a-42e8d841b047","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H98","Name":"机务站换热站","Parent_ID":"P103","Type":"H","Length":"60","Diameter":"250","Cid":"1","Circuit":"H68/P68/P105/P104/H98","Standard_Uid":"b2bbbdd5-90d3-46c6-8574-623c5c528929","Parent_Tree":"S1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H100","Name":"种羊场换热站","Parent_ID":"P93","Type":"H","Length":"10","Diameter":"250","Cid":"3","Parent_V_ID":"HK-2","Circuit":"H100/P93/P105/S3","Standard_Uid":"3e46a853-928f-49ac-9d0a-171ef1646384","Parent_Tree":"HK-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H101","Name":"东段屯换热站","Parent_ID":"P93","Type":"H","Length":"1093","Diameter":"250","Cid":"3","Parent_V_ID":"HK-2","Circuit":"H101/P93/H100","Standard_Uid":"d898574b-ca0f-48ff-8404-2a17171787d4","Parent_Tree":"HK-2","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H102","Name":"宋安屯换热站","Parent_ID":"P107","Type":"H","Length":"132","Diameter":"250","Cid":"3","Parent_V_ID":"HK-1","Circuit":"H102/P107/P109/H103","Standard_Uid":"8e4278f8-5626-4f47-b428-8ae4fe4181cf","Parent_Tree":"HK-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H103","Name":"洪善换热站","Parent_ID":"P109","Type":"H","Length":"77","Diameter":"250","Cid":"3","Parent_V_ID":"HK-1","Circuit":"H103/P109/H104","Standard_Uid":"145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d","Parent_Tree":"HK-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H104","Name":"西段屯换热站","Parent_ID":"P109","Type":"H","Length":"350","Diameter":"250","Cid":"3","Parent_V_ID":"HK-1","Circuit":"H104/P109/P107/H102","Standard_Uid":"7a234a72-758d-480e-aa00-aa4b09a22977","Parent_Tree":"HK-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H105","Name":"康和小区换热站","Parent_ID":"P91","Type":"H","Length":"45","Diameter":"250","Cid":"2","Parent_V_ID":"HJ","Circuit":"H105/P91/P91-A/P43/P42/P41/H31","Standard_Uid":"cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b","Parent_Tree":"HJ","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H106","Name":"韩屯村东换热站","Parent_ID":"P88","Type":"H","Length":"50","Diameter":"250","Cid":"2","Parent_V_ID":"HC","Circuit":"H15/P14/P88/H106","Standard_Uid":"27ed4d57-bd91-4a14-bf09-d2ac328730f4","Parent_Tree":"HC","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H107","Name":"岳家湾换热站","Parent_ID":"P111","Type":"H","Length":"810","Diameter":"200","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H107/P111/H109","Standard_Uid":"fc32a6bf-4147-4555-b0b3-d9ade7814645","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H108","Name":"祥和嘉园换热站","Parent_ID":"P112","Type":"H","Length":"45","Diameter":"250","Cid":"2","Parent_V_ID":"HH-1","Circuit":"H52/P112/H108","Standard_Uid":"2744cee8-9b13-4c7b-947f-e72b2e54547f","Parent_Tree":"HH-1","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"H109","Name":"西靳屯换热站","Parent_ID":"P111","Type":"H","Length":"548","Diameter":"250","Cid":"3","Parent_V_ID":"HI-3","Circuit":"H36/P57/P110/P111/H109","Standard_Uid":"3a319a8b-754f-4449-b17e-1d92c0c9b2b7","Parent_Tree":"HI-3","Heat_Coef":"0.6","Switch_On":"1"},
  {"ID":"HA","Name":"虚拟换热站A","Parent_ID":"P19","Type":"V","Length":"402","Diameter":"400","Cid":"1","Parent_Tree":"S2",},
  {"ID":"HB","Name":"虚拟换热站B","Parent_ID":"P16","Type":"V","Length":"294","Diameter":"250","Cid":"1","Parent_Tree":"S2",},
  {"ID":"HC","Name":"虚拟换热站C","Parent_ID":"P10","Type":"V","Length":"344","Diameter":"400","Cid":"1","Parent_Tree":"S2",},
  {"ID":"HD","Name":"虚拟换热站D","Parent_ID":"P5","Type":"V","Length":"23","Diameter":"500","Cid":"1","Parent_Tree":"S2",},
  {"ID":"HD-1","Name":"虚拟换热站D-1","Parent_ID":"P95","Type":"V","Length":"464","Diameter":"350","Cid":"2","Parent_V_ID":"HD","Parent_Tree":"S2",},
  {"ID":"HE","Name":"虚拟换热站E","Parent_ID":"P81","Type":"V","Length":"39","Diameter":"400","Cid":"1","Parent_Tree":"S1",},
  {"ID":"HF","Name":"虚拟换热站F","Parent_ID":"P77","Type":"V","Length":"140","Diameter":"250","Cid":"1","Parent_Tree":"S1",},
  {"ID":"HG","Name":"虚拟换热站G","Parent_ID":"P59","Type":"V","Length":"657","Diameter":"400","Cid":"1","Parent_Tree":"S1",},
  {"ID":"HG-1","Name":"虚拟换热站G-1","Parent_ID":"P105","Type":"V","Length":"190","Diameter":"300","Cid":"2","Parent_V_ID":"HG","Parent_Tree":"HG",},
  {"ID":"HG-2","Name":"虚拟换热站G-2","Parent_ID":"P67","Type":"V","Length":"255","Diameter":"350","Cid":"2","Parent_V_ID":"HG","Parent_Tree":"HG",},
  {"ID":"HH","Name":"虚拟换热站H","Parent_ID":"P27","Type":"V","Length":"740","Diameter":"500","Cid":"1","Parent_Tree":"S1",},
  {"ID":"HH-1","Name":"虚拟换热站H-1","Parent_ID":"P29","Type":"V","Length":"283","Diameter":"400","Cid":"2","Parent_V_ID":"HH","Parent_Tree":"HH",},
  {"ID":"HH-2","Name":"虚拟换热站H-2","Parent_ID":"P29","Type":"V","Length":"754","Diameter":"400","Cid":"2","Parent_V_ID":"HH","Parent_Tree":"HH",},
  {"ID":"HI","Name":"虚拟换热站I","Parent_ID":"P46","Type":"V","Length":"680","Diameter":"600","Cid":"1","Parent_Tree":"S2",},
  {"ID":"HI-1","Name":"虚拟换热站I-1","Parent_ID":"P46","Type":"V","Length":"680","Diameter":"600","Cid":"2","Parent_V_ID":"HI","Parent_Tree":"HI",},
  {"ID":"HI-2","Name":"虚拟换热站I-2","Parent_ID":"P49","Type":"V","Length":"170","Diameter":"250","Cid":"2","Parent_V_ID":"HI","Parent_Tree":"HI",},
  {"ID":"HI-3","Name":"虚拟换热站I-3","Parent_ID":"P49","Type":"V","Length":"2988","Diameter":"600","Cid":"2","Parent_V_ID":"HI","Parent_Tree":"HI",},
  {"ID":"HJ","Name":"虚拟换热站J","Parent_ID":"P42","Type":"V","Length":"780","Diameter":"300","Cid":"1","Parent_Tree":"S2",},
  {"ID":"HK","Name":"虚拟换热站K","Parent_ID":"P89","Type":"V","Length":"1352","Diameter":"1000","Cid":"1","Parent_Tree":"S2",},
  {"ID":"HK-1","Name":"虚拟换热站HK-1","Parent_ID":"P90","Type":"V","Length":"2160","Diameter":"600","Cid":"2","Parent_V_ID":"HK","Parent_Tree":"HK",},
  {"ID":"HK-2","Name":"虚拟换热站HK-2","Parent_ID":"P102","Type":"V","Length":"1593","Diameter":"250","Cid":"2","Parent_V_ID":"HK","Parent_Tree":"HK",},
  {"ID":"P1","Name":"管网供水节点1","Parent_ID":"P1-A","Type":"P","Length":"804","Diameter":"400",},
  {"ID":"P1-A","Name":"变径连接点P1-A","Parent_ID":"P2","Type":"C","Length":"105","Diameter":"500",},
  {"ID":"P2","Name":"管网供水节点2","Parent_ID":"P3","Type":"P","Length":"234","Diameter":"500",},
  {"ID":"P3","Name":"管网供水节点3","Parent_ID":"P5","Type":"P","Length":"23","Diameter":"500",},
  {"ID":"P4","Name":"管网供水节点4","Parent_ID":"P5","Type":"P","Length":"72","Diameter":"500",},
  {"ID":"P5","Name":"管网供水节点5","Parent_ID":"P6","Type":"P","Length":"233","Diameter":"500",},
  {"ID":"P6","Name":"管网供水节点6","Parent_ID":"P106","Type":"P","Length":"67","Diameter":"500",},
  {"ID":"P7","Name":"管网供水节点7","Parent_ID":"P8","Type":"P","Length":"351","Diameter":"700",},
  {"ID":"P8","Name":"管网供水节点8","Parent_ID":"P9","Type":"P","Length":"225","Diameter":"700",},
  {"ID":"P9","Name":"管网供水节点9","Parent_ID":"P10","Type":"P","Length":"357","Diameter":"800",},
  {"ID":"P10","Name":"管网供水节点10","Parent_ID":"P15","Type":"P","Length":"537","Diameter":"800",},
  {"ID":"P11","Name":"管网供水节点11","Parent_ID":"P10","Type":"P","Length":"344","Diameter":"400",},
  {"ID":"P12","Name":"管网供水节点12","Parent_ID":"P11","Type":"P","Length":"36","Diameter":"400",},
  {"ID":"P13","Name":"管网供水节点13","Parent_ID":"P12","Type":"P","Length":"642","Diameter":"400",},
  {"ID":"P14","Name":"管网供水节点14","Parent_ID":"P88","Type":"P","Length":"230","Diameter":"250",},
  {"ID":"P15","Name":"管网供水节点15","Parent_ID":"P16","Type":"P","Length":"115","Diameter":"800",},
  {"ID":"P16","Name":"管网供水节点16","Parent_ID":"P19","Type":"P","Length":"670","Diameter":"900",},
  {"ID":"P17","Name":"管网供水节点17","Parent_ID":"P16","Type":"P","Length":"294","Diameter":"250",},
  {"ID":"P18","Name":"管网供水节点18","Parent_ID":"P17","Type":"P","Length":"513","Diameter":"250",},
  {"ID":"P19","Name":"管网供水节点19","Parent_ID":"P24","Type":"P","Length":"130","Diameter":"900",},
  {"ID":"P20","Name":"管网供水节点20","Parent_ID":"P19","Type":"P","Length":"402","Diameter":"400",},
  {"ID":"P21","Name":"管网供水节点21","Parent_ID":"P20","Type":"P","Length":"513","Diameter":"400",},
  {"ID":"P22","Name":"管网供水节点22","Parent_ID":"P21","Type":"P","Length":"532","Diameter":"400",},
  {"ID":"P23","Name":"管网供水节点23","Parent_ID":"P22","Type":"P","Length":"270","Diameter":"250",},
  {"ID":"P24","Name":"管网供水节点24","Parent_ID":"P25","Type":"P","Length":"217","Diameter":"900",},
  {"ID":"P25","Name":"管网供水节点25","Parent_ID":"P38","Type":"P","Length":"288","Diameter":"900",},
  {"ID":"P26","Name":"管网供水节点26","Parent_ID":"P27","Type":"P","Length":"740","Diameter":"500",},
  {"ID":"P27","Name":"管网供水节点27","Parent_ID":"P58","Type":"P","Length":"680","Diameter":"700",},
  {"ID":"P28","Name":"管网供水节点28","Parent_ID":"P29","Type":"P","Length":"283","Diameter":"400",},
  {"ID":"P29","Name":"管网供水节点29","Parent_ID":"P30","Type":"P","Length":"197","Diameter":"400",},
  {"ID":"P30","Name":"管网供水节点30","Parent_ID":"P26","Type":"P","Length":"877","Diameter":"400",},
  {"ID":"P31","Name":"管网供水节点31","Parent_ID":"P29","Type":"P","Length":"754","Diameter":"400",},
  {"ID":"P32","Name":"管网供水节点32","Parent_ID":"P31","Type":"P","Length":"46","Diameter":"350",},
  {"ID":"P33","Name":"管网供水节点33","Parent_ID":"P32","Type":"P","Length":"44","Diameter":"300",},
  {"ID":"P34","Name":"管网供水节点34","Parent_ID":"P32","Type":"P","Length":"402","Diameter":"350",},
  {"ID":"P35","Name":"管网供水节点35","Parent_ID":"P34","Type":"P","Length":"88","Diameter":"250",},
  {"ID":"P36","Name":"管网供水节点36","Parent_ID":"P34","Type":"P","Length":"417","Diameter":"350",},
  {"ID":"P37","Name":"管网供水节点37","Parent_ID":"P36","Type":"P","Length":"487","Diameter":"350",},
  {"ID":"P38","Name":"管网供水节点38","Parent_ID":"P39","Type":"P","Length":"262","Diameter":"900",},
  {"ID":"P39","Name":"管网供水节点39","Parent_ID":"P40","Type":"P","Length":"249","Diameter":"900",},
  {"ID":"P40","Name":"管网供水节点40","Parent_ID":"P89","Type":"P","Length":"475","Diameter":"900",},
  {"ID":"P41","Name":"管网供水节点41","Parent_ID":"P42","Type":"P","Length":"333","Diameter":"900",},
  {"ID":"P42","Name":"管网供水节点42","Parent_ID":"P44","Type":"P","Length":"112","Diameter":"900",},
  {"ID":"P43","Name":"管网供水节点43","Parent_ID":"P42","Type":"P","Length":"780","Diameter":"300",},
  {"ID":"P44","Name":"管网供水节点44","Parent_ID":"P45","Type":"P","Length":"85","Diameter":"900",},
  {"ID":"P45","Name":"管网供水节点45","Parent_ID":"P46","Type":"P","Length":"1007","Diameter":"900",},
  {"ID":"P46","Name":"管网供水节点46","Parent_ID":"P92","Type":"P","Length":"80","Diameter":"900",},
  {"ID":"P47","Name":"管网供水节点47","Parent_ID":"P46","Type":"P","Length":"680","Diameter":"600",},
  {"ID":"P48","Name":"管网供水节点48","Parent_ID":"P47","Type":"P","Length":"262","Diameter":"600",},
  {"ID":"P49","Name":"管网供水节点49","Parent_ID":"P48","Type":"P","Length":"262","Diameter":"600",},
  {"ID":"P50","Name":"管网供水节点50","Parent_ID":"P49","Type":"P","Length":"170","Diameter":"250",},
  {"ID":"P51","Name":"管网供水节点51","Parent_ID":"P49","Type":"P","Length":"2988","Diameter":"600",},
  {"ID":"P52","Name":"管网供水节点52","Parent_ID":"P51","Type":"P","Length":"160","Diameter":"600",},
  {"ID":"P53","Name":"管网供水节点53","Parent_ID":"P52","Type":"P","Length":"43","Diameter":"600",},
  {"ID":"P54","Name":"管网供水节点54","Parent_ID":"P53","Type":"P","Length":"935","Diameter":"500",},
  {"ID":"P55","Name":"管网供水节点55","Parent_ID":"P54","Type":"P","Length":"60","Diameter":"500",},
  {"ID":"P56","Name":"管网供水节点56","Parent_ID":"P55","Type":"P","Length":"704","Diameter":"400",},
  {"ID":"P57","Name":"管网供水节点57","Parent_ID":"P110","Type":"P","Length":"55","Diameter":"250",},
  {"ID":"P58","Name":"管网供水节点58","Parent_ID":"S1","Type":"P","Length":"40","Diameter":"700",},
  {"ID":"P59","Name":"管网供水节点59","Parent_ID":"P27","Type":"P","Length":"32","Diameter":"500",},
  {"ID":"P60","Name":"管网供水节点60","Parent_ID":"P59","Type":"P","Length":"657","Diameter":"400",},
  {"ID":"P61","Name":"管网供水节点61","Parent_ID":"P60","Type":"P","Length":"290","Diameter":"400",},
  {"ID":"P62","Name":"管网供水节点62","Parent_ID":"P61","Type":"P","Length":"490","Diameter":"400",},
  {"ID":"P63","Name":"管网供水节点63","Parent_ID":"P62","Type":"P","Length":"303","Diameter":"400",},
  {"ID":"P64","Name":"管网供水节点64","Parent_ID":"P63","Type":"P","Length":"140","Diameter":"400",},
  {"ID":"P65","Name":"管网供水节点65","Parent_ID":"P64","Type":"P","Length":"124","Diameter":"400",},
  {"ID":"P66","Name":"管网供水节点66","Parent_ID":"P65","Type":"P","Length":"430","Diameter":"400",},
  {"ID":"P67","Name":"管网供水节点67","Parent_ID":"P66","Type":"P","Length":"6","Diameter":"400",},
  {"ID":"P68","Name":"管网供水节点68","Parent_ID":"P105","Type":"P","Length":"190","Diameter":"300",},
  {"ID":"P69","Name":"管网供水节点69","Parent_ID":"P67","Type":"P","Length":"255","Diameter":"350",},
  {"ID":"P70","Name":"管网供水节点70","Parent_ID":"P69","Type":"P","Length":"284","Diameter":"250",},
  {"ID":"P71","Name":"管网供水节点71","Parent_ID":"P59","Type":"P","Length":"75","Diameter":"500",},
  {"ID":"P72","Name":"管网供水节点72","Parent_ID":"P71","Type":"P","Length":"557","Diameter":"500",},
  {"ID":"P73","Name":"管网供水节点73","Parent_ID":"P72","Type":"P","Length":"650","Diameter":"400",},
  {"ID":"P74","Name":"管网供水节点74","Parent_ID":"P73","Type":"P","Length":"470","Diameter":"400",},
  {"ID":"P75","Name":"管网供水节点75","Parent_ID":"P74","Type":"P","Length":"160","Diameter":"350",},
  {"ID":"P76","Name":"管网供水节点76","Parent_ID":"P75","Type":"P","Length":"398","Diameter":"350",},
  {"ID":"P77","Name":"管网供水节点77","Parent_ID":"P76","Type":"P","Length":"300","Diameter":"350",},
  {"ID":"P78","Name":"管网供水节点78","Parent_ID":"P77","Type":"P","Length":"140","Diameter":"250",},
  {"ID":"P79","Name":"管网供水节点79","Parent_ID":"P77","Type":"P","Length":"177","Diameter":"300",},
  {"ID":"P80","Name":"管网供水节点80","Parent_ID":"P79","Type":"P","Length":"130","Diameter":"300",},
  {"ID":"P81","Name":"管网供水节点81","Parent_ID":"P80","Type":"P","Length":"372","Diameter":"300",},
  {"ID":"P82","Name":"管网供水节点82","Parent_ID":"P4","Type":"P","Length":"129","Diameter":"500",},
  {"ID":"P83","Name":"管网供水节点83","Parent_ID":"P81","Type":"P","Length":"39","Diameter":"400",},
  {"ID":"P84","Name":"管网供水节点84","Parent_ID":"P83","Type":"P","Length":"36","Diameter":"400",},
  {"ID":"P85","Name":"管网供水节点85","Parent_ID":"P84","Type":"P","Length":"716","Diameter":"400",},
  {"ID":"P86","Name":"管网供水节点86","Parent_ID":"P100","Type":"P","Length":"460","Diameter":"300",},
  {"ID":"P87","Name":"管网供水节点87","Parent_ID":"P84","Type":"P","Length":"256","Diameter":"250",},
  {"ID":"P88","Name":"管网供水节点88","Parent_ID":"P13","Type":"P","Length":"731","Diameter":"500",},
  {"ID":"P89","Name":"管网供水节点89","Parent_ID":"P41","Type":"P","Length":"195","Diameter":"900",},
  {"ID":"P90","Name":"管网供水节点90","Parent_ID":"P89","Type":"P","Length":"1352","Diameter":"1000",},
  {"ID":"P91","Name":"管网供水节点91","Parent_ID":"P91-A","Type":"P","Length":"608","Diameter":"250",},
  {"ID":"P92","Name":"管网供水节点92","Parent_ID":"S2","Type":"P","Length":"153","Diameter":"900",},
  {"ID":"P93","Name":"管网供水节点93","Parent_ID":"P102","Type":"P","Length":"1593","Diameter":"250",},
  {"ID":"P94","Name":"管网供水节点94","Parent_ID":"P1","Type":"P","Length":"414","Diameter":"400",},
  {"ID":"P95","Name":"管网供水节点95","Parent_ID":"P94","Type":"P","Length":"213","Diameter":"350",},
  {"ID":"P96","Name":"管网供水节点96","Parent_ID":"P95","Type":"P","Length":"464","Diameter":"350",},
  {"ID":"P97","Name":"管网供水节点97","Parent_ID":"P96","Type":"P","Length":"655","Diameter":"250",},
  {"ID":"P98","Name":"管网供水节点98","Parent_ID":"P96","Type":"P","Length":"784","Diameter":"350",},
  {"ID":"P99","Name":"管网供水节点99","Parent_ID":"P98","Type":"P","Length":"493","Diameter":"250",},
  {"ID":"P100","Name":"管网供水节点100","Parent_ID":"P85","Type":"P","Length":"250","Diameter":"300",},
  {"ID":"P101","Name":"管网供水节点101","Parent_ID":"P100","Type":"P","Length":"600","Diameter":"250",},
  {"ID":"P102","Name":"管网供水节点102","Parent_ID":"P90","Type":"P","Length":"1230","Diameter":"1200",},
  {"ID":"P103","Name":"管网供水节点103","Parent_ID":"P104","Type":"P","Length":"123","Diameter":"400",},
  {"ID":"P104","Name":"管网供水节点104","Parent_ID":"P105","Type":"P","Length":"671","Diameter":"400",},
  {"ID":"P105","Name":"管网供水节点105","Parent_ID":"P67","Type":"P","Length":"553","Diameter":"300",},
  {"ID":"P106","Name":"管网供水节点106","Parent_ID":"P7","Type":"P","Length":"415","Diameter":"700",},
  {"ID":"P107","Name":"管网供水节点107","Parent_ID":"P90","Type":"P","Length":"2160","Diameter":"600",},
  {"ID":"P108","Name":"管网供水节点108","Parent_ID":"P55","Type":"P","Length":"357","Diameter":"250",},
  {"ID":"P109","Name":"管网供水节点109","Parent_ID":"P107","Type":"P","Length":"70","Diameter":"250",},
  {"ID":"P110","Name":"管网供水节点110","Parent_ID":"P56","Type":"P","Length":"192","Diameter":"400",},
  {"ID":"P111","Name":"管网供水节点111","Parent_ID":"P110","Type":"P","Length":"587","Diameter":"300",},
  {"ID":"P112","Name":"管网供水节点112","Parent_ID":"P28","Type":"P","Length":"131","Diameter":"250",},
  {"ID":"P91-A","Name":"南张家庄变径连接点","Parent_ID":"P43","Type":"C","Length":"490","Diameter":"300",},
  {"ID":"H51-A","Name":"变径连接点H51-A","Parent_ID":"H51-B","Type":"C","Length":"497","Diameter":"350",},
  {"ID":"H51-B","Name":"变径连接点H51-B","Parent_ID":"H51-C","Type":"C","Length":"44","Diameter":"400",},
  {"ID":"H51-C","Name":"变径连接点H51-C","Parent_ID":"P28","Type":"C","Length":"276","Diameter":"500",},
  {"ID":"PH28","Name":"管网供水节点PH28","Parent_ID":"P38","Type":"P","Length":"151","Diameter":"250",},
  {"ID":"PH53","Name":"管网供水节点PH53","Parent_ID":"P31","Type":"P","Length":"156","Diameter":"250",},
  {"ID":"PH87","Name":"管网供水节点PH87","Parent_ID":"P86","Type":"P","Length":"90","Diameter":"250",},
  {"ID":"S1","Name":"热源供水1","Type":"S",},
  {"ID":"S2","Name":"热源供水2","Type":"S",},
  {"ID":"S3","Name":"安泰热源","Type":"S",},

]

let nameMap = {"HS1":"首站换执站1","H1":"六中换热站","H2":"金华苑换热站","H3":"御龙湾换热站","H4":"闫冀堡树换热站","H5":"棚户区B区换热站","H6":"棚户区一期(沉陷区)换热站","H7":"安逸村换热站","H8":"梁吉村换热站","H9":"绿都二期换热站","H10":"梁吉村东换热站","H11":"李家堡换热站(纬四路)","H12":"赵家堡村换热站","H13":"李家堡村换热站(纬三路)","H14":"残联换热站","H15":"韩屯村南换热站","H16":"韩屯村北换热站","H17":"亚泰苑换热站","H18":"会计事务所换热站","H19":"嘉禾园换热站","H20":"安居苑换热站","H21":"安泰换热站","H22":"安康嘉园换热站","H23":"上站村换热站","H24":"顺康换热站","H25":"公安局换热站","H26":"蓉和菀换热站","H27":"气象局换热站","H28_H":"嘉欣苑高区换热站","H28_M":"嘉欣苑中区换热站","H28_L":"嘉欣苑低区换热站","H29":"三道河(信河苑)换热站","H30":"新体育场换热站","H31":"宋古换热站","H32":"南张家庄换热站","H33":"宋古村换热站","H34":"宋古驾校换热站","H35":"马女村换热站","H36":"绵山一中换热站","H37":"南靳屯村换热站","H38":"交警队换热站","H39":"后党峪小区换热站","H40":"粮食局直属库换热站","H41":"东南办事处换热站","H42":"定阳路南换热站","H43":"石油公司换热站","H44":"电碳厂（一区）换热站","H45":"石河村换热站","H46":"电杆厂换热站","H47":"朝阳路换热站","H48":"永康换热站","H49":"顺城关换热站","H50":"彦泰换热站","H51":"介休一中换热站","H52":"泓达小区换热站","H53_H":"二中C区（高区）换热站","H53_L":"二中（低区）换热站","H54":"馨苑小区换热站","H55":"邮政局换热站","H56":"盛华丽苑换热站","H57":"人民医院换热站","H58":"环保局换热站","H59":"城健局换热站","H60":"北坛小学换热站","H61":"药材公司换热站","H62":"城关一院换热站","H63":"秀南怡苑换热站","H64":"物资机关换热站","H65":"中仁换热站","H66":"一品天下换热站","H67":"矿务局供应处换热站","H68":"铁亮大厦换热站","H69":"车站二区换热站","H70":"二运换热站","H71":"矿务局医院换热站","H72":"富康苑换热站","H73":"电碳厂换热站(宿舍)","H74":"城隍庙换热站","H75":"南大街换热站","H76":"党校换热站","H77":"体委换热站","H78":"中行换热站","H79":"矿务局(汾矿)机关换热站","H80":"矿务局技校换热站","H81":"农发行换热站","H82":"景泰换热站","H83":"水泵厂换热站","H84":"无机盐厂换热站","H85_H":"棚户区二期高区换热站","H85_L":"棚户区二期低区换热站","H86":"消防队换热站","H87_H":"绵山墅高区换热站","H87_L":"绵山墅低区换热站","H88":"纸厂换热站","H89":"汾矿换热站","H90":"北村东换热站","H91":"北村西换热站","H92":"小宋曲换热站","H93":"钦屯小区换热站","H94":"滨河小区换热站","H95":"东内封换热站","H96":"西内封换热站","H97":"上城南村换热站","H98":"机务站换热站","H99":"洗煤厂换热站","H100":"种羊场换热站","H101":"东段屯换热站","H102":"宋安屯换热站","H103":"洪善换热站","H104":"西段屯换热站","H105":"康和小区换热站","H106":"韩屯村东换热站","H107":"岳家湾换热站","H108":"祥和嘉园换热站","H109":"西靳屯换热站"}

let Qmax = {"HS1":"18.47","H1":"15.03","H2":"9.45","H3":"29.95","H4":"3.55","H5":"28.04","H6":"19.23","H7":"22.1","H8":"18.2","H9":"10.09","H10":"4.51","H11":"25.77","H12":"15.36","H13":"11.92","H15":"18.12","H16":"6.3","H106":"2.5","H17":"42.18","H18":"12.59","H19":"18.28","H20":"29.27","H21":"12.69","H22":"19.97","H23":"27.85","H24":"5.64","H25":"2.13","H26":"4.92","H27":"0.653","H28_H":"2.04","H28_M":"2.12","H28_L":"4.84","H29":"33.31","H30":"0","H31":"26.08","H32":"0","H105":"25.93","H33":"24.29","H34":"26.56","H35":"11.43","H36":"5.88","H37":"8.94","H38":"2.22","H39":"20.5","H40":"3","H41":"2.44","H42":"19.17","H43":"17.44","H44":"9.53","H45":"12.45","H46":"6.17","H47":"3.11","H48":"27.15","H49":"25.79","H50":"16.48","H51":"17.73","H52":"22.62","H53_L":"22.29","H53_H":"22.49","H54":"19.4","H55":"16.89","H56":"19.96","H57":"3.47","H58":"23.67","H59":"24.92","H60":"35.26","H61":"15.08","H62":"8.64","H63":"11.16","H64":"5.18","H65":"11.86","H66":"11.52","H67":"24.73","H68":"19.05","H69":"7.55","H70":"39.23","H71":"22.71","H72":"4.08","H73":"13.16","H74":"14.61","H75":"28.8","H76":"25.52","H77":"27.03","H78":"17.18","H79":"14.98","H80":"17.87","H81":"28.36","H82":"4.11","H83":"21.57","H84":"23.26","H85_H":"8.83","H85_L":"20.88","H86":"1.39","H87_H":"7.34","H87_L":"0","H88":"13.5","H94":"5.6","H93":"10.4","H92":"30","H91":"2.6","H90":"6.4","H96":"13","H95":"12","H107":"8.93","H109":"10.27","H97":"8.6","H101":"24.59","H104":"31.6","H103":"13","H102":"13.47","H100":"2.07","H98":"3","H108":"14.56"}

let res = {}
let rules = []

data.forEach(item => {
  let name = item.control_enable.slice(0, -7)
  // res[item.control_enable] = 1
  // rules.push({
  //   "name": name + "_enable",
  //   "type": "DOUBLE",
  //   "expression": name + "_enable",
  //   "desp": nameMap[name] + "开关"
  // })

  // res[item.v_min] = 5
  // rules.push({
  //   "name": name + "_v_min",
  //   "type": "DOUBLE",
  //   "expression": name + "_v_min",
  //   "desp": nameMap[name] + "阀门开度最小值"
  // })

  // res[item.v_max] = 100
  // rules.push({
  //   "name": name + "_v_max",
  //   "type": "DOUBLE",
  //   "expression": name + "_v_max",
  //   "desp": nameMap[name] + "阀门开度最大值"
  // })

  // res[item.percent3] = 0.01
  // rules.push({
  //   "name": name + "_percent3",
  //   "type": "DOUBLE",
  //   "expression": name + "_percent3",
  //   "desp": nameMap[name] + "3min变化量"
  // })

  // res[item.percent4] = 0.05
  // rules.push({
  //   "name": name + "_percent4",
  //   "type": "DOUBLE",
  //   "expression": name + "_percent4",
  //   "desp": nameMap[name] + "4min变化量"
  // })

  // res[item.percent10] = 0.05
  // rules.push({
  //   "name": name + "_percent10",
  //   "type": "DOUBLE",
  //   "expression": name + "_percent10",
  //   "desp": nameMap[name] + "10min变化量"
  // })

  // res[item.threeMinutes] = 180000
  // rules.push({
  //   "name": name + "_threeMinutes",
  //   "type": "DOUBLE",
  //   "expression": name + "_threeMinutes",
  //   "desp": nameMap[name] + "3min逻辑时长"
  // })

  // res[item.fourMinutes] = 240000
  // rules.push({
  //   "name": name + "_fourMinutes",
  //   "type": "DOUBLE",
  //   "expression": name + "_fourMinutes",
  //   "desp": nameMap[name] + "4min逻辑时长"
  // })

  // res[item.tenMinutes] = 600000
  // rules.push({
  //   "name": name + "_tenMinutes",
  //   "type": "DOUBLE",
  //   "expression": name + "_tenMinutes",
  //   "desp": nameMap[name] + "10min逻辑时长"
  // })


  // res[item.Qmin] = 5
  // rules.push({
  //   "name": name + "_Qmin",
  //   "type": "DOUBLE",
  //   "expression": name + "_Qmin",
  //   "desp": nameMap[name] + "模型预测的热负荷最小值"
  // })

  // res[item.corrected_a] = -0.03
  // rules.push({
  //   "name": name + "_a",
  //   "type": "DOUBLE",
  //   "expression": name + "_a",
  //   "desp": nameMap[name] + "各个室外温度下的温差补偿系数a"
  // })

  // res[item.corrected_b] = 0.84
  // rules.push({
  //   "name": name + "_b",
  //   "type": "DOUBLE",
  //   "expression": name + "_b",
  //   "desp": nameMap[name] + "各个室外温度下的温差补偿系数b"
  // })

  // res[item.T_inflexion] = 6
  // rules.push({
  //   "name": name + "_T_inflexion",
  //   "type": "DOUBLE",
  //   "expression": name + "_T_inflexion",
  //   "desp": nameMap[name] + "拐点温度"
  // })

  // res[item.instantaneous_heat_scoring_use] = 1
  // rules.push({
  //   "name": name + "_instantaneous_heat_scoring_use",
  //   "type": "DOUBLE",
  //   "expression": name + "_instantaneous_heat_scoring_use",
  //   "desp": nameMap[name] + "是否使用模型计算"
  // })

  // res[name + "_Qmax"] = Qmax[name] - 0
  // rules.push({
  //   "name": name + "_Qmax",
  //   "type": "DOUBLE",
  //   "expression": name + "_Qmax",
  //   "desp": nameMap[name] + "模型预测的热负荷最大值"
  // })

  //
  // res[name + "_Vi_straighten"] = 0
  // rules.push({
  //   "name": name + "_Vi_straighten",
  //   "type": "DOUBLE",
  //   "expression": name + "_Vi_straighten",
  //   "desp": nameMap[name] + "目标开度矫正值"
  // })

  // res[name + "_run_straighten"] = 0
  // rules.push({
  //   "name": name + "_run_straighten",
  //   "type": "DOUBLE",
  //   "expression": name + "_run_straighten",
  //   "desp": nameMap[name] + "当前开度矫正值"
  // })


  // res[name + "_Vi_change_min"] = 1
  // rules.push({
  //   "name": name + "_Vi_change_min",
  //   "type": "DOUBLE",
  //   "expression": name + "_Vi_change_min",
  //   "desp": nameMap[name] + "当前开度变化最小值"
  // })


  // res[name + "_returnWaterTemperatureLine2_min"] = 30
  // rules.push({
  //   "name": name + "_returnWaterTemperatureLine2_min",
  //   "type": "DOUBLE",
  //   "expression": name + "_returnWaterTemperatureLine2_min",
  //   "desp": nameMap[name] + "二网回温最小值"
  // })

})

// console.log(JSON.stringify(res))
// console.log(JSON.stringify(rules))

console.log(JSON.stringify({
  constantValues: res,
  rules
}))
console.log(rules.length)