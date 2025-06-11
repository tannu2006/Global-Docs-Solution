import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import Image from "next/image";
import ContentMEA from "./ContentMEA";
const ContentMEA = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                <Image
                  src="/images/services/services2.jpg"
                  alt="Services Images"
                  width={860}
                  height={860}
                />
                   <h2>MEA Attestation</h2>
                <h3>introduction</h3>

                <p>
                MEA (Ministry of Foreign Affairs) is an important step for the authentication
                 of files required for international functions. Whether work visas, high school,
                  migration, or commercial enterprise growth is being used, MEA certificates check
                   the credibility of Indian documents for recognition in foreign countries. This 
                   guide provides a detailed assessment of MEA certificates including meaning, processes,
                    required documents, and important considerations. Certificates prove the 
                reliability of the document and legally valid for use abroad. Common motifs are
                </p>
                <p>
                Employment abroad. In many countries, mindful academic and private files are
                 required for painting approval. country.
                Medical procedures for criminal matters, inheritance claims and other 
                prison procedures require MEA-excited documents. 

                </p>

                <h4>Academic File</h4>
                <ul>
                  <li>
                  Final Certificate
                  </li>
                  <li>
                   Marking
                  </li>
                  <li>
                  Transfer Certificate
                  </li>
                  <li>
                   Final Certificate of School
                  </li>
                </ul>

                <ul>
                  <li>Cost of supplies and equipment point</li>
                  <li>Change the volume of expected of contact</li>
                  <li>Bibend auctor nisi elit volume are so beguiled</li>
                  <li>Quickly maximize timely deliverables</li>
                </ul>

                <h3>Benefit of Service</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>

                <ul>
                  <li>Objectively innovate empowered manufactured</li>
                  <li>Holisticly predominate extensible</li>
                  <li>Procedures for reliable supply chains</li>
                  <li>Quickly maximize timely deliverables</li>
                </ul>

                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentMEA;
