"use client";
import Button from "@/components/buttons/Button";
import { categories } from "@/constants/enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  return (
    <>
      <section className="company-info container">
        <div className="service">
          <FontAwesomeIcon icon={categories.softwareDevelopment.icon} />
          <h2>{categories.softwareDevelopment.value}</h2>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={categories.webApps.icon} />
          <h2>{categories.webApps.value}</h2>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={categories.aiDevelopment.icon} />
          <h2>{categories.aiDevelopment.value}</h2>
        </div>
        <div className="service">
          <FontAwesomeIcon icon={categories.mobileApps.icon} />
          <h2>{categories.mobileApps.value}</h2>
        </div>
      </section>

      <main className="home-landing container main-section">
        <section className="landing-container">
          <h1>
            welcome to <span>quantex</span> company
          </h1>
          <TypeAnimation
            sequence={[
              "Diyar",
              2000,
              "Test",
              2000,
              "Next.js Developer",
              2000,
              "React Developer",
              2000,
            ]}
            wrapper="span"
            speed={200}
            repeat={Infinity}
            cursor={true}
            className="typing-text"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            nostrum assumenda necessitatibus asperiores! Quae
          </p>
          <div className="btns">
            <Button>explorer our services</Button>
            <Button btnStyleType="outlined">start now</Button>
          </div>
        </section>

        <section>
          <code>
            <div
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <article
                style={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                <span
                  className="circle-actions"
                  style={{ background: "#db273f" }}
                />
                <span
                  className="circle-actions"
                  style={{ background: "#f9ab06" }}
                />
                <span
                  className="circle-actions"
                  style={{ background: "#0f8a4b" }}
                />
              </article>
              <span style={{ opacity: "0.7", fontWeight: "500" }}>
                index.js
              </span>
            </div>
            <section className="code-container">
              <div>
                <span style={{ color: "#c00ee4" }}> function </span>
                <article>
                  <span style={{ color: "#e7a310" }}>{`build ( `}</span>
                  <span>{`idea , technology`}</span>
                  <span style={{ color: "#e7a310" }}>{` )`}</span>
                  <span style={{ color: "#976905" }}>{` {`}</span>
                </article>
              </div>

              <div>
                <section>
                  <span style={{ color: "#ff6b6b" }}> const </span>
                  <span style={{ color: "#0070ff" }}> product </span>= [ ] ;
                </section>
              </div>

              <div>
                <section>
                  <span style={{ color: "#0070ff" }}> product </span> .
                  <span style={{ color: "#e7a310" }}>{` push (`}</span>
                  {" idea "}
                  <span style={{ color: "#e7a310" }}>{`)`}</span>
                </section>
              </div>

              <div>
                <section>
                  <span style={{ color: "#0070ff" }}> product </span> .
                  <span style={{ color: "#e7a310" }}>{` push (`}</span>
                  {" technology "}
                  <span style={{ color: "#e7a310" }}>{`)`}</span>
                </section>
              </div>

              <div></div>

              <div>
                <section>
                  <span style={{ color: "#ff6b6b" }}> return </span>
                  <span style={{ color: "#19da76" }}> {`" success "`} </span>
                </section>
              </div>

              <div>
                <span style={{ color: "#976905" }}>{` }`}</span>
              </div>

              <div>
                <article>
                  <span style={{ color: "#e7a310" }}>{` build (`}</span>
                  <span style={{ color: "#19da76" }}> {`"your idea"`} </span>,
                  <span style={{ color: "#19da76" }}> {`"our code"`} </span>
                  <span style={{ color: "#e7a310" }}>{`)`}</span>
                </article>
              </div>

              <div>
                <span
                  style={{ opacity: "0.4", fontWeight: "500" }}
                >{`// let's build something amazing togther`}</span>
              </div>
            </section>
          </code>
        </section>
      </main>
    </>
  );
};

export default Landing;
