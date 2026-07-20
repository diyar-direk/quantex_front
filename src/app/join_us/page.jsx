import Input from "@/components/inputs/Input";
import "./style.css";
import UploadFile from "@/components/inputs/UploadFile";
import Button from "@/components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMessage,
  faPaperPlane,
  faSignature,
  faVcard,
} from "@fortawesome/free-solid-svg-icons";

const JoinUs = () => {
  return (
    <main className="join-us-page">
      <section className="image">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni illum
          a eos corporis delectus eligendi nostrum adipisci, cum totam sit
          asperiores molestiae at quod ratione unde dignissimos sint dolorem
          praesentium!
        </p>
      </section>
      <section>
        <form>
          <Input
            name="name"
            label="name"
            placeholder="enter your name"
            labelIcon={faSignature}
          />
          <Input
            name="email"
            label="email"
            placeholder="enter your email"
            labelIcon={faEnvelope}
          />
          <Input
            name="message"
            label="message"
            placeholder="enter your message"
            elementType="textarea"
            rows={5}
            labelIcon={faMessage}
          />
          <UploadFile title="your cv" name="cv" labelIcon={faVcard} />
          <Button btnStyleType="transparent">
            <FontAwesomeIcon icon={faPaperPlane} /> send
          </Button>
        </form>
      </section>
    </main>
  );
};

export default JoinUs;
