import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import styles from "./SubCTA.module.css";

export default function SubCTA() {
  return (
    <div className="">
      <Card
        className="dark p-8 max-w-[450px] mx-auto border-none bg-background/40 shadow-sm cta-backdrop"
        radius="lg"
        isBlurred
      >
        <div isBlurred></div>
        <CardBody>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <h2>Want more followers and leads in 8 weeks?</h2>
              <p>
                {" "}
                Our <span>Get Customers Package</span> provides an 8 week
                program to get more visibility and leads for your business. Find
                out more here.
              </p>
            </div>
            <Button className="bg-black text-white">Learn More</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
