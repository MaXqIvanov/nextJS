import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CartCar } from '../app/components/CartCar'
import MainContainer from '../app/components/MainContainer'
import { getCurrentCar, getModelsCar } from '../store/carsSlice'
import { wrapper } from '../store/store'
import styles from '../styles/Home.module.scss'

const Home: NextPage = ({models, cars}:any) => {
  // console.log(models);
  // console.log(cars);
  const router = useRouter()
  const [visibleOption, setVisibleOption] = useState(false)
  const selectModel = (value:any)=>{
    setVisibleOption(false)
    router.push(`/${value}`)
  }
  
  return (
    <MainContainer>
      <div className={`mt-2 ${styles.main}`}>
        <div className={styles.wrapper}>
          <div className={'row'}>
              <div className={'col-24'}>
                <div onMouseLeave={()=>setVisibleOption(false)} className={`col-24 col-lg-12 col-xl-8 ${styles.group_select}`}>
                  <div className={styles.group_select_wrapper}>
                    <input onChange={()=>setVisibleOption(!visibleOption)} id="singleSelect0" className={styles.select_input} type="checkbox" name="singleSelect" checked />
                    <label htmlFor="singleSelect0" className={styles.__select__label}>
                      <div>Марка</div><div className={styles.arrow_btn}></div>
                    </label>
                    {visibleOption && models.map((elem:any)=><div onChange={()=> selectModel(elem)} key={elem}><input id={elem} className={styles.select_input}
                    type="checkbox" name="singleSelect" />
                    <label htmlFor={elem} className={styles.__select__label}>{elem}</label></div>)}
                  </div>
                </div>
                <div className={'col-24 mt-3'}>
                  <div className='row'>
                    {cars && cars.map((elem:any)=>
                   <CartCar elem={elem} key={elem.id}/>
                   )}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </MainContainer>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ctx => {
    await store.dispatch(getModelsCar())
    const {models} = store.getState().cars
    await store.dispatch(getCurrentCar({models: models[2]}))
    const {cars} = store.getState().cars
    return {props: {
      models,
      cars
    }}
  }
);

export default Home
