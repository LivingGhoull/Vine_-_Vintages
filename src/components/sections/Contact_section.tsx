import { Input, Textarea } from "../Input";
import { Button } from "../Button";

function Contact_section() {
  return (
    <section>
      <div className="container contact_section">
        <h2 className="h_mid_head h_mid_head-center">Contact us</h2>

        <div className="contact_section__content">
          <iframe
            className="contact_section__google_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4043.963827356338!2d9.420319900703406!3d56.45075723673344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464be59710fee223%3A0xe85fe4285b432ae5!2sBorgvold%20Parken!5e0!3m2!1sda!2sdk!4v1731024228864!5m2!1sda!2sdk"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>

          <div className="contact_section__form">
            <Input placeholder="Jhon Doe">Name</Input>
            <Input placeholder="mail@hotmail.dk">Email</Input>
            <Input placeholder="Subject of your message">Subject</Input>
            <Textarea placeholder="Feel free to ask any questions or provide details here...">
              Message
            </Textarea>

            <Button>Send message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact_section;
