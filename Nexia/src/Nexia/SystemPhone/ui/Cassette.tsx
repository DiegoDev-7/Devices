/* Images */
import screw from "../../../assets/Icons/screw.svg"



/* Cassete load */
const LoadingRadio = () => {
  return (
    <>
      <div className="main-cassete">
        <div className="contain-card-cassete">

          {/* Screws up */}
          <div className="box-card-1-cassete">
            <div className="contain-screw1-cassete">
              <img src={screw} alt="screw" />
            </div>
            <div className="contain-screw2-cassete">
              <img src={screw} alt="screw" />
            </div>
          </div>


          {/* Contain Swheel */}
          <div className="box-card-2-cassete">
            <div className="line-1-cassete" />
            <div className="line-2-cassete" />

            <div className="background-line-3-cassete">
              <div className="screen-view-cassete">
                <div className="screen-swheel-cassete-1" />
                <div className="screen-tape-cassete" />
                <div className="screen-swheel-cassete-2" />
              </div>

              <p>90</p>
            </div>
            
            <div className="contain-letter-time-cassete">
              <p>2×30min</p>
            </div>
          </div>


          {/* Contain Screw medium */}
          <div className="box-card-3-cassete">
            <div className="contain-decoration-cassete">
              <div className="decoration-c1-cassete" />
              <div className="decoration-t1-cassete" />

              <div className="contain-screw5-cassete">
                <img src={screw} alt="screw" />
              </div>

              <div className="decoration-t2-cassete" />
              <div className="decoration-c2-cassete" />
            </div>
          </div>


          {/* Screws down */}
          <div className="box-card-4-cassete">
            <div className="contain-screw3-cassete">
              <img src={screw} alt="screw" />
            </div>
            <div className="contain-screw4-cassete">
              <img src={screw} alt="screw" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default LoadingRadio