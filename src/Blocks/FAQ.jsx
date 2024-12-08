import React from "react";
import Card_FAQ from "../Components/Card_FAQ";

const FAQ = () => {
  return (
    <div id="FAQ" className="flex flex-col ">
      <div>
        <h2 className="text-center my-10">FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      <div className="flex flex-col gap-4 md:w-[70%] md:self-end ">
        <Card_FAQ
          question={"Can I try your solutions before committing to a plan?"}
          answer={
            "Yes, we offer a free trial for all our plans. Simply sign up on our website to start your trial and explore our solutions. You'll have access to all the features of your chosen plan for a limited time. If you decide to continue with a paid plan, you can easily upgrade and keep your data."
          }
        />
        <Card_FAQ
          question={"Can I try your solutions before committing to a plan?"}
          answer={
            "Yes, we offer a free trial for all our plans. Simply sign up on our website to start your trial and explore our solutions. You'll have access to all the features of your chosen plan for a limited time. If you decide to continue with a paid plan, you can easily upgrade and keep your data."
          }
        />
        <Card_FAQ
          question={"Can I try your solutions before committing to a plan?"}
          answer={
            "Yes, we offer a free trial for all our plans. Simply sign up on our website to start your trial and explore our solutions. You'll have access to all the features of your chosen plan for a limited time. If you decide to continue with a paid plan, you can easily upgrade and keep your data."
          }
        />
        <Card_FAQ
          question={"Can I try your solutions before committing to a plan?"}
          answer={
            "Yes, we offer a free trial for all our plans. Simply sign up on our website to start your trial and explore our solutions. You'll have access to all the features of your chosen plan for a limited time. If you decide to continue with a paid plan, you can easily upgrade and keep your data."
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
