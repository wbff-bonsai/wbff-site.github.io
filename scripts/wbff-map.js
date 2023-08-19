function buildContentStr(positionRegion, pageLink, chairmanName, imgLink) {
    const domain = "https://wbffbonsai01.wixsite.com/website/";
    const url = domain + pageLink;
    let str = 
    '<div id="content">' +

    '<h1 id="firstHeading" class="firstHeading">' + positionRegion + '</h1>' +

    '<div id="bodyContent">' +
        '<div id="chairmanName">' +
            '<h3>' + chairmanName + '</h3>' +
        '</div>' +

        '<div id="pageLink">' +
            '<a href="' + url + '"target="_blank" rel="noopener noreferrer">' +
                '<h3>Go to page</h3>' +
            '</a>' +
        '</div>' +

        '<div id="profileImage">' +
            '<img src="' + imgLink + '" alt="image">' +
        '</div>' +

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
    // Australia
    const australia = { lat: -35.26444463463442, lng: 149.12968437315226 };
    const australiaContent = buildContentStr('WBFF Treasurer & Director - Australia/New Zealand Region', 'wbffaustralianewzealand', 'Mr. Frank Kelly', 'https://static.wixstatic.com/media/82b989_ff8289ab7a3b4c58ae11a40c701b2ec0~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Frank%20Kelly.jpg');
    coordList.push(australia);
    contentList.push(australiaContent);
    labelList.push('Australia Region');

    // China
    const china = { lat: 23.15893573688872, lng: 113.26640981886378 };
    const chinaContent = buildContentStr("Director - China Region", 'wbffchina', 'Mr. Chen Chang', 'https://static.wixstatic.com/media/82b989_8b980e5b303f4f759c4e4fa228e8f3cb~mv2.jpg/v1/crop/x_30,y_0,w_315,h_360/fill/w_391,h_448,al_c,lg_1,q_80,enc_auto/Chen_Chan.jpg');
    coordList.push(china);
    contentList.push(chinaContent);
    labelList.push("China Region");

    // Europe
    const europe = { lat: 50.580783823557454, lng: 4.446577044839831 };
    const europeContent = buildContentStr("Director - Europe Region", 'wbffeurope', 'Mr. Marc Noelanders', 'https://static.wixstatic.com/media/08cc85_b2fc980fd07749aeaad9162231d9be51~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Marc%20Noelanders.jpg');
    coordList.push(europe);
    contentList.push(europeContent);
    labelList.push("Europe Region");

    // North America
    const northAmerica = { lat: 41.90306596332604, lng: -87.62705067399327 };
    const northAmericaContent = buildContentStr("Director - North America Region", 'wbffnorthamerica', 'Mr. Chris Baker', 'https://static.wixstatic.com/media/82b989_c534bfea252343a3854b28d66458a32e~mv2.jpg/v1/fill/w_391,h_448,al_c,lg_1,q_80,enc_auto/Chris%20Baker_edited.jpg');
    coordList.push(northAmerica);
    contentList.push(northAmericaContent);
    labelList.push("North America Region");

    // Asia Pacific
    const asiaPacific = { lat: 3.137814218543553, lng: 101.68115180645177 };
    const asiaPacificContent = buildContentStr("Director - Asia Pacific Region", 'wbffasiapacific', 'Dato\' Pui Khiang Khang', 'https://static.wixstatic.com/media/08cc85_ac14082181584cd1843f856a96a87a3e~mv2.jpg/v1/crop/x_0,y_0,w_636,h_728/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Dato%20Pui%20Khiang%20Khang%20potrait_edited.jpg');
    coordList.push(asiaPacific);
    contentList.push(asiaPacificContent);
    labelList.push("Asia Pacific Region");

    // Africa
    const africa = { lat: -26.19704648122439, lng: 28.0469122012619 };
    const africaContent = buildContentStr("WBFF Secretary & Director - Africa Region", 'wbffafrica', 'Mr. Jonathan Cain', 'https://static.wixstatic.com/media/82b989_d19e7d70d1f34260b7121a79d81e21a3~mv2.jpg/v1/fill/w_385,h_440,al_c,lg_1,q_80,enc_auto/Jonathan%20photo.jpg');
    coordList.push(africa);
    contentList.push(africaContent);
    labelList.push("Africa Region");

    // Latin America
    const latinAmerica = { lat: 19.263482327457634, lng: -99.10619473875953 };
    const latinAmericaContent = buildContentStr("Director - Latin America Region", 'wbfflatinamerica', 'Mr. Enrique Castaño', 'https://static.wixstatic.com/media/82b989_605cd1c75dae4b2ba9b8739bff608d41~mv2.jpg/v1/fill/w_361,h_413,al_c,lg_1,q_80,enc_auto/Enrique%20Casta%C3%B1o%20bonsai.jpg');
    coordList.push(latinAmerica);
    contentList.push(latinAmericaContent);
    labelList.push("Latin America Region");

    // South Asia
    const southAsia = { lat: 11.23639792296303, lng: 78.66303253421954 };
    const southAsiaRegion = buildContentStr("Director - South Asia Region", 'wbffsouthasia', 'Mr. Ravindran Damodaran', 'https://static.wixstatic.com/media/82b989_b1976e24878d4cd3a94eb59e74a6e413~mv2.jpg/v1/fill/w_246,h_282,al_c,lg_1,q_80,enc_auto/Ravindran%20Damodharan.jpg');
    coordList.push(southAsia);
    contentList.push(southAsiaRegion);
    labelList.push("South Asia Region");

    // Japan
    const japan = { lat: 35.76494055837274, lng: 139.5933522892513 };
    const japanContent = buildContentStr("Director - Japan Region", 'wbffjapan', 'Mr. Fumio Aokage', 'https://static.wixstatic.com/media/82b989_b9ec913a3ec24cb5a8a0f3b0dc088f86~mv2.jpg/v1/fill/w_391,h_448,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Fumio%20Aokage.jpg');
    coordList.push(japan);
    contentList.push(japanContent);
    labelList.push("Japan");

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

        // To display only single pin: 
        // https://stackoverflow.com/questions/52729351/google-maps-api-close-infowindow-automatically
        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
            });
        });
    }
}

window.initMap = initMap;
