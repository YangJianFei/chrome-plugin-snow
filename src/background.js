/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Friday, June 17th 2022, 3:50:21 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 
 */

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});
