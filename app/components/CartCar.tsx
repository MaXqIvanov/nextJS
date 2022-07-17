import React from 'react'
import styles from './CartCar.module.scss';
export const CartCar = ({elem}:any) => {
  return (
    <div className={`mb-5 col-24 col-lg-12 col-xl-8 ${styles.cart_car}`} key={elem._id}>
        <div className={styles.car_wrapper}>
            <div className={styles.description}>{elem.classifieds.description + ' ' + elem.feedData.equipmentVariantName}
                <span>{elem.feedData.modelYear}</span>
            </div>
            <div className={styles.vin}>{elem.vin}</div>
            <div className={styles.group_img}>
                {elem.photobank.imgs.map((img:any)=><>
                <div style={{backgroundImage: `url(${img.url})`}} className={styles.img}>    
                </div>
                {elem.photobank.imgs.length == 1 && <div style={{backgroundImage: `url(${img.url})`}}
                className={styles.img_repeat}></div>}
                </>)}
            </div>
            <div className={styles.info}>
                <div className={`${styles.group_info}  ${styles.small_group_info}`}>
                <div className={styles.engine}>
                    <span>Двигатель</span>
                    <div className='d-flex'>{elem.feedData.engine.engineCapacity} л
                    <div className={styles.drop}>/</div>
                    {elem.feedData.engine.enginePower} лс
                    <div className={styles.drop}>/</div>
                    {elem.feedData.engine.engineName.split('-')[1]}
                    </div>
                </div>
                <div className={styles.kpp}>
                    <span>Кпп</span>
                    <div>{elem.feedData.equipmentVariantTransmissionType}</div>
                </div>
                </div>
                <div className={`${styles.group_info} ${styles.small_group_info} mt-2`}>
                    <div className={styles.autoProbeg}>
                    <span>Пробег</span>
                    <div>{elem.feedData.autoProbeg} км</div>
                    </div>
                    <div className={styles.autoColor}>
                    <span>Цвет</span>
                    <div>{elem.feedData.colorByClassifierName}</div>
                    </div>
                </div>
                <div className={`${styles.group_info} ${styles.small_group_info} mt-2`}>
                    <div className={styles.autoPacket}>
                    <span>Пакеты</span>
                    <div className={styles.additional_options}>{elem.feedData.baseOptions[0].universalOptions?.uniOptionName}...</div>
                    <div className={styles.additional}>( + ещё {elem.feedData.baseOptions.length} пакета)</div>
                    </div>
                </div>
                <div className={styles.price}>{elem.feedData.autoPrice.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2}).replaceAll(',', ' ')}
                <span>₽</span></div>
            </div>
            <div className={elem.setCarStatus.status === 'Продан' ? styles.btn_wait :styles.btn_buy}><span>{elem.setCarStatus.status === 'Продан' ? "В поставке" : "Заказать"}</span></div>
            <div className={styles.favorite}></div>
        </div>
  </div>
  )
}
