import React from 'react'
import { useTranslation } from 'react-i18next'

import { GiTwoCoins } from "react-icons/gi";


const Coupon = ({ title, discountType, discountValue, subTitle, img, color, bg, desc }) => {
    const isTypePercent = discountType === 'percent' ? '%' : discountType
    const { t } = useTranslation()

    return (
        <div
            className="caseback-box"
            style={{
                backgroundColor: bg,
                color: color
                // backgroundColor,
                // width: '363px',
                // ...style
            }}
        >
            <div className="caseback-boxInner">
                <div className='caseback-text'>
                    <h5 className="casebackBox-Title">
                        {title}
                    </h5>
                    <h5 className="casebackBox-offer">
                        {/* {discountValue ? (<><span>{discountValue}{isTypePercent} </span> {t("Discount")}</>) : (<p>להצטרף למועדון WINcard+</p>)} */}
                    </h5>
                    <h6 className="casebackBox-subTitle">
                        {subTitle}
                    </h6>
                    {desc ? (<p>{desc}<GiTwoCoins /></p>) : ("")}
                    <button>להזמנה</button>
                </div>
                <div className='caseback-image'>
                    <img src={img} alt="papa jones" />
                </div>

            </div>
        </div>
    );
}

export default Coupon