let name = ["HS1","H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12","H13","H15","H16","H17","H18","H19","H20","H21","H22","H23","H24","H25","H26","H27","H28_H","H28_M","H28_L","H29","H31","H33","H34","H35","H36","H37","H38","H39","H40","H41","H42","H43","H44","H45","H46","H47","H48","H49","H50","H51","H52","H53_H","H53_L","H54","H55","H56","H57","H58","H59","H60","H61","H62","H63","H64","H65","H66","H67","H68","H69","H70","H71","H72","H73","H74","H75","H76","H77","H78","H79","H80","H81","H82","H83","H84","H85_H","H85_L","H86","H87_H","H88","H90","H91","H92","H93","H94","H95","H96","H97","H98","H100","H101","H102","H103","H104","H105","H106","H107","H108","H109"]

let res1 = {}
let res2 = {}
let res3 = []
let res4 = []
name.forEach(item => {
  // res1[item+'_ret_tem_offset'] = 0
  // res1[item+"_sup_tem_offset"] = 0
  //
  // res2[item+'_ret_tem_offset'] = item+'_ret_tem_offset'
  // res2[item+'_sup_tem_offset'] = item+'_sup_tem_offset'
  //
  // res3.push({
  //   "name": item+'_ret_tem_offset',
  //   "type": "DOUBLE"
  // })
  // res3.push({
  //   "name": item+'_sup_tem_offset',
  //   "type": "DOUBLE"
  // })
  // res4.push(item+'_ret_tem_offset')
  // res4.push(item+'_sup_tem_offset')
})

// console.log(JSON.stringify(res1))
// console.log(JSON.stringify(res2))
// console.log(JSON.stringify(res3))
// console.log(JSON.stringify(res4))

