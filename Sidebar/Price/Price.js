import React from 'react';
import "./Price.css";
import Input from '../../components/Input';

function Price({handleChange}) {
  return (
    <div className='ml'>
      <h1 className='sidebar-title price-title'>Price</h1>

      <label className='sidebar-lable-container'>
  <input onChange={handleChange} type="radio" value="" name='tes2' />
  <span className='checkmark'></span>All
</label>

<Input
handleChange={handleChange}
value={50}
title="$0-50"
name="test2"
/>
<Input
handleChange={handleChange}
value={100}
title="$50-100"
name="test2"
/>
<Input
handleChange={handleChange}
value={150}
title="$150-200"
name="test2"
/>
<Input
handleChange={handleChange}
value={200}
title="Over $150"
name="test2"
/>
    


    </div>
  );
}

export default Price;
