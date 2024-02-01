"use client";
import { Input } from "@nextui-org/react";
import CTAButton from "@/components/ui/CTAButton/CTAButton";
import { createEmailLead } from "@/app/actions/mailerlite";
import { Select, SelectItem } from "@nextui-org/react";
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
    {
      name: "package",
      type: "select",
      placeholder: "Which package are you interested in?",
      options: ["Create Content", "Create & Convert"],
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
      {input.name !== "package" && (
        <Input
          name={input.name}
          placeholder={input.placeholder}
          type={input.type}
          isRequired={input.isRequired}
        />
      )}
      {input.name === "package" && (
        <Select label={input.placeholder} name="package">
          {input.options.map((o) => (
            <SelectItem key={o} value={o} className="text-textDark">
              {o}
            </SelectItem>
          ))}
        </Select>
      )}
    </div>
  ));
  return (
    <div className="max-w-[80%] mx-auto flex flex-col gap-12">
      <div>
        <h2 className="text-center">Book in a call with us</h2>
        <p className="text-center">
          Learn how we can help you get more customers with social media and a
          high converting website
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mx-auto w-full"
      >
        {formInputs}
        <CTAButton>Book a call</CTAButton>
      </form>
    </div>
  );
}
