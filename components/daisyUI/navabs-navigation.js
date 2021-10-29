export default ({children, start , classes})=>{
    const _position = start ? "start" : "end"
    const _children = [];
    if(children){
        children.forEach((element, i) => {
            _children.push(<div key={i}  class="ml-1 mr-1">{element}</div>)
        });
    }
    return(
        <div class={`justify-${_position} ${classes} w-full`}>
            {_children}
        </div>
    )
}