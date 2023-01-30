import React from 'react';

const Text = (props)=>{
    return <textarea type="text-area" id={props.id} onChange={props.onChange} value={props.value}/>
}

export default Text;