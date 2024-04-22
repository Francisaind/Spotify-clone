import React from 'react'
import { NavLink } from 'react-router-dom';
import { useDataLayerValue } from './dataLayer'

const BodySection = () => {
  const [{section,token},dispatch]=useDataLayerValue();
  return (
    <div>
      <h1>Vaishali</h1> 
        {token && 
          section?.items?.map(item=>(
            <NavLink to={`/playlist/${item?.id}`} key={item.id} className='body-section_items_link' id={item?.id} >
                <div id={item?.id} className='body-section_items_block' key={item.id}>
                    <img src={item?.images[0]?.url} alt={item?.name} className="body-section_items_img"/>
                    <span className={`body-section_items_name ${item?.description ? 'font-large' : ''}`} >{item?.name}</span>
                    {item?.description && 
                        <span className='body-section_items_desc'>{item?.description}</span>
                    }
                </div>
            </NavLink>

        ))
        }
    </div>
  )
}

export default BodySection