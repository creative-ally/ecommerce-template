import React from 'react';

const Chat = () => {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"d2d8408c44537256e8918c7f6491cce4","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    return (
        <div>
            
        </div>
    );
};

export default Chat;