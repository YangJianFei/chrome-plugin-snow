/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Friday, June 17th 2022, 4:49:28 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 
 */

let snowTimer = 0;
const closeAdvert = () => {
    const num = 50;
    const advert = document.querySelector('html>.adsbygoogle');
    if (advert) {
        advert.remove();
    } else if (snowTimer < num) {
        setTimeout(closeAdvert, 500);
        snowTimer++;
    }
}

closeAdvert();