let nameMap = {"sm_a0223d12-469c-42e5-91ff-c2308469c0e7":"HS1","b42529ad-1e38-44ba-a970-2dffaac0e989":"H1","266cf4b6-4028-4b75-9d48-251aa1ed811f":"H2","a3a6ca91-913c-45ac-bd3e-71fbb3c6c402":"H3","f30b9873-3cc4-4de2-afd7-20938b2e05fd":"H4","4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d":"H5","ce01bdbc-5e43-44b7-b6fc-2576732455d2":"H6","73b46daf-d42d-48c3-9488-2cee279fec41":"H7","46104474-a8e5-4b32-b69f-f8758774b784":"H8","409e2b31-8d6d-4733-8004-6089a5dda855":"H9","4d94f835-7c59-4ad0-a39d-2a90f1f80d79":"H10","ac0d9010-bba2-4d53-91b3-029ae5207345":"H11","ab7885ae-099d-4b00-a3ae-19897462f77a":"H12","e1f35436-a1ae-41d0-bd29-b893afd318f2":"H13","096715ab-702c-44b1-8989-0317178c48f1":"H15","747ed9de-4caa-494e-aa1d-8008d501f8e0":"H16","ef1757e3-06cd-43b1-8cc3-d088b50065e7":"H17","0a3e11a5-dca8-461f-b168-7ca7c2aa3122":"H18","441aabd9-43a9-4395-b596-f94ee371c9a5":"H19","a58ad4ff-7488-44de-aeda-7056c6bb667a":"H20","c5b9bb35-6deb-4066-b638-df1920064a40":"H21","0946f809-6e40-4d0f-bd98-032ce57b105d":"H22","cc36c170-a62b-4d58-a53d-df4e8b628809":"H23","7117c79a-b3b9-450a-8b82-fbbf3af271da":"H24","fe5e3396-9059-417c-88d7-4aa6448c641e":"H25","ee8daff2-5a52-443d-bfb3-6b9786b91894":"H26","e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c":"H27","b15bb406-e07f-41ef-9994-9d94acbad115":"H28_H","7a7fe618-214c-477d-bcae-1fd003fd47a0":"H28_M","18fe049d-76ee-40f9-b0a9-00a47f2e1fd3":"H28_L","4f1e3458-8f71-4544-ad28-368a35bf55d2":"H29","151f37ea-b0cf-4d33-8c23-8ecf8a4950dd":"H31","b479cee0-f702-462c-afcc-dde60e1dae26":"H33","38d25e5f-37c9-472d-9a91-ddb7ae0229ee":"H34","7a6c83a1-6668-45a8-994c-98ccc523fc85":"H35","94768ab2-55bd-44e7-a66f-3bad8e7ca0cd":"H36","c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a":"H37","a274d704-5bbd-498d-8c3b-f34d0c94a312":"H38","5780ca0f-8314-4ccc-adc5-6aae77a96678":"H39","2d69300e-c87b-41c9-af27-9db83c13124a":"H40","be18e6c9-f444-45df-afb0-f97ba60d8021":"H41","75ba66df-ed3f-41ae-9a8f-67986595172c":"H42","500deff6-cd87-44fb-86e6-c1fc418afb30":"H43","dfaa38e4-b56e-408f-8eeb-cf62044ad4e5":"H44","b6f29c99-45ab-45f6-a96d-35043e596ebf":"H45","f4f44852-3895-4138-a860-fadf602486b7":"H46","6e704d46-8f69-4a08-a2e9-54878ac543e9":"H47","f0468692-ae50-44a0-a0c5-3f6aec9d7f27":"H48","324f589d-f646-446b-98c2-c2aca2ee97fc":"H49","32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b":"H50","9dee2c27-b1c6-4950-ba24-d9408fa50366":"H51","f7cd7edf-3513-445e-b072-6688f22889f0":"H52","ec327a73-703f-4b7d-a4db-b9dc7d7a007c":"H53_H","7c991498-0bbe-44ea-8462-86ad11cccd61":"H53_L","88a89d45-0831-4c06-81ae-9033440f9e0d":"H54","4ffcdaed-d332-498d-8309-e0a26341ca46":"H55","4fdfa4cf-3d74-47a7-a327-d90976e19af9":"H56","dc3f2349-6bbc-4161-ac54-89de73ba2999":"H57","9f34e840-dd46-4ba8-83c2-22f0a9df2205":"H58","80c1ed83-8d91-42e9-bfa7-97ab229587c3":"H59","0054fd1f-7df7-4c0f-b788-40bae223920c":"H60","19ed6586-2e9b-47c6-bb36-76c1fa54d4e3":"H61","8f8ba1df-0fc1-42ac-aa10-f874f9d168eb":"H62","08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2":"H63","fb8877c7-ec5c-46d2-91af-dde97eb81ef2":"H64","246fa455-8dcc-4cbe-8286-26439feb7d7a":"H65","13565321-edf0-4c73-a6fd-b96db89be16f":"H66","92d56709-b24e-4bcd-87a8-d21224221cf7":"H67","3b4ec881-6dfa-496c-80c0-d614d40fb4c7":"H68","2929b3ad-9170-45be-bc14-77ad3f0d656b":"H69","05a5d05e-fc3d-4557-afba-dceffc0bb5f1":"H70","bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033":"H71","33bbc8b8-e2d3-4e42-807d-ea8513621642":"H72","e8c17621-8906-451c-b196-26e4cfe5fe0f":"H73","b986e515-d4d5-48f4-b67b-a39fea6fd9f2":"H74","939e2f11-92b3-4a3a-81aa-39b8078500fd":"H75","6b2a0c3a-30db-4886-a8da-65c0753aa30a":"H76","52cecd73-bf64-4efd-95bf-e1f22362fc3b":"H77","b113143c-8e53-459e-a533-06dcb55df3fc":"H78","addf3e51-f873-41cf-b6db-7e7122f4b3b9":"H79","d11c3995-9c4e-4723-8056-9c66bc0faeb0":"H80","8f6e3431-e8e1-44c3-945e-da4915cefe73":"H81","7cb048be-f7c5-4555-8718-5b23b02b0333":"H82","296bd631-fb9d-49ec-a8e8-e93139f0c713":"H83","73826f02-776d-4267-83ef-0fa34464b19d":"H84","3249afaf-82a1-459c-919b-dbc4a995cb4b":"H85_H","f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159":"H85_L","74324b6a-cabe-4b37-886b-59e1874fb764":"H86","408e509b-e95f-4f60-9f81-b18cb421f58d":"H87_H","424f2b3c-3602-4907-ac6a-5718f600e61d":"H88","3301c33a-5fb6-48a1-bb18-5a2421aaacea":"H90","a66fe5ad-7556-46b9-84c9-f2283977379a":"H91","f6830324-db08-4d18-87b6-17142a9ba261":"H92","d215d902-db94-4e6b-b1d2-76924f8585d1":"H93","6b82ff48-f998-4df8-96e9-04f4a04593d2":"H94","207d8659-160e-471f-b8bc-5068863873ec":"H95","3f6370d5-66c0-40f0-b054-96833ad57867":"H96","bce82b14-4ba0-4dfd-9c3a-42e8d841b047":"H97","b2bbbdd5-90d3-46c6-8574-623c5c528929":"H98","3e46a853-928f-49ac-9d0a-171ef1646384":"H100","d898574b-ca0f-48ff-8404-2a17171787d4":"H101","8e4278f8-5626-4f47-b428-8ae4fe4181cf":"H102","145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d":"H103","7a234a72-758d-480e-aa00-aa4b09a22977":"H104","cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b":"H105","27ed4d57-bd91-4a14-bf09-d2ac328730f4":"H106","fc32a6bf-4147-4555-b0b3-d9ade7814645":"H107","2744cee8-9b13-4c7b-947f-e72b2e54547f":"H108","3a319a8b-754f-4449-b17e-1d92c0c9b2b7":"H109"}

