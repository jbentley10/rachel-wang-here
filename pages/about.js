/**
 * @file about.js
 */
// Import dependencies
import Head from 'next/head'
import Image from 'next/image';

// Import components
import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import HeroSplitRight from '../components/hero-split-right'
import OverlayTextBox from '../components/overlay-text-box'
import { fetchSidebar } from '../utils/contentfulPages'
import { getAllPostsForHome } from '../lib/api'
import PopoutBlade from '../components/popout-blade';
import PopoutBladeAlt from '../components/popout-blade-alt';

export default function About({ about, preview, sidebarContent, posts: { edges } }) {
  const recentPosts = edges.slice(0, 3);

  // Set up variables for the About page
  let title = about.title.rendered;  
  let content = about.content.rendered;
  let excerpt = about.excerpt.rendered;

  return (
    <div>
      {/* Meta description for SEO */}
      <Layout metaDescription={excerpt} preview={preview}>
        <Head>
          {/* Title tag for SEO */}
          <title>{ 'About Me | Rachel Wang Here' }</title>
        </Head>
        <Container>
          <Header />
          <HeroSplitRight 
            heading={'About'}
          />
          <OverlayTextBox 
            text1={`I’m a former corporate tech employee 
            turned yoga teacher who is here to 
            share with people like you how to 
            improve strength, mobility, 
            coordination, and balance in the 
            physical body along with your 
            mental game.`}
            text2={`As an eager student myself, I am always 
            exploring my yoga practice, knowledge of 
            movement, and self inquiry.  I enjoy 
            experimenting, doing things that are 
            reflective of the moment, all from 
            a mindful place.`}
          />
          <div className={`page-body-content px-32 bg-side-blobs-combined--purple bg-contain bg-no-repeat`}>
            <div className={`sidebar-body-split flex`}>
              <div className={`text-block-layout-container flex-initial md:w-7/12 pr-16 mt-24`}>
                <h1 className={`highlighted-text text-h1 font-rylan text-text-color`}>
                  I believe the best way to heal is to move.
                </h1>
                <div className={`copy-block my-24`}>
                  <h2 className={`font-rylan text-h2 text-text-color`}>My Mission</h2>
                  <p className={`text-text-color font-barlow text-paragraph`}>
                    My mission is to build a community that is encouraging and 
                    understanding,where everyone feels welcomed to express 
                    themselves.  No certain skill level required - only 
                    an open mind.

                    I am grateful for the opportunities to attend several 
                    trainings, workshops, open jams, and intensives that bring 
                    along the supportive community behind it.

                    I want to hold space that gives people confidence and 
                    comfort in how they move in the world and a deeper 
                    understanding as to why.
                  </p>
                </div>
                <div className={`image-copy-block my-24`}>
                  <div className={`clear-background bg-clear-background p-10 relative z-10 transform translate-x-8 translate-y-24 h-full`} />
                  <div className={`transform -translate-y-32 relative z-30`}>
                    <Image 
                      src={`/rachel-handstand.png`}
                      width={`300`}
                      height={`300`}
                    />
                  </div>
                  <h2 className={`font-rylan text-h2 text-text-color`}>My Teaching Goal</h2>
                  <p className={`text-text-color font-barlow text-paragraph`}>
                    What’s most important to me as a teacher?  It is to support you and
                    provide you with resources in feeling capable - to move confidently
                    in this world as your most authentic self.  

                    My goal is to show you that you can.  As a firm believer in accessibility,
                    sustainability, inclusivity, and integrity, I meet you where you are at and
                    what you need.  Because everyone can participate in a yoga class,
                    develop new skills, and move with trust.

                    I take a holistic approach in how I teach - to show you that you are 
                    capableand to find comfort in your own body.  I encourage keeping 
                    an opendialogue between student and teacher, just as we do with 
                    our own bodies,because it is a two way street that maintains 
                    an empathetic environment.
                  </p>
                </div>
                <div className={`copy-block my-24`}>
                  <h2 className={`font-rylan text-h2 text-text-color`}>My Story</h2>
                  <p className={`text-text-color font-barlow text-paragraph`}>
                    Always active, I’ve participated in athletics my entire youth.  
                    I’ve always had an appreciation of all forms of movement, even 
                    danced competitivelyduring my time at university.  Let’s just say, 
                    my body has sustained a lot of impact.

                    It was injury, depression, anger and body insecurity that led 
                    me to yoga.     

                    Yoga taught me how to adapt.  Through adaptation, my movements 
                    continue to expand into experiencing other modalities.  And my 
                    mindset realigns with my intention even during the tough 
                    challenging times.

                    I’ve discovered the enriching experience of combining yoga, 
                    mobility training and bodyweight exercises.  My own recovery and 
                    training process grew into becoming a teacher: to share what I’ve 
                    learned with others in feeling damn good in their own bodies.
                  </p>
                </div>
              </div>
              <div className={`sidebar-layout-container bg-clear-background w-5/12 px-12`}>
                <Sidebar posts={recentPosts} content={sidebarContent.fields}/>
              </div>
            </div>
          </div>
          <PopoutBlade 
            heading={`Credentials`}
            body={`FRCms (Functional Range Conditioning Mobility Specialist)
            10 hrs Redefining Mobility, Matt Phippen
            50 hrs Teacher Intensive, Noah Mazé
            50 hrs International Movement Intensive, Devin Kelley
            200 hrs cYoga, Carmen Aguilar
            200 hrs Vinyasa Yoga, Mark Stephens`}
          />
          <div className={`bg-wavy-background w-full h-64`} />
          <PopoutBladeAlt
            heading={`Be the First to Know`}
            body={`Join the community and receive exclusive 
            updates about my upcoming events, interesting 
            finds, and shared insights.
            
            Because it’s more fun when we are doing it together.`}
            button={{
              href: '/',
              text: 'Blah',
              color: 'purple'
            }}
          />
        </Container>
      </Layout>
      {/* Only style elements that aren't dangerously set */}
      <style jsx>{`        
        .highlighted-text {
          background: linear-gradient(180deg, rgba(255,255,255,0) 45%, #F4C06F 45%);
          display: inline;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const res = await fetch('https://rachelwanghere.com/wp-json/wp/v2/pages/3171')
  const about = await res.json()
  const sidebarContent = await fetchSidebar();
  const posts = await getAllPostsForHome(preview);

  if (sidebarContent.fields) {
    return {
      props: {
        sidebarContent,
        about,
        posts,
        preview
      },
    };
  } else
  return {
    props: { about, posts, preview },
  }
}