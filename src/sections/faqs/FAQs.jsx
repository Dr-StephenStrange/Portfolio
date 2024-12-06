import data from "./data";
import FAQ from "./FAQ";
import "./faqs.css";

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get. <br />
        <span>If you have any other questions, feel free to shoot me a message below!</span>
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {data.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
