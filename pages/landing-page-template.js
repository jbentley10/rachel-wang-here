/**
 * @file landing-page-template.js
 */
// Import dependencies
import Head from 'next/head'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// Import library variables
import { htmlRenderingOptions } from '../lib/constants';

// Import components
import Layout from '../components/layout';
import Container from '../components/container';
import Header from '../components/header';
import { fetchFooter } from '../utils/contentfulPages';
import HeroSplitCenter from '../components/hero-split-center';
import ImageText5050SplitLeft from '../components/image-text-5050-split-left';
import ArticlesPanel from '../components/articles-panel';
import ImageText5050SplitRight from '../components/image-text-5050-split-right';

export default function About({ preview, footerContent }) {
  const posts = [
    {
      key: `test-post`,
      title: `Lorem Ipsum`,
      coverImage: `/rachel-handstand.png`,
      date: ``,
      author: `Rachel Wang`,
      slug: `test-post`,
      excerpt: `This is just a test. Don't panic`
    }
  ]
  return (
    <div>
      {/* Meta description for SEO */}
      <Layout footerContent={footerContent} metaDescription={`Beginner yoga track for Rachel Wang Here.`} preview={preview}>
        <Head>
          {/* Title tag for SEO */}
          <title>{ `Here's Where to Begin | Yoga | Rachel Wang Here` }</title>
        </Head>
        <Container>
          <Header />
          <HeroSplitCenter 
            heading={`Here's Where to Begin`}
          />
          <div className={`page-body-content px-12 md:px-32 lg:px-64 bg-side-blobs-combined--purple bg-contain bg-no-repeat block`}>
            <div className={`left-right-text-split pt-32`}>
              <div className={`float-left w-1/2 mt-8 mb-16`}>
                <h4 className={`text-h4 text-text-color leading-none font-rylan`}>
                  We all started somewhere as beginners, even for those who 
                  can easily balance on their 
                  hands or squat on one leg
                </h4>
              </div>
              <div className={`float-right w-1/2 mt-32 mb-8 bg-flower-background bg-contain bg-no-repeat py-24`}>
                <h4 className={`text-h4 text-text-color leading-none font-rylan`}>
                  And guess what?  The secret is that we still are.<br/><br/>
                  There is always something new to learn.  
                  Always something new to discover.
                </h4>
              </div>
            </div>
            <div className={`w-full text-center m-auto my-8 clear-both`}>
              <h2 className={`text-h2 text-text-color leading-none font-rylan`}>
                Let’s begin, right here and right now.
              </h2>
            </div>
            <ImageText5050SplitLeft 
              heading={`Hi! I’m your teacher, Rachel`}
              text={`Welcome and I’m glad you are here, looking 
              to start and cultivate your yoga practice.  I 
              haven’t always been strong or flexible, I 
              couldn’t even touch my toes just a few years 
              ago!  I’m very familiar with how it feels to 
              be a beginner when learning a new skill: 
              intimidating, awkward, uncomfortable, 
              strange - a struggle!  And because of this, 
              I fully understand what a beginner’s needs 
              are.  
              
              I almost gave up because of my frustrations.  
              I didn’t have anyone meet me at my level and 
              demonstrate properly the how-to’s for a 
              beginner.  I get it.  And this is why I created 
              this to facilitate your experience and make 
              things a little more attainable.
              `}
              image={`/rachel-handstand.png`}
            />
          </div>
          <ArticlesPanel 
            heading={`Articles for beginners to the yoga practice`}
            posts={posts}
          />
          <div className={`page-body-content px-12 md:px-32 lg:px-64 block`}>
            <h1 className={`text-h1 text-text-color font-rylan text-center m-auto`}>Guides</h1>
            <ImageText5050SplitLeft 
              heading={`A Guide On Using Yoga Props`}
              text={`Show me the props!  Here’s a guide I created 
              demonstrating different ways of using 
              common props found in a yoga class 
              setting - all with common objects that you 
              can use from around your home.  
              
              Why use props?  
              
              Because of the support they provide you 
              with by personalizing your practice so 
              you can get the most out of it.
              `}
              image={`/rachel-handstand.png`}
              buttonText={`Download the Guide`}
              buttonLink={`https://www.google.com`}
              buttonColor={`purple`}
            />
            <ImageText5050SplitRight
              heading={`Ways to Modify For Common Yoga Poses`}
              text={`The key to a sustainable, lifelong yoga 
              practice is figuring out what works best 
              for your body.  Because every human 
              body is different.  One of the best ways is 
              to modify postures to fit your individual needs.  
              
              Modifications make the practice more 
              accessible for everyone to join.              
              `}
              image={`/rachel-handstand.png`}
              buttonText={`Download the Guide`}
              buttonLink={`https://www.google.com`}
              buttonColor={`purple`}
            />
            <div className={`youtube-videos`}>
              <h2 className={`text-h2 font-rylan text-text-color leading-none text-center pb-4`}>Here's where I begin</h2>
              <p className={`text-paragraph leading-normal font-barlow px-24`}>
                My curated list of classes and tutorials on getting started with your yoga practice.  
                An introduction to a variety of foundational yoga poses, commonly used terms, 
                and sequences.  I’ll see you on the mat! 
              </p>
              <div className={`video-quadrant block`}>
                <div className={`video-quadrant__row flex`}>
                  <div className={`video-quadrant__row__video bg-paint-shapes bg-cover bg-no-repeat m-auto`}>
                    <div className={`iframe-container w-full p-8 text-center m-auto`}>
                      <iframe src="https://www.youtube.com/embed/28W7OaOWAYw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div className={`video-quadrant__row__video bg-paint-shapes bg-cover bg-no-repeat m-auto`}>
                    <div className={`iframe-container w-full p-8 text-center m-auto`}>
                      <iframe src="https://www.youtube.com/embed/28W7OaOWAYw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
                <div className={`video-quadrant__row flex`}>
                  <div className={`video-quadrant__row__video bg-paint-shapes bg-cover bg-no-repeat m-auto`}>
                    <div className={`iframe-container w-full p-8 text-center m-auto`}>
                      <iframe src="https://www.youtube.com/embed/28W7OaOWAYw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div className={`video-quadrant__row__video bg-paint-shapes bg-cover bg-no-repeat m-auto`}>
                    <div className={`iframe-container w-full p-8 text-center m-auto`}>
                      <iframe src="https://www.youtube.com/embed/28W7OaOWAYw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
          <div className={`wavy-bottom w-full h-64 bg-wavy-background bg-cover bg-no-repeat -my-28`} />
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

export async function getStaticProps() {
  const footerContent = await fetchFooter();

  if (footerContent.fields) {
    return {
      props: {
        footerContent
      },
    };
  } else return;
}