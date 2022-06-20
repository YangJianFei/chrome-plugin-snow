/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Friday, June 17th 2022, 5:20:20 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 
 */

let timer = 0;
const closeModal = () => {
    const num = 50;
    const button = document.querySelector('.Modal-wrapper .Modal-closeButton');
    if (button) {
        button.click();
    } else if (timer < num) {
        setTimeout(closeModal, 500);
        timer++;
    }
}

closeModal();