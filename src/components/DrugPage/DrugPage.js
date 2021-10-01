import React, { useEffect } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import DefaultImg from '../DefaultImg/DefaultImg'
import styles from './DrugPage.module.scss'
import NameDrugPage from '../NameDrugPage/NameDrugPage'
import SpecBlock from '../SpecBlock/SpecBlock'
import TextButton from '../TextButton/TextButton'
import { getFullSearch } from '../../actions/sagas/drugsAction';
import { clear } from '../../actions/clearFullAction';
import ForPictures from '../ForPictures/ForPictures';

const DrugPage = ({ d = 'Найти аналоги' }) => {
  let match = useRouteMatch();
  let id = match.params;
  let history = useHistory()
  const dispatch = useDispatch();
  const findAnalog = () => {
    history.push(`/analogs/${id.id}?pageNumber=0`)
  }

  useEffect(() => {
    dispatch(getFullSearch(id.id));
  }, [id, dispatch]);

  useEffect(() => (() => dispatch(clear())), [])
  const drugPage = useSelector((state) => state.SearchDrugFull.SearchDrugFull);

  const props = useSpring({
    to: { opacity: 1, width: '100%', transform: 'scale(1)' },
    from: { opacity: 0, width: '100%', transform: 'scale(0)' },
    config: config.gentle,
  })

  return (
    <animated.div style={{ ...props, width: '95%' }}>
      <div className={styles.DrugPage}>
        <div className={styles.Content}>
          <div className={styles.ImgBlock}>
            <DefaultImg src={drugPage.picture} />
            <ForPictures />
          </div>
          <div className={styles.InformationBlock}>
            <NameDrugPage
              name={drugPage.trade_name}
              caption={drugPage.dosage}
              forma={drugPage.lekForm}
            />
            <SpecBlock specItems={[
              {
                spec: 'Активное вещество',
                value: drugPage.mnn,
              },
              {
                spec: 'АТХ наименование',
                value: drugPage.ath_name,
              },
              {
                spec: 'АТХ код',
                value: drugPage.ath_code,
              },
              {
                spec: 'Производитель',
                value: drugPage.manuf_name,
              },
              {
                spec: 'Страна',
                value: drugPage.manuf_country,
              },
              {
                spec: 'ФТГ наименование',
                value: drugPage.ftg,
              },
            ]}
            />
            <div className={styles.ButtonBlock}>
              <TextButton text={d} func={findAnalog} />
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default DrugPage
