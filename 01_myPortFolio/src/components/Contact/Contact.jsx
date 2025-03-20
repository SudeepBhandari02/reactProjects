import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
        <h2>Contact Me</h2>
        <form action="">
            <div className="formGroup">
                <label htmlFor="Name" hidden>
                    Name
                </label>
                <input type="text" name="Name" id="Name" placeholder="Name" />
            </div>
            <div className="formGroup">
                <label htmlFor="Email" hidden>
                    Email
                </label>
                <input type="email" name="Email" id="Email" placeholder="Email" />
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>Message</label>
                <textarea name="message" id="message" placeholder="Message"></textarea>
            </div>
            <div className="formGroup">
                <input type="submit" value="submit"/>
            </div>
        </form>
    </section>
  )
}

export default Contact