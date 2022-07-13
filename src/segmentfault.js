/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Wednesday, June 22nd 2022, 10:18:21 am
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */

let sfTimer = 0;
const closeModal = () => {
    const num = 50;
    const button = document.querySelector('.modal-fullscreen-sm-down .btn-close');
    if (button) {
        button.click();
    } else if (sfTimer < num) {
        setTimeout(closeModal, 500);
        sfTimer++;
    }
}

closeModal();
