
let escapeHtml = (codes)=>{
   console.log(codes);
    let rules = [
        //type,replace,表示替换， class表示添加包裹标签价class
        {
            //<,>字符转义
            test: /\</,
            type: 'replace',
            content: '&lt;',
        },
        {
            //<,>字符转义
            test: /\>/,
            type: 'replace',
            content: '&gt;',
        },
        {
            //普通标签转换规则
            test: /&lt;|&gt;/,
            type: 'class',
            content:'escode-tag',
        },
    ];
    codes = codes


            //处理一般标签
            .replace(/(<.*?>)/g,'&mlt;span &class;="escape-tag"&mgt;$1&mlt;/span&mgt;')
            //处理doctype
            .replace(/(<!\DOCTYPE.*?>)/gi,'&mlt;span &class;="escape-docType"&mgt;$1&mlt;/span&mgt;')
            //id颜色高亮
            .replace(/(id=".*")/gi, '&mlt;span &class;="escape-id"&mgt;$1&mlt;/span&mgt;')
            //class颜色高亮
            .replace(/(class=".*")/gi, '&mlt;span &class;="escape-class"&mgt;$1&mlt;/span&mgt;')
            //基础开标签替换
            .replace(/\</g,'&lt;')
            //基础闭标签替换
            .replace(/\>/g,'&gt;')
            //替换自定义的标签标识
            .replace(/&mlt;/g,'<')
            //替换自定义的标签标识
            .replace(/&mgt;/g,'>')
            //替换自定义的class标识
            .replace(/&class;/g,'class');

    codes = `<pre class="escape-container"><code>${codes}</code></pre>`;
    console.log(codes);

  return codes;
};

export default escapeHtml;