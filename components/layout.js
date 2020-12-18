import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import PropTypes from 'prop-types';

export default function PageLayout({ preview, children, metaDescription }) {  
  return (
    <>
      <Meta metaDescription={metaDescription} />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
