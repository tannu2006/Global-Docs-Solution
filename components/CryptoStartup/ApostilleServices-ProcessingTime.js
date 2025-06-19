import React from 'react'

const Roadmap = () => {
  return (
    <>
      <div className="roadmap-area pb-70">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Processing Time and Validity</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              <div className="roadmap-style-card">
                <div className="content">
                  <h3>Timeframe </h3>
                  <p>
                    Apostille usually takes <b>1 to 5 working days</b>, 
                    depending on the document and the level of attestation required
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-sm-6">
              <div className="roadmap-style-card">
                <div className="content">
                  <h3>	Validity</h3>
                  <p>
                   Apostille is generally<b> valid for 6 months</b> 
                   to lifetime, depending on the purpose and the accepting country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmap
