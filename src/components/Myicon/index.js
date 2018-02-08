import './index.less'
function Myicon({type, className = '', size = '', ...restProps}) {

    let iconName = require (`public/svg/${type}.svg`);

    if(restProps.color){
        iconName.default.node.innerHTML = iconName.default.node.innerHTML.replace(/fill=('|")(#|)(\w{0,20}[('|")$])/g,"")
    }

    return (
        <svg className={`am-icon am-icon-${iconName.default.id} am-icon-${size} ${className}`} {...restProps}>
            <use xlinkHref={`#${iconName.default.id}`} /> 
        </svg>
    )
}

export default Myicon