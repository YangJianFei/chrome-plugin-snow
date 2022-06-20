/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Monday, June 20th 2022, 10:02:28 am
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */

let timer = 0;
const closeAgree = () => {
    const num = 50;
    const advert = document.querySelector('.agreement-content');
    if (advert) {
        advert.parentElement.parentElement.parentElement.parentElement.querySelector('.ivu-modal-close').click();
        document.querySelectorAll('.ivu-checkbox-input').forEach(checkbox => {
            !checkbox.checked && checkbox.click();
        });
    } else if (timer < num) {
        setTimeout(closeAgree, 500);
        timer++;
    }
}

closeAgree();