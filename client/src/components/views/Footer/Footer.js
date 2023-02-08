import styles from './Footer.module.scss';
import {BsFacebook} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__info}>
        All Rights Reserved.
        <br/> &copy; 2022 - 2023 
        <br/>Erykov9
      </div>
      <div className={styles.root__contact}>
        <h3>Contact</h3>
        <div className={styles.root__contact_icons}>
          <a href='https://www.facebook.com/profile.php?id=100009836529196' target={'_blank'} rel="noreferrer"><BsFacebook/></a>
          <a href='https://www.github.com/Erykov9' target={'_blank'} rel="noreferrer"><AiFillGithub/></a>
          <a href='https://www.linkedin.com/in/eryk-szczepanek' target={'_blank'} rel="noreferrer"><AiFillLinkedin/></a>
        </div>
      </div>
    </div>
  )
};

export default Footer;