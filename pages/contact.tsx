import React, { useState } from "react";
import Section from "@/components/Section";
import TextInput from "@/components/TextInput";
import BlurBall from "@/components/BlurBall";
import { Checkbox } from "@/components/Checkbox";
import DynHead from "@/components/DynHead";

const ContactPage = () => {
  const [mailSentSuccess, setMailSentSuccess] = useState(false);

  const [checkBox, setCheckBox] = useState(false);
  const [checkBoxErr, setCheckboxErr] = useState(false);

  //? Name input
  const [nameState, setNameState] = useState<FormState>({
    value: "",
    errorState: "",
    firstFocus: true,
  });

  const nameInvalidCheck: FormValidationFunc = () => {
    if (nameState.value.length < 1) {
      return { message: "This field can't be empty", err: true };
    } else {
      return { message: "", err: false };
    }
  };

  //? Email input
  const [emailState, setEmailState] = useState<FormState>({
    value: "",
    errorState: "",
    firstFocus: true,
  });

  const emailInvalidCheck: FormValidationFunc = () => {
    if (emailState.value.length < 2) {
      return { message: "This field can't be empty", err: true };
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailState.value)
    ) {
      return { message: "You need to enter a valid email", err: true };
    } else {
      return { message: "", err: false };
    }
  };

  //? Message input input

  const [messageState, setMessageState] = useState<FormState>({
    value: "",
    errorState: "",
    firstFocus: true,
  });

  const messageInvalidCheck: FormValidationFunc = () => {
    if (messageState.value.length < 10) {
      return {
        message: "The message should be a little bit longer",
        err: true,
      };
    } else if (messageState.value.length > 500) {
      return { message: "Your message is too long", err: true };
    } else {
      return { message: "", err: false };
    }
  };

  // ? Handle the email submit

  async function handleSubmit(e: any) {
    e.preventDefault();

    const sendContactForm = async (data: any) =>
      await fetch("/api/contactMail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

    if (!checkBox) {
      setCheckboxErr(true);
    } else {
      setCheckboxErr(false);
    }

    if (
      !nameInvalidCheck().err &&
      !emailInvalidCheck().err &&
      !messageInvalidCheck().err &&
      checkBox
    ) {
      sendContactForm({
        name: nameState.value,
        email: emailState.value,
        message: messageState.value,
      });
      setMailSentSuccess(true);
    } else {
      console.log("something went wrong");
    }
  }

  return (
    <>
      <DynHead
        title="Contact"
        description="Contact us for a free consultation, to evaluate your website and discover the potential for improvement or to start building something from scratch."
        image="/assets/Koddezign_illustration.svg"
      />
      <div className="relative min-h-[90vh] w-full py-[5rem] bg-white">
        <BlurBall horizontal="right-0" vertical="top-0" />
        <BlurBall horizontal="left-[-10%]" vertical="bottom-0" />
        <Section>
          <div className="flex items-center relative flex-wrap w-full max-w-[1200px] pt-[5rem] md:pt-5">
            <div className="w-full md:w-1/2 pl-[2rem] flex flex-col ">
              <h1 className="text-4xl mb-5">Let's get in touch</h1>
              <p className="mb-5">
                We check email every day so you can expect a reply very quick
              </p>
              <p>Email:</p>
              <a
                href="mailto: contact@koddezign.com"
                className="transition hover:text-[#ff5500]"
              >
                contact@koddezign.com
              </a>
            </div>
            {!mailSentSuccess && (
              <form
                className="bg-white/20 backdrop-blur-md p-[2rem] shadow-black/20 shadow-2xl rounded-md w-full mt-[3rem] md:mt-0 md:w-1/2 mb-[3rem]"
                method="post"
                onSubmit={(e) => handleSubmit(e)}
              >
                <TextInput
                  name="Name*"
                  state={nameState}
                  setState={setNameState}
                  validationCheck={nameInvalidCheck}
                />
                <TextInput
                  name="Email*"
                  state={emailState}
                  setState={setEmailState}
                  validationCheck={emailInvalidCheck}
                />
                <TextInput
                  name="Message*"
                  state={messageState}
                  setState={setMessageState}
                  validationCheck={messageInvalidCheck}
                  type="textarea"
                />
                <div>
                  <Checkbox
                    name="gdpr"
                    checked={checkBox}
                    onChange={() => setCheckBox((checkBox) => !checkBox)}
                    text="I agree with the "
                    privacy={true}
                  />
                  {checkBoxErr && (
                    <p className="w-full text-red-500 mt-5">
                      Please check all the requirements and don't forget to
                      agree with the privacy policy
                    </p>
                  )}
                </div>
                <button className="btnPrimary mt-5" type="submit" name="submit">
                  Send
                </button>
              </form>
            )}

            {mailSentSuccess && (
              <div className="bg-white/20 backdrop-blur-md p-[2rem] shadow-black/20 shadow-2xl rounded-md w-full mt-[3rem] md:mt-0 md:w-1/2 mb-[3rem] flex justify-center items-center flex-col min-h-[50vh]">
                <p className="text-5xl">📧</p>

                <p className="text-xl my-5">
                  You're message has been sent successfully!
                </p>
                <p>We will talk to you soon.</p>
              </div>
            )}
          </div>
        </Section>
      </div>
    </>
  );
};

export default ContactPage;
