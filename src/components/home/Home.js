import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import qrCodeCV from "../../img/qrcodeCV.svg";

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
            height={{xs: '35vh', md: '40vh'}}
            borderRadius={'50%'} p={'0.75rem'} mt={{xs: '1rem', sm: 0}} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
         <Box  display={'flex'} flexDirection={'column'} alignItems={'center'}
               width={{xs: '20vh', md: '21vh'}}
               height={{xs: '20vh', md: '21vh'}}
               gap={{xs: '0.5rem', md: '0.75rem'}}
               p={'0.75rem'} mt={{xs: '1rem', sm: 0}} mb={{xs: '1rem', sm: 0}} ml={{xs: 0, md:'1rem'}} mr={{xs: 0, md:0}}>
               <img alt={'qrcode-CV'} component={'img'} src={qrCodeCV} />
               <a style={{fontSize: '1.3em'}} 
                  target='_blank'
                  rel='noreferrer'
                  href='https://drive.google.com/file/d/1CWnXhIQu6XxfNyMS2M5-3MElpRQQKk94/view?usp=sharing'>
                  View my résumé
               </a>
         </Box>
      </Box>
   )
}