function buildContentStr(header, path, imgLink) {
    const domain = "https://wbffbonsai01.wixsite.com/website/";
    const url = domain + path
    let str =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">' + header + '</h1>' +
        '<div id="bodyContent">' +
        '<div id="pageLink">' + 
        '<a href="' + url + '"/>' +
        '<h3>Go to page</h3>' + 
        '</div>' + 
        '<div id="profileImage">' + 
        '<img src="' + imgLink + '" alt="image" width="300" height="300">' +
        '</div>' + 
        '</div>' +
        '</div>';

    return str;
}

function buildDirectorContentStr(header, imgLink) {
    let str =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">' + header + '</h1>' +
        '<div id="bodyContent">' +
        '<img src="' + imgLink + '" alt="image" width="300" height="300">' +
        '</div>' +
        '</div>';

    return str;
}

function initMap() {
    let labelList = [];
    let coordList = [];
    let contentList = [];
    // Coord and content
    // WBFF region location
    const australia = { lat: -25.21548476148946, lng: 133.7724067020222 };
    const australiaContent = buildContentStr('Australia Region', 'australia-new-zealand', 'https://static.wixstatic.com/media/08cc85_fd3df5096e764ef58e072b8ee48f875c~mv2.jpg/v1/fill/w_430,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jonathan%20photo.jpg');
    coordList.push(australia);
    contentList.push(australiaContent);
    labelList.push('Australia Region');

    const china = { lat: 36.123662277020905, lng: 104.19777434787636 };
    const chinaContent = buildContentStr("China Region", 'china', 'https://static.wixstatic.com/media/08cc85_c71601ded3d84e02a0dd1fcd63ec55a5~mv2.jpg/v1/fill/w_396,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Chen%20Chang%20potrait.jpg');
    coordList.push(china);
    contentList.push(chinaContent);
    labelList.push("China Region");

    const europe = { lat: 55.72065367247533, lng: 16.03710042365565 };
    const europeContent = buildContentStr("Europe Region", 'europe', 'https://static.wixstatic.com/media/08cc85_b2fc980fd07749aeaad9162231d9be51~mv2.jpg/v1/fill/w_469,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Marc%20Noelanders.jpg');
    coordList.push(europe);
    contentList.push(europeContent);
    labelList.push("Europe Region");

    const unitedState = { lat: 38.7828250523156, lng: -95.65680488120255 };
    const unitedStateContent = buildContentStr("United State", 'north-america', 'https://static.wixstatic.com/media/08cc85_435c4601ea254bd6b31c40288b01f73a~mv2.jpg/v1/fill/w_419,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/08cc85_435c4601ea254bd6b31c40288b01f73a~mv2.jpg');
    coordList.push(unitedState);
    contentList.push(unitedStateContent);
    labelList.push("United State");

    const philippines = { lat: 13.89324317230057, lng: 121.81072242947447 };
    const philippinesContent = buildContentStr("Philippines", 'asia-pacific', 'https://static.wixstatic.com/media/08cc85_b8ee610e7ec749028fa05652c4baa41c~mv2.jpg/v1/crop/x_0,y_21,w_636,h_625/fill/w_504,h_495,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Dato%20Pui%20Khiang%20Khang%20potrait_edited.jpg');
    coordList.push(philippines);
    contentList.push(philippinesContent);
    labelList.push("Philippines");

    const bonstwana = { lat: -21.86377860273056, lng: 24.719940253661186 };
    const bonstwanaContent = buildContentStr("Bonstwana", 'copy-of-south-asia-region', 'https://static.wixstatic.com/media/08cc85_fd3df5096e764ef58e072b8ee48f875c~mv2.jpg/v1/fill/w_430,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jonathan%20photo.jpg'); // africa
    coordList.push(bonstwana);
    contentList.push(bonstwanaContent);
    labelList.push("Bonstwana");

    const latinAmerica = { lat: -3.1243689826876158, lng: -61.21577335084416 };
    const latinAmericaContent = buildContentStr("Latin America", 'latin-america', 'https://static.wixstatic.com/media/08cc85_bcc0b831d6bc466faae97bd5e7423abd~mv2.jpg/v1/fill/w_469,h_469,al_c,lg_1,q_80,enc_auto/officers_Enrique_Casta%C3%B1o.jpg');
    coordList.push(latinAmerica);
    contentList.push(latinAmericaContent);
    labelList.push("Latin America");

    const southAsia = { lat: 25.34311137860211, lng: 76.4504839054445 };
    const southAsiaRegion = buildContentStr("South Asia Region", 'south-asia-region', 'https://static.wixstatic.com/media/08cc85_8455d7f3e8144be7a69a9f013906dbfd~mv2.jpg/v1/fill/w_523,h_523,al_c,lg_1,q_80,enc_auto/Ravindran%20Damodharan%20Potrait.jpg');
    coordList.push(southAsia);
    contentList.push(southAsiaRegion);
    labelList.push("South Asia Region");

    const japan = { lat: 36.3319113370231, lng: 138.22745235022253 };
    const japanContent = buildContentStr("Japan", 'japan', 'https://static.wixstatic.com/media/82b989_b9ec913a3ec24cb5a8a0f3b0dc088f86~mv2.jpg/v1/fill/w_362,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Fumio%20Aokage.jpg');
    coordList.push(japan);
    contentList.push(japanContent);
    labelList.push("Japan");

    // WBFF director / chairman location
    const lindsayBebb = { lat: 37.68229644490672, lng: -122.40007572468382 };
    const lindsayBebbContent = buildDirectorContentStr("Mr. Lindsay Bebb", 'https://static.wixstatic.com/media/82b989_668cd648509344178241f5d5095778bc~mv2.jpg/v1/fill/w_391,h_448,al_c,lg_1,q_80,enc_auto/Lensay-Bebb.jpg');
    coordList.push(lindsayBebb);
    contentList.push(lindsayBebbContent);
    labelList.push("Mr. Lindsay Bebb");

    const kimSaeWon = { lat: 37.71668426843627, lng: 126.83721913238458 };
    const kimSaeWonContent = buildDirectorContentStr("Mr. Kim Sae Won", 'https://static.wixstatic.com/media/08cc85_f834c72b03e744d699c3bf159c4cfad4~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Kim%20Portrait%20_edited.jpg');
    coordList.push(kimSaeWon);
    contentList.push(kimSaeWonContent);
    labelList.push("Mr. Kim Sae Won");

    const naemiIwasaki = { lat: 33.85353977825175, lng: 132.76635797220652 };
    const naemiIwasakiContent = buildDirectorContentStr("Mrs. Naemi Iwasaki", 'https://static.wixstatic.com/media/82b989_8dc4fff0b9f542c686ef578c8c1b2ded~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Mrs_Naemi.jpg');
    coordList.push(naemiIwasaki);
    contentList.push(naemiIwasakiContent);
    labelList.push("Mrs. Naemi Iwasaki");

    const christianVos = { lat: 50.60868955612786, lng: 4.45287048461061 };
    const christianVosContent = buildDirectorContentStr("Mr. Christian Vos", 'https://static.wixstatic.com/media/08cc85_4648665ff80249edbebdc662b8f3826f~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Christian%20Vos.jpg');
    coordList.push(christianVos);
    contentList.push(christianVosContent);
    labelList.push("Mr. Christian Vos");

    const jonathanCain = { lat: -28.831764773080337, lng: 22.620001078398005 };
    const jonathanCainContent = buildDirectorContentStr("Mr. Jonathan Cain", 'https://static.wixstatic.com/media/82b989_d19e7d70d1f34260b7121a79d81e21a3~mv2.jpg/v1/fill/w_385,h_440,al_c,lg_1,q_80,enc_auto/Jonathan%20photo.jpg');
    coordList.push(jonathanCain);
    contentList.push(jonathanCainContent);
    labelList.push("Mr. Jonathan Cain");

    const frankKelly = { lat: -35.280577812779896, lng: 149.12999217432952 };
    const frankKellyContent = buildDirectorContentStr("Mr. Frank Kelly", 'https://static.wixstatic.com/media/82b989_ff8289ab7a3b4c58ae11a40c701b2ec0~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Frank%20Kelly.jpg');
    coordList.push(frankKelly);
    contentList.push(frankKellyContent);
    labelList.push("Mr. Frank Kelly");

    const chrisBaker = { lat: 41.90001551033712, lng: -87.6325755170049 };
    const chrisBakerContent = buildDirectorContentStr("Mr. Chris Baker", 'https://static.wixstatic.com/media/82b989_c534bfea252343a3854b28d66458a32e~mv2.jpg/v1/fill/w_391,h_448,al_c,lg_1,q_80,enc_auto/Chris%20Baker_edited.jpg');
    coordList.push(chrisBaker);
    contentList.push(chrisBakerContent);
    labelList.push("Mr. Chris Baker");

    const chenChang = { lat: 23.158945070321487, lng: 113.26228585169278 };
    const chenChangContent = buildDirectorContentStr("Mr. Chen Chang", 'https://static.wixstatic.com/media/82b989_8b980e5b303f4f759c4e4fa228e8f3cb~mv2.jpg/v1/crop/x_30,y_0,w_315,h_360/fill/w_391,h_448,al_c,lg_1,q_80,enc_auto/Chen_Chan.jpg');
    coordList.push(chenChang);
    contentList.push(chenChangContent);
    labelList.push("Mr. Chen Chang");

    const enriqueCastano = { lat: 24.426151262424234, lng: -102.6771115659595 };
    const enriqueCastanoContent = buildDirectorContentStr("Mr. Enrique Castaño", 'https://static.wixstatic.com/media/82b989_605cd1c75dae4b2ba9b8739bff608d41~mv2.jpg/v1/fill/w_361,h_413,al_c,lg_1,q_80,enc_auto/Enrique%20Casta%C3%B1o%20bonsai.jpg');
    coordList.push(enriqueCastano);
    contentList.push(enriqueCastanoContent);
    labelList.push("Mr. Enrique Castaño");

    const fumioAokage = { lat: 35.69359734718556, lng: 139.76709112874727 };
    const fumioAokageContent = buildDirectorContentStr("Mr. Fumio Aokage", 'https://static.wixstatic.com/media/82b989_b9ec913a3ec24cb5a8a0f3b0dc088f86~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Fumio%20Aokage.jpg');
    coordList.push(fumioAokage);
    contentList.push(fumioAokageContent);
    labelList.push("Mr. Fumio Aokage");

    const marcNoelanders = { lat: -12.2202208033062, lng: -52.31492755011455 };
    const marcNoelandersContent = buildDirectorContentStr("Mr. Marc Noelanders", 'https://static.wixstatic.com/media/08cc85_b2fc980fd07749aeaad9162231d9be51~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Marc%20Noelanders.jpg');
    coordList.push(marcNoelanders);
    contentList.push(marcNoelandersContent);
    labelList.push("Mr. Marc Noelanders");

    const ravindranDamodaran = { lat: 19.089244252347214, lng: 72.87981791951134 };
    const ravindranDamodaranContent = buildDirectorContentStr("Mr. Ravindran Damodaran", 'https://static.wixstatic.com/media/82b989_b1976e24878d4cd3a94eb59e74a6e413~mv2.jpg/v1/fill/w_246,h_282,al_c,lg_1,q_80,enc_auto/Ravindran%20Damodharan.jpg');
    coordList.push(ravindranDamodaran);
    contentList.push(ravindranDamodaranContent);
    labelList.push("Mr. Ravindran Damodaran");

    const datoPui = { lat: 3.138140548390537, lng: 101.68217847401785 };
    const datoPuiContent = buildDirectorContentStr("Dato' Pui Khiang Khang", 'https://static.wixstatic.com/media/08cc85_ac14082181584cd1843f856a96a87a3e~mv2.jpg/v1/crop/x_0,y_0,w_636,h_728/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Dato%20Pui%20Khiang%20Khang%20potrait_edited.jpg');
    coordList.push(datoPui);
    contentList.push(datoPuiContent);
    labelList.push("Dato' Pui Khiang Khang");

    const jackSustic = { lat: 38.91867035121777, lng: -77.03581737633469 };
    const jackSusticContent = buildDirectorContentStr("Mr. Jack Sustic", 'https://static.wixstatic.com/media/82b989_15b51aace1d0427ab9e5e55248cd40b5~mv2.png/v1/fill/w_391,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Jack%20Sustic.png');
    coordList.push(jackSustic);
    contentList.push(jackSusticContent);
    labelList.push("Mr. Jack Sustic");

    const huYunHua = { lat: 31.29158035617589, lng: 121.45520617020232 };
    const huYunHuaContent = buildDirectorContentStr("Mr. Hu Yun Hua", 'https://static.wixstatic.com/media/08cc85_cb39f0f24af541dda49d8eba9b4dd86b~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Hu%20Yun%20Hua.jpg');
    coordList.push(huYunHua);
    contentList.push(huYunHuaContent);
    labelList.push("Mr. Hu Yun Hua");

    const felixBLaughin = { lat: 35.98418136207438, lng: -79.01557925757172 };
    const felixBLaughinContent = buildDirectorContentStr("Mr. Felix B. Laughin", 'https://static.wixstatic.com/media/08cc85_c409c67eb8ce468eadace4d96b09bccd~mv2.jpg/v1/fill/w_366,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Felix%20potrait%202.jpg');
    coordList.push(felixBLaughin);
    contentList.push(felixBLaughinContent);
    labelList.push("Mr. Felix B. Laughin");

    // Init google map center
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: australia,        
        mapTypeId: google.maps.MapTypeId.HYBRID,
        labels: true
    });

    // Create marker, infowindow, and marker listener
    for (const [idx, value] of coordList.entries()) {
        const infowindow = new google.maps.InfoWindow({
            content: contentList[idx],
            ariaLabel: labelList[idx],
        });
        const marker = new google.maps.Marker({
            position: coordList[idx],
            map,
            title: labelList[idx]
        });

        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
            });
        });
    }
}

window.initMap = initMap;
