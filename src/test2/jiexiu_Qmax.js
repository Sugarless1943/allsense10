let data = [
  {"A":"HS1","换热站名称":"首站换热站","B":"18.47"},
  {"A":"H1","换热站名称":"介休六中换热站","B":"15.03"},
  {"A":"H2","换热站名称":"金华苑换热站","B":"9.45"},
  {"A":"H3","换热站名称":"御珑湾换热站","B":"29.95"},
  {"A":"H4","换热站名称":"闫冀堡村换热站","B":"3.55"},
  {"A":"H5","换热站名称":"棚户区换热站","B":"28.04"},
  {"A":"H6","换热站名称":"沉陷区换热站","B":"19.23"},
  {"A":"H7","换热站名称":"安逸村换热站","B":"22.1"},
  {"A":"H8","换热站名称":"梁吉村换热站","B":"18.2"},
  {"A":"H9","换热站名称":"绿都换热站","B":"10.09"},
  {"A":"H10","换热站名称":"梁吉村东换热站","B":"4.51"},
  {"A":"H11","换热站名称":"经济适用房","B":"25.77"},
  {"A":"H12","换热站名称":"赵家堡村换热站","B":"15.36"},
  {"A":"H13","换热站名称":"李家堡村换热站(纬三路)","B":"11.92"},
  {"A":"H14","换热站名称":"残联换热站",},
  {"A":"H15","换热站名称":"韩屯村南换热站","B":"18.12"},
  {"A":"H16","换热站名称":"韩屯村北换热站","B":"6.3"},
  {"A":"H106","换热站名称":"韩屯村东换热站","B":"2.5"},
  {"A":"H17","换热站名称":"亚泰苑换热站","B":"42.18"},
  {"A":"H18","换热站名称":"会计事务所换热站","B":"12.59"},
  {"A":"H19","换热站名称":"嘉和园换热站","B":"18.28"},
  {"A":"H20","换热站名称":"安居苑换热站","B":"29.27"},
  {"A":"H21","换热站名称":"安泰换热站","B":"12.69"},
  {"A":"H22","换热站名称":"安康嘉园换热站","B":"19.97"},
  {"A":"H23","换热站名称":"上站村换热站","B":"27.85"},
  {"A":"H24","换热站名称":"顺康换热站","B":"5.64"},
  {"A":"H25","换热站名称":"公安局换热站","B":"2.13"},
  {"A":"H26","换热站名称":"蓉和菀换热站","B":"4.92"},
  {"A":"H27","换热站名称":"气象站换热站","B":"0.653"},
  {"A":"H28-H","换热站名称":"嘉欣园高区换热站","B":"2.04"},
  {"A":"H28-M","换热站名称":"嘉欣园中区换热站","B":"2.12"},
  {"A":"H28-L","换热站名称":"嘉欣园低区换热站","B":"4.84"},
  {"A":"H29","换热站名称":"信合苑","B":"33.31"},
  {"A":"H30","换热站名称":"新体育场换热站","B":"0"},
  {"A":"H31","换热站名称":"宋古村东换热站","B":"26.08"},
  {"A":"H32","换热站名称":"南张家庄换热站","B":"0"},
  {"A":"H105","换热站名称":"康和小区换热站","B":"25.93"},
  {"A":"H33","换热站名称":"宋古换热站","B":"24.29"},
  {"A":"H34","换热站名称":"驾校换热站","B":"26.56"},
  {"A":"H35","换热站名称":"马女村换热站","B":"11.43"},
  {"A":"H36","换热站名称":"绵山一中换热站","B":"5.88"},
  {"A":"H37","换热站名称":"南靳屯村换热站","B":"8.94"},
  {"A":"H38","换热站名称":"交警队换热站","B":"2.22"},
  {"A":"H39","换热站名称":"后党峪小区换热站","B":"20.5"},
  {"A":"H40","换热站名称":"粮食局直属库换热站","B":"3"},
  {"A":"H41","换热站名称":"东南办事处换热站","B":"2.44"},
  {"A":"H42","换热站名称":"迎翠街","B":"19.17"},
  {"A":"H43","换热站名称":"石油公司换热站","B":"17.44"},
  {"A":"H44","换热站名称":"电碳厂一区换热站","B":"9.53"},
  {"A":"H45","换热站名称":"石河村换热站","B":"12.45"},
  {"A":"H46","换热站名称":"电杆厂换热站","B":"6.17"},
  {"A":"H47","换热站名称":"朝阳路换热站","B":"3.11"},
  {"A":"H48","换热站名称":"永康换热站","B":"27.15"},
  {"A":"H49","换热站名称":"顺城关换热站","B":"25.79"},
  {"A":"H50","换热站名称":"彦泰换热站","B":"16.48"},
  {"A":"H51","换热站名称":"介休一中换热站","B":"17.73"},
  {"A":"H52","换热站名称":"泓达小区换热站","B":"22.62"},
  {"A":"H53-L","换热站名称":"二中换热站","B":"22.29"},
  {"A":"H53-H","换热站名称":"二中C区换热站","B":"22.49"},
  {"A":"H54","换热站名称":"馨苑小区换热站","B":"19.4"},
  {"A":"H55","换热站名称":"邮政局换热站","B":"16.89"},
  {"A":"H56","换热站名称":"盛华丽园换热站","B":"19.96"},
  {"A":"H57","换热站名称":"人民医院换热站","B":"3.47"},
  {"A":"H58","换热站名称":"环保局换热站","B":"23.67"},
  {"A":"H59","换热站名称":"城健局换热站","B":"24.92"},
  {"A":"H60","换热站名称":"北坛小学换热站","B":"35.26"},
  {"A":"H61","换热站名称":"药材公司换热站","B":"15.08"},
  {"A":"H62","换热站名称":"城关一院换热站","B":"8.64"},
  {"A":"H63","换热站名称":"秀南怡苑换热站","B":"11.16"},
  {"A":"H64","换热站名称":"物资局换热站","B":"5.18"},
  {"A":"H65","换热站名称":"成功换热站","B":"11.86"},
  {"A":"H66","换热站名称":"一品天下换热站","B":"11.52"},
  {"A":"H67","换热站名称":"总库换热站","B":"24.73"},
  {"A":"H68","换热站名称":"铁南换热站","B":"19.05"},
  {"A":"H69","换热站名称":"和谐苑换热站","B":"7.55"},
  {"A":"H70","换热站名称":"二运换热站","B":"39.23"},
  {"A":"H71","换热站名称":"矿务局医院换热站","B":"22.71"},
  {"A":"H72","换热站名称":"富康苑换热站","B":"4.08"},
  {"A":"H73","换热站名称":"电碳厂换热站","B":"13.16"},
  {"A":"H74","换热站名称":"城隍庙换热站","B":"14.61"},
  {"A":"H75","换热站名称":"南大街换热站","B":"28.8"},
  {"A":"H76","换热站名称":"党校换热站","B":"25.52"},
  {"A":"H77","换热站名称":"体委换热站","B":"27.03"},
  {"A":"H78","换热站名称":"中行换热站","B":"17.18"},
  {"A":"H79","换热站名称":"汾矿机关换热站","B":"14.98"},
  {"A":"H80","换热站名称":"技校换热站","B":"17.87"},
  {"A":"H81","换热站名称":"农发行换热站","B":"28.36"},
  {"A":"H82","换热站名称":"景泰换热站","B":"4.11"},
  {"A":"H83","换热站名称":"水泵厂换热站","B":"21.57"},
  {"A":"H84","换热站名称":"西关居民区换热站","B":"23.26"},
  {"A":"H85-H","换热站名称":"棚户二期高区换热站","B":"8.83"},
  {"A":"H85-L","换热站名称":"棚户二期低区换热站","B":"20.88"},
  {"A":"H86","换热站名称":"消防队换热站","B":"1.39"},
  {"A":"H87-H","换热站名称":"绵山墅高区换热站","B":"7.34"},
  {"A":"H87-L","换热站名称":"绵山墅低区换热站","B":"0"},
  {"A":"H88","换热站名称":"纸厂换热站","B":"13.5"},
  {"A":"H94","换热站名称":"滨河小区","B":"5.6"},
  {"A":"H93","换热站名称":"钦屯小区","B":"10.4"},
  {"A":"H92","换热站名称":"小宋曲村","B":"30"},
  {"A":"H91","换热站名称":"北村西","B":"2.6"},
  {"A":"H90","换热站名称":"北村东","B":"6.4"},
  {"A":"H96","换热站名称":"西内封","B":"13"},
  {"A":"H95","换热站名称":"东内封","B":"12"},
  {"A":"H107","换热站名称":"岳家湾","B":"8.93"},
  {"A":"H109","换热站名称":"西靳屯","B":"10.27"},
  {"A":"H97","换热站名称":"上城南","B":"8.6"},
  {"A":"H101","换热站名称":"东段屯","B":"24.59"},
  {"A":"H104","换热站名称":"西段屯","B":"31.6"},
  {"A":"H103","换热站名称":"洪善村","B":"13"},
  {"A":"H102","换热站名称":"宋安村","B":"13.47"},
  {"A":"H100","换热站名称":"种羊场","B":"2.07"},
  {"A":"H89","换热站名称":"汾矿",},
  {"A":"H98","换热站名称":"机修厂（机务站）","B":"3"},
  {"换热站名称":"罗王庄村",},
  {"A":"H108","换热站名称":"祥和家园","B":"14.56"},

]

let res = {}
data.forEach(item => {
  if(item.A) res[item.A] = item.B
})

console.log(JSON.stringify(res))
