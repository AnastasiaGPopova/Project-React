import styles from '../components/Catalog.module.css';


function Catalog(){
    return(
        <section className={styles.pagesection}>
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.blogform}>
        <div className={styles.gramo}>
          <img className={styles.gramoimg} src="/images/gramophone.png" alt="" />
          <div className={styles.plate1}>
            <img className={styles.plate1img} src="/images/plate.png" alt="" />
            <div className={styles.centersort}>
              <button className={styles.button1}>
                <span className={styles.search} />
                Last added
              </button>
            </div>
          </div>
          <div className={styles.plate2}>
            <img className={styles.plate2img} src="/images/plate.png" alt="" />
            <div className={styles.centersort}>
              <button className={styles.button2}>
                <span className={styles.search} />
                Likes count
              </button>
            </div>
          </div>
          <div className={styles.plate3}>
            <img className={styles.plate3img} src="/images/plate.png" alt="" />
            <div className={styles.centersort}>
              <button className={styles.button3}>
                <span className={styles.search} />
                Alphabetical
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*END  <div class="col-lg-3 blog-form">*/}
      <div className={styles["col-lg-9"]} style={{ paddingLeft: 30 }}>
        <div className={styles.row} id="TEST">

           {/* ---------All Records----------- */}
          <div className={styles["col-sm-3 col-md-6 col-lg-4"]} id="test2">
            <div className={styles.record}>
              <h5>Nat King Cole</h5>
              <p>Album: Cole Español</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg" alt=""/>
              <div className={styles.center}>
                <a href="#" className={styles.text}><span /> Details</a>
              </div>
            </div>
          </div>

          <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
            <div className={styles.record}>
              <h5>Nat King Cole</h5>
              <p>Album: Cole Español</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg" alt=""/>
              <div className={styles.center}>
                <a href="#" className={styles.text}><span /> Details</a>
              </div>
            </div>
          </div>

          <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
            <div className={styles.record}>
              <h5>Nat King Cole</h5>
              <p>Album: Cole Español</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg" alt=""/>
              <div className={styles.center}>
                <a href="#" className={styles.text}><span /> Details</a>
              </div>
            </div>
          </div>

          <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
            <div className={styles.record}>
              <h5>Nat King Cole</h5>
              <p>Album: Cole Español</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg" alt=""/>
              <div className={styles.center}>
                <a href="#" className={styles.text}><span /> Details</a>
              </div>
            </div>
          </div>

          <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
            <div className={styles.record}>
              <h5>Nat King Cole</h5>
              <p>Album: Cole Español</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg" alt=""/>
              <div className={styles.center}>
                <a href="#" className={styles.text}><span /> Details</a>
              </div>
            </div>
          </div>

          <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
            <div className={styles.record}>
              <h5>Nat King Cole</h5>
              <p>Album: Cole Español</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg" alt=""/>
              <div className={styles.center}>
                <a href="#" className={styles.text}><span /> Details</a>
              </div>
            </div>
          </div>

          <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
            <div className={styles.record}>
              <h5>Nat King Cole</h5>
              <p>Album: Cole Español</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg" alt=""/>
              <div className={styles.center}>
                <a href="#" className={styles.text}><span /> Details</a>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  </div>
</section>
    )
}

export default Catalog