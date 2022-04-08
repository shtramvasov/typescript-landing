import React, { useState } from 'react' 
import styles from '../TariffHelper/tariffhelper.module.css'
import { motion } from 'framer-motion'
import opacityVariant from '../../../utils/framer'
import dog from '../../../img/main-dog.png'
import { Button } from '../../Utils/Button/Button'
import { useDispatch } from 'react-redux';
import { updateTariff } from '../../../store/tariffsSlice';
import { Question } from '../../Utils/Question/Question'

interface Props {
  props: {
    name: 'Custom',
    price: number,
    members: {
      quant: number,
    },
    traffic: {
      quant: number,
    },
    space: {
      quant: number
    },
    isOnline: boolean
  }
}


export const TarifHelper: React.FC = () => {

  const [members, setMembers] = useState(1);
  const [traffic, setTraffic] = useState(0);
  const [space, setSpace] = useState(0);

  const [completeFirst, setCompleteFirst] = useState(false);
  const [completeSecond, setCompleteSecond] = useState(false);
  const [completeLast, setCompleteLast] = useState(false);

  const dispatch = useDispatch();
	const createProps = () => {
    const props: Props ={
        props: {
        name: 'Custom',
        price: Math.ceil((traffic * 0.05) + (space * 0.01) + members),
        members: {
          quant: members,
        },
        traffic: {
          quant: traffic,
        },
        space: {
          quant: space,
        },
        isOnline: space >= 300 || traffic >= 50 ? true : false,
        }
    };
    dispatch(updateTariff(props));
  };

  return (
		<motion.section
			className={styles.container}
			variants={opacityVariant}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
		>
			<h1>Solo, agency or team?We've got you.</h1>
			<p>
				Run your app with the power you need. No unexpected costs. Your first 30
				days are free — no credit card required.
			</p>
			<div className={styles.card}>
				<img src={dog} alt='Perandus Helper' />
				<div className={styles.form}>
					<h4>Need a helping hand to choose the best plan for you?</h4>
					<div className={styles.questions}>
            <Question 
              text={{first: 'I’m', last: 'on my project.'}}
              options={[
                {
                  text: 'solo developer',
                  value: 1
                },
                {
                  text: 'in a small team',
                  value: 4
                },
                {
                  text: 'in a buisness working',
                  value: 10 }]}
              fn={(e) => {setMembers(parseInt(e.target.value)); setCompleteFirst(true);}}
            />
            {completeFirst
              ?
              <Question 
                text={{first: 'We need', last: 'of traffic.'}}
                options={[
                  {
                    text: 'very little',
                    value: 10
                  },
                  {
                    text: 'optimal amount',
                    value: 50
                  },
                  {
                    text: 'big amounts',
                    value: 120 }]}
                fn={(e) => {setTraffic(parseInt(e.target.value)); setCompleteSecond(true);}}
              />             
              : null
            }
            {completeSecond
              ?
              <Question 
                text={{first: 'Our team doing mostly:'}}
                options={[
                  {
                    text: 'proofs of concept',
                    value: 250
                  },
                  {
                    text: 'low maintanence apps',
                    value: 350
                  },
                  {
                    text: 'enterprise projects',
                    value: 1024 }]}
                fn={(e) => {setSpace(parseInt(e.target.value)); setCompleteLast(true);}}
              />             
              : null
            }
          {completeLast
            ?
              <motion.div
              className={styles.buttons}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              >
                <Button link='order' type='submit' color='blue' text='Estimate my plan' fn={createProps} />
                <Button link='pricing' type='button' color='yellow' text='No, decide for myself' />
              </motion.div>
            : null
          }
					</div>
				</div>
			</div>
		</motion.section>
	);
}
