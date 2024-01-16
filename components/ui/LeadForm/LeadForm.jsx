"use client";
import { Input } from "@nextui-org/react";
import CTAButton from "@/components/ui/CTAButton/CTAButton";
import { createEmailLead } from "@/app/actions/mailerlite";
export default function LeadForm() {
  const formInputData = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your first name",
      isRequired: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your Email",
      isRequired: true,
    },
    {
      name: "phone",
      type: "phone",
      placeholder: "Enter your Phone Number",
      isRequired: true,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    createEmailLead(formData);
  }

  const formInputs = formInputData.map((input) => (
    <div key={input.name}>
      <Input
        name={input.name}
        placeholder={input.placeholder}
        type={input.type}
        isRequired={input.isRequired}
      />
    </div>
  ));
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-[80%] mx-auto"
    >
      {formInputs}
      <CTAButton>Get Started</CTAButton>
    </form>
  );
}
