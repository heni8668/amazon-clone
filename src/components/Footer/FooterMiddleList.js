import React from 'react'

const FooterMiddleList = ({title,listItem}) => {
  return (
    <div className='w-full'>
        {/* <div>
            <h3 className='font-titlFont text-white text-base font-semibold mb-3'>
                Get to Know us
                
            </h3>
            <ul className='flex flex-col gap-2 font-bodyFont'>
                <li className='footerLink'>Careers</li>
                <li className='footerLink'>Careers</li>
                <li className='footerLink'>Careers</li>
                <li className='footerLink'>Careers</li>
            </ul>
          </div> */}
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {listItem.map((item) =>
          item.listData.map((data,i) => <li key={i} className="footerLink">{data}</li>)
        )}
      </ul>
    </div>
  )
}

export default FooterMiddleList