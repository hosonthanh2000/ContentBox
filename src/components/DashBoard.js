import React from 'react'
import ContentBorderColor from './ContentBorderColor'
import ContentBorderSize from './ContentBorderSize'
import ContentBorderStyle from './ContentBorderStyle'
import ContentColor from './ContentColor'
import ContentTextAlign from './ContentTextAlign'
import ContentSize from './ContentSize'
import Reset from './Reset'
import styles from '../styles/DashBoard.module.scss'
const Dashboard = () =>{
    return (
        <div>
              <div className={styles.row} >
                        <div className={styles.col_6}>
                            <ContentColor />
                        </div>
                        <div className={styles.col_6}>
                            <ContentBorderColor />
                        </div>
                </div>
                <div className={styles.row}>
                        <div className={styles.col_3}>
                            <ContentSize />
                        </div>
                        <div className={styles.col_3}>
                            <ContentTextAlign />
                        </div>
                        <div className={styles.col_3}>
                            <ContentBorderSize  /> 
                        </div>
                        <div className={styles.col_3}>
                            <ContentBorderStyle />
                    </div>
                </div>
                <div  className={styles.row_center}>
                    <Reset />
                </div>
        </div>
    )
}

export default Dashboard 