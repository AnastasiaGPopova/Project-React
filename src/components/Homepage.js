import styles from "../components/Homepage.module.css";

function Homepage() {
  return (
      <main>
          <div className={styles.row}>
              <div className={styles.col}></div>
              <div className={styles.col}>
                  {/* If no records, this should be emtpy */}

                  <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Español</p>
                      <br />
                      <img
                          src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                          alt=""
                      />
                      <div className={styles.center}>
                          <a href="#" className={styles.text}>
                              <span />
                              Details
                          </a>
                      </div>
                  </div>
                  
                  <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Español</p>
                      <br />
                      <img
                          src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                          alt=""
                      />
                      <div className={styles.center}>
                          <a href="#" className={styles.text}>
                              <span />
                              Details
                          </a>
                      </div>
                  </div>

              </div>
          </div>
          <div className={styles.row}>
              <div className={styles.col}>
                  <h1>RECORD ME</h1>
                  <br />
                  <p>
                      Show your passion for vinyl records to the wolrd.
                      <br />
                      Share your collection and get in touch with other vinyl lovers.
                  </p>
                  <br />
                  <div>
                      <button className={styles.homebutton} type="button">
                          <span className={styles.home} /> JOIN NOW{" "}
                      </button>
                      <button className={styles.homebutton} type="submit">
                          {" "}
                          <span className={styles.home} /> SEE CATALOG{" "}
                      </button>
                  </div>
              </div>

              
              <div className={styles.col}>
{/* 

                  ---------- if no records, show this div ----------
                <div className={styles.norecord}>
              <h2 className={styles.norecord}>There are no records reviews found yet...</h2>
              <button class={styles.createbutton} type="button"><span className={styles.noentries}></span> CREATE NOW </button>
              
          </div> */}


                  {/*---------- --------------------------*/}
                  
                  <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Español</p>
                      <br />
                      <img
                          src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                          alt=""
                      />
                      <div className={styles.center}>
                          <a href="#" className={styles.text}>
                              <span />
                              Details
                          </a>
                      </div>
                  </div>

                  
                  <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Español</p>
                      <br />
                      <img
                          src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                          alt=""
                      />
                      <div className={styles.center}>
                          <a href="#" className={styles.text}>
                              <span />
                              Details
                          </a>
                      </div>
                  </div>

              </div>
          </div>
      </main>
  );
}


export default Homepage