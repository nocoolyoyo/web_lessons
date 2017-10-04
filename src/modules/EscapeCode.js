/*
*   代码输出页面转换模块，用于展示实例代码用
*   created by nocoolyoyo on 2017-09-29
*
* */
const EscapeCode = (codes)=>{

    codes = codes
            //处理一般标签
            .replace(/(<.*?>)/g,'&mlt;span &class;="escape-tag"&mgt;$1&mlt;/span&mgt;')
            //处理doctype
            .replace(/(<!DOCTYPE.*?>)/gi,'&mlt;span &class;="escape-docType"&mgt;$1&mlt;/span&mgt;')
            //class颜色高亮
            .replace(/class=["']([^"']*)["']/gi, '&mlt;span &class;="escape-class"&mgt;class="&mlt;span &class;="escape-class-val"&mgt;$1&mlt;/span&mgt;"&mlt;/span&mgt;')
            //id颜色高亮
            .replace(/id=["']([^"']*)["']/gi, '&mlt;span &class;="escape-id"&mgt;id="&mlt;span &class;="escape-id-val"&mgt;$1&mlt;/span&mgt;"&mlt;/span&mgt;')
            //基础开标签替换
            .replace(/</g,'&lt;')
            //基础闭标签替换
            .replace(/>/g,'&gt;')
            //替换自定义的标签标识
            .replace(/&mlt;/g,'<')
            //替换自定义的标签标识
            .replace(/&mgt;/g,'>')
            //替换自定义的class标识
            .replace(/&class;/g,'class');

    codes = `<pre class="escape-container">
                    <code>
                        ${codes}
                    </code>
                 </pre>`;

  return codes;
};

export default EscapeCode;