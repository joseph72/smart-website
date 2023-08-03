import { Collapse } from "antd";

import React from "react";
import type { CollapseProps } from "antd";

export default function Faq() {
  // const onChange = (key) => {
  //   console.log(key);
  //}
  return (
    <div className="pt-16">
      <div className="pa h-56 grid place-content-center">
        <div className="bg-neutral-900 h-full w-full absolute opacity-60"></div>
        <h1 className="text-4xl font-semibold text-center mb-3 text-gray-100 uppercase">
          {"FAQ"}
        </h1>
      </div>
      <div className=" px-4 lg:px-0">
        <div className="prose lg:prose-xl text-justify py-24  m-auto">
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: "1. What is the Smart Insurance Platform?",
                children: (
                  <p>
                    The Smart Insurance Platform is an innovative digital
                    platform that provides individuals and businesses with
                    convenient and personalized insurance solutions. It
                    leverages advanced technologies such as artificial
                    intelligence, machine learning, and data analytics to offer
                    seamless insurance experiences and optimize coverage plans.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label:
                  "2. What types of insurance are available on the Smart Insurance Platform?",
                children: (
                  <p>
                    The Smart Insurance Platform currently offers four Personal
                    line insurance options, including: <br /> - Motor Insurance{" "}
                    <br /> - Home Insurance <br /> - Personal Accident Insurance{" "}
                    <br /> - Travel Insurance <br />
                    There are Plans to add more insurance options in the near
                    future.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: "3. How does the Smart Insurance Platform work?",
                children: (
                  <p>
                    The platform utilizes sophisticated algorithms to analyze
                    user data and provide customized insurance recommendations.
                    Users can input their relevant information, such as personal
                    details, coverage needs, and risk profiles. Based on this
                    data, the platform generates tailored insurance plans and
                    quotes from various insurance providers. Users can compare
                    options, select the most suitable plan, and complete the
                    purchase process directly through the platform.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label:
                  "4. Can I manage my insurance policies through the Smart Insurance Platform?",
                children: (
                  <p>
                    Absolutely! The platform allows you to conveniently manage
                    all your insurance policies in one place including existing
                    policies that were not even bought through the platform.
                    Once you have purchased a policy through the platform, you
                    can access your policy information, make updates, file
                    claims, and track the status of your claims seamlessly.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label:
                  "5. Is my personal information secure on the Smart Insurance Platform?",
                children: (
                  <p>
                    Security and privacy are of utmost importance to us. The
                    Smart Insurance Platform employs robust security measures to
                    safeguard your personal information. We adhere to
                    industry-standard data encryption protocols and follow
                    strict privacy guidelines. Your data is only used to provide
                    personalized insurance services and is never shared with any
                    third parties without your consent.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label:
                  "6. How accurate are the insurance quotes provided by the Smart Insurance Platform?",
                children: (
                  <p>
                    The platform utilizes advanced algorithms and real-time data
                    to generate insurance quotes. While we strive to provide
                    accurate estimates, it&apos;s important to note that
                    insurance premiums are subject to various factors and may
                    change based on additional information or specific
                    circumstances. Also note that most of the quotes on the
                    Smart Insurance platform are provided by our insurance
                    partners (Insurers). We recommend reviewing the final quotes
                    and policy details before making a purchase decision.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: "7. How can I contact customer support for assistance?",
                children: (
                  <p>
                    For any inquiries or assistance, you can reach out to our
                    customer support team through various channels. You can find
                    the contact information on the Smart Insurance
                    platform&apos;s website, including phone numbers, email
                    addresses, and live chat options. Our dedicated support
                    staff is available to help address your concerns and provide
                    guidance.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label:
                  "8. Is the Smart Insurance Platform available in all locations?",
                children: (
                  <p>
                    The availability of the Smart Insurance Platform may vary
                    depending on your location. Currently, we offer our services
                    in Ghana but the platform can be accessed all over the world
                    where there is internet connectivity. We are actively
                    working to expand our reach and serve customers in more
                    regions.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />{" "}
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label:
                  "9. Can I cancel or modify my insurance policy purchased through the Smart Insurance Platform?",
                children: (
                  <p>
                    Yes, you can cancel or modify your insurance policy as per
                    the terms and conditions provided by the insurance provider.
                    The Smart Insurance Platform provides easy policy management
                    features, allowing you to make updates or cancellations
                    based on the specific guidelines of your policy. Please note
                    that cancellation or modification may be subject to certain
                    limitations or fees.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label:
                  "10. How are claims handled on the Smart Insurance platform?",
                children: (
                  <p>
                    The Smart Insurance platform simplifies the claims process
                    by digitizing and automating many aspects. In the event of a
                    claim, you can submit the necessary information and
                    supporting documents through the platform. Our system will
                    initiate a review process and provide updates on the
                    claim&apos;s progress. We strive to ensure a smooth and
                    efficient claims experience for our customers.
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label:
                  "11. How does the Smart Insurance Platform benefit me compared to traditional insurance processes?",
                children: (
                  <p>
                    The Smart Insurance Platform offers numerous benefits over
                    traditional insurance processes, including: <br /> -
                    Convenient and streamlined insurance experience <br /> -
                    Personalized insurance recommendations based on your
                    specific needs <br /> - Access to multiple insurance
                    providers and policies in one place <br />- Real-time quotes
                    and policy comparisons <br />- Efficient policy management
                    and claims processing <br /> - Enhanced transparency and
                    control over your insurance coverage
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            className="mb-3"
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label:
                  "12. How can I provide feedback or suggestions for the Smart Insurance platform?",
                children: (
                  <p>
                    We value your feedback and suggestions to improve our
                    services further. You can provide feedback through the
                    platform&apos;s website, email or contact our customer
                    support team directly. We appreciate your input and are
                    committed to continually enhancing the Smart Insurance
                    platform based on user feedback. If you have any further
                    questions or require assistance, please do not hesitate to
                    reach out to our support team. <br />
                    Email: support@smartinsurancegh.com <br />
                    Phone: +233 50 251 4699 <br />
                    +233 24 227 0895 <br />
                    +233 24 464 4974 <br />
                    Address: 113A Mbabane Avenue, East Legon - Accra
                  </p>
                ),
                showArrow: false,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
