"use client";
import Button from "@/components/buttons/Button";
import { categories } from "@/constants/enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";
import { Link } from "@/i18n/navigation";
import { pages } from "@/constants/pages";
import { faLightbulb, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const Landing = () => {
  const t = useTranslations();

  return (
    <>
      <div className="live-ticker">
        <div className="ticker-inner" id="ticker">
          {Object.values(categories).map((e) => (
            <div key={e.value}>
              <FontAwesomeIcon icon={e.icon} />
              <span>{t(`enums.${e.value}.title`)}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="home-landing container main-section">
        <section className="landing-container">
          <h1>
            {t("landing.welcome_to")} <span>{t("quantex")}</span>{" "}
            {t("landing.company")}
          </h1>

          <TypeAnimation
            sequence={[
              t("landing.head_1"),
              2000,
              t("landing.head_2"),
              2000,
              t("landing.head_3"),
              2000,
              t("landing.head_4"),
              2000,
            ]}
            wrapper="span"
            speed={70}
            repeat={Infinity}
            cursor={true}
            className="typing-text"
          />

          <p>{t("landing.paragraph")}</p>

          <div className="btns">
            <Link href={pages.ourServices}>
              <Button>
                <FontAwesomeIcon icon={faLightbulb} />
                {t("landing.explorer_services")}
              </Button>
            </Link>

            <Link href={pages.contactUs}>
              <Button btnStyleType="transparent">
                {t("landing.start_now")}
                <FontAwesomeIcon icon={faRightLong} />
              </Button>
            </Link>
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
                <span style={{ opacity: "0.4", fontWeight: "500" }}>
                  {t("landing.code_comment")}
                </span>
              </div>
            </section>
          </code>
        </section>
      </main>
    </>
  );
};

export default Landing;