let arr =  [
  {
    "condition": "uid==\"sm_a0223d12-469c-42e5-91ff-c2308469c0e7\"",
    "support_min_tem_12": "HS1_support_min_tem_12"
  },
  {
    "condition": "uid==\"b42529ad-1e38-44ba-a970-2dffaac0e989\"",
    "support_min_tem_12": "H1_support_min_tem_12"
  },
  {
    "condition": "uid==\"266cf4b6-4028-4b75-9d48-251aa1ed811f\"",
    "support_min_tem_12": "H2_support_min_tem_12"
  },
  {
    "condition": "uid==\"a3a6ca91-913c-45ac-bd3e-71fbb3c6c402\"",
    "support_min_tem_12": "H3_support_min_tem_12"
  },
  {
    "condition": "uid==\"f30b9873-3cc4-4de2-afd7-20938b2e05fd\"",
    "support_min_tem_12": "H4_support_min_tem_12"
  },
  {
    "condition": "uid==\"4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d\"",
    "support_min_tem_12": "H5_support_min_tem_12"
  },
  {
    "condition": "uid==\"ce01bdbc-5e43-44b7-b6fc-2576732455d2\"",
    "support_min_tem_12": "H6_support_min_tem_12"
  },
  {
    "condition": "uid==\"73b46daf-d42d-48c3-9488-2cee279fec41\"",
    "support_min_tem_12": "H7_support_min_tem_12"
  },
  {
    "condition": "uid==\"46104474-a8e5-4b32-b69f-f8758774b784\"",
    "support_min_tem_12": "H8_support_min_tem_12"
  },
  {
    "condition": "uid==\"409e2b31-8d6d-4733-8004-6089a5dda855\"",
    "support_min_tem_12": "H9_support_min_tem_12"
  },
  {
    "condition": "uid==\"4d94f835-7c59-4ad0-a39d-2a90f1f80d79\"",
    "support_min_tem_12": "H10_support_min_tem_12"
  },
  {
    "condition": "uid==\"ac0d9010-bba2-4d53-91b3-029ae5207345\"",
    "support_min_tem_12": "H11_support_min_tem_12"
  },
  {
    "condition": "uid==\"ab7885ae-099d-4b00-a3ae-19897462f77a\"",
    "support_min_tem_12": "H12_support_min_tem_12"
  },
  {
    "condition": "uid==\"e1f35436-a1ae-41d0-bd29-b893afd318f2\"",
    "support_min_tem_12": "H13_support_min_tem_12"
  },
  {
    "condition": "uid==\"096715ab-702c-44b1-8989-0317178c48f1\"",
    "support_min_tem_12": "H15_support_min_tem_12"
  },
  {
    "condition": "uid==\"747ed9de-4caa-494e-aa1d-8008d501f8e0\"",
    "support_min_tem_12": "H16_support_min_tem_12"
  },
  {
    "condition": "uid==\"ef1757e3-06cd-43b1-8cc3-d088b50065e7\"",
    "support_min_tem_12": "H17_support_min_tem_12"
  },
  {
    "condition": "uid==\"0a3e11a5-dca8-461f-b168-7ca7c2aa3122\"",
    "support_min_tem_12": "H18_support_min_tem_12"
  },
  {
    "condition": "uid==\"441aabd9-43a9-4395-b596-f94ee371c9a5\"",
    "support_min_tem_12": "H19_support_min_tem_12"
  },
  {
    "condition": "uid==\"a58ad4ff-7488-44de-aeda-7056c6bb667a\"",
    "support_min_tem_12": "H20_support_min_tem_12"
  },
  {
    "condition": "uid==\"c5b9bb35-6deb-4066-b638-df1920064a40\"",
    "support_min_tem_12": "H21_support_min_tem_12"
  },
  {
    "condition": "uid==\"0946f809-6e40-4d0f-bd98-032ce57b105d\"",
    "support_min_tem_12": "H22_support_min_tem_12"
  },
  {
    "condition": "uid==\"cc36c170-a62b-4d58-a53d-df4e8b628809\"",
    "support_min_tem_12": "H23_support_min_tem_12"
  },
  {
    "condition": "uid==\"7117c79a-b3b9-450a-8b82-fbbf3af271da\"",
    "support_min_tem_12": "H24_support_min_tem_12"
  },
  {
    "condition": "uid==\"fe5e3396-9059-417c-88d7-4aa6448c641e\"",
    "support_min_tem_12": "H25_support_min_tem_12"
  },
  {
    "condition": "uid==\"ee8daff2-5a52-443d-bfb3-6b9786b91894\"",
    "support_min_tem_12": "H26_support_min_tem_12"
  },
  {
    "condition": "uid==\"e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c\"",
    "support_min_tem_12": "H27_support_min_tem_12"
  },
  {
    "condition": "uid==\"b15bb406-e07f-41ef-9994-9d94acbad115\"",
    "support_min_tem_12": "H28_H_support_min_tem_12"
  },
  {
    "condition": "uid==\"7a7fe618-214c-477d-bcae-1fd003fd47a0\"",
    "support_min_tem_12": "H28_M_support_min_tem_12"
  },
  {
    "condition": "uid==\"18fe049d-76ee-40f9-b0a9-00a47f2e1fd3\"",
    "support_min_tem_12": "H28_L_support_min_tem_12"
  },
  {
    "condition": "uid==\"4f1e3458-8f71-4544-ad28-368a35bf55d2\"",
    "support_min_tem_12": "H29_support_min_tem_12"
  },
  {
    "condition": "uid==\"151f37ea-b0cf-4d33-8c23-8ecf8a4950dd\"",
    "support_min_tem_12": "H31_support_min_tem_12"
  },
  {
    "condition": "uid==\"b479cee0-f702-462c-afcc-dde60e1dae26\"",
    "support_min_tem_12": "H33_support_min_tem_12"
  },
  {
    "condition": "uid==\"38d25e5f-37c9-472d-9a91-ddb7ae0229ee\"",
    "support_min_tem_12": "H34_support_min_tem_12"
  },
  {
    "condition": "uid==\"7a6c83a1-6668-45a8-994c-98ccc523fc85\"",
    "support_min_tem_12": "H35_support_min_tem_12"
  },
  {
    "condition": "uid==\"94768ab2-55bd-44e7-a66f-3bad8e7ca0cd\"",
    "support_min_tem_12": "H36_support_min_tem_12"
  },
  {
    "condition": "uid==\"c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a\"",
    "support_min_tem_12": "H37_support_min_tem_12"
  },
  {
    "condition": "uid==\"a274d704-5bbd-498d-8c3b-f34d0c94a312\"",
    "support_min_tem_12": "H38_support_min_tem_12"
  },
  {
    "condition": "uid==\"5780ca0f-8314-4ccc-adc5-6aae77a96678\"",
    "support_min_tem_12": "H39_support_min_tem_12"
  },
  {
    "condition": "uid==\"2d69300e-c87b-41c9-af27-9db83c13124a\"",
    "support_min_tem_12": "H40_support_min_tem_12"
  },
  {
    "condition": "uid==\"be18e6c9-f444-45df-afb0-f97ba60d8021\"",
    "support_min_tem_12": "H41_support_min_tem_12"
  },
  {
    "condition": "uid==\"75ba66df-ed3f-41ae-9a8f-67986595172c\"",
    "support_min_tem_12": "H42_support_min_tem_12"
  },
  {
    "condition": "uid==\"500deff6-cd87-44fb-86e6-c1fc418afb30\"",
    "support_min_tem_12": "H43_support_min_tem_12"
  },
  {
    "condition": "uid==\"dfaa38e4-b56e-408f-8eeb-cf62044ad4e5\"",
    "support_min_tem_12": "H44_support_min_tem_12"
  },
  {
    "condition": "uid==\"b6f29c99-45ab-45f6-a96d-35043e596ebf\"",
    "support_min_tem_12": "H45_support_min_tem_12"
  },
  {
    "condition": "uid==\"f4f44852-3895-4138-a860-fadf602486b7\"",
    "support_min_tem_12": "H46_support_min_tem_12"
  },
  {
    "condition": "uid==\"6e704d46-8f69-4a08-a2e9-54878ac543e9\"",
    "support_min_tem_12": "H47_support_min_tem_12"
  },
  {
    "condition": "uid==\"f0468692-ae50-44a0-a0c5-3f6aec9d7f27\"",
    "support_min_tem_12": "H48_support_min_tem_12"
  },
  {
    "condition": "uid==\"324f589d-f646-446b-98c2-c2aca2ee97fc\"",
    "support_min_tem_12": "H49_support_min_tem_12"
  },
  {
    "condition": "uid==\"32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b\"",
    "support_min_tem_12": "H50_support_min_tem_12"
  },
  {
    "condition": "uid==\"9dee2c27-b1c6-4950-ba24-d9408fa50366\"",
    "support_min_tem_12": "H51_support_min_tem_12"
  },
  {
    "condition": "uid==\"f7cd7edf-3513-445e-b072-6688f22889f0\"",
    "support_min_tem_12": "H52_support_min_tem_12"
  },
  {
    "condition": "uid==\"ec327a73-703f-4b7d-a4db-b9dc7d7a007c\"",
    "support_min_tem_12": "H53_H_support_min_tem_12"
  },
  {
    "condition": "uid==\"7c991498-0bbe-44ea-8462-86ad11cccd61\"",
    "support_min_tem_12": "H53_L_support_min_tem_12"
  },
  {
    "condition": "uid==\"88a89d45-0831-4c06-81ae-9033440f9e0d\"",
    "support_min_tem_12": "H54_support_min_tem_12"
  },
  {
    "condition": "uid==\"4ffcdaed-d332-498d-8309-e0a26341ca46\"",
    "support_min_tem_12": "H55_support_min_tem_12"
  },
  {
    "condition": "uid==\"4fdfa4cf-3d74-47a7-a327-d90976e19af9\"",
    "support_min_tem_12": "H56_support_min_tem_12"
  },
  {
    "condition": "uid==\"dc3f2349-6bbc-4161-ac54-89de73ba2999\"",
    "support_min_tem_12": "H57_support_min_tem_12"
  },
  {
    "condition": "uid==\"9f34e840-dd46-4ba8-83c2-22f0a9df2205\"",
    "support_min_tem_12": "H58_support_min_tem_12"
  },
  {
    "condition": "uid==\"80c1ed83-8d91-42e9-bfa7-97ab229587c3\"",
    "support_min_tem_12": "H59_support_min_tem_12"
  },
  {
    "condition": "uid==\"0054fd1f-7df7-4c0f-b788-40bae223920c\"",
    "support_min_tem_12": "H60_support_min_tem_12"
  },
  {
    "condition": "uid==\"19ed6586-2e9b-47c6-bb36-76c1fa54d4e3\"",
    "support_min_tem_12": "H61_support_min_tem_12"
  },
  {
    "condition": "uid==\"8f8ba1df-0fc1-42ac-aa10-f874f9d168eb\"",
    "support_min_tem_12": "H62_support_min_tem_12"
  },
  {
    "condition": "uid==\"08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2\"",
    "support_min_tem_12": "H63_support_min_tem_12"
  },
  {
    "condition": "uid==\"fb8877c7-ec5c-46d2-91af-dde97eb81ef2\"",
    "support_min_tem_12": "H64_support_min_tem_12"
  },
  {
    "condition": "uid==\"246fa455-8dcc-4cbe-8286-26439feb7d7a\"",
    "support_min_tem_12": "H65_support_min_tem_12"
  },
  {
    "condition": "uid==\"13565321-edf0-4c73-a6fd-b96db89be16f\"",
    "support_min_tem_12": "H66_support_min_tem_12"
  },
  {
    "condition": "uid==\"92d56709-b24e-4bcd-87a8-d21224221cf7\"",
    "support_min_tem_12": "H67_support_min_tem_12"
  },
  {
    "condition": "uid==\"3b4ec881-6dfa-496c-80c0-d614d40fb4c7\"",
    "support_min_tem_12": "H68_support_min_tem_12"
  },
  {
    "condition": "uid==\"2929b3ad-9170-45be-bc14-77ad3f0d656b\"",
    "support_min_tem_12": "H69_support_min_tem_12"
  },
  {
    "condition": "uid==\"05a5d05e-fc3d-4557-afba-dceffc0bb5f1\"",
    "support_min_tem_12": "H70_support_min_tem_12"
  },
  {
    "condition": "uid==\"bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033\"",
    "support_min_tem_12": "H71_support_min_tem_12"
  },
  {
    "condition": "uid==\"33bbc8b8-e2d3-4e42-807d-ea8513621642\"",
    "support_min_tem_12": "H72_support_min_tem_12"
  },
  {
    "condition": "uid==\"e8c17621-8906-451c-b196-26e4cfe5fe0f\"",
    "support_min_tem_12": "H73_support_min_tem_12"
  },
  {
    "condition": "uid==\"b986e515-d4d5-48f4-b67b-a39fea6fd9f2\"",
    "support_min_tem_12": "H74_support_min_tem_12"
  },
  {
    "condition": "uid==\"939e2f11-92b3-4a3a-81aa-39b8078500fd\"",
    "support_min_tem_12": "H75_support_min_tem_12"
  },
  {
    "condition": "uid==\"6b2a0c3a-30db-4886-a8da-65c0753aa30a\"",
    "support_min_tem_12": "H76_support_min_tem_12"
  },
  {
    "condition": "uid==\"52cecd73-bf64-4efd-95bf-e1f22362fc3b\"",
    "support_min_tem_12": "H77_support_min_tem_12"
  },
  {
    "condition": "uid==\"b113143c-8e53-459e-a533-06dcb55df3fc\"",
    "support_min_tem_12": "H78_support_min_tem_12"
  },
  {
    "condition": "uid==\"addf3e51-f873-41cf-b6db-7e7122f4b3b9\"",
    "support_min_tem_12": "H79_support_min_tem_12"
  },
  {
    "condition": "uid==\"d11c3995-9c4e-4723-8056-9c66bc0faeb0\"",
    "support_min_tem_12": "H80_support_min_tem_12"
  },
  {
    "condition": "uid==\"8f6e3431-e8e1-44c3-945e-da4915cefe73\"",
    "support_min_tem_12": "H81_support_min_tem_12"
  },
  {
    "condition": "uid==\"7cb048be-f7c5-4555-8718-5b23b02b0333\"",
    "support_min_tem_12": "H82_support_min_tem_12"
  },
  {
    "condition": "uid==\"296bd631-fb9d-49ec-a8e8-e93139f0c713\"",
    "support_min_tem_12": "H83_support_min_tem_12"
  },
  {
    "condition": "uid==\"73826f02-776d-4267-83ef-0fa34464b19d\"",
    "support_min_tem_12": "H84_support_min_tem_12"
  },
  {
    "condition": "uid==\"3249afaf-82a1-459c-919b-dbc4a995cb4b\"",
    "support_min_tem_12": "H85_H_support_min_tem_12"
  },
  {
    "condition": "uid==\"f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159\"",
    "support_min_tem_12": "H85_L_support_min_tem_12"
  },
  {
    "condition": "uid==\"74324b6a-cabe-4b37-886b-59e1874fb764\"",
    "support_min_tem_12": "H86_support_min_tem_12"
  },
  {
    "condition": "uid==\"408e509b-e95f-4f60-9f81-b18cb421f58d\"",
    "support_min_tem_12": "H87_H_support_min_tem_12"
  },
  {
    "condition": "uid==\"424f2b3c-3602-4907-ac6a-5718f600e61d\"",
    "support_min_tem_12": "H88_support_min_tem_12"
  },
  {
    "condition": "uid==\"3301c33a-5fb6-48a1-bb18-5a2421aaacea\"",
    "support_min_tem_12": "H90_support_min_tem_12"
  },
  {
    "condition": "uid==\"a66fe5ad-7556-46b9-84c9-f2283977379a\"",
    "support_min_tem_12": "H91_support_min_tem_12"
  },
  {
    "condition": "uid==\"f6830324-db08-4d18-87b6-17142a9ba261\"",
    "support_min_tem_12": "H92_support_min_tem_12"
  },
  {
    "condition": "uid==\"d215d902-db94-4e6b-b1d2-76924f8585d1\"",
    "support_min_tem_12": "H93_support_min_tem_12"
  },
  {
    "condition": "uid==\"6b82ff48-f998-4df8-96e9-04f4a04593d2\"",
    "support_min_tem_12": "H94_support_min_tem_12"
  },
  {
    "condition": "uid==\"207d8659-160e-471f-b8bc-5068863873ec\"",
    "support_min_tem_12": "H95_support_min_tem_12"
  },
  {
    "condition": "uid==\"3f6370d5-66c0-40f0-b054-96833ad57867\"",
    "support_min_tem_12": "H96_support_min_tem_12"
  },
  {
    "condition": "uid==\"bce82b14-4ba0-4dfd-9c3a-42e8d841b047\"",
    "support_min_tem_12": "H97_support_min_tem_12"
  },
  {
    "condition": "uid==\"b2bbbdd5-90d3-46c6-8574-623c5c528929\"",
    "support_min_tem_12": "H98_support_min_tem_12"
  },
  {
    "condition": "uid==\"3e46a853-928f-49ac-9d0a-171ef1646384\"",
    "support_min_tem_12": "H100_support_min_tem_12"
  },
  {
    "condition": "uid==\"d898574b-ca0f-48ff-8404-2a17171787d4\"",
    "support_min_tem_12": "H101_support_min_tem_12"
  },
  {
    "condition": "uid==\"8e4278f8-5626-4f47-b428-8ae4fe4181cf\"",
    "support_min_tem_12": "H102_support_min_tem_12"
  },
  {
    "condition": "uid==\"145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d\"",
    "support_min_tem_12": "H103_support_min_tem_12"
  },
  {
    "condition": "uid==\"7a234a72-758d-480e-aa00-aa4b09a22977\"",
    "support_min_tem_12": "H104_support_min_tem_12"
  },
  {
    "condition": "uid==\"cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b\"",
    "support_min_tem_12": "H105_support_min_tem_12"
  },
  {
    "condition": "uid==\"27ed4d57-bd91-4a14-bf09-d2ac328730f4\"",
    "support_min_tem_12": "H106_support_min_tem_12"
  },
  {
    "condition": "uid==\"fc32a6bf-4147-4555-b0b3-d9ade7814645\"",
    "support_min_tem_12": "H107_support_min_tem_12"
  },
  {
    "condition": "uid==\"2744cee8-9b13-4c7b-947f-e72b2e54547f\"",
    "support_min_tem_12": "H108_support_min_tem_12"
  },
  {
    "condition": "uid==\"3a319a8b-754f-4449-b17e-1d92c0c9b2b7\"",
    "support_min_tem_12": "H109_support_min_tem_12"
  }
]
arr.forEach(item => {
  for(let i in item) {
    if(i !='condition') {
      let name = nameMap[item['condition'].slice(6,-1)]
      item[i] = item[i] + " + "+name+"_sup_tem_offset"
    }
  }
})
console.log(JSON.stringify(arr))
