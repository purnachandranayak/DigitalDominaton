import React from "react";
import NiceSelect from "../ui/nice-select";

const ContactUsForm = () => {
  const selectHandler = (e) => {
    // Handle select change
  };

  const iframeHTML = `
    <div id="cjWebForms" data-cj-webforms="https://crm.digitaldomination.io/form/ff29cd97-b7aa-4ae2-88b6-8039e1a757f8?embeded=1">
      <script src="https://crm.digitaldomination.io/iframe-resizer.js"></script>
    </div>
  `;

  return (
    <>
      <div className="row gx-20" dangerouslySetInnerHTML={{ __html: iframeHTML }} />
    </>
  );
};

export default ContactUsForm;
