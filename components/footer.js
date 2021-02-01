/**
 * @file footer.js
 */
// Import dependencies
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-modal';

// Import components
import Button from './button';

export default function Footer({heading, posts, subheading, subtext, button}) {
  const iconClasses = `w-1/4 sm:w-1/3 md:w-12 cursor-pointer text-paragraph text-text-color hover:text-purple`;
  const linkClasses = `pr-4 cursor-pointer hover:text-purple`;

  // For the subscribe modal
  const [isModalOpen, setIsModalOpen] = useState();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const modalStyle = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    },
    overlay : {
      zIndex                : 90
    }
  };

  return (
    <footer className={`footer`}>
      <Modal 
        isOpen={isModalOpen}
        contentLabel="Minimal Modal Example"
        style={modalStyle}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
      >
        <div className={`w-full max-w-sm mx-auto border-4 border-gray m-auto align-middle mt-8 py-8 px-10`}>
          <div>
          <h2 className="font-rylan text-text-color text-h2 leading-tight mb-8">Subscribe to gain access to exclusive content!</h2>
          <p className="font-barlow text-text-color text-paragraph leading-snug mb-8">By submitting your email below, I assume you're okay with getting some occassional emails from me that I promise you'll love!</p>
            <div dangerouslySetInnerHTML={{ __html: `
              <!-- Begin Mailchimp Signup Form -->
              <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
              <style type="text/css">
                #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
                /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                    We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
              </style>
              <style type="text/css">
                #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
                #mergeRow-gdpr {margin-top: 20px;}
                #mergeRow-gdpr fieldset label {font-weight: normal;}
                #mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
              </style>
              <div id="mc_embed_signup">
              <form action="https://rachelwanghere.us20.list-manage.com/subscribe/post?u=6f3b45340606635b68f91ec8b&amp;id=0d280962fa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                
                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_6f3b45340606635b68f91ec8b_0d280962fa" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                  </div>
              </form>
              </div>
              
              <!--End mc_embed_signup-->
            `}} />
          </div>
        </div>
      </Modal>
      <div className={`bg-yellow w-full pt-12 px-12 md:px-24 lg:px-32 xl:px-64`}>
        <h2 className={`text-h2 font-rylan text-text-color text-center pb-8`}>{heading}</h2>
        <div className={`instagram-posts-container flex mb-12`}>
          {posts.map(( post ) => (
            <div key={Math.random()} className={`w-full md:w-1/2 m-auto cursor-pointer pr-4 md:pr-16 mx-0`}>
              <a href={`https:${post.link}`}>
                <img src={`https:` + post.image} alt={post.alt} />
              </a>
            </div>
          ))}
        </div>
        <div className={`inline-block md:flex pb-12`}>
          <div className={`md:w-4/12 pr-12`}>
            <h2 className={`text-h3 font-rylan text-text-color pb-4 md:pb-0`}>{subheading}</h2>
          </div>
          <div className={`md:w-5/12`}>
            <p className={`w-3/4 text-paragraph font-barlow text-text-color pb-12 md:pb-0`}>{subtext}</p>
          </div>
          <div className={`w-full md:w-3/12`}>
            <Button 
              color={`purple`}
              text={`Give me access`}
              onClick={handleOpenModal}
            />
          </div>
        </div>
      </div>
      <div className={`footer-credits block xl:flex bg-yellow-transparent px-12 md:px-24 lg:px-32 xl:px-64 py-12`}>
        <p className={`text-text-color font-barlow text-footer font-light text-center md:text-left pb-4 md:pb-8 xl:pb-0`}>Copyright 2020 Rachel Wang Here</p>
        <ul className={`block md:flex text-footer m-auto text-text-color font-barlow font-normal pb-4 md:pb-8 xl:pb-0`}>
          <Link href={`/`}><li className={linkClasses}>Home</li></Link>
          <Link href={`/contact`}><li className={linkClasses}>Contact</li></Link>
          <Link href={`/privacy-policy`}><li className={linkClasses}>Privacy Policy</li></Link>
          <Link href={`/terms`}><li className={linkClasses}>Terms of Service</li></Link>
          <Link href={`/disclaimer`}><li className={linkClasses}>Disclaimer</li></Link>
          <Link href={`/site-credits`}><li className={linkClasses}>Site Credits</li></Link>
        </ul>
        <ul className={`flex align-middle text-center md:text-left mt-8 md:mt-0`}>
          <Link href={`https://www.facebook.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faFacebook} /></li></Link>
          <Link href={`https://www.instagram.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faInstagram} /></li></Link>
          <Link href={`https://www.pinterest.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faPinterest} /></li></Link>
          <Link href={`https://www.youtube.com/channel/UC8uFq5kz1h4OaiJUhwb8ijQ/about`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faYoutube} /></li></Link>
          <Link href={`https://www.twitter.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon className={`h-6`} icon={faTwitter} /></li></Link>
        </ul>
      </div>
    </footer>
  )
}
