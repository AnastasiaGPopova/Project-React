import styles from '../components/Catalog.module.css';


function Catalog(){
    return (
      <>
        <div className={styles.s009}>
          <form>
            <div className={styles.advancesearch}>
              <div className={styles.row1}>
                <div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Write you email..."
                  />
                </div>
                <div className={styles.inputselect}>
                  <select data-trigger="" name="choices-single-defaul">
                    <option placeholder="" value="">
                      Record condition
                    </option>
                    <option>Poor (P)</option>
                    <option>Good (G)</option>
                    <option>Very Good (VG)</option>
                    <option>Excellent (E)</option>
                    <option>Near Mint (NM)</option>
                    <option>Mint (M)</option>
                  </select>
                </div>
                <div className="input-field">
                  <div className={styles.inputselect}>
                    <select data-trigger="" name="choices-single-defaul">
                      <option placeholder="" value="">
                        Genres
                      </option>
                      <option>Rock</option>
                      <option>Rhythm and blues</option>
                      <option>Classical music</option>
                      <option>Jazz</option>
                      <option>Pop</option>
                      <option>Pop rock</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.row2}>
                <div className="input-field">
                  <div className={styles.inputselect}>
                    <select data-trigger="" name="choices-single-defaul">
                      <option placeholder="" value="">
                        RPM
                      </option>
                      <option>33</option>
                      <option>45</option>
                      <option>78</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputfield}>
                  <div className={styles.inputselect}>
                    <select data-trigger="" name="choices-single-defaul">
                      <option placeholder="" value="">
                        Year
                      </option>
                      <option>1950 and older</option>
                      <option>1950-1980</option>
                      <option>1980-2000</option>
                      <option>2020 and newer</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.row3}>
                <div className={styles.groupbtn}>
                  <button className={styles.buttonReset}>
                    <span className={styles.searchAdvanced} />
                    RESET
                  </button>
                  <button className={styles.buttonReset}>
                    <span className={styles.searchAdvanced} />
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <section className={styles.pagesection}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.blogform}>
                <div className={styles.gramo}>
                  <img
                    className={styles.gramoimg}
                    src="/images/gramophone.png"
                    alt=""
                  />
                  <div class={styles.allSorting}>
                    <div className={styles.plate1}>
                      <img
                        className={styles.plate1img}
                        src="/images/plate.png"
                        alt=""
                      />
                      <div className={styles.centersort}>
                        <button className={styles.button1}>
                          <span className={styles.search} />
                          Last added
                        </button>
                      </div>
                    </div>
                    <div className={styles.plate2}>
                      <img
                        className={styles.plate2img}
                        src="/images/plate.png"
                        alt=""
                      />
                      <div className={styles.centersort}>
                        <button className={styles.button2}>
                          <span className={styles.search} />
                          Likes count
                        </button>
                      </div>
                    </div>
                    <div className={styles.plate3}>
                      <img
                        className={styles.plate3img}
                        src="/images/plate.png"
                        alt=""
                      />
                      <div className={styles.centersort}>
                        <button className={styles.button3}>
                          <span className={styles.search} />
                          Alphabetical
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*END  <div class="col-lg-3 blog-form">*/}
              <div className={styles["col-lg-9"]} style={{ paddingLeft: 30 }}>
                <div className={styles.row} id="TEST">
                  {/* ---------All Records----------- */}
                  <div
                    className={styles["col-sm-3 col-md-6 col-lg-4"]}
                    id="test2"
                  >
                    <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Espa??ol</p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                        alt=""
                      />
                      <div className={styles.center}>
                        <a href="#" className={styles.text}>
                          <span /> Details
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
                    <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Espa??ol</p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                        alt=""
                      />
                      <div className={styles.center}>
                        <a href="#" className={styles.text}>
                          <span /> Details
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
                    <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Espa??ol</p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                        alt=""
                      />
                      <div className={styles.center}>
                        <a href="#" className={styles.text}>
                          <span /> Details
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
                    <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Espa??ol</p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                        alt=""
                      />
                      <div className={styles.center}>
                        <a href="#" className={styles.text}>
                          <span /> Details
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
                    <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Espa??ol</p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                        alt=""
                      />
                      <div className={styles.center}>
                        <a href="#" className={styles.text}>
                          <span /> Details
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
                    <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Espa??ol</p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                        alt=""
                      />
                      <div className={styles.center}>
                        <a href="#" className={styles.text}>
                          <span /> Details
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles["col-sm-3 col-md-6 col-lg-4"]}>
                    <div className={styles.record}>
                      <h5>Nat King Cole</h5>
                      <p>Album: Cole Espa??ol</p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/8/86/NatKingCole_Unforgettable_Capitol10inch.jpg"
                        alt=""
                      />
                      <div className={styles.center}>
                        <a href="#" className={styles.text}>
                          <span /> Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Catalog