
import React from 'react'






const PubList=({el})=>{


console.log(el)

 
    return (
        <div>
title :{el.title}
description :{el.desc}
create at :{el.creatAt}
        </div>
    )
}

export default PubList